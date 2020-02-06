import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import ContentCarousel from './content_carousel'

import new_direction from './content/new_direction'
import leon from './content/leon'
import bochica from './content/bochica'
import genderless_beauty from './content/genderless_beauty'
import poster_series from './content/poster_series'
import stefan from './content/stefan'
import astro from './content/astro'
import animation from './content/animation'
import flip from './content/flip'
import borderless from './content/borderless'

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
          <ContentCarousel items={stefan}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Stefan</p>
            <p>Art Direction</p>
            <p>2019</p>
            <p>Photography: Shinya Uchida</p>
          </div>
        </div>

        <div className="content-section">
          <ContentCarousel items={flip}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>FLip</p>
            <p>Art Direction</p>
            <p>2019</p>
          </div>
        </div>

        <div className="content-section">
          <ContentCarousel  items={animation}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Personal Work</p>
            <p>Animation</p>
            <p>2019</p>
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
          <ContentCarousel items={leon}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Leon</p>
            <p>Art Direction</p>
            <p>2019</p>
            <p>Photography: Daniel Adhami</p>
          </div>
        </div>

        <div className="content-section">
          <ContentCarousel items={poster_series}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Personal Work</p>
            <p>Poster Series</p>
            <p>2017-2019</p>
          </div>
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
          <ContentCarousel  items={astro}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Astro Travellin'</p>
            <p>Video</p>
            <p>2019</p>
          </div>
        </div>


        <div className="content-section">
          <ContentCarousel items={borderless}/>
        </div>
        <div className="white-gap height-77">
          <div className="content-details">
            <p>Borderless</p>
            <p>Artwork</p>
            <p>2019</p>
          </div>
        </div>


        {/*<div className="bottom-black"></div>*/}
        <div className="bottom-white"></div>
      </div>
    )
  }
}

export default Home;
