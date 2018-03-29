import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
require('./modal-video.css');

const images = {
  kelp: require('./coral.svg'),
  urchin: require('./sea-urchin.svg'),
  otter: require('./sea-otter-2.svg'),
};

export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      src: '',
    };
    this.reset = this.reset.bind(this);
    this.kelpForest = this.kelpForest.bind(this);
    this.urchinsEating = this.urchinsEating.bind(this);
    this.otterEating = this.otterEating.bind(this);
  }
  reset() {
    this.setState({
      src: '',
    });
  }
  kelpForest() {
    this.setState({
      src: 'o_7W3qQx4ts'
    });
  }
  urchinsEating() {
    this.setState({
      src: 'EHCp6FE9LZ4'
    });
  }
  otterEating() {
    this.setState({
      src: 'hhJHb7zkvqo'
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

    const mainStyle = {
      position: 'relative',
      bottom: 0
    };

    const hoverStyle = {
      cursor: 'pointer',
      height: 250,
      width: 250,
      margin: '0px 45px'
    };


    return (
      <div style={this.state.src === '' || this.state.src === 'null' ? mainStyle : null}>
        <div>
          <a onClick={this.kelpForest}><img style={hoverStyle} src={images.kelp} alt="Kelp"/></a>
          <a onClick={this.urchinsEating}><img style={hoverStyle} src={images.urchin} alt="Urchin Eating"/></a>
          <a onClick={this.otterEating}><img style={hoverStyle} src={images.otter} alt="Otter Eating"/></a>
        </div>
        <ModalVideo channel="youtube" isOpen={this.state.src !== ''} videoId={this.state.src} onClose={() => this.setState({ src: '' })} />
      </div>
    );
  }
}
