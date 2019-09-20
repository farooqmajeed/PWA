import { Link } from 'react-router-dom'
import ReactWOW from 'react-wow';
import React, { Component } from 'react';

export default class Team extends React.Component {
    render() {
        return (
            <section id="team" className="team-section">
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>Our Awesome Team</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-md-4 col-lg-4"> 
                            <ReactWOW delay='0.4s' animation='fadeInUp'>
                                <div className="single-member"> 
                                    <div className="member-img">
                                        <img src={require("../../images/team/1.jpg")} alt="Team Member Image" />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                <div className="social-links">
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-facebook"></i>
                                                        </a>
                                                    </Link>
                                                    
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-twitter"></i>
                                                        </a> 
                                                    </Link>
                                                    
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-linkedin"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Steve Roberts</h4>
                                    <p className="designation">CEO & Fouder</p>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-md-4 col-lg-4"> 
                            <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <div className="single-member"> 
                                    <div className="member-img">
                                        <img src={require("../../images/team/2.jpg")} alt="Team Member Image" />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                <div className="social-links">
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-facebook"></i>
                                                        </a>
                                                    </Link>
                                                    
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-twitter"></i>
                                                        </a> 
                                                    </Link>
                                                    
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-linkedin"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">John Marshall</h4>
                                    <p className="designation">UI/UX Designer</p>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-md-4 col-lg-4"> 
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <div className="single-member"> 
                                    <div className="member-img">
                                        <img src={require("../../images/team/3.jpg")} alt="Team Member Image" />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                <div className="social-links">
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-facebook"></i>
                                                        </a>
                                                    </Link>
                                                    
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-twitter"></i>
                                                        </a> 
                                                    </Link>
                                                    
                                                    <Link href="#">
                                                        <a>
                                                            <i className="icofont-linkedin"></i>
                                                        </a>
                                                    </Link>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Michael Cartney</h4>
                                    <p className="designation">Front-End Developer</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
