import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import ContentCarousel from './content_carousel'

import new_direction from './content/new_direction'
import leon from './content/leon'
import bochica from './content/bochica'
import genderless_beauty from './content/genderless_beauty'
import poster_series from './content/poster_series'

class Home extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    console.log(new_direction)
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
          <ContentCarousel items={new_direction}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>New Direction</p>
            <p>Exhibition Branding</p>
            <p>2018</p>
          </div>
        </div>

        <div className="content-section">
          <ContentCarousel items={leon}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Leon</p>
            <p>Art Direction</p>
            <p>2019 Photography: Daniel Adhami</p>
          </div>
        </div>

        <div className="content-section">
          <ContentCarousel items={bochica}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Bochica</p>
            <p>Museum Rebrand</p>
            <p>2018</p>
          </div>
        </div>

        <div className="content-section">
          <ContentCarousel items={genderless_beauty}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Genderless Beauty</p>
            <p>Campaign</p>
            <p>2018</p>
          </div>
        </div>

        <div className="content-section">
          <ContentCarousel items={poster_series}/>
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
