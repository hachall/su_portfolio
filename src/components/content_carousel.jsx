import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import JQuery from 'jquery'
import { Swipeable } from 'react-swipeable';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



class ContentCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.carouselRef = React.createRef();
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

componentDidMount() {
  // $('.carousel').bcSwipe({ threshold: 50 });
}

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          {item.img ?
            <div className="img-wrapper"><img src={item.src} alt={item.altText} className="carousel-img"/></div>

            :  <div className="carousel-vid"><ReactPlayer loop={true} className="vid-box" controls={true} url={item.src} autoPlay playing={true} /></div>
          }
          {/*<CarouselCaption captionText={item.caption} captionHeader={item.caption} />*/}
        </CarouselItem>
      );
    });

    onSwipedLeft: () => { this.carouselRef.current.next(); }
    onSwipedRight: () => { this.carouselRef.current.previous(); }

    return (
      <Carousel
        ref={this.carouselRef}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="content-carousel"
        interval={false}
        touch={true}
        keyboard={false}
      >

        {slides}
        <div className="carousel-arrows-box">
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </div>
      </Carousel>
    );
  }
}


export default ContentCarousel;
