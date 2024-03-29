import { Link } from "react-router-dom";
import NoSSR from "react-no-ssr";
import { Preloader, Placeholder } from "react-preloading-screen";
import Loader from "../Shared/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Common/Footer";
import GoTop from "../Common/GoTop";
import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthMiddleware, MainMiddleware } from "../../store/middlewares";

class Details extends React.Component {
  state = {
    details: {}
  };

  componentWillReceiveProps(nextProps) {
    const abc = nextProps && nextProps.adds;
    console.log(abc, "nextProps")

    for (var property in abc) {
      if (abc.hasOwnProperty(property)) {
        console.log(abc[property]);
        const detailsObject = abc[property];
        this.setState({
          details: {...detailsObject}
        });
      }
    }
  }

  render() {
    const details = this.state && this.state.details;
    const user = details && details.user;
    return (
      <NoSSR key="1">
        {/* <Preloader fadeDuration={1000}>
                    <Navigation /> */}

        <section className="top-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="banner-title">... Details</h2>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Add Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-details-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="blog-sidebar">
                  <div
                    className="testimonial-item"
                    style={{
                      zIndex: 10,
                      background: "rgb(52, 228, 229)",
                      minHeight: 220
                    }}
                  >
                    <div
                      className="testimonial-content"
                      style={{ zIndex: 10, background: "rgb(52, 228, 229)" }}
                    >
                      <div className="pic">
                        <img
                          src={require("../../images/client/1.png")}
                          alt="client Image"
                        />
                      </div>

                      <h3 className="title">{user && user.Name}</h3>
                      <span className="post">{user && user.skills}</span>
                      <div className="post-containre" style={{ padding: 15 }}>
                        <span className="post">
                          Email &nbsp;&nbsp;:&nbsp;&nbsp; {user && user.email}
                        </span>
                        <span className="post">
                          Phone :&nbsp;&nbsp; {user && user.number}
                        </span>
                        <span className="post">
                          Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 23
                        </span>
                        <span className="post">Live in :&nbsp;&nbsp;{user && user.address}</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post"></div>
                  <h4 className="blog-sidebar-title">Post Details</h4>
                  <div className="post-containre">
                    <span className="about-post">Floors :&nbsp;&nbsp; 12</span>
                    <span className="about-post">
                      Room &nbsp;:&nbsp;&nbsp; {details && details.rooms}
                    </span>
                    <span className="about-post">
                      Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;400$
                    </span>
                  </div>
                  {/* <div className="single-recent-post"> 
                                                <Link href="#">
                                                    <a>
                                                        <img src={require("../../images/blog/recent-post-1.jpg")} alt="blog" />
                                                    </a>
                                                </Link>
                                                <h5>
                                                    <Link href="#">
                                                        <a>How to customize HeroApp</a>
                                                    </Link>
                                                </h5>
                                                <p>Mar 21, 2019</p>
                                            </div>
                                            <div className="single-recent-post"> 
                                                <Link href="#">
                                                    <a>
                                                        <img src={require("../../images/blog/recent-post-2.jpg")} alt="blog" />
                                                    </a>
                                                </Link>
                                                <h5>
                                                    <Link href="#">
                                                        <a>Awesome app landing page</a>
                                                    </Link>
                                                </h5>
                                                <p>Mar 22, 2019</p>
                                            </div>
                                            <div className="single-recent-post"> 
                                                <Link href="#">
                                                    <a>
                                                        <img src={require("../../images/blog/recent-post-3.jpg")} alt="blog" />
                                                    </a>
                                                </Link>
                                                <h5><a href="#">Eu bibendum dictum ipsum vivamus nostra lectus</a></h5>
                                                <p>Mar 23, 2019</p>
                                            </div> */}
                  {/* <div className="post-category">
                                            <h4 className="blog-sidebar-title">Category</h4>
                                            <Link href="#">
                                                <a className="single-category">Android <span>(05)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Mobile App <span>(05)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Photography <span>(01)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">IOS <span>(08)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Latest App <span>(08)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Technology <span>(02)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Lifestyle <span>(04)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Trending Post <span>(07)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Videos <span>(03)</span></a> 
                                            </Link>
                                        </div>
                                        
                                        <div className="popular-tags">
                                            <h4 className="blog-sidebar-title">Popular Tags</h4>
                                            <Link href="#">
                                                <a>Android</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Mobile App</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Photography</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>IOS</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Latest App</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Technology</a>
                                            </Link>
                                            <Link href="#">
                                                <a>Lifestyle</a> 
                                            </Link> 
                                            <Link href="#">
                                                <a>Trending Post</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Videos</a>
                                            </Link>
                                        </div>
                                    </div> */}
                </div>
              </div>

              <div className="col-md-8 col-lg-8">
                <div className="single-blog-details">
                  <div className="single-blog-img">
                    <img src={user &&  user.profileImage} alt="blog" />
                    <div className="single-blog-date">30 Mar, 2019</div>
                  </div>
                  <h3 className="single-blog-title">
                    Awesome app landing page
                  </h3>
                  <div className="single-post-admin">
                    By <a href="#">admin</a> / <a href="#">12</a> Comments
                  </div>
                  <div className="details-text-area">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?
                    </p>
                    <p>
                      Nulla dapibus dui placerat nisl non dis rhoncus cum. Dui
                      pharetra faucibus sed sed sapien eget vestibulum ante.
                      Hendrerit magna dis sagittis risus. Penatibus cubilia
                      vivamus accumsan aenean Montes aliquet neque parturient.
                      Feugiat vehicula. Risus, curae; nunc inceptos integer
                      penatibus sollicitudin est. Dictumst dui enim proin
                      ridiculus venenatis. Praesent pulvinar Nisl habitant nisl
                      sed gravida venenatis Ac metus id nullam dignissim nam
                      nisl. Aenean platea auctor fringilla. Porttitor elit
                      curabitur vel praesent et orci purus rhoncus eros inceptos
                      et ad torquent, conubia suscipit amet felis bibendum
                      vulputate. Sapien proin, primis.
                    </p>
                  </div>
                  <div className="post-tag-media">
                    <div className="row">
                      <div className="col-md-8">
                        <ul className="tag">
                          <li>
                            <span>Tags :</span>
                          </li>
                          <li>
                            <Link href="#">
                              <a>{user && user.tag}</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <div className="post-social-media">
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
                              <i className="icofont-google-plus"></i>
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
                </div>

                <div className="all-comments-content">
                  <h4 className="comment-title">Comments (03)</h4>
                  <div className="comment mb-50">
                    <img
                      src={require("../../images/blog/comment-person1.jpg")}
                      alt="blog"
                    />
                    <div className="comment-details">
                      <h5>
                        Jonson Smith <span>20 Mar 2019 at 11.00 AM</span>
                      </h5>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                      <Link href="#">
                        <a className="replay">
                          <i className="icofont-reply"></i> Replay
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="comment mb-50 reply-comment">
                    <img
                      src={require("../../images/blog/comment-person2.jpg")}
                      alt="blog"
                    />
                    <div className="comment-details reply-comment-details">
                      <h5>
                        Jonson Smith <span>20 Mar 2019 at 11.00 AM</span>
                      </h5>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                      <Link href="#">
                        <a className="replay">
                          <i className="icofont-reply"></i> Replay
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="comment">
                    <img
                      src={require("../../images/blog/comment-person3.jpg")}
                      alt="blog"
                    />
                    <div className="comment-details">
                      <h5>
                        Jonson Smith <span>20 Mar 2019 at 11.00 AM</span>
                      </h5>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                      <Link href="#">
                        <a className="replay">
                          <i className="icofont-reply"></i> Replay
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comment-form">
                  <h4 className="comment-title">Post Your Comment</h4>
                  <form method="post" action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                          required={true}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          required={true}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          className="form-control"
                          id="website_url"
                          name="website_url"
                          placeholder="Website URL"
                          type="text"
                          required={true}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          className="form-control"
                          rows="5"
                          id="message"
                          name="message"
                          placeholder="Type Comments..."
                          required={true}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="text-center">
                          <button type="submit" className="default-button">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    Buttons: state.Main.Buttons,
    Text: state.Main.Text,
    adds: state.Main.addpost
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ChangeText: () => console.log("call"),
    getPost: () => {
      dispatch(MainMiddleware.GetAdds());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
