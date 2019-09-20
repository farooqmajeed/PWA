import OwlCarousel from "react-owl-carousel3";
import React, { Component } from "react";
import Uploader from "./Uploader";
import NoImage from "../../images/NoImage.jpg";
import { connect } from "react-redux";
import { MainMiddleware, AuthMiddleware } from "../../store/middlewares";
import MaunMiddleware from "../../store/middlewares/MainMiddleware";
import LinearProgress from "@material-ui/core/LinearProgress";

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
    }
  }
};

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      imagesPreviewUrls: [],
      title: "",
      type: "",
      slogan: "",
      rooms: "",
      BathRoom: "",
      price: "",
      country: "",
      city: "",
      areaCode: "",
      address: "",
      about: "",
      question: "",
      email: "",
      number: "",
      show: false,
      completed: 0
    };
  }
  componentWillReceiveProps = newProps => {
    const { uploaded } = newProps;
    if (
      uploaded.length === this.state.files.length &&
      this.state.files.length !== 0 &&
      this.state.completed === 0
    ) {
      this.props.showMessage({
        message: "Content Uploaded now you can able to post your add"
      });
      this.setState({ show: false, completed: 100 });
    }
  };
  getUploadContent = (file, reader) => {
    this.props.UploadFB(file);
    this.setState(prevState => ({
      files: [...prevState.files, file],
      imagesPreviewUrls: [...prevState.imagesPreviewUrls, reader]
    }));
    this.setState({ show: true, completed: 0 });
  };
  ChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { Auth, uploaded } = this.props;
    var user = Auth.user;
    const {
      title,
      type,
      slogan,
      rooms,
      BathRoom,
      price,
      country,
      city,
      areaCode,
      address,
      about,
      question,
      email,
      number
    } = this.state;
    let data = {
      images: uploaded,
      title,
      type,
      slogan,
      rooms,
      BathRoom,
      price,
      country,
      city,
      areaCode,
      address,
      about,
      question,
      email,
      number,
      user
    };
    this.props.Addpost(data);
  };
  render() {
    const {
      files,
      completed,
      show,
      imagesPreviewUrls,
      title,
      type,
      slogan,
      rooms,
      BathRoom,
      price,
      country,
      city,
      areaCode,
      address,
      about,
      question,
      email,
      number
    } = this.state;

    console.log("Add state", this.state)
    return (
      <section id="testimonial" className="testimonial-section ">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4" style={{ zIndex: 10 }}>
              <div className="contact-form">
                <h4>Post will be like this</h4>
                <div className="single-feature">
                  <div className="feature-icon">
                    <OwlCarousel
                      className="testimonial-carousel owl-carousel owl-theme"
                      {...options}
                    >
                      {imagesPreviewUrls && imagesPreviewUrls.length > 0 ? (
                        imagesPreviewUrls.map((imagePreviewUrl, i) => {
                          if (imagePreviewUrl.includes(":video/")) {
                            return (
                              <video
                                className="feature-icon"
                                src={imagePreviewUrl}
                                height="60px !important"
                                loop
                                autoPlay
                              ></video>
                            );
                          } else {
                            return (
                              <img
                                className="feature-icon"
                                src={imagePreviewUrl}
                                height="60px !important"
                              />
                            );
                          }
                        })
                      ) : (
                        <img className="feature-icon" src={NoImage} />
                      )}
                    </OwlCarousel>
                    <div className="post-profile">
                      <img
                        src={require("../../images/client/1.png")}
                        alt="client Image"
                        height="60px !important"
                      />
                    </div>
                  </div>
                  <h4>{title}</h4>
                  <p className="post-discription">{slogan} aa</p>
                  <div className="post-containre">
                    <span className="about-post">
                      Owner :&nbsp;&nbsp; Alisa Match
                    </span>
                    <span className="about-post">
                      Room &nbsp;:&nbsp;&nbsp; {rooms}
                    </span>
                    <span className="about-post">
                      Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{price}
                    </span>
                  </div>
                  <div
                    className="default-button"
                    style={{ height: 30, paddingTop: 5, cursor: "pointer" }}
                  >
                    {/* <i className="icofont-cloud-download"></i>  */}
                    view
                  </div>
                </div>
                {/* <i className="icofont-quote-left"></i>
                                <p className="description">
                                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.</q>
                                </p>
                                <div className="testimonial-content">
                                    <div className="pic">
                                        <img src={require("../../images/client/1.png")} alt="client Image" />
                                    </div>
                                    <h3 className="title">Tareq</h3>
                                    <span className="post">UI / UX Designer</span>
                                </div> */}
              </div>
            </div>
            <div className="col-lg-8" style={{ zIndex: 10 }}>
              <div className="contact-form">
                <form id="contactForm" onSubmit={e => this.handleSubmit(e)}>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="form-group">
                        <label>House Name / Title</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter your House title"
                          placeholder="Your Post Title"
                          name="title"
                          value={title}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>Hosue For</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter hosue for rent / sale"
                          placeholder="Type"
                          name="type"
                          value={type}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Contact Number</label>
                        <input
                          type="number"
                          className="form-control"
                          // required={true}
                          data-error="Please enter your Number"
                          placeholder="Your Number"
                          name="number"
                          value={number}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          // required={true}
                          data-error="Please enter Email"
                          placeholder="Email"
                          name="email"
                          value={email}
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
                      // required={true}
                      data-error="Please enter  Slogan / Tag line"
                      placeholder="Slogan / Tag line"
                      value={slogan}
                      name="slogan"
                      onChange={this.ChangeHandler}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>Rooms</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter Rooms"
                          placeholder="Rooms in number"
                          name="rooms"
                          value={rooms}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>BathRooms</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter BathRooms"
                          placeholder="Your House BathRooms"
                          name="BathRoom"
                          value={BathRoom}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter Price"
                          placeholder="Price"
                          name="price"
                          value={price}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter Country"
                          placeholder="Country"
                          name="country"
                          value={country}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter City"
                          placeholder="City"
                          name="city"
                          value={city}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>Zip / Postal code</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter your Zip / Postal code"
                          placeholder="Zip / Postal code"
                          name="areaCode"
                          value={areaCode}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Line Address / Area</label>
                    <input
                      type="text"
                      className="form-control"
                      // required={true}
                      data-error="Please enter your Address"
                      placeholder="Your Address"
                      name="address"
                      value={address}
                      onChange={this.ChangeHandler}
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group">
                    <label>About House</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      // required={true}
                      data-error="Write your message"
                      placeholder="Enter your message here..."
                      name="about"
                      value={about}
                      onChange={this.ChangeHandler}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <label>Requirements / any Question?</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="2"
                      data-error="Write your Requirements / any Question?"
                      placeholder="Enter your Requirements /  Question here..."
                      name="question"
                      value={question}
                      onChange={this.ChangeHandler}
                    />
                    <div className="help-block with-errors">Optional</div>
                  </div>
                  <Uploader getUploadContent={this.getUploadContent} />
                  {files.length > 0 && (
                    <LinearProgress
                      variant={completed === 100 ? "determinate" : "query"}
                      value={this.state.completed}
                    />
                  )}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="default-button"
                      disabled={show}
                    >
                      {show ? "Please wait Content is uploading" : "Create Add"}
                      {/* <i className="icofont-arrow-right"></i> */}
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                  {/* {this.successMessage()} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    uploaded: state.Main.uploaded,
    Auth: state.Auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Addpost: data => {
      dispatch(MaunMiddleware.Addpost(data));
    },
    UploadFB: files => {
      dispatch(MaunMiddleware.UploadDoc(files));
    },
    showMessage: dta => {
      dispatch(AuthMiddleware.ShowMessage(dta));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);
