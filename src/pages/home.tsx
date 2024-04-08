import "./home.css";

import HeroImg from "../Images/hero-img.png";

// Components
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { MdAccountCircle } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero">
              <div className="hero-text">
                <h1>
                  Amplifying <span>Creativity</span> by <br /> Building Better
                  Designs Together
                </h1>
                <p>
                  Join our design community: where ideas and <br />
                  creative minds unite to make awesome designs
                </p>
                <a href="/signup" className="cta">
                  Get Started
                </a>
              </div>
              <div className="hero-image">
                <img src={HeroImg} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks */}
        <section className="top-picks">
          <div className="container">
            <div className="section">
              <div className="section-titles">
                <h6 className="section-sub-heading">TOP PICKS</h6>
                <h3 className="section-heading">
                  Explore our Curated Selection of Creative <br /> Inspirations
                </h3>
              </div>

              <div className="cards">
                {/* card 1 */}
                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/1.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Arc Designs</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img src="images/2.jpg" alt="Image" className="img-fluid" />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>K Images</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img src="images/3.jpg" alt="Image" className="img-fluid" />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Best Arts</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img src="images/4.jpg" alt="Image" className="img-fluid" />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      8 <p>R Creations</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>
              </div>
              {/* end of cards */}
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="listings">
          <div className="container">
            <div className="section">
              <div className="section-titles">
                <h6 className="section-sub-heading">LISTINGS</h6>
                <h3 className="section-heading">Explore Exciting Designs</h3>
              </div>

              <div className="cards">
                {/* card 1 */}
                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/5.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Arc Designs</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/6.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>K Images</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/7.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Best Arts</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/8.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>R Creations</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/9.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Design Dazzle</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/10.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Pixel Perfect</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/11.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Vivid Vision</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/12.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>ArtZest</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/13.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>ArtNook</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/14.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Design Duos</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/15.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Best Arts</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/16.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>InkCraft</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/17.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Craft Coves</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/18.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>StyleSpot</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/1.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Arc Designs</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src={"images/20.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-description">
                    <div className="owner">
                      <span>
                        <MdAccountCircle size="25px" />
                      </span>{" "}
                      <p>Pixel Pops</p>{" "}
                    </div>
                    <div className="download">
                      <IoMdDownload size="20px" />
                    </div>
                  </div>
                </div>
              </div>

              {/* end of cards */}
              <a href="#" className="cta">
                See more design
              </a>
            </div>
          </div>
        </section>

        {/*Resources */}
        <section className="resources">
          <div className="container">
            <div className="section">
              <div className="section-titles">
                <h6 className="section-sub-heading">RESOURCES</h6>
                <h3 className="section-heading">
                  Unleashing Creative Potential Through
                  <br /> Resourceful Designs
                </h3>
              </div>
              <div className="resources-types">
                <div className="photos object-fit-cover border rounded">
                  <a href="#">
                    <h3>Photos</h3>
                  </a>
                </div>
                <div className="vectors object-fit-cover border rounded">
                  <a href="#">
                    <h3>Vectors</h3>
                  </a>
                </div>
                <div className="templates object-fit-cover border rounded">
                  <a href="#">
                    <h3>Templates</h3>
                  </a>
                </div>
                <div className="fonts  object-fit-cover border rounded">
                  {" "}
                  <a href="#">
                    <h3>Fonts</h3>
                  </a>
                </div>
                <div className="mockups  object-fit-cover border rounded">
                  <a href="#">
                    <h3>Mockups</h3>
                  </a>
                </div>
                <div className="popular-logos  object-fit-cover border rounded">
                  <a href="#">
                    <h3>Popular Logos</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits" id="benefits">
          <div className="container">
            <div className="section">
              <div className="section-titles">
                <h6 className="section-sub-heading">BENEFITS</h6>
                <h3 className="section-heading">
                  Unlocking Creative Potential for Success
                </h3>
              </div>

              <div className="benefits-content">
                <div className="benefit">
                  <div className="icon"></div>
                  <h6>
                    Resource <br /> Abundance
                  </h6>
                  <p>
                    Access to a vast array of design <br /> elements such as
                    vectors, <br />
                    icons, and templates to
                    <br /> enrich your creative projects
                  </p>
                </div>

                <div className="benefit">
                  <div className="icon"></div>
                  <h6>
                    Monetization <br /> Opportunities
                  </h6>
                  <p>
                    Seamlessly monetize your <br />
                    creative efforts by selling
                    <br /> your artworks and design
                    <br /> resources on the platform
                  </p>
                </div>

                <div className="benefit">
                  <div className="icon"></div>
                  <h6>
                    Collaborative <br /> Environment
                  </h6>
                  <p>
                    Engage with a vibrant <br />
                    community of fellow <br />
                    designers for inspirations, <br />
                    feedback, and collaboration
                  </p>
                </div>

                <div className="benefit">
                  <div className="icon"></div>
                  <h6>
                    Streamlined <br /> Workflow
                  </h6>
                  <p>
                    Enjoy a user-friendly platform
                    <br /> that simplifies process of <br />
                    discovering, purchasing and
                    <br /> using design resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sell Your Content */}
        <section className="content-sale">
          <div className="container">
            <div className="section">
              <div className="section-titles">
                <h3 className="section-heading">Sell Your Creative Content</h3>
              </div>
              <p>
                Join our platform and turn your creative passion into profit by
                selling your original <br /> artwork, design resources and
                digital assets
              </p>

              <a href="/sign-up" className="cta">
                Get Started
              </a>

              <div className="resources-types"></div>
            </div>
          </div>
        </section>

        {/* How To sell */}
        <section>
          <div className="container">
            <div className="how-to-sell">
              <h3 className="section-heading">How to Sell</h3>
              <div className="sale-process">
                <div className="process">
                  <div className="process-1">
                    <h5 className="section-sub-heading">1. Create Account</h5>
                    <p>
                      Sign up for free and set <br /> your profile showcasing{" "}
                      <br /> your portfolio and expertise
                    </p>
                  </div>
                  <div className="process-2">
                    <h5 className="section-sub-heading">2. Upload Content</h5>
                    <p>
                      Easily upload yor designs <br /> using our intuitive
                      listing
                      <br />
                      tools
                    </p>
                  </div>
                  <div className="process-3">
                    <h5 className="section-sub-heading">3. Set Price</h5>
                    <p>
                      Choose your desired price <br /> strategy and set the
                      price <br /> for your content
                    </p>
                  </div>
                </div>
                <div className="process-img">
                  <img
                    src={"images/how-to-sell-img.png"}
                    alt=""
                    className="process-img"
                  />
                </div>
                <div className="process">
                  <div className="process-4">
                    <h5 className="section-sub-heading">4. Publish</h5>
                    <p>
                      Once your content is live, <br />
                      promote it to your audience <br />
                      and leverage our platforms <br /> marketing channels to
                      reach <br /> potential buyers
                    </p>
                  </div>
                  <div className="process-5">
                    <h5 className="section-sub-heading">5. Earn</h5>
                    <p>
                      Start earning revenue with <br /> every sale made with
                      secure <br /> payment processing and <br /> hassle-free
                      transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
