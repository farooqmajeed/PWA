import NoSSR from 'react-no-ssr';
import React, { Component } from 'react';
import './chat.css'
import { connect } from "react-redux"
import lunch from '../../images/Houseit-logo/its-all-about-people.png'
import { LinearProgress } from '@material-ui/core';
import { MainMiddleware } from '../../store/middlewares';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1,
      chatUser:'',
      message:'',
      people:{}
    }
  }
  componentWillReceiveProps=(newProps)=>{
    const {chatUser}=this.state
    this.setState({people:newProps.people})
    if(chatUser.uid){
      this.setState({chatUser:newProps.people[chatUser.uid]})
    }
  }
  componentWillMounts=()=>{
    this.setState({people:this.props.people})
  }
  handleTabs = (e) => {
    this.setState({ activeTab: e })
  }
  handleChat = (e) => {
    this.setState({ chatUser: e })
  }
  handleMessage = (e) => {
    const {value  } = e.target
    this.setState({ message: value })
  }
  sendMessage = (e) => {
    const {user,sendMessage} =this.props
    const {chatUser,message} =this.state
    var data = {message:{message:message,time:'33',uid:user.uid},sender:user.uid,get:chatUser.uid}
    sendMessage(data)
  }
  onChangeSearch=(e)=>{
    const {value  } = e.target
    const {people} =this.props
    var obj = {}
    var data = Object.keys(people).map(PDT=>{
      if(people[PDT].Name.includes(value)){
        var d = people[PDT]
        obj = {...obj,[PDT]:d}
      }

  })
    this.setState({people:obj})
  }

  render() {
    const { activeTab,chatUser,people, } = this.state
    const {user} =this.props
    return (
      <div id="home" className="hompage-slides-wrapper">
        <div className="single-slider-item slider-item-img-bg" >
          <div className="slide-item-table">
            <div className="slide-item-tablecell">
              <div className="container clearfix">
                <div className='row'>
                  <div className="col-lg-4 people-list" style={{ minHeight: '400px', maxHeight: '85vh' }}>
                    <div className="search">
                      <input type="text" onChange={(e)=>this.onChangeSearch(e)} placeholder="search" />
                      {/* <i className="icofont-search-1"></i> */}
                    </div>
                    <div style={{ width: '100%', height: 45, background: 'gray', display: 'flex', flexDirection: 'row' }}>
                      <div onClick={() => this.handleTabs(1)} style={{ cursor: 'pointer', width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: activeTab === 1 && '1px solid #85bb71' }}>Chat</div>
                      <div onClick={() => this.handleTabs(2)} style={{ cursor: 'pointer', width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: activeTab === 2 && '1px solid #85bb71' }}>Contact</div>
                    </div>
                    {activeTab === 1 ? <ul className="list">
                    {people&&people?!Object.keys(people).length?
                                 <div className="container"> 
                                  <h4  className="banner-title">Please wait...</h4>
                            <LinearProgress  variant={"query"}  />
                            </div>:user.messages&&Object.keys(user.messages).map(PDT=>(
                     people[PDT]&&<li className="clearfix "  style={{background:chatUser.uid === PDT&&'#80808059'}} onClick={() => this.handleChat(people[PDT])} >
                       <img src={people[PDT]&&people[PDT].profileImage?people[PDT]&&people[PDT].profileImage:require("../../images/client/1.png")} alt="avatar"  class="PPic"/>
                       <div className="about">
                         <div className="name">{people[PDT]&&people[PDT].Name}</div>
                         <div className="status">
                           <i className="icofont-circled-down offline"></i> offline
                           </div>
                       </div>
                     </li>
                     )):""}
                    </ul> :
                     <ul className="list">
                       {people&&people?!Object.keys(people).length?
                                 <div className="container"> 
                                  <h4  className="banner-title">Please wait...</h4>
                            <LinearProgress  variant={"query"}  />
                            </div>:Object.values(people).map(PDT=>(
                      user.uid!==PDT.uid&&<li className="clearfix " style={{background:chatUser.uid === PDT.uid&&'#80808059'}} onClick={() => this.handleChat(PDT)} >
                       <img src={PDT.profileImage?PDT.profileImage:require("../../images/client/1.png")} alt="avatar"  class="PPic"/>
                       <div className="about">
                         <div className="name">{PDT.Name}</div>
                         <div className="status">
                           <i className="icofont-circled-down offline"></i> offline
                           </div>
                       </div>
                     </li>)):""}
                   </ul> 
                    }
                  </div>

                  {activeTab === 1?chatUser.Name? <div className="chat col-lg-8">
                    <div className="chat-header clearfix">
                      <img src={chatUser.profileImage?chatUser.profileImage:require("../../images/client/1.png")} alt="avatar"  class="PPic"  />

                      <div className="chat-about">
                        <div className="chat-with">Chat with {chatUser.Name}</div>
                        <div className="chat-num-messages">already 1 902 messages</div>
                      </div>
                      <i className="icofont-star"></i>
                    </div>

                    <div className="chat-history" style={{ minHeight: '400px', maxHeight: '50vh' }}>
                      <ul className="list">
                      {chatUser&&chatUser.messages&&chatUser.messages[user.uid]&&Object.values(chatUser.messages[user.uid]).length>0?
                      Object.values(chatUser.messages[user.uid]).map((MSG)=>(
                        MSG.uid !== chatUser.uid?<li className="clearfix">
                        <div className="message-data align-right">
                          <span className="message-data-time" >{MSG.time}</span> &nbsp; &nbsp;
                         <span className="message-data-name" >Me</span> <i className="icofont-circled-down me"></i>
                       </div>
                        <div className="message other-message float-right">
                        {MSG.message}
                          </div>
                      </li>:

                      <li>
                        <div className="message-data">
                          <span className="message-data-name"><i className="icofont-circled-down online"></i> {chatUser.Name}</span>
                          <span className="message-data-time">{MSG.time}</span>
                        </div>
                        <div className="message my-message">
                        {MSG.message}
                        </div>
                      </li>
                      ))
                      :
                      <li className="clearfix">
                          <div className="startup other-startup float-right animated fadeInUp slow opacityOne">
                            Say Hi to {chatUser.Name}
                            </div>
                        </li>
                      }

                      </ul>

                    </div>

                    <div className="chat-message clearfix">
                      <textarea onChange={(e)=>this.handleMessage(e)} name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

                      <i className="icofont-paper-clip"></i> &nbsp;&nbsp;&nbsp;
        <i className="icofont-image"></i>

                      <button onClick={()=>this.sendMessage()}>Send</button>

                    </div>

                  </div>:<div className="chat col-lg-8"  style={{ height: '85vh',background:'#444753' }}>
                          <h1
                            className={"animated fadeInUp slow opacityOne" }
                          >
                            Welcome to HOUSEIT chat area...!
                                                            </h1>
                          <p className={"animated fadeInUp slow opacityOne"} >
                            find people start chart</p>
                             <div style={{ width: '100%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <img src={lunch}/>
                          </div>
                    </div> :chatUser.Name?  <div className="chat col-lg-8"  style={{ height: '85vh',background:'#444753' }}>
                   <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {chatUser.email}</span>
                                        <span className="about-post">Age&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {chatUser.dob?chatUser.dob:'N/A'}</span>
                                        <span className="about-post">Number &nbsp;&nbsp;:&nbsp;&nbsp; {chatUser.number?chatUser.number:'N/A'}</span>
                                        <span className="about-post">Tag-Line &nbsp;:&nbsp;&nbsp; {chatUser.tag?chatUser.tag:'N/A'}</span>
                                        <span className="about-post">Lives &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {chatUser.address?chatUser.address:'N/A'}</span>
                                        <span className="about-post">Bio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;:&nbsp;&nbsp; {chatUser.bio?chatUser.bio:'N/A'}</span>

                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={chatUser.profileImage?chatUser.profileImage:require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">{chatUser.Name}</h3>
                                        <span className="post">{chatUser.skill?chatUser.skill:'N/A'}</span>
                                        <div
                                         className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}
                                          onClick={() =>{ this.handleChat(chatUser); this.handleTabs(1)}} 
                                         >
                                     Start Chat
                                    </div>
                                    </div>
                                    </div>
                                </div>: <div className="chat col-lg-8"  style={{ height: '85vh',background:'#444753' }}>
                          <h1
                            className={"animated fadeInUp slow opacityOne" }
                          >
                            Welcome to HOUSEIT chat area...!
                                                            </h1>
                          <p className={"animated fadeInUp slow opacityOne"} >
                            find people start chart</p>
                             <div style={{ width: '100%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <img src={lunch}/>
                          </div>
                    </div>
                    }
                  {/* <!-- end chat --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.Main.people,
    user: state.Auth.user,
    message:state.Auth.message
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (pay) => {dispatch(MainMiddleware.sendMessage(pay))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);