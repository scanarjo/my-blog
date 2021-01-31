import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const SocialIcon = ({ title, href, image, alt }) => (
  <a title={title} href={href} className="inline-block">
    <span className="inline-block rounded-full bg-white p-2 m-2">
      <img
        src={image}
        alt={alt}
        className="h-5 w-5"
      />
    </span>
  </a>
)

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gray-800 text-white p-5">
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="grid grid-cols-3">
              <div>
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div>
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div>
                <div className="mt-5">
                  <SocialIcon title="facebook" href="https://facebook.com" image={facebook} alt="Facebook" />
                  <SocialIcon title="twitter" href="https://twitter.com" image={twitter} alt="Twitter"/>
                  <SocialIcon title="instagram" href="https://instagram.com" image={instagram} alt="Instagram"/>
                  <SocialIcon title="vimeo" href="https://vimeo.com" image={vimeo} alt="Vimeo"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
