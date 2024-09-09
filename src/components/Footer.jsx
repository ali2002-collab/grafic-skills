import React from 'react';
import { navLinks, contactLinks, socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer id="footer" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-8 text-center sm:text-left">
        <div>
          <h3 className="text-md font-semibold mb-4">Nav Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white flex items-center justify-center sm:justify-start" href={link.href}>
                  {index === 0 && <span className="font-semibold">Tel:</span>}
                  {index === 1 && <span className="font-semibold">Cell:</span>}
                  {index === 2 && <span className="font-semibold">Location:</span>}
                  {index === 3 && <span className="font-semibold">E-mail:</span>}
                  <span className="ml-2">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Socials</h3>
          <ul className="space-y-2">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white flex items-center justify-center sm:justify-start" href={link.href} target='_blank'>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-neutral-700 pt-4">
        <p className="text-neutral-400 text-center">© Grafic Skills 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
