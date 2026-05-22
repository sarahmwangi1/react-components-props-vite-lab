
function Header({ name }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <span className="header-tag">— personal blog —</span>
        <h1>{name}</h1>
      </div>
    </header>
  );
}

export default Header;