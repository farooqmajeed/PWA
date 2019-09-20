import { Link } from 'react-router-dom'
import ReactWOW from 'react-wow';
import React, { Component } from 'react';
import S1 from '../../images/web/s1.jpg'
import S2 from '../../images/web/mike.jpg'
import S3 from '../../images/web/Photo_2.jpg'
import S4 from '../../images/web/s2.jpg'
import S5 from '../../images/web/s3.jpg'
import S6 from '../../images/web/s4.jpg'
const listData = [
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S2,
        date:'20 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S1,
        date:'22 Mar, 2019'
    }
    ,
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S3,
        date:'23 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S4,
        date:'20 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S5,
        date:'20 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S6,
        date:'20 Mar, 2019'
    }
]
export default class Blog extends React.Component {
    render() {
        return (
            <section id="blog" className="blog-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>Latest Post</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                
                    {listData.map((data,i)=>(<ReactWOW delay={`0.${i}s`} animation='fadeInUp'>
                        <div className="horizontal-post single-blog-post">
                            <div className="row" style={{maxHeight:'300px'}}> 
                                <div className="col-lg-5" > 
                                    <div className="blog-img">
                                        <Link href="/details">
                                            <a onClick={() => this.props.history.push('/details')}>
                                                <img src={data.lmage} alt="Blog Post Image" style={{width:'100%'}} />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7">         
                                    <div className="blog-info">
                                        <h6 className="blog-title">
                                            <Link href="/details">
                                                <a onClick={() => this.props.history.push('/details')}>{data.heading}</a>
                                            </Link>
                                        </h6>
                                        <div className="post-admin">
                                            By <a href="#">admin</a> / <a href="#">12</a> Comments / <span className="post_date">{data.date}</span>
                                        </div>

                                        <p>{data.subHead}</p>
                                        
                                        <Link href="/details">
                                            <a onClick={() => this.props.history.push('/details')} className="default-button">
                                                Read More 
                                                <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>))}
                    
                    {/* <ReactWOW delay='0.7s' animation='fadeInUp'>
                        <div className="horizontal-post single-blog-post">
                            <div className="row"> 
                                <div className="col-lg-5"> 
                                    <div className="blog-img">
                                        <Link href="/details">
                                            <a onClick={() => this.props.history.push('/details')}>
                                                <img src={require("../../images/blog/2.jpg")} alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                    
                                <div className="col-lg-7">
                                    <div className="blog-info">
                                        <h6 className="blog-title">
                                            <Link href="/details">
                                                <a onClick={() => this.props.history.push('/details')}>Awesome app</a>
                                            </Link>
                                        </h6>
                                        <div className="post-admin">
                                            By <a href="#">admin</a> / <a href="#">12</a> Comments / <span className="post_date">21 Mar, 2019</span>
                                        </div>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="/details">
                                            <a onClick={() => this.props.history.push('/details')} className="default-button">
                                                Read More 
                                                <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                    
                    <ReactWOW delay='0.9s' animation='fadeInUp'>
                        <div className="horizontal-post single-blog-post">
                            <div className="row">                 
                                <div className="col-lg-5"> 
                                    <div className="blog-img">
                                        <Link href="/details">
                                            <a onClick={() => this.props.history.push('/details')}>
                                                <img src={require("../../images/blog/3.jpg")} alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7">     
                                    <div className="blog-info">
                                        <h6 className="blog-title">
                                            <Link href="/details">
                                                <a onClick={() => this.props.history.push('/details')}>Awesome app landing page</a>
                                            </Link>
                                        </h6>
                                        <div className="post-admin">
                                            By <a href="#">admin</a> / <a href="#">12</a> Comments / <span className="post_date">22 Mar, 2019</span>
                                        </div>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="#" >
                                            <a onClick={() => this.props.history.push('/details')} className="default-button" >
                                                Read More <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW> */}
                </div>  
            </section>
        )
    }
}
