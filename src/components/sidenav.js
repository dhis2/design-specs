/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './sidenav.css'
import { CssReset, Tag, LogoWhite } from '@dhis2/ui-core'
import { IconChevronDown16, IconEmptyFrame16 } from '@dhis2/ui-icons'

import { DevExample } from '../assets/DevExample.js'

const Sidenav = (props) => <div class="sidenav-wrap">{props.children}</div>

const SidenavItems = (props) => <ul class="sidenav-items">{props.children}</ul>

const SidenavHeader = (props) => (
    <div class="sidenav-header">{props.children}</div>
)

const SidenavFooter = (props) => (
    <div class="sidenav-footer">{props.children}</div>
)

const SidenavParent = (props) => {
    const [showResults, setShowResults] = React.useState(false)
    const toggleChildren = React.useCallback(() => {
        setShowResults((showResults) => !showResults)
    }, [])
    return (
        <>
            <li
                class={`
    sidenav-parent
    ${props.icon ? ' sidenav-parent-has-icon' : ''}
    ${showResults ? ' parent-is-open' : ''}
    `}
            >
                <button onClick={toggleChildren} disabled={props.disabled}>
                    {props.icon ? (
                        <span class="sidenav-item-icon">{props.icon}</span>
                    ) : (
                        ''
                    )}
                    <span class="sidenav-parent-label">{props.label}</span>
                    <span class="sidenav-parent-chevron">
                        <IconChevronDown16 />
                    </span>
                </button>
                {showResults && (
                    <ul class="sidenavn-submenu">{props.children}</ul>
                )}
            </li>
        </>
    )
}

const SidenavLink = (props) => (
    <li>
        {props.disabled ? (
            <span class="sidenav-link sidenav-link-disabled">
                {props.icon ? <span class="icon">{props.icon}</span> : ''}
                {props.label}
            </span>
        ) : (
            <a
                href=""
                class={`
            sidenav-link
            ${props.selected ? ' sidenav-link-selected' : ''}
            `}
            >
                {props.icon ? (
                    <span class="sidenav-item-icon">{props.icon}</span>
                ) : (
                    ''
                )}
                {props.label}
            </a>
        )}
    </li>
)

const SidenavDivider = (props) => <li class="sidenav-divider"></li>

const SidenavSectionTitle = (props) => (
    <li class="sidenav-section-title">{props.label}</li>
)

