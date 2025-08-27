import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const logout = async () =>{
    navigate('/');
  }
  return (
  <div>
Hi
<button onClick={logout} className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:ring-2 focus:ring-sky-400 transition duration-200" type="submit">Logout </button>
     
    </div>
  );
}
