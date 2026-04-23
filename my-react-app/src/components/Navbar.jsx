function Navbar() {
const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#2c3e50',
    color: 'white',
    alignItems: 'center'
  };

  return (
    <nav style={navStyle}>
<div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Real estate</div>
<ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>Properties</li>
        <li>Solutions</li>
        <li>About</li>
        <li>Contact</li>

</ul>

        </nav>

  );

}

export default Navbar;