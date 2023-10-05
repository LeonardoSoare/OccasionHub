import "../style/main.css";
export default function Main({ addProfile, children }) {
  const [hero, profileForm] = [...children];
  return <div className="main">{!addProfile ? <>{hero}</> : profileForm}</div>;
}
