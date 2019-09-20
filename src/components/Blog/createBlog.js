import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoSSR from "react-no-ssr";
import { Preloader, Placeholder } from "react-preloading-screen";
import ReactWOW from "react-wow";
import Loader from "../Shared/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Common/Footer";
import GoTop from "../Common/GoTop";

export default class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogText: "",
      show: false
    };
  }
  render() {
    const { blogText, show } = this.state;
    return (
      <NoSSR key="1">
        <section className="top-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="banner-title">Blog With Right Sidebar</h2>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Blog With Right Sidebar</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
        <div className="col-lg-8" style={{ zIndex: 10, padding: "30px" }}>
          <div id="blog" className="blog-details-section">
            <div className="form-group">
              <label>Create Blog</label>
              <textarea
                className="form-control"
                id="blogText"
                rows="4"
                // required={true}
                data-error="Write your message"
                placeholder="Enter your message here..."
                name="aboblogTextut"
                value={blogText}
                onChange={this.ChangeHandler}
              />
              <div className="help-block with-errors"></div>

              <div className="text-center" style={{padding: "30px"} }>
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
            </div>
          </div>
          </div>

        </div>
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />

        <Placeholder>
          <Loader />
        </Placeholder>
      </NoSSR>
    );
  }
}
