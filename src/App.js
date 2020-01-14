import React from 'react';
import logo from './logo.svg';
import './App.css';

import {CssReset, CssVariables, Button, Card} from '@dhis2/ui-core';
import {ThreeDots, SpeechBubble} from './assets/icons.js';
import {DevExample} from './assets/DevExample.js';

const DashboardItem = props => (
  <Card>
    <ItemWrap>
      <MetaWrap>
        <Title>{props.title}</Title>
        <ItemActions/>
      </MetaWrap>
      <ItemContent>{props.children}</ItemContent>
  </ItemWrap>
  </Card>
)

const ItemWrap = props => (
  <div class="item-wrap">
    {props.children}
  </div>
)

const MetaWrap = props => (
  <div class="item-meta-wrap">
    {props.children}
  </div>
)

const Title = props => (
  <p class='item-title'>{props.children}</p>
)

const ItemActions = props => (
  <div class='item-actions-wrap'>
    <Button small secondary><SpeechBubble/></Button>
    <Button small secondary><ThreeDots/></Button>
  </div>
)

const ItemContent = props => (
  <div class='item-content-wrap'>
    {props.children}
  </div>
)

function App() {
  return (
    <>
    <CssReset/>
    <CssVariables colors spacers />

    <DevExample title="Short title">
      <DashboardItem title="Malaria Cases 2019">
        <DemoItem/>
      </DashboardItem>
    </DevExample>

    <DevExample title="Stacked long title">
      <DashboardItem title="Immunization: Penta 3 Coverage, Measles, BCG, Yellow Fever across all Chiefdoms last six-months in user organisation units">
        <DemoItem/>
      </DashboardItem>
    </DevExample>


    <DevExample title="Stacked long title in a narrow item">
      <NarrowWrap>
      <DashboardItem title="Immunization: Penta 3 Coverage, Measles, BCG, Yellow Fever across all Chiefdoms last six-months in user organisation units">
        <DemoItem/>
      </DashboardItem>
      </NarrowWrap>
    </DevExample>

    </>
  );
}

// dev only
const DemoItem = () => (
  <div class="demo-item">Map/Chart/Table</div>
)

const NarrowWrap = props => (
  <div class="narrow-wrap">{props.children}</div>
)

export default App;
