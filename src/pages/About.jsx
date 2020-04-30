import React, { Component } from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
export class About extends Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <List>
          Hello my name is Jiachen Zhang, I am a Sophomore in UCSB majoring in
          &nbsp;
          <Link href="https://www.ce.ucsb.edu">computer engineering.</Link>
        </List>
      </div>
    );
  }
}
export default About;
