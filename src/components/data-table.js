import React from "react";
import "./data-table.css";

import { DropdownButton, Button, Checkbox, Input } from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";

import Table from './data-table-components/table.js'
import Toolbar from './data-table-components/toolbar.js'
import HeaderRow from'./data-table-components/data-header-row.js'
import HeaderCell from './data-table-components/header-cell.js'
import HeaderSortControl from './data-table-components/header-sort-control.js'
import HeaderSearchControl from './data-table-components/header-search-control.js'
import TableBody from './data-table-components/table-body.js'
import ContentCell from './data-table-components/content-cell.js'

import {
  MoreDots,
  SortArrows,
  DragHandle,
  ArrowDown,
  Search
} from "./data-table-components/dataTableIcons.js";

// Components


const HeaderSearch = () => (
  <div class="header-search-wrap">
    <Input dense placeholder="Search" />
  </div>
);

const TableRow = props => (
  <>
    <tr className={`row-default`}>
      {"draggable" in props && <DragCell />}
      {"expandable" in props && <ExpandCell />}
      {"selectable" in props && <SelectCell />}
      {"empty" in props && <EmptyCell>No data found</EmptyCell>}
      {props.children}
    </tr>
  </>
);

const EmptyCell = props => <td class="cell-empty">{props.children}</td>;

const SelectCell = () => (
  <td class="cell-leading-icon cell-checkbox">
    <Checkbox dense />
  </td>
);

const DragCell = () => (
  <td class="cell-leading-icon cell-drag-handle">
    <DragHandle />
  </td>
);

const ExpandCell = () => (
  <td class="cell-leading-icon cell-expand-control">
    <ArrowDown />
  </td>
);



const TableActionStrip = props => (
  <div class="cell-action-strip">{props.children}</div>
);

const CellAction = props => (
  <a href="dhis2.org" class="cell-action">
    {props.children}
  </a>
);

const OverflowActions = () => (
  <span class="more-dots">
    <MoreDots />
  </span>
);

const TableTitle = props => (
  <div class="table-title">
    <span>{props.children}</span>
  </div>
);

const TableToolbar = props => <div class="table-toolbar">{props.children}</div>;

const ToolbarLeft = props => <div class="toolbar-left">{props.children}</div>;

const ToolbarRight = props => <div class="toolbar-right">{props.children}</div>;

const TableFooter = props => <div class="table-footer">{props.children}</div>;

//Exported spec

export default function SpecDataTable() {
  return (
    <>
      <h1>Components</h1>
      <p>data-table exposes the following components:</p>
      <ul>
        <li>Table wrapper</li>
        <li>Table toolbar area</li>
        <li>Table title</li>
        <li>Table actions row</li>
        <li>Table data wrapper (used to keep the title and actions outside of the table element..maybe)</li>
        <li>Header row</li>
        <li>Header cell</li>
        <li>Header cell sort control</li>
        <li>Header cell filter control</li>
        <li>Cell</li>
        <li>Drag cell</li>
        <li>Select cell</li>
        <li>Expand cell</li>
        <li>Footer row</li>
      </ul>
      <h1>Composed examples</h1>
      <DevExample title="Cell text styles">
        <DemoCellFormatting />
      </DevExample>
      <DevExample title="Sortable columns">
        <DemoColumnSorting />
      </DevExample>
      <DevExample title="Inline actions">
        <DemoInlineActions />
      </DevExample>
      <DevExample title="Overflow actions">
        <DemoOverflowActions />
      </DevExample>
      <DevExample title="Table title">
        <DemoTitle />
      </DevExample>
      <DevExample
        title="Filters"
        notes="Clicking a filter button opens a popover. Popover contents are controlled by the app."
      >
        <DemoFilters />
      </DevExample>
      <DevExample
        title="Inline Column Filters - Idle"
        notes="Columns can be filtered inline."
      >
        <DemoInlineFilters />
      </DevExample>
      <DevExample
        title="Search"
        notes="Search is not built-in, this is just the default way it should be implemented."
      >
        <DemoSearch />
      </DevExample>
      <DevExample
        title="Table actions"
        notes="'Main actions' get a button, overflow actions are accessible from an overflow menu via a button with three dots icon."
      >
        <DemoTableActions />
      </DevExample>
      <DevExample title="Draggable rows">
        <DemoDraggable />
      </DevExample>
      <DevExample
        title="Selectable rows"
        notes="Checkbox in header row is a select/deselect all control. Selects or deselects all rows loaded in view."
      >
        <DemoSelectable />
      </DevExample>
      <DevExample
        title="Expandable rows"
        notes="The arrow icon should be flipped vertically when expanded. Clicking the arrow icon expands/collapses the row. Expanded area is a container that opens under the row (not specified here)."
      >
        <DemoExpandable />
      </DevExample>
      <DevExample
        title="Bordered cells"
        notes="Can only be enabled for the entire table, not individual rows"
      >
        <DemoBordered />
      </DevExample>
      <DevExample title="Footer" notes="Accepts custom content.">
        <DemoFooter />
      </DevExample>
      <DevExample
        title="Inline editable cells"
        notes="Clicking an inline edit cell opens a popover that contains controls for editing. Editing controls to be handled by app, data-table only handles opening the popover."
      >
        <DemoInlineEdit />
      </DevExample>
      <DevExample title="Large cells" notes="Applies to entire table.">
        <DemoLarge />
      </DevExample>
      <DevExample title="Empty state, default" notes="Accepts custom content.">
        <DemoEmpty />
      </DevExample>
      <DevExample title="Kitchen Sink">
        <DemoKitchenSink />
      </DevExample>
    </>
  );
}

