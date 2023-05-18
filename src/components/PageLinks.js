import React from 'react';

const PageLinks = ({ pageLinks }) => {
  return (
    <ul
      className='nav-links'
      id='nav-links'
    >
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a
              href={href}
              className='nav-link'
            >
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
