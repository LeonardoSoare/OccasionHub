import { useNavigate } from "react-router-dom";
import "../style/logo.css";
export default function Logo() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="logo">
      OccasionHub
    </div>
  );
}
