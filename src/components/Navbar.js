import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logo}
            className='nav-logo'
            alt='backroads'
          />
          <button
            type='button'
            className='nav-toggle'
            id='nav-toggle'
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className='nav-links'>
          {pageLinks.map(({ id, href, text }) => (
            <li key={id}>
              <a
                href={href}
                className='nav-link'
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map(({ id, href }) => {
            return (
              <li key={id}>
                <a
                  href={href}
                  className='nav-link'
                >
                  {id}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;