import React from 'react';
import logo from './logo.svg';
import css from 'styled-jsx/css'
import './App.css';

import {CssReset, colors, spacers, theme, Button} from '@dhis2/ui-core';

import {Column, Line, PivotTable, SingleValue} from './assets/icons.js'

const BlockWrap = props => (
  <div class="block">
  {props.children}
  <style jsx>
    {`
      .block {
        background:${colors.white};
        padding: ${spacers.dp16} ${spacers.dp24};
        max-width:600px;
        box-sizing:border-box;
        color:${colors.grey900};
        font-family: Roboto;
        border-radius:5px;
        margin: 16px 0;
      }
      `}
  </style></div>

)

const BlockTitle = props => (
  <h3>
    {props.children}
    <style jsx>
      {`
        .block h3 {
          color:${colors.grey700};
          margin-top:0;
        }
        `}
    </style>
  </h3>
)

const GuideContent = () => (
  <>
  <ul class="guide">
  <li>All dimensions that you can use to build visualizations are shown in the left sidebar</li>
  <li>Add dimensions to the layout above</li>
  <li>Double click a dimension to add or remove items</li>
  <style jsx>
    {`
       ul.guide {
        list-style-position: outside;
        margin:0 0 0 12px ;
        padding:0;
      }

      ul.guide li {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.1px;
        margin-bottom:12px;
      }
      `}
  </style>
  </ul>
  </>
)

const MostViewedTable = props => (
  <div>
  {props.children}
  </div>
)

const RecentAO = props => (
  <li class='recent-ao'><a href="#">
  {props.icon}
  <span>{props.children}</span>
  </a>
  <style jsx>
    {`
       li.recent-ao {
        list-style: none;
        margin:0 0 12px 0 ;
        padding:0;
        font-size:14px;
        letter-spacing: 0.1px;
        line-height:16px;
      }
      .recent-ao svg {
        margin-right:${spacers.dp8};
      }
      .recent-ao a {
        color:${colors.grey900};
        text-decoration:none;
      }
      .recent-ao a:hover {
        text-decoration:underline;
      }
      `}
  </style>
  </li>
);

function App() {
  return (
    <>
    <div class="demo-wrap">
      <BlockWrap>
        <BlockTitle>Getting Started</BlockTitle>
        <GuideContent/>
      </BlockWrap>
      <BlockWrap>
        <BlockTitle>Most Viewed Charts and Tables</BlockTitle>
        <MostViewedTable>
          <RecentAO icon={<Column/>}>ANC: ANC 1 coverage all chiefdoms this year</RecentAO>
          <RecentAO icon={<Line/>}>ANC: ANC 3 coverage by districts last 4 quarters</RecentAO>
          <RecentAO icon={<SingleValue/>}>ANC: ANC 3 coverage this year</RecentAO>
          <RecentAO icon={<PivotTable/>}>Delivery: ANC coverage vs PHU delivery rate last year</RecentAO>
          <RecentAO icon={<Column/>}>Delivery: Births attended by skilled health personnel by orgunit last year</RecentAO>
          <RecentAO icon={<Column/>}>RCH: ANC-Delivery-Immunisation Yearly</RecentAO>
          <Button small secondary>See all visualizations</Button>
        </MostViewedTable>
      </BlockWrap>
    </div>
    </>
  );
}

export default App;
