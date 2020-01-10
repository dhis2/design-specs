import React from 'react';

export const DevExample = props => (
  <div class="dev-example">
    <p class="dev-title">{props.title}</p>
    {props.children}
    <style jsx>
      {`
        .dev-example {
          padding: 0  32px 12px;
          margin-bottom: 48px;
        }
        .dev-example .dev-title {
          font-size: 16px;
          font-family: monospace;
          color: rebeccapurple;
        }
        `}
    </style>
  </div>
)