export default function specDimensionList() {
    return (
        <>
            <CssReset />
            <DevExample title="Two-level" height="800px">
                <DemoSidebarContainer>
                    <Sidenav>
                        <SidenavItems>
                            <SidenavLink label="Metadata overview" />
                            <SidenavParent label="Categories">
                                <SidenavLink label="Category option" />
                                <SidenavLink label="Category combination" />
                                <SidenavLink label="Category option combination" />
                                <SidenavLink label="Category option group set" />
                            </SidenavParent>
                            <SidenavParent label="Data elements">
                                <SidenavLink label="Data element" />
                                <SidenavLink label="Data element group" />
                                <SidenavLink label="Data element group set" />
                            </SidenavParent>
                            <SidenavParent label="Data sets">
                                <SidenavLink label="Data set" />
                                <SidenavLink label="Data set notifications" />
                            </SidenavParent>
                            <SidenavParent label="Indicators">
                                <SidenavLink label="Indicator" />
                                <SidenavLink label="Indicator type" />
                                <SidenavLink label="Indicator group" />
                                <SidenavLink label="Indicator group set" />
                                <SidenavLink label="Program indicator" />
                                <SidenavLink label="Program indicator group" />
                            </SidenavParent>
                            <SidenavParent label="Organisation units">
                                <SidenavLink label="Organisation unit" />
                                <SidenavLink label="Organisation unit group" />
                                <SidenavLink label="Organisation unit group set" />
                                <SidenavLink label="Organisation unit level" />
                            </SidenavParent>
                            <SidenavParent label="Programs and Tracker">
                                <SidenavLink label="Program" />
                                <SidenavLink label="Tracked entity attribute" />
                                <SidenavLink label="Relationship type" />
                                <SidenavLink label="Tracked entity type" />
                                <SidenavLink label="Program rule" />
                                <SidenavLink label="Program rule variable" />
                            </SidenavParent>
                            <SidenavParent label="Validation">
                                <SidenavLink label="Validation rule" />
                                <SidenavLink label="Validation rule group" />
                                <SidenavLink label="Validation notification" />
                            </SidenavParent>
                            <SidenavLink label="Metadata editor" />
                        </SidenavItems>
                    </Sidenav>
                </DemoSidebarContainer>
            </DevExample>

            <DevExample title="Two-level, with icons">
                <DemoSidebarContainer>
                    <Sidenav>
                        <SidenavItems>
                            <SidenavParent
                                label="Canis lupus familiaris"
                                icon={<IconEmptyFrame16 />}
                            >
                                <SidenavLink label="Akita" />
                                <SidenavLink label="Bull terrier" />
                                <SidenavLink label="Great dane" />
                                <SidenavLink label="Neapolitan mastiff" />
                                <SidenavLink label="Pyrenean sheepdog" />
                                <SidenavLink label="Wirehaired vizsla" />
                            </SidenavParent>
                            <SidenavParent
                                label="Felis catus"
                                icon={<IconEmptyFrame16 />}
                            >
                                <SidenavLink label="Aegean" />
                                <SidenavLink label="Bengal" />
                                <SidenavLink label="California spangled" />
                                <SidenavLink label="Norwegian forest cat" />
                                <SidenavLink label="Scottish fold" />
                            </SidenavParent>
                            <SidenavParent
                                label="Capra aegagrus hircus"
                                icon={<IconEmptyFrame16 />}
                            >
                                <SidenavLink label="Alpine" />
                                <SidenavLink label="Kinder" />
                                <SidenavLink label="Toggenburg" />
                            </SidenavParent>
                            <SidenavParent
                                label="Accipitridae buteoninae buteonini"
                                icon={<IconEmptyFrame16 />}
                            >
                                <SidenavLink label="Crane hawk" />
                                <SidenavLink label="Ictinia" />
                                <SidenavLink label="Parabuteo" />
                            </SidenavParent>
                            <SidenavParent
                                label="Sciuridae sciurinae"
                                icon={<IconEmptyFrame16 />}
                            >
                                <SidenavLink label="Arizona gray squirrel" />
                                <SidenavLink label="Fox squirrel" />
                                <SidenavLink label="Richmond's squirrel" />
                            </SidenavParent>
                            <SidenavLink
                                label="Delphinapterus leucas"
                                icon={<IconEmptyFrame16 />}
                            />
                        </SidenavItems>
                    </Sidenav>
                </DemoSidebarContainer>
            </DevExample>

            <DevExample title="Item states" height="320px">
                <DemoSidebarContainer>
                    <Sidenav>
                        <SidenavItems>
                            <SidenavLink label="Link Item" />
                            <SidenavParent
                                label="Disabled parent item"
                                disabled
                            >
                                <SidenavLink label="Link Item" />
                            </SidenavParent>
                            <SidenavLink label="Disabled link item" disabled />
                            <SidenavLink label="Link Item" />
                            <SidenavLink label="Selected Link Item" selected />
                            <SidenavLink label="Link Item" />
                        </SidenavItems>
                    </Sidenav>
                </DemoSidebarContainer>
            </DevExample>

            <DevExample title="Custom item content" height="400px">
                <DemoSidebarContainer>
                    <Sidenav>
                        <SidenavItems>
                            <SidenavLink label="Standard item one" />
                            <SidenavLink label="Standard item two" />
                            <CustomItem />
                        </SidenavItems>
                    </Sidenav>
                </DemoSidebarContainer>
            </DevExample>

            <DevExample
                title="Divider, section titles"
                height="700px"
                notes="Dividers and section titles do not depend on one another."
            >
                <DemoSidebarContainer>
                    <Sidenav>
                        <SidenavItems>
                            <SidenavSectionTitle label="Basic mathematics" />
                            <SidenavLink label="Algebra" />
                            <SidenavParent label="Numerical operations">
                                <SidenavLink label="Addition" />
                                <SidenavLink label="Subtraction" />
                                <SidenavLink label="Multiplication" />
                                <SidenavLink label="Division" />
                            </SidenavParent>
                            <SidenavLink label="Exponents" />
                            <SidenavDivider />
                            <SidenavSectionTitle label="Pure mathematics" />
                            <SidenavLink label="Combinatorics" />
                            <SidenavParent label="Functional analysis">
                                <SidenavLink label="Operator theory" />
                                <SidenavLink label="Topological vectors" />
                                <SidenavLink label="Amenability" />
                                <SidenavLink label="Quantum theory" />
                            </SidenavParent>
                            <SidenavLink label="Number theory" />
                            <SidenavLink label="Topology" />
                        </SidenavItems>
                    </Sidenav>
                </DemoSidebarContainer>
            </DevExample>

            <DevExample title="Header and footer" height="600px">
                <DemoSidebarContainer>
                    <Sidenav>
                        <SidenavHeader>
                            <DemoHeaderContent />
                        </SidenavHeader>
                        <SidenavItems>
                            <SidenavParent label="Sidenav parent">
                                <SidenavLink label="Sidenav item" />
                            </SidenavParent>
                            <SidenavLink label="Sidenav item" />
                            <SidenavDivider />
                            <SidenavParent label="Sidenav parent">
                                <SidenavLink label="Sidenav item" />
                            </SidenavParent>
                            <SidenavLink label="Sidenav item" />
                        </SidenavItems>
                        <SidenavFooter>
                            <DemoFooterContent />
                        </SidenavFooter>
                    </Sidenav>
                </DemoSidebarContainer>
            </DevExample>
        </>
    )
}

// For demo purposes only
const CustomItem = (props) => (
    <>
        <div style={{ padding: '8px 12px', fontSize: '12px' }}>
            <Tag negative>12</Tag>
            <span>Custom item content</span>
        </div>
    </>
)
const DemoHeaderContent = (props) => (
    <>
        <div style={{ margin: '16px 12px' }}>
            <LogoWhite />
        </div>
    </>
)
const DemoFooterContent = (props) => (
    <>
        <div style={{ margin: '16px 12px' }}>I am the demo footer</div>
    </>
)
const DemoSidebarContainer = (props) => (
    <div class="demo-sidebar">{props.children}</div>
)
