import React, { Component } from "react";
import Category from "../component/category.jsx";
import Hypersearch from "../component/hypersearch";
import Results from "../component/results.js";
import axios from "axios";
import "../component/styles/homestyles.css";
class Home extends Component {
  state = {
    R: null,
  };
  componentDidMount() {
    this.fecthReacentReacipes();
  }

  fecthReacentReacipes = () => {
    axios
      .get(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/TenLatest"
      )
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        this.setState({ R: res.data.data });
      });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.R ? (
          <section>
            <div
              className="result"
              style={{
                backgroundColor: "white",
                marginTop: "-25px",
                paddingTop: "10px",
              }}
            >
              <h2
                style={{
                  marginLeft: "30px",
                  fontSize: "30px",
                  transform: "translateY(15px)",
                }}
              >
                Recent Menu
              </h2>
              <div className="allResult">
                <Results
                  RSs={this.state.R}
                  SortBy={"Latest"}
                  words={["homeRecent"]}
                />
              </div>
            </div>
          </section>
        ) : null}

        <Category />
        <Hypersearch />
      </React.Fragment>
    );
  }
}

export default Home;
