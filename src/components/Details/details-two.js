import { Link } from 'react-router-dom'
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Loader from '../Shared/Loader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop'
import React, { Component } from 'react';
import './sli.css'
import S1 from '../../images/web/s1.jpg'
import S2 from '../../images/web/mike.jpg'
import { connect } from "react-redux"
import { AuthMiddleware, MainMiddleware } from '../../store/middlewares';
import NoImage from '../../images/NoImage.jpg'
import OwlCarousel from 'react-owl-carousel3';
import LinearProgress from '@material-ui/core/LinearProgress';

const options = {
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    margin: 40,
    smartSpeed: 500,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
    }
}
class FindPROP extends React.Component {
    componentWillMount=()=>{
        // this.props.getPost()
    }
    render() {
        const { state, showMessage,adds,history } = this.props
        console.log("data", this.props)
        return (
            <NoSSR key="1">
                {/* <Preloader fadeDuration={1000}>
                    <Navigation /> */}

                <section className="top-banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="contact-form">
                                    <form id="contactForm" onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required={true}
                                                        data-error="Please enter city"
                                                        placeholder="City"
                                                    // value={this.state.formFields.name}
                                                    // onChange={this.nameChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label>Rooms</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        required={true}
                                                        data-error="Please enter number of rooms"
                                                        placeholder="E.g 3"
                                                    // value={this.state.formFields.email}
                                                    // onChange={this.emailChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label>Price</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        required={true}
                                                        data-error="Please enter your range"
                                                        placeholder="Your Price"
                                                    // value={this.state.formFields.subject}
                                                    // onChange={this.subjectChangeHandler}
                                                    />
                                                    {/* <input type="range" min="1" max="100"  class="slider" id="myRange"></input>
                                             <p>Value: <span id="demo"></span></p> */}
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 mt-4">
                                                <div className="form-group">

                                                    <button type="submit" className="default-button">
                                                        Find Now...
                                                <i className="icofont-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="banner-title">Find your new home per match your requirements</h2>
                            </div>
                            <div className="col-lg-6">
                                <ol className="breadcrumb">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Find Home</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog" className="blog-details-section">
                    <div className="container">
                        <div className="row">
                            {adds&&adds?!Object.keys(adds).length?
                                 <div className="container"> 
                                  <h2  className="banner-title">Please wait...</h2>
                            <LinearProgress  variant={"query"}  />
                            </div>:Object.values(adds).map(addData=>(
                             <div className='col-lg-3 col-md-6'>
                                <div className="single-feature">
                                    <div className="feature-icon">
                                    <OwlCarousel 
                                        className="testimonial-carousel owl-carousel owl-theme"
                                        {...options}
                                    >
                                 {addData.images&&addData.images.length>0?addData.images.map((imagePreviewUrl, i)=>{
                                     if(imagePreviewUrl.includes(':video/')){
                                        return <video className="feature-icon"  src={imagePreviewUrl} height="60px !important" loop autoPlay></video>
                                     }else
                                         {return  <img className="feature-icon" src={imagePreviewUrl}  height="60px !important"/>}
                             }):<img className="feature-icon" src={NoImage}/>}
                              
                            </OwlCarousel>
                                        <div className="post-profile">
                                            <img src={S1} alt="client Image" height="60px !important" />
                                        </div>
                                    </div>
                                    <h4>{addData.title}</h4>
                                    <p className="post-discription">{addData.slogan}</p>
                                    <div className="post-containre">
                                        <span className="about-post">Owner :&nbsp;&nbsp; {addData.user.Name}</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; {addData.rooms}</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {addData.price}</span>
                                    </div>
                                    <div className="default-button"
                                        onClick={state.isAuthenticated ? () => history.push(`/details/${addData.key}`) : () => showMessage({ message: 'Sorry you need to login to see more details' })}
                                        style={{ height: 30, paddingTop: 5, cursor: 'pointer' }}>
                                        view
                                    </div>
                                </div>
                            </div>)): <div className='col-lg-4'>
                               
                                    <h2>Sorry there is no add Avilabel</h2>
                            </div>}
                           
                        </div>
                    </div>
                </section>

                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />

                <Placeholder>
                    <Loader />
                </Placeholder>
                {/* </Preloader> */}
            </NoSSR>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Buttons: state.Main.Buttons,
        state: state.Auth,
        adds:state.Main.addpost
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showMessage: (dta) => { dispatch(AuthMiddleware.ShowMessage(dta)) },
        getPost:()=>{dispatch(MainMiddleware.GetAdds())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindPROP)