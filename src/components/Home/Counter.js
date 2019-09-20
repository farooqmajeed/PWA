import ReactWOW from 'react-wow';
import React, { Component } from 'react';
import { connect } from "react-redux"
class Counter extends React.Component {
    render() {
        return (
            <div id="counter" className="counter-stats"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-sm-6 col-lg-3"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="counter-box"> 
                                    <i className="icofont-users"></i>
                                    <p>Users</p>
                                    <h3 className="counter-number">2900</h3>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <ReactWOW delay='0.4s' animation='fadeInUp'>
                                <div className="counter-box"> 
                                    <i className="icofont-heart-alt"></i>
                                    <p>Happy Clients</p>
                                    <h3 className="counter-number">2099</h3>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <div className="counter-box"> 
                                    <i className="icofont-ui-rating"></i>
                                    <p>Reviews</p>
                                    <h3 className="counter-number">1999</h3>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <div className="counter-box"> 
                                    <i className="icofont-cloud-download"></i>
                                    <p>Houses</p>
                                    <h3 className="counter-number">7899</h3>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);