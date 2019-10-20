import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class Bio extends Component {

  render() {
    return(
      <div className="bio">
        <div className="bio-top">
          <Link to='/' className="white-link bio-about-link">
            SHINYA UCHIDA
          </Link>
          <div className="bio-wrapper">
            <div>
              <div className="nav-name">
                ABOUT
              </div>
              <div className="bio-info">
                <div>
                  <p>Tokyo Born. London Raised.</p>
                  <p>Japanese-English Hybrid.</p>
                  <p>Graphic Designer.</p>
                </div>
              </div>
            </div>
            <div className="left-margin">
              <div className="nav-name">
                EXPERIENCE
              </div>
              <div className="bio-info">
                <div>
                  <p><a className = "borderCenter" href="https://www.paq.works/">paq</a></p>
                  <p><a className = "borderCenter" href="https://utile.studio/">UTILE</a></p>
                  <p><a className = "borderCenter" href="http://www.minititle.com/">Mini Title</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-bottom">
          <div></div>
          <div className="footer-links">
            <a href = "mailto: shinya.u39@gmail.com">EMAIL</a>
            <a href="https://www.instagram.com/yashin.__/">INSTAGRAM</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio;
