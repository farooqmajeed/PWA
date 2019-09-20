import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel3';
import React, { Component } from 'react';
import S1 from '../../images/web/s1.jpg'
import S2 from '../../images/web/mike.jpg'
import S3 from '../../images/web/Photo_2.jpg'
import S4 from '../../images/web/s2.jpg'
import S5 from '../../images/web/s3.jpg'
import S6 from '../../images/web/s4.jpg'
import { connect } from "react-redux"
const options = {
    nav: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: false,
    navText: [
        "<i class='icofont-swoosh-left'></i>", 
        "<i class='icofont-swoosh-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

 class Features extends React.Component {
    render() {
        return (
            <section id="features" className="awsome-features"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>New Post`s</h2>
                                    {/* <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p> */}
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <div className="row"> 
                            <div className="col-lg-12"> 
                                <OwlCarousel 
                                    className="screenshot-carousel owl-carousel owl-theme"
                                    {...options}
                                >
                                     <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S2}/>
                                        <div className="post-profile">
                                            <img src={S1} alt="client Image"  height="60px !important"/>
                                        </div>
                                    </div>
                                    <h4>Highly Dec</h4>
                                    <p className="post-discription">There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                    <div className="post-containre">
                                        <span className="about-post">Owner :&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; 4</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 444$</span>
                                    </div>
                                        <div className="default-button" style={{height:30,paddingTop:5,cursor: 'pointer'}}>
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                      view
                                    </div>
                                </div>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S2}/>
                                        <div style={{width:60,height:60,position:'absolute',marginTop:-35,marginLeft:15}}>
                                            <img src={S1} alt="client Image"  height="60px !important"/>
                                        </div>
                                    </div>
                                    <h4>Highly Dec</h4>
                                    <p style={{  
                                          width:' 100%',
                                        maxHeight:' 85px',
                                        lineHeight:' 12px',
                                        minHeight:' 30px',
                                        textOverflow:' ellipsis',
                                        overflow:' hidden',
                                        whiteSpace:'pre-wrap',
                                        textAlign: 'left'}}>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                    <div style={{width:'100%',minHeight:100,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                                        <span className="about-post">Owner :&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; 4</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 444$</span>
                                    </div>
                                        <div className="default-button" style={{height:30,paddingTop:5,cursor: 'pointer'}}>
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                      view
                                    </div>
                                </div>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S2}/>
                                        <div style={{width:60,height:60,position:'absolute',marginTop:-35,marginLeft:15}}>
                                            <img src={S1} alt="client Image"  height="60px !important"/>
                                        </div>
                                    </div>
                                    <h4>Highly Dec</h4>
                                    <p style={{  
                                          width:' 100%',
                                        maxHeight:' 85px',
                                        lineHeight:' 12px',
                                        minHeight:' 30px',
                                        textOverflow:' ellipsis',
                                        overflow:' hidden',
                                        whiteSpace:'pre-wrap',
                                        textAlign: 'left'}}>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                    <div style={{width:'100%',minHeight:100,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                                        <span className="about-post">Owner :&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; 4</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 444$</span>
                                    </div>
                                        <div className="default-button" style={{height:30,paddingTop:5,cursor: 'pointer'}}>
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                      view
                                    </div>
                                </div>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S2}/>
                                        <div style={{width:60,height:60,position:'absolute',marginTop:-35,marginLeft:15}}>
                                            <img src={S1} alt="client Image"  height="60px !important"/>
                                        </div>
                                    </div>
                                    <h4>Highly Dec</h4>
                                    <p style={{  
                                          width:' 100%',
                                        maxHeight:' 85px',
                                        lineHeight:' 12px',
                                        minHeight:' 30px',
                                        textOverflow:' ellipsis',
                                        overflow:' hidden',
                                        whiteSpace:'pre-wrap',
                                        textAlign: 'left'}}>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                    <div style={{width:'100%',minHeight:100,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                                        <span className="about-post">Owner :&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; 4</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 444$</span>
                                    </div>
                                        <div className="default-button" style={{height:30,paddingTop:5,cursor: 'pointer'}}>
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                      view
                                    </div>
                                </div>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S2}/>
                                        <div style={{width:60,height:60,position:'absolute',marginTop:-35,marginLeft:15}}>
                                            <img src={S1} alt="client Image"  height="60px !important"/>
                                        </div>
                                    </div>
                                    <h4>Highly Dec</h4>
                                    <p style={{  
                                          width:' 100%',
                                        maxHeight:' 85px',
                                        lineHeight:' 12px',
                                        minHeight:' 30px',
                                        textOverflow:' ellipsis',
                                        overflow:' hidden',
                                        whiteSpace:'pre-wrap',
                                        textAlign: 'left'}}>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                    <div style={{width:'100%',minHeight:100,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                                        <span className="about-post">Owner :&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; 4</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 444$</span>
                                    </div>
                                        <div className="default-button" style={{height:30,paddingTop:5,cursor: 'pointer'}}>
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                      view
                                    </div>
                                </div>
                                </OwlCarousel>
                            </div>
                        {/* <div className="col-lg-12"> 
                         
           
                            {/* </ReactWOW> */}
            
                        
                    </div>
                    <a href="#" className="default-button">
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                       See More...
                                    </a>
                </div> 
            </section>
        )
    }
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
  export default connect(mapStateToProps, mapDispatchToProps)(Features);