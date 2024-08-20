import { FaDoorClosed } from "react-icons/fa";
import { useAuth } from "../../store/contexts/AuthContext";
import "./Logout.css";

function Logout() {
  const { setUser } = useAuth();

  const logoutHandler = () => {
    setUser(false);
    localStorage.removeItem("user");
  };

  return (
    <button className="btn-logout" onClick={logoutHandler}>
      Çıkış Yap <FaDoorClosed />
    </button>
  );
}

export default Logout;
