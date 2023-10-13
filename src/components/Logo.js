import { useNavigate } from "react-router-dom";
import "../style/logo.css";
const { innerWidth: width, innerHeigth: height } = window;

export default function Logo() {
  const navigate = useNavigate();
  if (+width <= 790) {
    return (
      <div onClick={() => navigate("/")} className="logo">
        OCH
      </div>
    );
  }
  return (
    <div onClick={() => navigate("/")} className="logo">
      OccasionHub
    </div>
  );
}
