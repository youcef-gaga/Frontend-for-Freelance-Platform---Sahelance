/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Divider,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";
import { FaPenNib } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sectionStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/sahelance_files/slider-banner.png)`,
};
export default function Home() {
  const navigate = useNavigate();
  const gotoRegistration = () => {
    window.scroll(0, 0);
    navigate("/register");
  };
  const gotoJobOffers = () => {
    window.scroll(0, 0);
    navigate("/offers");
  };
  const gotoJobRequests = () => {
    window.scroll(0, 0);
    navigate("/requests");
  };
  return (
    <>
      <section id="hero-main" style={sectionStyle} className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row text-center text-lg-start text-md-start">
                <div className="col-lg-9 col-md-9 slider-column">
                  <h4 className="small-head-hero">
                    {" "}
                    We Are Creative Agency
                    <span className="circle-one-start "></span>
                  </h4>
                </div>
                <div className="col-lg-3 col-md-3 ps-0">
                  <ul className="bullets pt-4 ">
                    <li className="circle-one rounded-circle pink-bg"></li>
                    <li className="circle-two rounded-circle"></li>
                    <li className="circle-three rounded-circle"></li>
                  </ul>
                </div>
              </div>
              <div className="main-slider_heading text-center text-lg-start text-md-start">
                <h6 className="section-small-title mb-0 mb-lg-0 mb-md-0 big-head-hero py-3">
                  We Have 1000+{" "}
                  <span className="small_inner purple-text d-block">
                    Freelancers
                  </span>
                </h6>
                <p className="para-hero  py-lg-3 py-md-2 py-1">
                  Find Freelancers with original profile, better reviews,
                </p>
                <p className="para-hero">
                  Great skills and with a empathetic mind with best offers.
                </p>
              </div>
              <div className="serach_outer mt-0 pt-0 pt-lg-5 pt-md-4 mt-lg-5 mt-md-4">
                <div className="serach_inner search_popup w-100 pt-4 pt-lg-0 pt-md-0">
                  <form
                    role="search"
                    method="get"
                    className="mt-2 search-form serach-page d-table d-lg-inline d-md-inline border-0 serch-ui"
                    action="#"
                  >
                    <label>
                      <input
                        type="search"
                        className="search-field border-top-0 border-start-0 border-end-0 w-100 "
                        placeholder='     Try  "Web Designing"'
                        name="s"
                      />
                      <span className="screen-reader-text">search label</span>
                    </label>
                    <button
                      type="submit"
                      className="search-submit pink-bg border-0 position-absolute search-headers"
                    >
                      <a href="#">
                        <p className="para-hero text-white btn-searchs pb-0">
                          Search
                        </p>
                      </a>
                      <span className="screen-reader-text">search button</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
            <div className="row">
              <div className="col-lg-8 col-md-8"></div>
              <div className="col-lg-4 col-md-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "#6102d3" }}
        id="counter"
        className="py-5 mt-lg-5 pt-lg-5 pt-md-2 pb-0 pb-lg-5 pb-md-2"
      >
        <div className="container">
          <div
            className="row aos-init"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="four col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box d-block text-center">
                <span className="count">53</span>{" "}
                <span className="text-white fw-bold counter-k">K</span>
                <h6 className="py-3">Happy Customer</h6>
              </div>
            </div>
            <div className="four col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box d-block text-center">
                <span className="count">10</span>{" "}
                <span className="text-white fw-bold counter-k">K</span>
                <h6 className="py-3">Layout Done</h6>
              </div>
            </div>
            <div className="four col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box d-block text-center">
                <span className="count">30</span>{" "}
                <span className="text-white fw-bold counter-k">K</span>
                <h6 className="py-3">Get Award</h6>
              </div>
            </div>
            <div className="four col-lg-3 col-md-3 col-sm-12">
              <div className="counter-box d-block text-center">
                <span className="count">120</span>{" "}
                <span className="text-white fw-bold counter-k">K</span>
                <h6 className="py-3">Project Done</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <h5 className="text-center">
        <span className="count"></span>
        <i aria-hidden="true"></i>
        <div className="container">
          <div className="cat-div">
            <h3 className="text-center main-heading fw-bold">
              Trending Top Categories
            </h3>
            <p className="text-dark text-center pb-3">
              Largest globally spread network of talented people in Algeria{" "}
            </p>
          </div>
        </div>
      </h5>
      <div className="container">
        <div className="row cat-row ">
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory1">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category7.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Business</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">8 Listings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory2">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category2.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Digital Marketing</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">8 Listings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory3">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category8.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Ecommerce</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">10 Listings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory4">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category3.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Fashion</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">9 Listings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory5">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category1.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Graphics &amp; Design</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">6 Listings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory6">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category5.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Music &amp; Audio</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">7 Listings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory7">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category6.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Programming &amp; Tech</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">8 Listings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 category-row bordercategory8">
            <div className="view-section mt-4">
              <p className="text-white px-2 py-2 rounded-pill">0</p>
            </div>
            <div className="text-center py-5 my-4">
              <img
                className="d-block m-auto mt-3"
                src="./sahelance_files/category4.png"
              />
              <h4 className="py-4">
                {" "}
                <a href="#">Video &amp; Animation</a>{" "}
              </h4>

              <p className="p-2 btn btn-5 mt-2">10 Listings</p>
            </div>
          </div>
        </div>
      </div>
       <div className="container aos-init" data-aos="fade-up"
               data-aos-duration="2000">
               <div className="trend-head">
                  <h3 className="text-center main-heading fw-bold"></h3>
               </div>
               <div className="products custom_items ml-0">
                  <div className="row">

                     <div className="product-box  col-lg-4  col-md-6 mt-5">
                        <div className="inner_product card card-product ">
                           <div className="product-thumb">
                              <img width="405" height="260"
                                 src="./sahelance_files/product-img3-7.png"
                                 className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                 decoding="async"/> </div>
                           <div className="row hover-diaplay-one px-3">
                              <div className="col-md-12">
                                 <p className="no-reviews"><i
                                       className="fa fa-star text-pink"></i> No
                                    Reviews</p>
                              </div>
                           </div>
                           <div className="product-text px-3">
                              <h5 className="product_head pt-4">
                                 <a
                                    href="http://localhost/sahelance/trendingservices/website-link-building-and-traffic-generat-8/">
                                    Website Link Building And Traffic Generat…</a>
                                 <div className="hr-top"></div>
                              </h5>
                              <div className="col-lg-12 starting-price">
                                 <div className="row">
                                    <div className="col-lg-4 pe-0 pt-3 start">
                                       <p className="mb-0">Starting From</p>
                                    </div>
                                    <div className="col-lg-6 pt-3 pt-lg-3 pt-md-3">
                                       <p className="strting-box-price text-pink">$980.00</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="row hover-diaplay-two d-none">
                                 <div className="col-md-12 show p-0">
                                 </div>
                                 <div className="col-md-12 show p-0 scam">
                                    <p className="para1">Starting From</p>
                                    <p className="strting-box-price text-pink para2">$980.00</p>
                                 </div>
                                 <div className="col-md-12 ">
                                    <p className="no-reviews"><i
                                          className="fa fa-star text-pink"></i> No
                                       Reviews</p>
                                 </div>
                              </div>
                           </div>
                           <hr className="hr-trend"/>
                           <div className="col-md-12 author-images-author">

                              <span className=" start-img">
                                 <img src="http://localhost/sahelance/"
                                    className="free-img"/>
                              </span>
                              <span className="author-image">
                                 <img className="aothor-img"
                                    src="./sahelance_files/img18.png"/></span>
                           </div>
                           <div className="px-3 order dsa row">
                              <div className="col-md-6">
                                 <p className="strting-box-price">0 Order in Queue</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="product-box  col-lg-4  col-md-6 mt-5">
                        <div className="inner_product card card-product ">
                           <div className="product-thumb">
                              <img width="405" height="260"
                                 src="./sahelance_files/product-img4-6.png"
                                 className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                  decoding="async"/> </div>
                           <div className="row hover-diaplay-one px-3">
                              <div className="col-md-12">
                    <p className="no-reviews">
                      <i className="fa fa-star text-pink"></i> No Reviews</p>
                              </div>
                           </div>
                           <div className="product-text px-3">
                              <h5 className="product_head pt-4">
                                 <a
                                    href="http://localhost/sahelance/trendingservices/website-link-building-and-traffic-generat-9/">
                                    Website Link Building And Traffic Generat…</a>
                                 <div className="hr-top"></div>
                              </h5>
                              <div className="col-lg-12 starting-price">
                                 <div className="row">
                                    <div className="col-lg-4 pe-0 pt-3 start">
                                       <p className="mb-0">Starting From</p>
                                    </div>
                                    <div className="col-lg-6 pt-3 pt-lg-3 pt-md-3">
                                       <p className="strting-box-price text-pink">$300.00</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="row hover-diaplay-two d-none">
                                 <div className="col-md-12 show p-0">
                                 </div>
                                 <div className="col-md-12 show p-0 scam">
                                    <p className="para1">Starting From</p>
                                    <p className="strting-box-price text-pink para2">$300.00</p>
                                 </div>
                                 <div className="col-md-12 ">
                                    <p className="no-reviews"><i
                                          className="fa fa-star text-pink"></i> No
                                       Reviews</p>
                                 </div>
                              </div>
                           </div>
                           <hr className="hr-trend"/>
                           <div className="col-md-12 author-images-author">

                              <span className=" start-img">
                                 <img src="http://localhost/sahelance/" 
                                    className="free-img"/>
                              </span>
                              <span className="author-image">
                                 <img className="aothor-img"
                                    src="./sahelance_files/img19.png"/></span>
                           </div>
                           <div className="px-3 order dsa row">
                              <div className="col-md-6">
                                 <p className="strting-box-price">0 Order in Queue</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="product-box  col-lg-4  col-md-6 mt-5">
                        <div className="inner_product card card-product ">
                           <div className="product-thumb">
                              <img width="405" height="260"
                                 src="./sahelance_files/product-img20.png"
                                 className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                  decoding="async"/> </div>
                           <div className="row hover-diaplay-one px-3">
                              <div className="col-md-12">
                                 <p className="no-reviews"><i
                                       className="fa fa-star text-pink"></i> No
                                    Reviews</p>
                              </div>
                           </div>
                           <div className="product-text px-3">
                              <h5 className="product_head pt-4">
                                 <a
                                    href="http://localhost/sahelance/trendingservices/i-will-be-your-social-media-marketing-ma-6/">
                                    I Will Be Your Social Media Marketing Ma…</a>
                                 <div className="hr-top"></div>
                              </h5>
                              <div className="col-lg-12 starting-price">
                                 <div className="row">
                                    <div className="col-lg-4 pe-0 pt-3 start">
                                       <p className="mb-0">Starting From</p>
                                    </div>
                                    <div className="col-lg-6 pt-3 pt-lg-3 pt-md-3">
                                       <p className="strting-box-price text-pink">$400.00</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="row hover-diaplay-two d-none">
                                 <div className="col-md-12 show p-0">
                                 </div>
                                 <div className="col-md-12 show p-0 scam">
                                    <p className="para1">Starting From</p>
                                    <p className="strting-box-price text-pink para2">$400.00</p>
                                 </div>
                                 <div className="col-md-12 ">
                                    <p className="no-reviews"><i
                                          className="fa fa-star text-pink"></i> No
                                       Reviews</p>
                                 </div>
                              </div>
                           </div>
                           <hr className="hr-trend"/>
                           <div className="col-md-12 author-images-author">

                              <span className=" start-img">
                                 <img src="http://localhost/sahelance/" 
                                    className="free-img"/>
                              </span>
                              <span className="author-image">
                                 <img className="aothor-img"
                                    src="./sahelance_files/img9.png"/></span>
                           </div>
                           <div className="px-3 order dsa row">
                              <div className="col-md-6">
                                 <p className="strting-box-price">0 Order in Queue</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container py-3">
               <h2 className="text-center pb-3"> We Made It Very Simple </h2>
               <p></p>
               <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 mt-3 mt-lg-0 mt-md-0">
                     <div className="simple-position mb-5">

                        <img className="img-fluid img-back"
                           src="./sahelance_files/circle1.png" />
                        <div className="line-dotted">
                           <img className="img-fluid img-front"
                              src="./sahelance_files/image1.png" />
                           <img className="img-fluid img-line"
                              src="./sahelance_files/Line1.png" />
                           <div className="sim-post">
                              <a href="http://localhost/sahelance/#"><button
                                    className="mb-3 mb-lg-0 mb-md-0 btn btn-steps btn-step-colr1">
                                    Step 1 </button></a>
                              <div className="text-feature text-center  pt-lg-0">
                                 <h1 className="feature-title  text-dark  mb-0">
                                    Post an order </h1>
                                 <p className="feature-text pb-lg-0 mb-md-0 pb-4">
                                    Access the 10M+ freelancers </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 mt-3 mt-lg-0 mt-md-0">
                     <div className="simple-position mb-5">

                        <img className="img-fluid img-back"
                           src="./sahelance_files/circle2.png" />
                        <div className="line-dotted">
                           <img className="img-fluid img-front"
                              src="./sahelance_files/image2.png" />
                           <img className="img-fluid img-line"
                              src="./sahelance_files/Line2.png" />
                           <div className="sim-post">
                              <a href="http://localhost/sahelance/#"><button
                                    className="mb-3 mb-lg-0 mb-md-0 btn btn-steps btn-step-colr2">
                                    Step 2 </button></a>
                              <div className="text-feature text-center  pt-lg-0">
                                 <h1 className="feature-title  text-dark  mb-0"> Get
                                    onboard quickly </h1>
                                 <p className="feature-text pb-lg-0 mb-md-0 pb-4">
                                    Collaborate one to one </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 mt-3 mt-lg-0 mt-md-0">
                     <div className="simple-position mb-5">

                        <img className="img-fluid img-back"
                           src="./sahelance_files/circle3.png" />
                        <div className="line-dotted">
                           <img className="img-fluid img-front"
                              src="./sahelance_files/image3.png" />
                           <img className="img-fluid img-line"
                              src="./sahelance_files/Line3.png" />
                           <div className="sim-post">
                              <a href="http://localhost/sahelance/#"><button
                                    className="mb-3 mb-lg-0 mb-md-0 btn btn-steps btn-step-colr3">
                                    Step 3 </button></a>
                              <div className="text-feature text-center  pt-lg-0">
                                 <h1 className="feature-title  text-dark  mb-0">
                                    Payment guranteed </h1>
                                 <p className="feature-text pb-lg-0 mb-md-0 pb-4">
                                    Get your payment &amp; repeat </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
      </div>
      <section></section>
    </>
  );
}

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
