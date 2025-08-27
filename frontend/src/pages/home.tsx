import homeImg from '../assets/home2.jpg';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  return (
  <>

      <section className='shadow-4xl relative z-10'>
         <nav className="bg-[#4D7435] shadow-9xl relative  h-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between h-16 items-center">
            
            
             <div className="flex-shrink-0 ">
              <a href="/" className="text-2xl font-bold text-white">
                PlantShop
              </a>
             </div>

            
            <div className="hidden md:flex space-x-8">
              <a href="#contact" className="text-white hover:text-green-700 text-xl">
                Contact
              </a>
              <a href="#plants" className="text-white hover:text-green-700 text-xl">
                Plants
              </a>
              <a href="#category" className="text-white hover:text-green-700 text-xl">
                Category
              </a>
            </div>

            
            <div className="flex space-x-4">
              <button className="text-lg px-4 py-2 bg-transparent text-white border border-yellow-400 rounded hover:bg-green-700 hover:text-white transition"
              onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-green-800 transition" onClick={() => navigate('/signup')}>
                Signup
              </button>
            </div>

          </div>
        </div>
      </nav>
    </section>
    <section>
      <nav>

      </nav>
    </section>
    <section >
      <img src={homeImg} alt="Home" className="w-full h-174 mt-[-40px]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-[-120px]">
  <h1 className=" text-3xl md:text-[38px]  mb-6 w-240 ">
   <span className="text-[#4D7435]">Bringing</span> the power of nature to your <span className="text-[#4D7435]">home</span> with fresh, <span className="text-[#4D7435]">sustainable</span> herbal plants
  </h1>
  <button className="text-lg px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-green-700 transition">
    Buy Now
  </button>
</div>
    </section>

    </>
  );
}
