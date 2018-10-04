import React from 'react'

import Header from '../components/Header';
import Menu from '../components/Menu';
import Modalbox from '../components/ModalBox';


const Gerenciar = (props) => (<div>

  <Header />
  <Menu />

  <section className="newsfeed">
    <div className="container">

      <div className="row one-row">
        <div className="col-lg-12">
          <a href="/"><h4>See All</h4></a>
        </div>
      </div>

      <div className="row top-row">

        <div className="col-lg-3">
          <div className="tr-section">
            <div className="tr-post">
              <div className="entry-header">
                <div className="entry-thumbnail">
                  <a href="/"><img className="img-fluid" src="assets/img/posts/30.jpg" alt="Image1" /></a>
                </div>
              </div>
              <div className="post-content">
                <div className="author-post text-center">
                  <a href="/"><img className="img-fluid rounded-circle" src="assets/img/users/2.jpg" alt="Image2" /></a>
                </div>
                <div className="card-content">
                  <h4>Alex Grantte</h4>
                  <span>@alex</span>
                </div>
                <a href="/" className="kafe-btn kafe-btn-mint-small full-width"> Follow
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="tr-section">
            <div className="tr-post">
              <div className="entry-header">
                <div className="entry-thumbnail">
                  <a href="/"><img className="img-fluid" src="assets/img/posts/27.jpg" alt="Image3" /></a>
                </div>
              </div>
              <div className="post-content">
                <div className="author-post text-center">
                  <a href="/"><img className="img-fluid rounded-circle" src="assets/img/users/3.jpg" alt="Image4" /></a>
                </div>
                <div className="card-content">
                  <h4>Anna Morgan</h4>
                  <span>@anna</span>
                </div>
                <a href="/" className="kafe-btn kafe-btn-mint-small full-width"> Follow
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="tr-section">
            <div className="tr-post">
              <div className="entry-header">
                <div className="entry-thumbnail">
                  <a href="/"><img className="img-fluid" src="assets/img/posts/28.jpg" alt="Image5" /></a>
                </div>
              </div>
              <div className="post-content">
                <div className="author-post text-center">
                  <a href="/"><img className="img-fluid rounded-circle" src="assets/img/users/6.jpg" alt="Image6" /></a>
                </div>
                <div className="card-content">
                  <h4>Sean Coleman</h4>
                  <span>@sean</span>
                </div>
                <a href="/" className="kafe-btn kafe-btn-mint-small full-width"> Follow
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="tr-section">
            <div className="tr-post">
              <div className="entry-header">
                <div className="entry-thumbnail">
                  <a href="/"><img className="img-fluid" src="assets/img/posts/31.jpg" alt="Image7" /></a>
                </div>
              </div>
              <div className="post-content">
                <div className="author-post text-center">
                  <a href="/"><img className="img-fluid rounded-circle" src="assets/img/users/15.jpg" alt="Image8" /></a>
                </div>
                <div className="card-content">
                  <h4>Vanessa Wells</h4>
                  <span>@vanessa</span>
                </div>
                <a href="/" className="kafe-btn kafe-btn-mint-small full-width"> Follow
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="row one-row">
        <div className="col-lg-12">
          <h4>Explore Section</h4>
        </div>
      </div>

      <div className="row">

        <Modalbox />

        <Modalbox />

        <Modalbox />



      </div>

      <div className="row">


        <Modalbox />

        <Modalbox />

        <Modalbox />


      </div>

      <div className="row">


        <Modalbox />

        <Modalbox />

        <Modalbox />


      </div>

    </div>
  </section>


  <div id="myModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">

          <div className="row">

            <div className="col-md-8 modal-image">
              <img className="img-responsive" src="assets/img/posts/6.jpg" alt="Image9" />
            </div>
            <div className="col-md-4 modal-meta">
              <div className="modal-meta-top">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  <span aria-hidden="true">×</span><span className="sr-only">Close</span>
                </button>
                <div className="img-poster clearfix">
                  <a href="/"><img className="img-responsive img-circle" src="assets/img/users/18.jpg" alt="Image10" /></a>
                  <strong><a href="/">Benjamin</a></strong>
                  <span>12 minutes ago</span><br />
                  <a href="/" className="kafe kafe-btn-mint-small"><i className="fa fa-check-square"></i> Following</a>
                </div>

                <ul className="img-comment-list">
                  <li>
                    <div className="comment-img">
                      <img src="assets/img/users/17.jpeg" className="img-responsive img-circle" alt="Image11" />
                    </div>
                    <div className="comment-text">
                      <strong><a href="/">Anthony McCartney</a></strong>
                      <p>Hello this is a test comment.</p> <span className="date sub-text">on December 5th, 2016</span>
                    </div>
                  </li>
                  <li>
                    <div className="comment-img">
                      <img src="assets/img/users/15.jpg" className="img-responsive img-circle" alt="Image12" />
                    </div>
                    <div className="comment-text">
                      <strong><a href="/">Vanessa Wells</a></strong>
                      <p>Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p> <span>on December 5th, 2016</span>
                    </div>
                  </li>
                  <li>
                    <div className="comment-img">
                      <img src="assets/img/users/14.jpg" className="img-responsive img-circle" alt="Image13" />
                    </div>
                    <div className="comment-text">
                      <strong><a href="/">Sean Coleman</a></strong>
                      <p className="">Hello this is a test comment.</p> <span className="date sub-text">on December 5th, 2016</span>
                    </div>
                  </li>
                  <li>
                    <div className="comment-img">
                      <img src="assets/img/users/13.jpeg" className="img-responsive img-circle" alt="Image14" />
                    </div>
                    <div className="comment-text">
                      <strong><a href="/">Anna Morgan</a></strong>
                      <p className="">Hello this is a test comment.</p> <span className="date sub-text">on December 5th, 2016</span>
                    </div>
                  </li>
                  <li>
                    <div className="comment-img">
                      <img src="assets/img/users/3.jpg" className="img-responsive img-circle" alt="Image15" />
                    </div>
                    <div className="comment-text">
                      <strong><a href="/">Allison Fowler</a></strong>
                      <p className="">Hello this is a test comment.</p> <span className="date sub-text">on December 5th, 2016</span>
                    </div>
                  </li>
                </ul>

                <div className="modal-meta-bottom">
                  <ul>
                    <li><a className="modal-like" href="/"><i className="fa fa-heart"></i></a><span className="modal-one"> 786,286</span> |
                      <a className="modal-comment" href="/"><i className="fa fa-comments"></i></a><span> 786,286</span> </li>
                    <li>
                      <span className="thumb-xs">
                        <img className="img-responsive img-circle" src="assets/img/users/13.jpeg" alt="Image16" />
                      </span>
                      <div className="comment-body">
                        <input className="form-control input-sm" type="text" placeholder="Write your comment..." />
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>)
export default Gerenciar