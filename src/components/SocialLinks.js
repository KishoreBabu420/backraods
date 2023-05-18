import React from 'react';

const SocialLinks = ({ socialLinks }) => {
  return (
    <ul className='nav-icons'>
      {socialLinks.map(({ id, href, icon }) => (
        <li key={id}>
          <a
            href={href}
            target='_blank'
            rel='noreferrer'
            className='nav-icon'
          >
            <i className={icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
