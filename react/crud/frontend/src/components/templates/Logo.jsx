import '../styles/Logo.css';

import logo from '../../assets/imgs/logo.png';

function Logo() {
  return (
    <aside className='logo'>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>
    </aside>
  );
}

export default Logo;
