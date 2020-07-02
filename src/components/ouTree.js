import React from "react";
import "./ouTree.css";

import { Input, DropdownButton, Checkbox } from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";

import {
  Arrow,
  FolderClosed,
  FolderOpen,
  SingleUnit,
  Hospital,
  MoreDots
} from "../assets/icons.js";

const OrgUnitTree = props => (
  <div class="ou-tree">
    {props.children}
    <style jsx>{``}</style>
  </div>
);

const TreeHeader = props => (
  <div class="tree-header">
    <div class="filter-wrap">
      <Input dense placeholder="Search for an org. unit"></Input>
    </div>
    <div class="menu-button-wrap">
      <DropdownButton secondary>test</DropdownButton>
    </div>
  </div>
);

const UnitListWrap = props => (
  <div class="unit-list-wrap">{props.children}</div>
);

const UnitList = props => <ul class="unit-list">{props.children}</ul>;

const Unit = props => (
  <li
    className={`
      unit
      ${"open" in props && " unit-open"}
      ${"closed" in props && " unit-closed"}
        `}
  >
    <Arrow />
    <Checkbox dense />
    {"closed" in props && <FolderClosed />}
    {"open" in props && <FolderOpen />}
    {props.icon}
    <span class="unit-title">
      {props.name}
      <MoreDots />
    </span>
  </li>
);

export default function SpecOUTree() {
  return (
    <>
      <DevExample title="Full component">
        <OrgUnitTree>
          <TreeHeader></TreeHeader>
          <UnitListWrap>
            <UnitList>
              <Unit name="Morkep Province" open></Unit>
              <UnitList>
                <Unit name="101 MADIGBO" open></Unit>
                <Unit name="102 MOBAW" icon={<SingleUnit />}></Unit>
                <Unit name="103 MAKAYONI" open></Unit>
                <UnitList>
                  <Unit
                    name="10101 Magbankori Municipality"
                    closed
                    icon={<Hospital />}
                  ></Unit>
                  <UnitList>
                    <Unit
                      name="SENDUMA HOSPITAL"
                      closed
                      icon={<Hospital />}
                    ></Unit>
                    <Unit
                      name="MARENKAW HEALTH CLINIC"
                      icon={<SingleUnit />}
                    ></Unit>
                    <Unit
                      name="YANDAWORO COMMUNITY HEALTH UNIT, YANDAWORO"
                      icon={<SingleUnit />}
                    ></Unit>
                    <Unit
                      name="MELIKURU OUTREACH CENTER"
                      icon={<SingleUnit />}
                    ></Unit>
                  </UnitList>
                </UnitList>
              </UnitList>
            </UnitList>
          </UnitListWrap>
        </OrgUnitTree>
      </DevExample>
    </>
  );
}
