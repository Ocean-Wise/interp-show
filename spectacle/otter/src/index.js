import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';

import { DefaultPlayer as Video } from 'react-html5video';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/oceanwise';

import Videos from '../assets/videos';

import DistMaps from '../assets/distmaps';
import KelpForest from '../assets/kelpforest';

import Selector from '../../selector';

require('normalize.css');
require('../../src/themes/oceanwise/index.css');

const images = {
  historical: require('../assets/historical.png'),
  remnant: require('../assets/remnant.png'),
  present: require('../assets/present.png')
};

const videos = {
  otter: require('../assets/otter.mp4'),
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

    return (
      <Deck transition={['zoom', 'slide']} theme={theme} progress="none" transitionDuration={500}>
        <Slide transition={['fade']} bgColor="primary" textFont="primary">
          {otterVideo}
        </Slide>
        <Slide transition={['zoom']} bgColor="primary" textFont="primary">
          <Heading size={1} caps fit textColor="black">
            Have you seen a wild sea otter?
          </Heading>
        </Slide>
        <Slide transition={['zoom']}>
          <List>
            <ListItem>Often people in BC <i>think</i> they have seen a sea otter but have instead seen river otters.</ListItem>
            <Appear><ListItem>There are many species of river otter all over the world but there is only one species of sea otter and they only live in one ocean in the world.</ListItem></Appear>
            <Appear><ListItem>Which ocean?</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textFont="primary">
          <DistMaps />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary" textFont="primay">
          {otterVideo}
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textFont="primary">
          <Heading size={1} caps textColor="black">Fur trade</Heading>
          <List>
            <Appear><ListItem>Densest fur in the animal kingdom</ListItem></Appear>
            <Appear><ListItem>Guard hairs versus under fur</ListItem></Appear>
            <Appear><ListItem>Loose fur, to enable grooming</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textFont="primary">
          <DistMaps />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary" textFont="primay">
          <Videos/>
        </Slide>
        {/* <Slide transition={['slide']}>
          <Heading size={1} caps fit textColor="black">Role in the Ecosystem</Heading>
          <KelpForest />
        </Slide> */}
        <Slide transition={['scale']}>
          <Heading size={2} caps textColor="black">Who do we have at the aquarium?</Heading>
          <List>
            <Appear><ListItem>Tanu</ListItem></Appear>
            <Appear><ListItem>Katmai</ListItem></Appear>
            <Appear><ListItem>Rialto</ListItem></Appear>
            <Appear><ListItem>Kunik</ListItem></Appear>
            <Appear><ListItem>Mak</ListItem></Appear>
            <Appear><ListItem>Hardy</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2} caps textColor="black">How you can help</Heading>
          <List>
            <Appear><ListItem>Use environmentally friendly cleaners</ListItem></Appear>
            <Appear><ListItem>Don't approach sea otters out in the ocean</ListItem></Appear>
            <Appear><ListItem>Continue to redure your need for petroleum products as that has contributed to their decline in the past</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['scale']}>
          <a style={styles} href="../">Back to Presentations</a>
        </Slide>
      </Deck>
    );
  }
}
