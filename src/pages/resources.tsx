import "./resources.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaFile } from "react-icons/fa6";

const Resources = () => {
  return (
    <>
      <Navbar />
      <body>
      <div className="resources-hero">
              <h1>Browse Assets</h1>
            </div>
        <div className="container">
          <div className="resources-page">
            <div className="resources-main">


              <aside>
                <hr />
                {/* Categories */}
                <select
                  className="categories form-select form-select-lg mb-3"
                  aria-label="Large select example"
                >
                  <option value="0" selected>
                    <h6>Categories</h6>
                  </option>
                  <option value="1">Vector</option>
                  <option value="2">Photos</option>
                  <option value="3">Icons</option>
                  <option value="4">Templates</option>
                  <option value="5">Mockups</option>
                  <option value="6">Popular Logos</option>
                </select>

                <hr />
                {/* file type */}
                <select
                  className="file-type form-select form-select-lg mb-3"
                  aria-label="Large select example"
                >
                  <option value="0" selected>
                    <FaFile size="20px" />
                    File Type
                  </option>
                  <option value="1">.jpg</option>
                  <option value="2">.png</option>
                  <option value="3">.eps</option>
                  <option value="4">.svg</option>
                </select>

                <hr />
                {/* orientation */}
                <select
                  className="orientation form-select form-select-lg mb-3"
                  aria-label="Large select example"
                >
                  <option value="0" selected>
                    <h6>Orientation</h6>
                  </option>
                  <option value="1">Portrait</option>
                  <option value="2">Landscape</option>
                  <option value="3">Square</option>
                </select>
              </aside>

              {/* Gallery */}
              < div className="resources-gallery">
                <img src="images/r1.jpg" className="img-fluid item-1" />
                <img src="images/r2.jpg" className="img-fluid item-2" />
                <img src="images/r3.jpg" className="img-fluid item-3" />
                <img src="images/r4.jpg" className="img-fluid item-4" />
                <img src="images/r5.jpg" className="img-fluid item-5" />
                <img src="images/r6.jpg" className="img-fluid item-6" />
                <img src="images/r7.jpg" className="img-fluid item-7" />
                <img src="images/r8.jpg" className="img-fluid item-8" />
                <img src="images/r9.jpg" className="img-fluid item-9" />
                <img src="images/r10.jpg" className="img-fluid item-10" />
                <img src="images/r11.jpg" className="img-fluid item-11" />
                {/* <img src="images/r12.jpg" className="img-fluid item-12" /> */}
                <img src="images/r13.jpg" className="img-fluid item-13" />
                <img src="images/r14.jpg" className="img-fluid item-14" />
                <img src="images/r15.jpg" className="img-fluid item-15" />
                
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default Resources;
