export default function Main({ addProfile, children }) {
  const [hero, profileForm] = [...children];
  return (
    <div className="main">
      {!addProfile ? (
        <>
          <p className="title">This month's events</p>
          {hero}
        </>
      ) : (
        profileForm
      )}
    </div>
  );
}
