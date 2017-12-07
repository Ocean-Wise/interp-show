import React from 'react';

import Otter from './otter/src';
import Presentation from './example/src';

export default class Selector extends React.Component {
  constructor() {
    super();
    this.state = {
      presentation: null
    };
    this.otter = this.otter.bind(this);
    this.example = this.example.bind(this);
  }
  otter() {
    this.setState({
      presentation: <Otter />
    });
  }
  example() {
    this.setState({
      presentation: <Presentation />
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

    const outer = {
      margin: "auto"
    }

    const inner = {
      margin: "auto",
      textAlign: "center",
      paddingTop: "18%"
    }

    return (
        <div style={outer}>
          {this.state.presentation == null ?
            <div style={inner}>
              <button style={styles} type="button" onClick={this.otter}>Otter Presentation</button><br />
              <button style={styles} type="button" onClick={this.example}>Example Presentation</button>
            </div> :
            this.state.presentation
          }
        </div>
    );
  }
}
