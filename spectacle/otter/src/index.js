import React from 'react';
import YouTube from 'react-youtube';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/oceanwise';

import Videos1 from '../assets/videos1';
import Videos2 from '../assets/videos2';

import DistMaps from '../assets/distmaps';
import KelpForest from '../assets/kelpforest';

import Selector from '../../selector';

require('normalize.css');
require('../../src/themes/oceanwise/index.css');

const images = {
  historical: require('../assets/historical.png'),
  remnant: require('../assets/remnant.png'),
  present: require('../assets/present.png'),
  kelp: require('../assets/background.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: '#005EB8',
  secondary: '#64A5C3',
  tertiary: '#6B7B83',
  quarternary: '#00B398'
});

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
  fontFamily: "Roboto",
  textDecoration: "none"
};

export default class Otter extends React.Component {

  _onEnd(evt) {
    console.log('ended');
    evt.target.playVideo();
  }


  render() {
    const opts = {
      height: '690',
      width: '1280',
      playerVars: {
        autoplay: 1,
        loop: 1,
      },
    };

    return (
      <Deck transition={['fade', 'slide']} theme={theme} progress="none" contentHeight={1000} contentWidth={1300} transitionDuration={500}>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} textFont="primary">
          <YouTube
            videoId={'kWMI1Lq-eMk'}
            opts={opts}
            onEnd={this._onEnd}
          />
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} textFont="primary">
          <DistMaps />
        </Slide>
        {/* <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primay">
          {kelpVideo}
        </Slide> */}
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} textFont="primay">
          <Videos1/>
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} textFont="primay">
          <Videos2/>
        </Slide>
        {/* <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primary">
          <Heading size={2} caps textColor="black">Meet the Otters</Heading>
          {meetOtters}
        </Slide> */}
        <Slide transition={['scale']}>
          <a style={styles} href="../">Back to Presentations</a>
        </Slide>
      </Deck>
    );
  }
}
