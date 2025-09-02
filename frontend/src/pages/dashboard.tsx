import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch(logout());
    navigate('/');
  }
  return (
  <div>
Hi
<button onClick={handleLogout} className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:ring-2 focus:ring-sky-400 transition duration-200" type="submit">Logout </button>
     
    </div>
  );
}
