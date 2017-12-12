import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';

import { DefaultPlayer as Video } from 'react-html5video';

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
  kelp: require('../assets/kelp.jpg'),
};

const videos = {
  otter: require('../assets/otter.mp4'),
  meetOtters: require('../assets/interpVids/meetOtters.mp4'),
  kelp: require('../assets/kelpForest.mp4'),
  slideshow: require('../assets/rescueSlideshow.mp4'),
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


  render() {

    var otterVideo =  (<Video id="theVideo" autoPlay loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                        <source src={videos.otter} type="video/mp4" />
                      </Video>);

    var kelpVideo = (<Video id="theVideo" autoPlay loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                        <source src={videos.kelp} type="video/mp4" />
                     </Video>);

    var meetOtters =  (<Video id="theVideo" autoPlay loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                        <source src={videos.meetOtters} type="video/mp4" />
                      </Video>);

    var rescueVideo = (<Video id="theVideo" autoPlay loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                        <source src={videos.slideshow} type="video/mp4" />
                      </Video>);

    return (
      <Deck transition={['fade', 'slide']} theme={theme} progress="none" contentHeight="1000" contentWidth="1300" transitionDuration={500}>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primary">
          {otterVideo}
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primary">
          <DistMaps />
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primay">
          {kelpVideo}
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primay">
          <Videos1/>
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primay">
          <Videos2/>
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primary">
          <Heading size={2} caps textColor="black">Meet the Otters</Heading>
          {meetOtters}
        </Slide>
        <Slide transition={['fade']} bgImage={images.kelp.replace('/', '')} bgDarken="0.65" textFont="primary">
          {rescueVideo}
        </Slide>
        {/* <Slide transition={['slide']}>
          <Heading size={2} caps textColor="black">How you can help</Heading>
          <List>
            <Appear><ListItem>Use environmentally friendly cleaners</ListItem></Appear>
            <Appear><ListItem>Don't approach sea otters out in the ocean</ListItem></Appear>
            <Appear><ListItem>Continue to redure your need for petroleum products as that has contributed to their decline in the past</ListItem></Appear>
          </List>
        </Slide> */}
        <Slide transition={['scale']}>
          <a style={styles} href="../">Back to Presentations</a>
        </Slide>
      </Deck>
    );
  }
}
