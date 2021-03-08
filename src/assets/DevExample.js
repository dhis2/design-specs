import React from 'react'

export const DevExample = (props) => (
    <div
        class="dev-example"
        style={{ width: props.width, height: props.height }}
    >
        <p class="dev-label">Example</p>
        <p class="dev-title">{props.title}</p>
        {'notes' in props && (
            <>
                <p class="dev-label">Notes</p>
                <p class="dev-notes">{props.notes}</p>
            </>
        )}
        <p class="dev-label">Demo</p>
        {props.children}
        <style jsx>
            {`
                .dev-example {
                    color: #141741;
                    padding: 0 0 40px;
                    margin: 0 auto 72px;
                    border-bottom: 1px solid #e3e8ee;
                }
                .dev-label {
                    font-size: 13px;
                    color: #8f9aa9;
                    letter-spacing: 0.6px;
                    margin: 0 0 8px 0;
                    text-transform: uppercase;
                }
                .dev-title {
                    font-weight: 500;
                    font-size: 19px;
                    letter-spacing: 0;
                    margin: 0 0 24px 0;
                }
                .dev-notes {
                    max-width: 620px;
                    font-size: 16px;
                    line-height: 22px;
                    margin: 0 0 24px;
                }
            `}
        </style>
    </div>
)

DevExample.defaultProps = {
    width: '720px',
    height: 'auto',
}
