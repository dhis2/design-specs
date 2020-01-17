import React from 'react';
import './dv-start-screen.css';

import {Button} from "@dhis2/ui-core";

import { Column, Line, PivotTable, SingleValue } from "../assets/icons.js";



const BlockWrap = props => (
  <div class="block">
    {props.children}
  </div>
);

const BlockTitle = props => (
  <h3>
    {props.children}
  </h3>
);

const GuideContent = () => (
  <>
    <ul class="guide">
      <li>
        All dimensions that you can use to build visualizations are shown in the
        left sidebar
      </li>
      <li>Add dimensions to the layout above</li>
      <li>Double click a dimension to add or remove items</li>
    </ul>
  </>
);

const MostViewedTable = props => <div>{props.children}</div>;

const RecentAO = props => (
  <li class="recent-ao">
    <a href="#">
      {props.icon}
      <span>{props.children}</span>
    </a>
  </li>
);


export default function DvStartScreen() {
  return (
    <>
    <div class="demo-wrap">
      <BlockWrap>
        <BlockTitle>Getting Started</BlockTitle>
        <GuideContent />
      </BlockWrap>
      <BlockWrap>
        <BlockTitle>Most Viewed Charts and Tables</BlockTitle>
        <MostViewedTable>
          <RecentAO icon={<Column />}>
            ANC: ANC 1 coverage all chiefdoms this year
          </RecentAO>
          <RecentAO icon={<Line />}>
            ANC: ANC 3 coverage by districts last 4 quarters
          </RecentAO>
          <RecentAO icon={<SingleValue />}>
            ANC: ANC 3 coverage this year
          </RecentAO>
          <RecentAO icon={<PivotTable />}>
            Delivery: ANC coverage vs PHU delivery rate last year
          </RecentAO>
          <RecentAO icon={<Column />}>
            Delivery: Births attended by skilled health personnel by orgunit
            last year
          </RecentAO>
          <RecentAO icon={<Column />}>
            RCH: ANC-Delivery-Immunisation Yearly
          </RecentAO>
          <Button small secondary>
            See all visualizations
          </Button>
        </MostViewedTable>
      </BlockWrap>
    </div>
    </>
  );
}
