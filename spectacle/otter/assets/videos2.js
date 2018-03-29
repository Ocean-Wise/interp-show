import React, { Component } from "react";
import ModalVideo from 'react-modal-video';
require('./modal-video.css');

const images = {
  otter: require('./sea-otter-1.svg'),
  ball: require('./toy.png'),
  rescue: require('./rescue.svg'),
};
export default class Videos extends Component {
  constructor() {
    super();
    this.state = {
      src: '',
    };

    this.hardy = this.hardy.bind(this);
    this.enrichment = this.enrichment.bind(this);
    this.rescue = this.rescue.bind(this);
  }
  reset() {
    this.setState({
      src: '',
    });
  }
  hardy() {
    this.setState({
      src: 'mnogeIQjqqo'
    });
  }
  enrichment() {
    this.setState({
      src: 'kmCDN7W68dY'
    });
  }
  rescue() {
    this.setState({
      src: 'nuMg7X_RVAg'
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
      position: "relative",
      bottom: 0
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
      <div style={this.state.src === '' || this.state.src === 'null' ? mainStyle : null}>
        <div>
          <a onClick={this.hardy}><img style={hoverStyle} src={images.otter} alt="Hardy Profile"/></a>
          <a onClick={this.rescue}><img style={hoverStyle} src={images.rescue} alt="Otter Rescue"/></a>
          <a onClick={this.enrichment}><img style={hoverStyle} src={images.ball} alt="Enrichment"/></a>
        </div>
        <ModalVideo channel="youtube" isOpen={this.state.src !== ''} videoId={this.state.src} onClose={() => this.setState({ src: '' })} />
      </div>
    );
  }
}
