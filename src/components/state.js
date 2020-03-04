import React, { useState } from "react";

export const StateExp = props => {
  let defaultColor = "wheat";

  const [colorState, setColor] = useState(defaultColor);
  const [nameState, setName] = useState("dino");
  const [initialState, setInitial] = useState(props.defaultColor);

  return (
    <>
      <div
        onClick={function() {
          setColor("rebeccapurple");
          setName("t-rex");
        }}
      >
        {nameState}

        <style jsx>{`
          div {
            background-color: ${colorState};
          }
        `}</style>
      </div>
      <p
        onClick={function(e) {
          e.preventDefault();
          e.stopPropagation();
          setColor(defaultColor);
        }}
      >
        giraffe
      </p>
    </>
  );
};
