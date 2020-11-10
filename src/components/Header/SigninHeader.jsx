import React, { Fragment } from "react";

// css
import "./SigninHeader.scss";

const SigninHeader = (props) => {
  return (
    <Fragment>
      <div id="ss_sign_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="ss_logo_item center_me_tb">
                <h4>LOGO</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SigninHeader;
