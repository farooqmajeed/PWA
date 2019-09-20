import ReactWOW from 'react-wow';
import React, { Component } from 'react';
import { connect } from "react-redux"

class About extends React.Component {
    render(){
        return (
            <section id="about" className="app-about-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>About Our App</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-lg-7"> 
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <div className="app-about-text"> 
                                    <h3>Best way to find your new Home</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> 
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                    
                                    <ul> 
                                        <li><i className="icofont-verification-check"></i> Responsive design</li>
                                        <li><i className="icofont-verification-check"></i> Easy to customize</li>
                                        <li><i className="icofont-verification-check"></i> Modern design</li>
                                    </ul>

                                    <a href="#app-download" className="default-button">
                                        <i className="icofont-cloud-download"></i> 
                                        Download Now
                                    </a>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-lg-5"> 
                            <ReactWOW delay='0.9s' animation='fadeInUp'>
                                <div className="text-center"> 
                                    <img src={require("../../images/web/Photo_1.jpg")} alt="App About Image" />
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
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
  export default connect(mapStateToProps, mapDispatchToProps)(About);