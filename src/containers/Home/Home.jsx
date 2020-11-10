import React, { Fragment } from "react";

// common components
// import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import TopHeader from "../../components/Header/TopHeader";

// css
import "./Home.scss";

const Home = (props) => {
  return (
    <Fragment>
      <TopHeader />
      <section id="home">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  
                    <Card>
                      <div className="header">Home</div>
                      <div className="balance mt_80 mb-5">
                        <h4>Welcome to dashboard</h4>
                      </div>
                    </Card>
                  
                </div>
              </div>
            </div>
            <div className="col-md-12 col-md-4"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
