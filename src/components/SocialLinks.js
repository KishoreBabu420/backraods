import React from 'react';

const SocialLinks = ({ socialLinks, itemClass, parentClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => (
        <li key={id}>
          <a
            href={href}
            target='_blank'
            rel='noreferrer'
            className={itemClass}
          >
            <i className={icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
