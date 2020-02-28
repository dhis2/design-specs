import React from "react";
import "./color-picker.css";

import { Input, Button } from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";

const RemoveColor = () => (
  <div class="remove-wrap">
    <Button secondary small>
      Remove color
    </Button>
  </div>
);

const Hex = () => (
  <div class="hex">
    <Input dense placeholder="e.g. #F9F9F9" value="#FA9D24" />
  </div>
);

const Range = () => (
  <>
    <div class="range">
      <div class="range-pick"></div>
    </div>
  </>
);

const Spectrum = () => (
  <div class="spectrum">
    <div class="spec-pick"></div>
    <div class="spec-demo-1"></div>
    <div class="spec-demo-2"></div>
  </div>
);

const CustomWrap = () => (
  <>
    <Spectrum />
    <Range />
    <Hex />
  </>
);

const ColorBlock = props => (
  <div
    className={`
color-block
${"selected" in props && " selected"}
`}
    style={{ backgroundColor: props.color }}
  ></div>
);

const Divider = () => <div class="divider"></div>;

const ColorPickerPaletteSet = props => <div class="set">{props.children}</div>;

const ColorPickerPalettes = props => (
  <div
    className={`
${"columns" in props && "palette-wrap-columns"}
${"rows" in props && "palette-wrap-rows"}
`}
  >
    {props.children}
  </div>
);

const ColorPicker = props => (
  <div class="color-picker">
    {props.children}
    <Divider />
    <RemoveColor />
  </div>
);
export default function SpecColorPicker() {
  return (
    <>
      <DevExample
        title="Palette and Custom picker"
        notes="Selecting a color from palette/custom/hex values updates the display everywhere. For example, entering a hex value moves the 'selected' cursors in the custom area and (if matching) marks a palette color selected."
      >
        <ColorPicker>
          <ColorPickerPalettes columns>
            <ColorPickerPaletteSet>
              <ColorBlock color="#E7B4EF" />
              <ColorBlock color="#D67EE4" />
              <ColorBlock color="#C53CC5" />
              <ColorBlock color="#630997" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#C9E0F8" />
              <ColorBlock color="#91C2F5" />
              <ColorBlock color="#6284C8" />
              <ColorBlock color="#01197B" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#A9DBFF" />
              <ColorBlock color="#69C3FF" />
              <ColorBlock color="#008BE7" />
              <ColorBlock color="#0A26A3" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#A7EADF" />
              <ColorBlock color="#4DDDC5" />
              <ColorBlock color="#00B7B2" />
              <ColorBlock color="#097F82" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#A7F2C7" />
              <ColorBlock color="#43E68D" />
              <ColorBlock color="#00B251" />
              <ColorBlock color="#09765A" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#FFF2A3" />
              <ColorBlock color="#FFEA5E" />
              <ColorBlock color="#F6C429" />
              <ColorBlock color="#BE890F" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#FEDAA4" />
              <ColorBlock color="#FFBF63" />
              <ColorBlock color="#FA9D24" selected />
              <ColorBlock color="#C0680A" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#F3F5F7" />
              <ColorBlock color="#D5DDE5" />
              <ColorBlock color="#A0ADBA" />
              <ColorBlock color="#404B5A" />
            </ColorPickerPaletteSet>
          </ColorPickerPalettes>
          <Divider />
          <CustomWrap />
        </ColorPicker>
      </DevExample>
      <DevExample title="Palette only">
        <ColorPicker>
          <ColorPickerPalettes columns>
            <ColorPickerPaletteSet>
              <ColorBlock color="#E7B4EF" />
              <ColorBlock color="#D67EE4" />
              <ColorBlock color="#C53CC5" />
              <ColorBlock color="#630997" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#C9E0F8" />
              <ColorBlock color="#91C2F5" />
              <ColorBlock color="#6284C8" />
              <ColorBlock color="#01197B" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#A9DBFF" />
              <ColorBlock color="#69C3FF" />
              <ColorBlock color="#008BE7" />
              <ColorBlock color="#0A26A3" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#A7EADF" />
              <ColorBlock color="#4DDDC5" />
              <ColorBlock color="#00B7B2" />
              <ColorBlock color="#097F82" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#A7F2C7" />
              <ColorBlock color="#43E68D" />
              <ColorBlock color="#00B251" />
              <ColorBlock color="#09765A" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#FFF2A3" />
              <ColorBlock color="#FFEA5E" />
              <ColorBlock color="#F6C429" />
              <ColorBlock color="#BE890F" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#FEDAA4" />
              <ColorBlock color="#FFBF63" />
              <ColorBlock color="#FA9D24" selected />
              <ColorBlock color="#C0680A" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#F3F5F7" />
              <ColorBlock color="#D5DDE5" />
              <ColorBlock color="#A0ADBA" />
              <ColorBlock color="#404B5A" />
            </ColorPickerPaletteSet>
          </ColorPickerPalettes>
        </ColorPicker>
      </DevExample>
      <DevExample title="Custom only">
        <ColorPicker>
          <CustomWrap />
        </ColorPicker>
      </DevExample>
      <DevExample
        title="Different palette"
        notes="Component can pass in color 'sets' rendered in columns"
      >
        <ColorPicker>
          <ColorPickerPalettes columns>
            <ColorPickerPaletteSet>
              <ColorBlock color="#E7B4EF" />
              <ColorBlock color="#D67EE4" />
              <ColorBlock color="#C53CC5" />
              <ColorBlock color="#630997" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#C9E0F8" />
              <ColorBlock color="#91C2F5" />
              <ColorBlock color="#01197B" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#A9DBFF" />
              <ColorBlock color="#69C3FF" />
              <ColorBlock color="#008BE7" />
              <ColorBlock color="#0A26A3" />
            </ColorPickerPaletteSet>
          </ColorPickerPalettes>
        </ColorPicker>
      </DevExample>
      <DevExample
        title="Palette as rows"
        notes="Palette can be display as rows instead of columns"
      >
        <ColorPicker>
          <ColorPickerPalettes rows>
            <ColorPickerPaletteSet>
              <ColorBlock color="#dbdded" />
              <ColorBlock color="#a6aacc" />
              <ColorBlock color="#979bb6" />
              <ColorBlock color="#6c6f8a" />
              <ColorBlock color="#4c4e62" />
              <ColorBlock color="#303242" />
            </ColorPickerPaletteSet>
            <ColorPickerPaletteSet>
              <ColorBlock color="#f9eae6" />
              <ColorBlock color="#f0c2b6" />
              <ColorBlock color="#eba08c" />
              <ColorBlock color="#d26b50" />
              <ColorBlock color="#ba5337" />
              <ColorBlock color="#932b0f" />
            </ColorPickerPaletteSet>
          </ColorPickerPalettes>
        </ColorPicker>
      </DevExample>
    </>
  );
}