//Prebuilt examples

const DemoCellFormatting = () => (
  <Table>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell right>Header right</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell right>Cell right, content default</ContentCell>
          <ContentCell muted>Content muted</ContentCell>
          <ContentCell valid>Content valid</ContentCell>
          <ContentCell error>Content error</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoColumnSorting = () => (
  <Table>
      <HeaderRow>
        <HeaderCell>
          Header that is longer than the normal<HeaderSortControl/>
        </HeaderCell>
        <HeaderCell label="Header label"><HeaderSortControl/></HeaderCell>
        <HeaderCell label="Header label"><HeaderSortControl/></HeaderCell>
        <HeaderCell label="Header label"><HeaderSortControl/></HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoInlineActions = () => (
  <Table>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell right>Actions</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell right>
            <TableActionStrip>
              <CellAction>Action one</CellAction>
              <CellAction>Action two</CellAction>
            </TableActionStrip>
          </ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoOverflowActions = () => (
  <Table>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell right>Actions</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell right>
            <TableActionStrip>
              <OverflowActions />
            </TableActionStrip>
          </ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoTitle = () => (
  <Table>
      <Toolbar>
        Title
      </Toolbar>
      <HeaderRow>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoFilters = () => (
  <Table>
    <Toolbar>
        <DropdownButton secondary>Filter</DropdownButton>
        <DropdownButton secondary>Filter two</DropdownButton>
    </Toolbar>
      <HeaderRow>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoInlineFilters = () => (
  <Table>
      <HeaderRow>
        <HeaderCell>
          Header
          <HeaderSearchControl/>
        </HeaderCell>
        <HeaderCell>
          Header
          <HeaderSearchControl/>
        </HeaderCell>
        <HeaderCell>
          Header
          <HeaderSearchControl/>
        </HeaderCell>
        <HeaderCell >
          Header
          <HeaderSearchControl/>
        </HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoSearch = () => (
  <Table>
    <Toolbar>
        <Input placeholder="Search" dense  />
    </Toolbar>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoTableActions = () => (
  <Table>
    <Toolbar>
        <Button secondary>Action</Button>
        <Button secondary>Action two</Button>
    </Toolbar>
      <HeaderRow>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoDraggable = () => (
  <Table>
      <HeaderRow>
        <HeaderCell/>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <DragCell/>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
        <TableRow>
          <DragCell/>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoSelectable = () => (
  <Table>
      <HeaderRow>
        <HeaderCell><Checkbox dense/></HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <SelectCell/>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
        <TableRow>
          <SelectCell/>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoExpandable = () => (
  <Table>
      <HeaderRow>
        <HeaderCell/>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ExpandCell/>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
        <TableRow>
          <ExpandCell/>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoBordered = () => (
  <Table bordered>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoFooter = () => (
  <Table>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
    <TableFooter>Footer content</TableFooter>
  </Table>
);

const DemoInlineEdit = () => (
  <Table>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell editable>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell editable>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoLarge = () => (
  <Table large>
      <HeaderRow>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
        <HeaderCell>Header</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
        <TableRow>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
          <ContentCell>Content</ContentCell>
        </TableRow>
      </TableBody>
  </Table>
);

const DemoEmpty = () => (
  <Table>
      <HeaderRow>
        <HeaderCell />
      </HeaderRow>
      <TableBody>
        <TableRow empty></TableRow>
      </TableBody>
  </Table>
);

const DemoKitchenSink = () => (
  <Table>
    <Toolbar>
        Title
        <Input dense placeholder="Search" />
        <DropdownButton secondary>Filter attribute</DropdownButton>
        <Button secondary>Action</Button>
        <Button secondary>Action two</Button>
    </Toolbar>
      <HeaderRow>
        <HeaderCell/>
        <HeaderCell/>
        <HeaderCell><Checkbox dense/></HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell sortable>Header</HeaderCell>
        <HeaderCell right>Actions</HeaderCell>
      </HeaderRow>
      <TableBody>
        <TableRow>
          <DragCell/>
          <ExpandCell/>
          <SelectCell/>
          <ContentCell editable>Content</ContentCell>
          <ContentCell muted>Content</ContentCell>
          <ContentCell valid>Content</ContentCell>
          <ContentCell error>Content</ContentCell>
          <ContentCell right>
            <TableActionStrip>
              <CellAction>Action one</CellAction>
              <CellAction>Action two</CellAction>
            </TableActionStrip>
          </ContentCell>
        </TableRow>
      </TableBody>
    <TableFooter>Table footer</TableFooter>
  </Table>
);

// TODO: Add search bar example
