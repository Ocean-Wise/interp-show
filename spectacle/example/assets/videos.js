import React, { Component } from "react";
import Heading from "../../src/components/heading";
import { DefaultPlayer as Video } from 'react-html5video';
import '../../node_modules/react-html5video/dist/styles.css';

const videos = {
  mellotron: require('./mellotron.mp4'),
  montyPython: require('./montyPython.mp4')
};

export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      src: ""
    };
    this.reset = this.reset.bind(this);
    this.musicVideo = this.musicVideo.bind(this);
    this.montyPython = this.montyPython.bind(this);
  }
  reset() {
    this.setState({
      src: ""
    });
    console.log(this.state.src);
  }
  musicVideo() {
    this.setState({
      src: videos.mellotron
    });
  }
  montyPython() {
    this.setState({
      src: videos.montyPython
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
          <button style={styles} type="button" onClick={this.musicVideo}>Mellotron</button>
          <button style={styles} type="button" onClick={this.montyPython}>Monty Python</button>
        </div> :
        <div>
          <Video id="theVideo" autoPlay muted
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
