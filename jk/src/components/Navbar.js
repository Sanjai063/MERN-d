function Navbar({ menuItems, activeSection, setActiveSection }) {
  return (
    <nav className="navbar">
      {menuItems.map((item) => (
        <button
          key={item}
          className={activeSection === item ? "active" : ""}
          onClick={() => setActiveSection(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;