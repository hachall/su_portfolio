import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class Bio extends Component {

  render() {
    return(
      <div className="bio">
        <div className="bio-top">
          <div className="nav-name">
            SHINYA UCHIDA
          </div>
          <Link to='/' className="white-link bio-about-link">
              ABOUT
          </Link>
          <div className="bio-info">
            <p>Tokyo Born. London Based.</p>
            <p>Japanese-English Hybrid.</p>
            <p>Graphic Designer</p>
          </div>
        </div>
        <div className="bio-bottom">
          <div></div>
          <div className="footer-links">
            <a href="google.com">EMAIL</a>
            <a href="google.com">INSTAGRAM</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio;
