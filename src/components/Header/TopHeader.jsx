import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

// service
import LocalStorageService from "../../services/LocalStorageService";

// css
import "./Header.scss";

class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignOut = () => {
    LocalStorageService.clearAll();
    this.props.history.push("/");
  };

  render() {
    return (
      <Fragment>
        <div id="ss_top_header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="ss_logo_item center_me_tb">
                  <h4>LOGO</h4>
                </div>
              </div>

              <div className="col-md-4">
                <div className="center_me_end header_height">
                  <div className="mr-4">
                    <div className="user_name pr-4">{"John Doe"}</div>
                  </div>

                  <div className="dropdown mr-3" id="userMenu">
                    <div data-toggle="dropdown" id="dropDownMenuUser" className="ss_cursor">
                      <i
                        className="fa fa-user-circle-o"
                        aria-hidden="true"
                        style={{ color: "#fff", fontSize: "28px" }}
                      ></i>
                    </div>
                    <ul
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropDownMenuUser"
                    >
                      <li className="dropdown-item icon_list">
                        <div className="ss_cursor" onClick={this.handleSignOut}>
                          <i
                            className="fa fa-sign-out"
                            aria-hidden="true"
                            style={{ fontSize: "18px" }}
                          ></i>
                          <span>Sign out</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(TopHeader);
