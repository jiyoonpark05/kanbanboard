import React, { Component } from "react";
import ProjectItems from "./projects/projectItems";
import CreateProjectButton from "./projects/CreateProjectButton";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton/>
              <br />
              <hr />
              <ProjectItems />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
