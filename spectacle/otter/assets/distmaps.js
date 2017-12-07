import React, { Component } from "react";
import { Heading, Image, Text } from "../../src";

const images = {
  historical: require('./historical.png'),
  remnant: require('./remnant.png'),
  present: require('./present.png')
};

export default class DistMaps extends Component {
  constructor() {
    super();
    this.state = {
      src: ""
    };
    this.reset = this.reset.bind(this);
    this.historical = this.historical.bind(this);
    this.remnant = this.remnant.bind(this);
    this.present = this.present.bind(this);
  }
  reset() {
    this.setState({
      src: "",
      name: ""
    });
  }
  historical() {
    this.setState({
      src: images.historical,
      name: "Historical Range &mdash; Pre 1700's"
    });
  }
  remnant() {
    this.setState({
      src: images.remnant,
      name: "Remnant Colonies &mdash; Mid 1700 to Early 1900"
    });
  }
  present() {
    this.setState({
      src: images.present,
      name: "Present Range -- 1989 to Present"
    });
  }

  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em",
      fontFamily: "Roboto"
    };

    return (
      <div>
      {this.state.src == "" ?
        <div>
          <button style={styles} type="button" onClick={this.historical}>Historical</button><br/>
          <button style={styles} type="button" onClick={this.remnant}>Remnant</button><br/>
          <button style={styles} type="button" onClick={this.present}>Present</button>
        </div> :
        <div>
          <Text textSize="1.5em"  margin="20px 0px 0px" bold textColor="black">{this.state.name}</Text>
          <Image src={this.state.src} />
          <button style={styles} type="button" onClick={this.reset}>Back</button>
        </div>
        }
      </div>
    );
  }
}
