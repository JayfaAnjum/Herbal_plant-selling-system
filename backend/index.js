const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const users=[];
const JWT_SECRET='my_secret_key';

app.get('/api/protected',(req, res) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({ message: 'No token'});
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ message: 'Protected data', user: decoded });
    }catch (err){
        res.status(401).json ({ message: 'Invalid token'});
    }
})

app.post('/api/auth/signup', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).send({message:'Username and password are required'});
    }

    const existingUser =  users.find(u=> u.username === username);
    if((existingUser)){
        return res.status(409).send({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.json({ message: 'Signup SuccessFully' });
});
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).send({message: 'Username and password are required'})
    }
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).send({ message: 'Invalid username or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).send({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie ('token' , token ,{
        httpOnly:true,
        secure: false,
        sameSite:'lax',
        maxAge : 60 * 60 * 1000 

    });
    res.json({ message: 'Login SuccessFully' , token});
});

app.post('/api/auth/logout',(req,res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout SuccessFully' });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});