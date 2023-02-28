import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../stylesScss/images/FooterLogo.svg';

import './Footer.scss';

const footerLinks = [
  {
    link: 'GITHUB',
    url: 'https://github.com/fe-feb23-webwizards?type=source',
  },
  {
    link: 'CONTACTS',
    url: 'https://github.com/orgs/fe-feb23-webwizards/people',
  },
  {
    link: 'RIGHTS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Copyright-_all_rights_reserved.png/560px-Copyright-_all_rights_reserved.png',
  },
];

export const Footer: React.FC = memo(() => {
  const backToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <footer className="Footer">
      <div className="Footer__left">
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="Footer__middle">
        <ul className="Footer__list">
          {footerLinks.map(({ link, url }) => (
            <li
              key={link}
              className="Footer__item"
            >
              <a className="Footer__nav-link" href={url}>
                {link}
              </a>
            </li>
          ))}
        </ul>

      </div>
      <div className="Footer__right">
        <p className="Footer__backTo">Back to top</p>
        <button
          type="button"
          className="Footer__backhome btn"
          onClick={backToTop}
        >
          { }
        </button>

      </div>
    </footer>
  );
});
