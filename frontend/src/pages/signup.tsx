import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Signup() {
    const [name, setName] = useState("");
    //  const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/signup", { username: name,
  password: password }, { withCredentials: true });
            alert( res.data.message);
            navigate('/dashboard');
        } catch (err: any) {
            alert("Signup Failed " + err.response?.data?.message || "Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-sky-300 p-6">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <h2 className="text-3xl font-bold text-center text-sky-600 mb-6">
                    Create an Account
                </h2>
                <form action="" onSubmit={handleSubmit} className="space-y-4">


                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                        <strong>User Name</strong>
                    </label>
                    <input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none" value={name} onChange={e => setName(e.target.value)} required type="text" placeholder="Enter User Name" autoComplete="off" name="name" id="name" />

                    {/* <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
               <strong>Email</strong>
            </label>
            <input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none" value={email}  onChange={e=>setEmail(e.target.value)}  required type="email" placeholder="Enter Email"  name="email" id="email" /> 
             */}
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none" value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder="Enter Password" name="password" id="password" />

                    <button  className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-sky-600 focus:ring-2 focus:ring-sky-400 transition duration-200" type="submit">
                        Signup
                    </button></form>
                <p className="text-center text-sm text-gray-600 mt-4">Already Have an Account?
                    <a href="/login" className="text-sky-500 hover:underline font-medium"> Login</a></p>

            </div>
        </div>
    )
}

export default Signup;