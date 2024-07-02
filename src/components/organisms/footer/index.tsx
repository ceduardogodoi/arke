import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

import './styles.css';

export function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <footer className="page-footer">
      <div className="page-footer__content">
        <nav>
          <ul className="page-footer__socials">
            <li data-social="linkedin" className="page-footer__social">
              <a target='__blank' href="https://linkedin.com/in/ceduardogodoi">
                <div className="page-footer__social-bg">
                  <LinkedinIcon size={16} color="var(--color-white)" fill="var(--color-white)" />
                </div>
                LinkedIn
              </a>
            </li>
            <li data-social="github" className="page-footer__social">
              <a target='__blank' href="https://github.com/ceduardogodoi">
                <div className="page-footer__social-bg">
                  <GithubIcon size={16} color="var(--color-white)" fill="var(--color-white)" />
                </div>
                Github
              </a>
            </li>
            <li data-social="instagram" className="page-footer__social">
              <a target='__blank' href="https://instragram.com/ceduardogodoi">
                <div className="page-footer__social-bg">
                  <InstagramIcon size={16} color="var(--color-white)" />
                </div>
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="page-footer__legal">
            <li className="page-footer__legal-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="page-footer__legal-item">
              <a href="#">Cookie Settings</a>
            </li>
            <li className="page-footer__legal-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="page-footer__copyright">
          <p>
            {`${String.fromCharCode(169)} Carlos Godoi`}
            {' '}
            <time dateTime={year}>{year}</time>
          </p>
        </div>
      </div>
    </footer>
  );
}
