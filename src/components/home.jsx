import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return(
      <div className="home">
        <div className="white-gap height-72">
          <div>
            SHINYA UCHIDA
          </div>
          <Link  to='/bio' className="black-link">
              INFO
          </Link>
        </div>
        <div className="content-section">
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Personal Work</p>
            <p>Poster Series</p>
            <p>2019</p>
          </div>
        </div>
        <div className="content-section">
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Leon</p>
            <p>Art Direction</p>
            <p>2018</p>
          </div>
        </div>
        <div className="content-section">
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Personal Work</p>
            <p>Poster Series</p>
            <p>2017</p>
          </div>
        </div>
        <div className="bottom-black"></div>
        <div className="bottom-white"></div>
      </div>
    )
  }
}

export default Home;
