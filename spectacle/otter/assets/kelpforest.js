import React, { Component } from "react";
import Heading from "../../src/components/heading";
import { DefaultPlayer as Video } from 'react-html5video';
import '../../node_modules/react-html5video/dist/styles.css';

const videos = {
  kelpForest: require('./kelpForest.mp4'),
};

export default class KelpForest extends Component {
  constructor() {
    super();
    this.state = {
      src: ""
    };
    this.reset = this.reset.bind(this);
    this.kelpForest = this.kelpForest.bind(this);
  }
  reset() {
    this.setState({
      src: ""
    });
  }
  kelpForest() {
    this.setState({
      src: videos.kelpForest
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
      fontSize: "2em"
    };

    return (
      <div>
      {this.state.src == "" ?
        <div>
          <button style={styles} type="button" onClick={this.kelpForest}>Play Video</button>
        </div> :
        <div>
          <Video id="theVideo" autoPlay muted loop
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          >
                <source src={this.state.src} type="video/mp4" />
          </Video>
          <button style={styles} type="button" onClick={this.reset}>Close Video</button>
        </div>
        }
      </div>
    );
  }
}
