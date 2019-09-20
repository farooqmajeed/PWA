import OwlCarousel from 'react-owl-carousel3';
import React, { Component } from 'react';
import { connect } from "react-redux"
import Uploader from './Uploader';
import { MainMiddleware } from '../../store/middlewares';


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            dob: '',
            number: '',
            tag: '',
            skill: '',
            address: '',
            bio: '',
            files: [],
            profileImage: [],
            uid:'',
            myadds:{}
        }
    }
    componentWillReceiveProps=(newProps)=>{
        const { user } =newProps
        const { Name, email, dob, number, tag, skill, address, bio ,profileImage,uid,myadds} = user
        // this.setState({ name:Name, email, dob:dob?dob:'', number:number?number:'', tag:tag?tag:'', skill:skill?skill:'', address:address?address:''
        // , bio:bio?bio:'' ,profileImage:profileImage?profileImage:false,uid:uid?uid:'',myadds:myadds?myadds:{}})
    }
    componentWillMount=()=>{
        const { user } =this.props
        const { Name, email, dob, number, tag, skill, address, bio ,profileImage,uid,myadds} = user
               this.setState({ name:Name, email, dob:dob?dob:'', number:number?number:'', tag:tag?tag:'', skill:skill?skill:'', address:address?address:''
        , bio:bio?bio:'' ,profileImage:profileImage?profileImage:false,uid:uid?uid:'',myadds:myadds?myadds:{}})
    }
    handleonChamhe = (e) => {
        // FileList to Array
        let files = e.target.files[0];
        // File Reader for Each file and and update state arrays
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState(prevState => ({
                files: files,
                profileImage: reader.result
            }));
        }
        reader.readAsDataURL(files);
    }
    ChangeHandler = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {myadds,uid, name, email, dob, number, tag, skill, address, bio,profileImage } = this.state
        let data = {myadds:myadds?myadds:{}, uid, Name: name, email, dob, number, tag, skill, address, bio,profileImage }
        this.props.Update(data)

    }
    render() {
        const { name, email, dob, number, tag, skill, address, bio ,profileImage} = this.state
        return (
            <section id="testimonial" className="testimonial-section ">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="testimonial-item" style={{ zIndex: 10 }}>
                                <i className="icofont-quote-left"></i>
                                <p className="description">
                                    <q>{bio}</q>
                                </p>
                                <div className="testimonial-content">
                                    <div className="pic">
                                        <img src={profileImage&&profileImage.length>0?profileImage:require("../../images/client/1.png")} alt="client Image" />
                                    </div>
                                    <h3 className="title">{name}</h3>
                                    <span className="post">{skill}</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8" style={{ zIndex: 10 }}>
                            <div className="contact-form" >
                                <form id="contactForm" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required={true}
                                                    data-error="Please enter your name"
                                                    placeholder="Your Name"
                                                    value={this.state.name}
                                                    name='name'
                                                    onChange={this.ChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>E-mail</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    disabled={true}
                                                    data-error="Please enter your email"
                                                    placeholder="Email Address"
                                                    value={this.state.email}
                                                    name='email'
                                                    onChange={this.ChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required={true}
                                                    data-error="Please enter your subject"
                                                    placeholder="Your subject"
                                                    value={this.state.number}
                                                    name='number'
                                                    onChange={this.ChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">

                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required={true}
                                                    data-error="Please enter your subject"
                                                    placeholder="Your subject"
                                                    value={this.state.dob}
                                                    name='dob'
                                                    onChange={this.ChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Slogan / Tag line</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required={true}
                                            data-error="Please enter your subject"
                                            placeholder="Your subject"
                                            value={this.state.tag}
                                            name='tag'
                                            onChange={this.ChangeHandler}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <label>Skill`s</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required={true}
                                            data-error="Please enter your subject"
                                            placeholder="Your subject"
                                            value={this.state.skill}
                                            name='skill'
                                            onChange={this.ChangeHandler}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required={true}
                                            data-error="Please enter your subject"
                                            placeholder="Your subject"
                                            value={this.state.address}
                                            name='address'
                                            onChange={this.ChangeHandler}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Biography / about </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows="4"
                                            required={true}
                                            data-error="Write your message"
                                            placeholder="Enter your message here..."
                                            value={this.state.bio}
                                            name='bio'
                                            onChange={this.ChangeHandler}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <label>Upload Profile Pic</label>
                                        {profileImage && profileImage.length > 0 && <div style={{ width: 120, height: 120, border: '1px solid', margin: 5 }}>
                                            <img src={profileImage} style={{ width: 120, height: 120 }} />
                                        </div>}
                                        <input required={profileImage && profileImage.length > 0 ?false:true} className="form-control" onChange={(e) => this.handleonChamhe(e)} label='sssss' type="file" />
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="default-button">
                                            Update
                                        </button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </form>

                            </div>
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
        user: state.Auth.user,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Update: (data) =>{dispatch(MainMiddleware.userUpdate(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);