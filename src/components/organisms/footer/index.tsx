import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

import './styles.css';
import { Link } from '../../atoms/link';

export function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <footer className="page-footer">
      <div className="page-footer__content">
        <nav>
          <ul className="page-footer__socials">
            <li data-social="linkedin" className="page-footer__social">
              <Link target="_blank" href="https://linkedin.com/in/ceduardogodoi">
                <div className="page-footer__social-bg">
                  <LinkedinIcon size={16} color="var(--color-white)" fill="var(--color-white)" />
                </div>
                LinkedIn
              </Link>
            </li>
            <li data-social="github" className="page-footer__social">
              <Link target="_blank" href="https://github.com/ceduardogodoi">
                <div className="page-footer__social-bg">
                  <GithubIcon size={16} color="var(--color-white)" fill="var(--color-white)" />
                </div>
                Github
              </Link>
            </li>
            <li data-social="instagram" className="page-footer__social">
              <Link target="_blank" href="https://instragram.com/ceduardogodoi">
                <div className="page-footer__social-bg">
                  <InstagramIcon size={16} color="var(--color-white)" />
                </div>
                Instagram
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="page-footer__legal">
            <li className="page-footer__legal-item under-construction">
              <Link href="#" title="Page under construction">Privacy Policy</Link>
            </li>
            <li className="page-footer__legal-item under-construction">
              <Link href="#" title="Page under construction">Cookie Settings</Link>
            </li>
            <li className="page-footer__legal-item under-construction">
              <Link href="#" title="Page under construction">Contact Us</Link>
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
