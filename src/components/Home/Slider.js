import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from "react-visibility-sensor";
import React, { Component } from 'react';
import S1 from '../../images/web/Photo_3.jpg'
import S2 from '../../images/web/mike.jpg'
import S3 from '../../images/web/Photo_2.jpg'
import S4 from '../../images/web/brina.jpg'
import S5 from '../../images/web/unsplash.jpg'
import S6 from '../../images/web/alexandra.jpg'
import { connect } from "react-redux"

const options = {
    items: 1,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
    navText: [
        "<i class='icofont-long-arrow-left'></i>", 
        "<i class='icofont-long-arrow-right'></i>"
    ]
}

class Slider extends React.Component {
    render() {
        return (
            <div id="home" className="hompage-slides-wrapper">
                <OwlCarousel 
                    className="homepage-slides owl-carousel owl-theme"
                    {...options}
                >
                    {this.props.slideData.map((data, idx) => (
                        <div className="single-slider-item slider-item-img-bg" key={idx}>
                            <div className="slide-item-table">
                                <div className="slide-item-tablecell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-7">
                                                <VisibilitySensor>
                                                    {({ isVisible }) => (
                                                        <div className="slider-text">
                                                            <h1
                                                                className={
                                                                    isVisible
                                                                        ? "animated fadeInUp slow opacityOne" : ''
                                                                }
                                                            >
                                                                { data.heading }
                                                            </h1>
                                                            {/* <p
                                                                className={
                                                                    isVisible
                                                                        ? "animated fadeInUp slow opacityOne" : ''
                                                                }
                                                            >
                                                                { data.text }
                                                            </p> */}
                                                            
                                                            <div className="slide-button">
                                                                {/* <a 
                                                                    href="#" 
                                                                    className={`
                                                                        slide-btn-white mr-10 ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                                    `}
                                                                >
                                                                    <i className="icofont-cloud-download"></i> 
                                                                    Download
                                                                </a> */}
                                                                <a 
                                                                    href="#" 
                                                                    className={`
                                                                        slide-btn-bordered ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                                    `}
                                                                >
                                                                    Learn More
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </VisibilitySensor>
                                            </div>
                                            
                                            <div className="col-md-12 col-lg-5">
                                                <div className="welcome-phone">
                                                    <img src={data.lmage} alt="App Mockup image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div> 
        )
    }
}

Slider.defaultProps = {
    slideData: [
        {
            heading: "Find your  new home or rent it out secure, from anywhere.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lmage:S2
        },
        {
            heading: "Find your  new home or rent it out secure, from anywhere.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lmage:S1
        }
        ,
        {
            heading: "Find your  new home or rent it out secure, from anywhere.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lmage:S3
        },
        {
            heading: "Find your  new home or rent it out secure, from anywhere.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lmage:S4
        },
        {
            heading: "Find your  new home or rent it out secure, from anywhere.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lmage:S5
        },
        {
            heading: "Find your  new home or rent it out secure, from anywhere.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lmage:S6
        }
    ]
}


const mapStateToProps = (state) => {
    return {
      Buttons: state.Main.Buttons,
      Text: state.Main.Text,
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      ChangeText: () => console.log('call')
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Slider);