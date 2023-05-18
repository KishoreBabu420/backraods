import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

import { pageLinks, socialLinks } from '../data';

import { useState } from 'react';

const Navbar = () => {
  const [isShowLinks, setIsShowLinks] = useState(false);
  const navLinksToggler = () => {
    setIsShowLinks((isShowLinks) => !isShowLinks);
  };
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
            onClick={navLinksToggler}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks
          pageLinks={pageLinks}
          parentClass={isShowLinks ? 'nav-links show-links' : 'nav-links'}
          itemClass='nav-link'
        />
        <SocialLinks
          socialLinks={socialLinks}
          parentClass='nav-icons'
          itemClass='nav-icon'
        />
      </div>
    </nav>
  );
};
export default Navbar;
