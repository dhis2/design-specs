import React from "react";
import "./pt-old-styles.css";
import "./pt-new-styles.css";

import {} from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";
import {} from "../assets/icons.js";

const CurrentPT = props => (
  <>
    <div class="pivot-table-container">{props.children}</div>
  </>
);

const UpdatedPT = props => (
  <>
    <div class="pivot-table-container-new">{props.children}</div>
  </>
);

export default function SpecPTStyle() {
  return (
    <>
      <DevExample title="Current Styles: Simple Table" width="960px">
        <CurrentPT>
          <SimpleTable />
        </CurrentPT>
      </DevExample>
      <DevExample title="Updated Styles: Simple Table" width="960px">
        <UpdatedPT>
          <SimpleTable />
        </UpdatedPT>
      </DevExample>

      <DevExample title="Current Styles: Double Row Table" width="960px">
        <CurrentPT>
          <TableTwoRows />
        </CurrentPT>
      </DevExample>
      <DevExample title="Updated Styles: Double Row Table" width="960px">
        <UpdatedPT>
          <TableTwoRows />
        </UpdatedPT>
      </DevExample>
    </>
  );
}

const SimpleTable = () => (
  <>
    <table>
      <thead class="jsx-145996384">
        <tr>
          <th colspan="1" class="jsx-1998007459 empty-header row-header"></th>
          <th colspan="2" class="jsx-1998007459 col-header">
            Average age of deaths
          </th>
          <th colspan="2" class="jsx-1998007459 empty-header"></th>
        </tr>
        <tr>
          <th colspan="1" class="jsx-1998007459 empty-header row-header"></th>
          <th colspan="1" class="jsx-1998007459 col-header">
            Bo
          </th>
          <th colspan="1" class="jsx-1998007459 col-header">
            Bombali
          </th>
          <th colspan="1" class="jsx-1998007459 empty-header"></th>
          <th colspan="1" class="jsx-1998007459 empty-header">
            TOTAL
          </th>
        </tr>
      </thead>
      <tbody class="jsx-145996384">
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            February 2019
          </td>
          <td class="jsx-1998007459 value">42.6</td>
          <td class="jsx-1998007459 value">45.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            March 2019
          </td>
          <td class="jsx-1998007459 value">43.3</td>
          <td class="jsx-1998007459 value">40.9</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            April 2019
          </td>
          <td class="jsx-1998007459 value">43.3</td>
          <td class="jsx-1998007459 value">44.1</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            May 2019
          </td>
          <td class="jsx-1998007459 value">42.1</td>
          <td class="jsx-1998007459 value">41.1</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            June 2019
          </td>
          <td class="jsx-1998007459 value">42.7</td>
          <td class="jsx-1998007459 value">36.7</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            July 2019
          </td>
          <td class="jsx-1998007459 value">44.4</td>
          <td class="jsx-1998007459 value">52.2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            August 2019
          </td>
          <td class="jsx-1998007459 value">47.5</td>
          <td class="jsx-1998007459 value">40.3</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            September 2019
          </td>
          <td class="jsx-1998007459 value">42.2</td>
          <td class="jsx-1998007459 value">38.7</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            October 2019
          </td>
          <td class="jsx-1998007459 value">41.6</td>
          <td class="jsx-1998007459 value">43.5</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            November 2019
          </td>
          <td class="jsx-1998007459 value">50.1</td>
          <td class="jsx-1998007459 value">41.6</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            December 2019
          </td>
          <td class="jsx-1998007459 value">41.7</td>
          <td class="jsx-1998007459 value">44.6</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            January 2020
          </td>
          <td class="jsx-1998007459 value">43.6</td>
          <td class="jsx-1998007459 value">40.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr cell-type="total-row">
          <td rowspan="1" class="jsx-1998007459 empty-header">
            TOTAL
          </td>
          <td class="jsx-1998007459 total">12</td>
          <td class="jsx-1998007459 total">12</td>
          <td class="jsx-1998007459 total"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
      </tbody>
    </table>
  </>
);

const TableTwoRows = () => (
  <>
    <table class="jsx-145996384">
      <thead class="jsx-145996384">
        <tr>
          <th colspan="2" class="jsx-1998007459 empty-header row-header"></th>
          <th colspan="2" class="jsx-1998007459 col-header">
            Average age of deaths
          </th>
          <th colspan="2" class="jsx-1998007459 empty-header"></th>
        </tr>
        <tr>
          <th colspan="2" class="jsx-1998007459 empty-header row-header"></th>
          <th colspan="1" class="jsx-1998007459 col-header">
            Bo
          </th>
          <th colspan="1" class="jsx-1998007459 col-header">
            Bombali
          </th>
          <th colspan="1" class="jsx-1998007459 empty-header"></th>
          <th colspan="1" class="jsx-1998007459 empty-header">
            TOTAL
          </th>
        </tr>
      </thead>
      <tbody class="jsx-145996384">
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            February 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">41.9</td>
          <td class="jsx-1998007459 value">47.1</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">16.0</td>
          <td class="jsx-1998007459 value">49.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            March 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">42.9</td>
          <td class="jsx-1998007459 value">42.1</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">38.3</td>
          <td class="jsx-1998007459 value">31.5</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            April 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">40.6</td>
          <td class="jsx-1998007459 value">47.2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">52.0</td>
          <td class="jsx-1998007459 value">13.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            May 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">41.6</td>
          <td class="jsx-1998007459 value">42.1</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">21.7</td>
          <td class="jsx-1998007459 value">51.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            June 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">43.3</td>
          <td class="jsx-1998007459 value">35.9</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">55.0</td>
          <td class="jsx-1998007459 value">44.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            July 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">44.1</td>
          <td class="jsx-1998007459 value">54.5</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">54.0</td>
          <td class="jsx-1998007459 value">57.5</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            August 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">47.6</td>
          <td class="jsx-1998007459 value">40.7</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">24.0</td>
          <td class="jsx-1998007459 value">44.8</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            September 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">42.7</td>
          <td class="jsx-1998007459 value">40.7</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">20.8</td>
          <td class="jsx-1998007459 value">19.5</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            October 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">42.2</td>
          <td class="jsx-1998007459 value">42.1</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">54.4</td>
          <td class="jsx-1998007459 value">33.5</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            November 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">40.3</td>
          <td class="jsx-1998007459 value">42.5</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">56.8</td>
          <td class="jsx-1998007459 value">37.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            December 2019
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">41.9</td>
          <td class="jsx-1998007459 value">42.1</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">16.0</td>
          <td class="jsx-1998007459 value">45.4</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 row-header">
            January 2020
          </td>
          <td rowspan="1" class="jsx-1998007459 row-header">
            MCHP
          </td>
          <td class="jsx-1998007459 value">44.8</td>
          <td class="jsx-1998007459 value">38.0</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="1" class="jsx-1998007459 row-header">
            Hospital
          </td>
          <td class="jsx-1998007459 value">40.8</td>
          <td class="jsx-1998007459 value">59.3</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 total">2</td>
        </tr>
        <tr>
          <td rowspan="2" class="jsx-1998007459 empty-header"></td>
          <td rowspan="1" class="jsx-1998007459 empty-header"></td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal">2</td>
          <td class="jsx-1998007459 subtotal"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
        <tr cell-type="total-row">
          <td rowspan="1" class="jsx-1998007459 empty-header">
            TOTAL
          </td>
          <td class="jsx-1998007459 total">24</td>
          <td class="jsx-1998007459 total">24</td>
          <td class="jsx-1998007459 total"></td>
          <td class="jsx-1998007459 total"></td>
        </tr>
      </tbody>
    </table>
  </>
);
