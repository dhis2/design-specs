import React from 'react'
import './capture-stage-list.css'
import { Button, Tag } from '@dhis2/ui-core'
import {
    IconChevronUp24,
    IconCalendar16,
    IconDimensionOrgUnit16,
} from '@dhis2/ui-icons'

import { DevExample } from '../assets/DevExample.js'

const PanelWrapper = (props) => (
    <div className="stage-panel">
        <div className="stage-panel-title">
            <span>Stages and events</span>
            <IconChevronUp24 />
        </div>
        {props.children}
    </div>
)

const Stage = (props) => (
    <details className="stage" open={props.open}>
        <summary className="stage-info">
            <span
                className="stage-info-icon"
                style={{ backgroundColor: props.color }}
            ></span>
            <span className="stage-info-title">{props.name}</span>
            <span className="stage-info-event-count">{props.eventCount}</span>
        </summary>
        <div className="stage-content">{props.children}</div>
    </details>
)

const Event = (props) => (
    <details className="event" open={props.open}>
        <summary className="event-info">
            <span className="event-info-item event-info-date">
                <IconCalendar16 color="var(--colors-grey700" />
                <span>{props.date}</span>
            </span>
            <span className="event-info-item event-info-ou">
                <IconDimensionOrgUnit16 color="var(--colors-grey700" />
                <span>{props.orgUnit}</span>
            </span>
            {props.status}
        </summary>
        <div className="event-content">{props.children}</div>
        <div className="event-action">
            <Button secondary small>
                View event details
            </Button>
        </div>
    </details>
)

const EventPlaceholder = (props) => (
    <div className="event event-placeholder event-info">
        <span className="event-info-item event-info-date">
            <IconCalendar16 color="var(--colors-grey700" />
            <span>{props.date}</span>
        </span>
        <span className="event-info-item event-info-ou">
            <IconDimensionOrgUnit16 color="var(--colors-grey700" />
            <span>{props.orgUnit}</span>
        </span>
        {props.status}
    </div>
)

const EventDataItem = (props) => (
    <div className="event-data-item">
        <span className="event-data-item-label">{props.label}</span>
        <span className="event-data-item-content">{props.children}</span>
    </div>
)

const NewEventAction = (props) => (
    <div className="new-event-action">
        <Button secondary small>
            New event in this stage
        </Button>
    </div>
)

const EventEllipsis = (props) => (
    <div className="event-list-ellipsis">
        <Button secondary small>
            Show 5 more events
        </Button>
        <Button secondary small>
            View all 11 events in this stage
        </Button>
    </div>
)

