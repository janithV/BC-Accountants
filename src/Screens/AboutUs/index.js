import { Link } from "react-router-dom";
import parallaxImage from "../../Assets/Images/parallaxImage.jpg";
import efficientImg from '../../Assets/Images/efficiency.png';
import lowcostImg from '../../Assets/Images/low-cost.png';
import qualityImg from '../../Assets/Images/quality.png';
import salaryImg from '../../Assets/Images/salary.png';
import adviceImg from '../../Assets/Images/advice.png'
import Banner2 from "../../components/Banner2";
const AboutUs = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center">
              <h1>
                  <div className="display-5 mb-5">
                    ABOUT US
                  </div>
                <div className="h5 text-mutes">
                  AUSTRALIA'S BEST ONLINE ACCOUNTANTS & RETURNS
                </div>
                <div className="h3">BC ACCOUNTANTS</div>
              </h1>
              <div className="mt-4">
                <p className="lead">
                  BC Accountants is Australia's most trusted online team of
                  accountants & tax agents. We invented online tax services and
                  since 1995 have evolved the largest range of web solutions for
                  thousands of people and business clients Australia-wide.
                </p>
                <p className="lead">
                  We are a modern firm with a friendly approach. Our priority is
                  to achieve faster, smarter and quality outcomes at efficent
                  cost. At the same time we have the professional experience and
                  technical expertise whenever you need it.
                  <b> Please be wary of immitators.</b>
                </p>
              </div>
              <div>
                <Link to="/contactus" className="btn btn-outline-primary display-4">CONTACT US</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <Banner2 image={parallaxImage} />
      </section>
      <section className="my-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="text-center ">
                    <h1 className="display-5">OUR FEATURES</h1>
                </div>
                <div className="col my-3">
                    <div class="card text-center border-primary">
                        <div className="">
                            <img src={efficientImg} class="card-img-top p3" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Efficient</h5>
                            <p class="card-text">Maximum efficiency for fast returns and reports.</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div class="card text-center border-primary">
                        <div className="">
                            <img src={lowcostImg} class="card-img-top p3" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Low Cost</h5>
                            <p class="card-text">Lowest cost at flat upfront rates.</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div class="card text-center border-primary">
                        <div className="">
                            <img src={qualityImg} class="card-img-top p3" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Quality</h5>
                            <p class="card-text">Quality returns and compliance to keep you safe.</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div class="card text-center border-primary">
                        <div className="">
                            <img src={salaryImg} class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Max Returns</h5>
                            <p class="card-text">Optimum tax outcomes and accountancy options.</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div class="card text-center border-primary">
                        <div className="">
                            <img src={adviceImg} class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Proper Advice</h5>
                            <p class="card-text">Online services & technical advice whenever needed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default AboutUs;
