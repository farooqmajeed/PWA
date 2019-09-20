import { Link } from 'react-router-dom'
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Loader from '../Shared/Loader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop'
import React, { Component } from 'react';
import { connect } from "react-redux"
import { AuthMiddleware, MainMiddleware } from '../../store/middlewares';
import LinearProgress from '@material-ui/core/LinearProgress';

 class Peoples extends React.Component {
    render() {
        const { state, showMessage,user,history ,people} = this.props
        return (
            <NoSSR key="1">
                {/* <Preloader fadeDuration={1000}>
                    <Navigation /> */}

                    <section className="top-banner-area"> 
                        <div className="container"> 
                            <div className="row"> 
                                <div className="col-lg-6"> 
                                    <h2 className="banner-title">Find People do Chats and much more</h2>   
                                </div>
                                <div className="col-lg-6"> 
                                    <ol className="breadcrumb">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li className="active">Peoples</li>
                                    </ol>   
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="blog" className="blog-details-section" style={{background:'#1a1a1a'}}> 
                        <div className="container"> 
                            <div className="row"> 
                            {people&&people?!Object.keys(people).length?
                                 <div className="container"> 
                                  <h2  className="banner-title">Please wait...</h2>
                            <LinearProgress  variant={"query"}  />
                            </div>:Object.values(people).map(PDT=>(
                                 user.uid !== PDT.uid&& <div className="col-lg-3" style={{height:'460px'}}> 
                                <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email :&nbsp;&nbsp; {PDT.email}</span>
                                        <span className="about-post">Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {PDT.dob?PDT.dob:'N/A'}</span>
                                        <span className="about-post">Lives &nbsp;:&nbsp;&nbsp; {PDT.address?PDT.address:'N/A'}</span>
                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={PDT.profileImage?PDT.profileImage:require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">{PDT.Name}</h3>
                                        <span className="post">{PDT.skill?PDT.skill:'N/A'}</span>
                                        <div
                                         className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}
                                         onClick={state.isAuthenticated ?!user.number || !user.dob?()=> showMessage({ message: 'Sorry you need to compelet your profile first' }) :() => history.push(`/chat/${PDT.uid}`) : () => showMessage({ message: 'Sorry you need to login to use chat feature' })}
                                         >
                                     Start Chat
                                    </div>
                                    </div>
                                </div>
                                </div>)):<div className='col-lg-4'>
                               
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
        people: state.Main.people,
        state: state.Auth,
        user:state.Auth.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showMessage: (dta) => { dispatch(AuthMiddleware.ShowMessage(dta)) },
        getPost:()=>{dispatch(MainMiddleware.GetAdds())}
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Peoples);