export default function CaptureStageList() {
    return (
        <>
            <DevExample title="All stages and events collapsed">
                <PanelWrapper>
                    <Stage
                        name="Registration"
                        eventCount="1 event"
                        color="#9786C2"
                    >
                        <Event date="2019/01/20" orgUnit="Ngelehun CHC">
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                    </Stage>
                    <Stage
                        name="ANC Visits"
                        eventCount="3 events"
                        color="#A6C286"
                    >
                        <EventPlaceholder
                            date="2019/04/29"
                            orgUnit="Lyn Maternity MCHP"
                            status={<Tag>Scheduled: due in 5 days</Tag>}
                        ></EventPlaceholder>
                        <EventPlaceholder
                            date="2019/03/16"
                            orgUnit="Ngelehun CHC"
                            status={<Tag negative>Overdue</Tag>}
                        ></EventPlaceholder>
                        <Event
                            date="2019/02/26"
                            orgUnit="Ngelehun CHC"
                            status={<Tag>Complete</Tag>}
                        >
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                    </Stage>
                    <Stage name="Birth" eventCount="0 events" color="#C286BB">
                        <NewEventAction />
                    </Stage>
                </PanelWrapper>
            </DevExample>

            <DevExample title="Expanded stages and events by default">
                <PanelWrapper>
                    <Stage
                        name="Registration"
                        eventCount="1 event"
                        color="#9786C2"
                    >
                        <Event date="2019/01/20" orgUnit="Ngelehun CHC">
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                    </Stage>
                    <Stage
                        name="ANC Visits"
                        eventCount="3 events"
                        color="#A6C286"
                        open
                    >
                        <EventPlaceholder
                            date="2019/04/29"
                            orgUnit="Lyn Maternity MCHP"
                            status={<Tag>Scheduled: due in 5 days</Tag>}
                        ></EventPlaceholder>
                        <EventPlaceholder
                            date="2019/03/16"
                            orgUnit="Ngelehun CHC"
                            status={<Tag negative>Overdue</Tag>}
                        ></EventPlaceholder>
                        <Event
                            date="2019/02/26"
                            orgUnit="Ngelehun CHC"
                            status={<Tag>Complete</Tag>}
                            open
                        >
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                    </Stage>
                    <Stage name="Birth" eventCount="0 events" color="#C286BB">
                        <NewEventAction />
                    </Stage>
                </PanelWrapper>
            </DevExample>

            <DevExample title="Many empty stages">
                <PanelWrapper>
                    <Stage
                        name="Registration"
                        eventCount="0 event"
                        color="#9786C2"
                    >
                        <NewEventAction />
                    </Stage>
                    <Stage
                        name="ANC Visits"
                        eventCount="0 events"
                        color="#A6C286"
                    >
                        <NewEventAction />
                    </Stage>
                    <Stage name="Birth" eventCount="0 events" color="#C286BB">
                        <NewEventAction />
                    </Stage>
                    <Stage
                        name="Post-natal care"
                        eventCount="0 events"
                        color="#86B2C2"
                    >
                        <NewEventAction />
                    </Stage>
                    <Stage
                        name="Post-birth follow-up"
                        eventCount="0 events"
                        color="#FFE082"
                    >
                        <NewEventAction />
                    </Stage>
                    <Stage
                        name="Case conclusion"
                        eventCount="0 events"
                        color="#A5D6A7"
                    >
                        <NewEventAction />
                    </Stage>
                </PanelWrapper>
            </DevExample>

            <DevExample title="More than 5 events in a stage">
                <PanelWrapper>
                    <Stage
                        name="Registration"
                        eventCount="1 event"
                        color="#9786C2"
                    >
                        <Event date="2019/01/20" orgUnit="Ngelehun CHC">
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                    </Stage>
                    <Stage
                        name="ANC Visits"
                        eventCount="11 events"
                        color="#A6C286"
                        open
                    >
                        <EventPlaceholder
                            date="2019/04/29"
                            orgUnit="Lyn Maternity MCHP"
                            status={<Tag>Scheduled: due in 2 days</Tag>}
                        ></EventPlaceholder>
                        <Event
                            date="2019/03/26"
                            orgUnit="Ngelehun CHC"
                            status={<Tag>Complete</Tag>}
                        >
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                        <Event
                            date="2019/03/12"
                            orgUnit="Ngelehun CHC"
                            status={<Tag>Complete</Tag>}
                        >
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                        <Event
                            date="2019/02/26"
                            orgUnit="Ngelehun CHC"
                            status={<Tag>Complete</Tag>}
                        >
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                        <Event
                            date="2019/02/14"
                            orgUnit="Ngelehun CHC"
                            status={<Tag>Complete</Tag>}
                        >
                            <EventDataItem label="BMI">21</EventDataItem>
                            <EventDataItem label="Weight in kg">
                                79
                            </EventDataItem>
                            <EventDataItem label="Glucose">89</EventDataItem>
                            <EventDataItem label="Smoking?">No</EventDataItem>
                        </Event>
                        <EventEllipsis />
                    </Stage>
                    <Stage name="Birth" eventCount="0 events" color="#C286BB">
                        <NewEventAction />
                    </Stage>
                </PanelWrapper>
            </DevExample>
        </>
    )
}
