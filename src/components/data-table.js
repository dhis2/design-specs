import React from "react";
import "./data-table.css";

import { DropdownButton, Button, Checkbox, Input } from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";
import {
  MoreDots,
  SortArrows,
  DragHandle,
  ArrowDown
} from "./dataTableIcons.js";

// Components

const Table = props => (
  <>
    <div
      className={`
  table-wrap
  ${"bordered" in props && " bordered"}
  ${"large" in props && " large-cells"}
  `}
    >
      {"title" in props && <TableTitle>{props.title}</TableTitle>}
      {props.children}
    </div>
  </>
);

const TableContent = props => (
  <table class="data-table">{props.children}</table>
);

const TableHeader = props => (
  <thead>
    <tr>
      {"draggable" in props && <HeaderLeadingCell />}
      {"expandable" in props && <HeaderLeadingCell />}
      {"selectable" in props && <HeaderSelectCell />}
      {props.children}
    </tr>
  </thead>
);

const HeaderLeadingCell = () => <th class="header-leading-icon" />;

const HeaderSelectCell = () => (
  <th class="header-leading-icon">
    <Checkbox dense />
  </th>
);

const TableHeaderCell = props => (
  <th
    className={`
  header-default
  ${"right" in props && " header-right"}
  ${"sortable" in props && " header-sortable"}
  `}
  >
    {props.children}
    {"sortable" in props && <SortArrows />}
  </th>
);

const TableBody = props => <tbody>{props.children}</tbody>;

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

const TableCell = props => (
  <td
    className={`
    cell-default
    ${"bordered" in props && " cell-bordered"}
    ${"editable" in props && " cell-editable"}
    ${"muted" in props && " content-muted"}
    ${"valid" in props && " content-valid"}
    ${"error" in props && " content-error"}
    ${"right" in props && " cell-right"}
  `}
  >
    {props.children}
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
    <TableContent>
      <TableHeader>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell right>Header right</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell right>Cell right, content default</TableCell>
          <TableCell muted>Content muted</TableCell>
          <TableCell valid>Content valid</TableCell>
          <TableCell error>Content error</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoColumnSorting = () => (
  <Table>
    <TableContent>
      <TableHeader>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoInlineActions = () => (
  <Table>
    <TableContent>
      <TableHeader>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell right>Actions</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell right>
            <TableActionStrip>
              <CellAction>Action one</CellAction>
              <CellAction>Action two</CellAction>
            </TableActionStrip>
          </TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoOverflowActions = () => (
  <Table>
    <TableContent>
      <TableHeader>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell right>Actions</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell right>
            <TableActionStrip>
              <OverflowActions />
            </TableActionStrip>
          </TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoTitle = () => (
  <Table title="Titled table">
    <TableContent>
      <TableHeader>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoFilters = () => (
  <Table>
    <TableToolbar>
      <ToolbarLeft>
        <DropdownButton secondary>Filter</DropdownButton>
        <DropdownButton secondary>Filter two</DropdownButton>
      </ToolbarLeft>
    </TableToolbar>
    <TableContent>
      <TableHeader>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoSearch = () => (
  <Table>
    <TableToolbar>
      <ToolbarLeft>
        <Input placeholder="Search" dense />
      </ToolbarLeft>
    </TableToolbar>
    <TableContent>
      <TableHeader>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoTableActions = () => (
  <Table>
    <TableToolbar>
      <ToolbarRight>
        <Button secondary>Action</Button>
        <Button secondary>Action two</Button>
      </ToolbarRight>
    </TableToolbar>
    <TableContent>
      <TableHeader>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoDraggable = () => (
  <Table>
    <TableContent>
      <TableHeader draggable>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow draggable>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
        <TableRow draggable>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoSelectable = () => (
  <Table>
    <TableContent>
      <TableHeader selectable>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow selectable>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
        <TableRow selectable>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoExpandable = () => (
  <Table>
    <TableContent>
      <TableHeader expandable>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow expandable>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
        <TableRow expandable>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoBordered = () => (
  <Table bordered>
    <TableContent>
      <TableHeader>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoFooter = () => (
  <Table>
    <TableContent>
      <TableHeader>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
    <TableFooter>Footer content</TableFooter>
  </Table>
);

const DemoInlineEdit = () => (
  <Table>
    <TableContent>
      <TableHeader>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell editable>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell editable>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoLarge = () => (
  <Table large>
    <TableContent>
      <TableHeader>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoEmpty = () => (
  <Table>
    <TableContent>
      <TableHeader>
        <TableHeaderCell />
      </TableHeader>
      <TableBody>
        <TableRow empty></TableRow>
      </TableBody>
    </TableContent>
  </Table>
);

const DemoKitchenSink = () => (
  <Table title="Table title">
    <TableToolbar>
      <ToolbarLeft>
        <Input dense placeholder="Search" />
        <DropdownButton secondary>Filter attribute</DropdownButton>
      </ToolbarLeft>
      <ToolbarRight>
        <Button secondary>Action</Button>
        <Button secondary>Action two</Button>
      </ToolbarRight>
    </TableToolbar>
    <TableContent>
      <TableHeader draggable expandable selectable>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell sortable>Header</TableHeaderCell>
        <TableHeaderCell right>Actions</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow draggable expandable selectable>
          <TableCell editable>Content</TableCell>
          <TableCell muted>Content</TableCell>
          <TableCell valid>Content</TableCell>
          <TableCell error>Content</TableCell>
          <TableCell right>
            <TableActionStrip>
              <CellAction>Action one</CellAction>
              <CellAction>Action two</CellAction>
            </TableActionStrip>
          </TableCell>
        </TableRow>
      </TableBody>
    </TableContent>
    <TableFooter>Table footer</TableFooter>
  </Table>
);

// TODO: Add search bar example
