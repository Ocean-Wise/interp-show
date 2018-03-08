import React, { Component } from "react";
import Heading from "../../src/components/heading";
import { DefaultPlayer as Video } from 'react-html5video';
import '../../node_modules/react-html5video/dist/styles.css';

const videos = {
  hardy: require('./videos/babyOtter.mp4'),
  enrichment: require('./videos/enrichment.mp4'),
  rescue: require('./videos/slideshow.mp4'),
};

const images = {
  otter: require('./sea-otter-2.svg'),
  ball: require('./sea-otter-3.svg'),
  rescue: require('./rescue.svg'),
};
export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      src: "",
      showWally: false
    };
    this.reset = this.reset.bind(this);
    this.otter = this.otter.bind(this);
    this.kelpForest = this.kelpForest.bind(this);
    this.urchinsEating = this.urchinsEating.bind(this);
    this.otterEating = this.otterEating.bind(this);
    this.hardy = this.hardy.bind(this);
    this.enrichment = this.enrichment.bind(this);
    this.oil = this.oil.bind(this);
    this.wally = this.wally.bind(this);
    this.wallyVid = this.wallyVid.bind(this);
    this.rescue = this.rescue.bind(this);
  }
  reset() {
    this.setState({
      src: "",
      showWally: false
    });
    // console.log(this.state.src);
  }
  otter() {
    this.setState({
      src: videos.otter
    });
  }
  kelpForest() {
    this.setState({
      src: videos.kelpForest
    });
  }
  urchinsEating() {
    this.setState({
      src: videos.urchinsEating
    });
  }
  otterEating() {
    this.setState({
      src: videos.otterEating
    });
  }
  hardy() {
    this.setState({
      src: videos.hardy
    });
  }
  enrichment() {
    this.setState({
      src: videos.enrichment
    });
  }
  oil() {
    this.setState({
      src: videos.oil
    });
  }
  rescue() {
    this.setState({
      src: videos.rescue
    });
  }
  wally() {
    this.setState({
      src: "null",
      showWally: true
    });
  }
  wallyVid() {
    this.setState({
      src: videos.wally,
      showWally: false
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
      marginRight: 20
    };

    const imgStyle = {
      flexDirection: "row",
      width: "150%",
      position: "relative",
      right: "25%"
    };

    const wallyImages = (
      <div style={imgStyle}>
        <img src={images.surgery} />
        <img src={images.tube} />
      </div>
    );

    var wallyBlock = this.state.showWally ? wallyImages : null;

    var videoBlock = (
      this.state.src == "null" ?
      <div>
      {wallyBlock}
      <button style={styles} type="button" onClick={this.wallyVid}>Show Video</button>
    </div>
      :
      <div>
        <Video id="theVideo" autoPlay muted
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        >
              <source src={this.state.src} type="video/mp4" />
        </Video>
        <button style={styles} type="button" onClick={this.reset}>Close Video</button>
      </div>
    );

    const mainStyle = {
      position: "relative",
      bottom: 100
    }

    const credit = {
      color: "black",
      position: "absolute",
      bottom: -250,
      right: 1000,
      fontSize: "1rem"
    }

    const noDecoration = {
      textDecoration: "none",
      color: "black"
    }

    const hoverStyle = {
      cursor: "pointer",
      height: 250,
      width: 250,
      margin: "0px 45px"
    };

    return (
      <div style={this.state.src == "" || this.state.src == "null" || this.state.src == videos.oil ? mainStyle : null}>
      {this.state.src == "" ?
        <div>
          {/* <button style={styles} type="button" onClick={this.otter}>Otters</button> */}
          {/* <button style={styles} type="button" onClick={this.kelpForest}>Kelp Forest</button> */}
          {/* <button style={styles} type="button" onClick={this.urchinsEating}>Urchins Eating</button> */}
          <a onClick={this.hardy}><img style={hoverStyle} src={images.otter} alt="Hardy Profile"/></a>
          <a onClick={this.enrichment}><img style={hoverStyle} src={images.ball} alt="Enrichment"/></a>
          <a onClick={this.rescue}><img style={hoverStyle} src={images.rescue} alt="Otter Rescue"/></a>
          {/* <button style={styles} type="button" onClick={this.hardy}>Hardy Profile</button> */}
          {/* <button style={styles} type="button" onClick={this.otterEating}>Otter Eating</button> */}
          {/* <button style={styles} type="button" onClick={this.enrichment}>Enrichment</button> */}
          {/* <button style={styles} type="button" onClick={this.oil}>Oil Spill</button> */}
          {/* <button style={styles} type="button" onClick={this.wally}>Wally's Rescue</button> */}
          <div style={credit}>Icons made by <a style={noDecoration} href="http://www.freepik.com" title="Freepik">Freepik</a> from <a style={noDecoration} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a style={noDecoration} href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div> :
        videoBlock
        }

      </div>
    );
  }
}
