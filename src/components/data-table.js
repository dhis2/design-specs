import React from "react";
import "./data-table.css";

import { DropdownButton, Button, Checkbox, Input } from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";

import Table from "./data-table-components/table.js";
import Toolbar from "./data-table-components/toolbar.js";
import HeaderRow from "./data-table-components/header-row.js";
import HeaderCell from "./data-table-components/header-cell.js";
import HeaderSortControl from "./data-table-components/header-sort-control.js";
import HeaderSearchControl from "./data-table-components/header-search-control.js";
import TableBody from "./data-table-components/table-body.js";
import Row from "./data-table-components/row.js";
import ContentCell from "./data-table-components/content-cell.js";
import SelectCell from "./data-table-components/content-select-cell.js";
import DragCell from "./data-table-components/content-drag-cell.js";
import ExpandCell from "./data-table-components/content-expand-cell.js";
import Footer from "./data-table-components/footer.js";

import { MoreDots } from "./data-table-components/dataTableIcons.js";

// Ad-hoc Components, not included in data-table

const HeaderSearch = () => (
  <div class="header-search-wrap" style={{}}>
    <Input dense placeholder="Search" />
  </div>
);

const TableActionStrip = props => (
  <div class="cell-action-strip">{props.children}</div>
);

const Link = props => (
  <a href="dhis2.org" class="link">
    {props.children}
  </a>
);

const SearchWrap = props => (
  <div style={{ width: "320px" }}>{props.children}</div>
);

const ActionWrap = props => (
  <div class="action-wrap" style={{ textAlign: "right" }}>
    {props.children}
  </div>
);

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
        <li>
          Table data wrapper (used to keep the title and actions outside of the
          table element..maybe)
        </li>
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
      <DevExample
        title="Sortable columns"
        notes="Sort controls provided as a component, can be passed into header cells. Ideally the sorting would be triggered by clicking on the header title too, but I couldn't figure out a flexible way of doing this and using the <SortControl> component, without locking down the usage technically."
      >
        <DemoColumnSorting />
      </DevExample>
      <DevExample
        title="Inline actions"
        notes="Recommended method of providing inline actions, but not built into table or technically restricted."
      >
        <DemoInlineActions />
      </DevExample>
      <DevExample
        title="Overflow actions"
        notes="Recommended method of providing overflow actions, but not built into table or technically restricted."
      >
        <DemoOverflowActions />
      </DevExample>
      <DevExample
        title="Filters"
        notes="Clicking a filter button opens a popover. Popover contents are controlled by the app."
      >
        <DemoFilters />
      </DevExample>
      <DevExample
        title="Inline Column Filters - idle"
        notes="Inline filter controls provided as a component, can be passed into header cells."
      >
        <DemoInlineFilters />
      </DevExample>
      <DevExample
        title="Inline Column Filters - active"
        notes="NOTE: this is not correct. The search should display under the header text, there is an example in the design system guidelines. I couldn't figure out a flexible way of doing this."
      >
        <DemoInlineFiltersOpen />
      </DevExample>
      <DevExample
        title="Search"
        notes="Recommended method of searching a table. Not built in or technically restricted."
      >
        <DemoSearch />
      </DevExample>
      <DevExample
        title="Actions in the toolbar"
        notes="Recommended method of displaying table actions. Only a guideline, not technically restricted."
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
        notes="The arrow icon should be flipped vertically when expanded. Clicking the arrow icon expands/collapses the row. Expanded area is a container that opens under the row (not specified here, unsure how to allow for this?)."
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
        notes="Editing actions to be handled by app"
      >
        <DemoInlineEdit />
      </DevExample>
      <DevExample title="Large cells" notes="Applies to entire table.">
        <DemoLarge />
      </DevExample>
      <DevExample
        title="Empty state, default"
        notes="Accepts custom content. Unsure about best way to compose, with an empty <tr>?"
      >
        <DemoEmpty />
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
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell right>Cell right, content default</ContentCell>
        <ContentCell muted>Content muted</ContentCell>
        <ContentCell valid>Content valid</ContentCell>
        <ContentCell error>Content error</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoColumnSorting = () => (
  <Table>
    <HeaderRow>
      <HeaderCell>
        Header that is longer than the normal
        <HeaderSortControl />
      </HeaderCell>
      <HeaderCell label="Header label">
        <HeaderSortControl />
      </HeaderCell>
      <HeaderCell label="Header label">
        <HeaderSortControl />
      </HeaderCell>
      <HeaderCell label="Header label">
        <HeaderSortControl />
      </HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
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
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell right>
          <Link>Action one</Link>
          <Link>Action two</Link>
        </ContentCell>
      </Row>
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
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell right>
          <DropdownButton secondary small>
            <MoreDots />
          </DropdownButton>
        </ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoFilters = () => (
  <Table>
    <Toolbar>
      <DropdownButton secondary>Filter</DropdownButton>
    </Toolbar>
    <HeaderRow>
      <HeaderCell sortable>Header</HeaderCell>
      <HeaderCell sortable>Header</HeaderCell>
      <HeaderCell sortable>Header</HeaderCell>
      <HeaderCell sortable>Header</HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoInlineFilters = () => (
  <Table>
    <HeaderRow>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoInlineFiltersOpen = () => (
  <Table>
    <HeaderRow>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
      <HeaderCell>
        Header
        <HeaderSearchControl />
      </HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoSearch = () => (
  <Table>
    <Toolbar>
      <SearchWrap>
        <Input placeholder="Search" dense />
      </SearchWrap>
    </Toolbar>
    <HeaderRow>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoTableActions = () => (
  <Table>
    <Toolbar>
      <ActionWrap>
        <Button secondary>Action</Button>
        <Button secondary>Action two</Button>
        <DropdownButton secondary>More</DropdownButton>
      </ActionWrap>
    </Toolbar>
    <HeaderRow>
      <HeaderCell sortable>Header</HeaderCell>
      <HeaderCell sortable>Header</HeaderCell>
      <HeaderCell sortable>Header</HeaderCell>
      <HeaderCell sortable>Header</HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoDraggable = () => (
  <Table>
    <HeaderRow>
      <HeaderCell />
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <DragCell />
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
      <Row>
        <DragCell />
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoSelectable = () => (
  <Table>
    <HeaderRow>
      <HeaderCell>
        <Checkbox dense />
      </HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <SelectCell />
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
      <Row>
        <SelectCell />
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoExpandable = () => (
  <Table>
    <HeaderRow>
      <HeaderCell />
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ExpandCell />
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
      <Row>
        <ExpandCell />
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
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
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoFooter = () => (
  <Table bordered>
    <HeaderRow>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
      <HeaderCell>Header</HeaderCell>
    </HeaderRow>
    <TableBody>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
    <Footer>
      <Row>
        <ContentCell>Footer</ContentCell>
      </Row>
    </Footer>
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
      <Row>
        <ContentCell editable>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell editable>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
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
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
      <Row>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
        <ContentCell>Content</ContentCell>
      </Row>
    </TableBody>
  </Table>
);

const DemoEmpty = () => (
  <Table>
    <HeaderRow>
      <HeaderCell />
    </HeaderRow>
    <TableBody>
      <Row empty></Row>
    </TableBody>
  </Table>
);
