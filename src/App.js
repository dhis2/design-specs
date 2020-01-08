import React from 'react';
import './App.css';

import {CssReset, Button, ButtonStrip, TextArea, colors, spacers} from '@dhis2/ui-core';

import {Like, Reply, View, Share, Edit, Delete} from './assets/icons.js';

const Avatar = props => (
  <div class="avatar">
    {props.initials}
    <style jsx>
      {`
        .avatar {
          width: 24px;
          height:24px;
          background: rgba(64,75,90,0.80);
          border-radius:12px;
          font-size:9px;
          font-weight:700;
          text-align: center;
          padding: 7px 0;
          color: ${colors.white}
        }
        `}
    </style>
  </div>
)

const EmptyComment = (props) => (
  <div class="comment-wrap">
    <div class="avatar-wrap">
      <Avatar initials='MM'/>
    </div>

  <div class="input-wrap">
  <TextArea placeholder="Write a comment" rows="1"/>
</div>
<style jsx>
{`
  .comment-wrap {
    display: flex;
    width: 360px;
    padding-left:${spacers.dp8};
  }

  .avatar-wrap {
    margin-right: ${spacers.dp8};
    padding-top:5px;
  }

  .input-wrap {
    flex-grow: 1;
  }
  `}
</style>
  </div>
)

const ActiveComment = props => (
  <div class="comment-wrap">
    <div class="avatar-wrap">
      <Avatar initials='MM'/>
    </div>
    <div class="input-wrap">
      <TextArea value="a comment which is being written into"/>
    <div class="extras-wrap">{props.extras}
      <style jsx>
      {`
        .extras-wrap {
          margin: ${spacers.dp4} 0 0 0;
          font-size:14px;
        }

        .input-wrap button {
          margin: ${spacers.dp4} ${spacers.dp8} 0 0;
        }
        `}
      </style>
    </div>
    <Button primary small>Save comment</Button><Button secondary small>Cancel</Button>
  </div>
  </div>
)

const DisplayComment = props => (
  <div class="comment-wrap display-comment">
    <div class="avatar-wrap">
      <Avatar initials ='MM'/>
    </div>
    <div class="display-wrap">
      <div class="meta">
        <span class="author">{props.author}
        </span>
    <span class="timestamp">{props.timestamp}</span>
  <span class="edit-flag">Edited</span>
  </div>
  <p class="content">
    {props.children}
  </p>
  <div class="actions">
    <Action icon={<Like/>}/>
  <Action icon={<Reply/>}/>
<Action icon={<View/>}/>
<Action icon={<Share/>}/>
<Action icon={<Edit/>}/>
<Action icon={<Delete/>}/>
  </div>

    </div>
    <style jsx>
      {`
        .display-comment {
          background: ${colors.grey200};
          border-radius: 5px;
          padding-bottom: ${spacers.dp8};
          padding-top: ${spacers.dp4};
        }
        .meta {
          min-height:24px;
          align-items: baseline;
          margin-top: ${spacers.dp8};
        }
        .author {
          font-size:14px;
          font-weight: 500;
          margin-right:${spacers.dp8};
        }
        .timestamp, .edit-flag {
          margin-right: ${spacers.dp8};
          font-size:12px;
          color:${colors.grey700};
        }
        .content {
          font-size:14px;
          line-height:20px;
          padding-right:${spacers.dp8};
          margin: 0 0 ${spacers.dp8};
        }
        .actions {
          display: flex;
        }
        .actions .action {
          min-width: 24px;
          height:24px;
          margin-right:${spacers.dp12};
        }
        `}
    </style>
  </div>
)

const Action = props => (
  <div class="action">
  <a href="#">
    {props.icon}
  </a>
</div>
)

const Conversation = props => (
  <div class="conversation-wrap">
    {props.children}
    <style jsx>
    {`
      .conversation-wrap .comment-wrap {
        margin-bottom:${spacers.dp8};
      }
      `}
    </style>
  </div>
)

const DevExample = props => (
  <div class="dev-example">
    <p class="dev-title">{props.title}</p>
    {props.children}
    <style jsx>
      {`
        .dev-example {
          padding: 0  ${spacers.dp32} ${spacers.dp12};
          margin-bottom: ${spacers.dp48};
        }
        .dev-example .dev-title {
          font-size: 16px;
          font-family: monospace;
          color: ${colors.grey700};
        }
        `}
    </style>
  </div>
)

function App() {
  return (
    <>
    <CssReset/>

  <DevExample title="Example: Empty, idle comment input">
    <EmptyComment />
</DevExample>

<DevExample title="Example: Active comment with input">
<ActiveComment />
</DevExample>

<DevExample title="Example: Active comment with extra content">
<ActiveComment extras="some extra custom content"/>
</DevExample>

<DevExample title="Example: Comment in display mode">
<DisplayComment author="Logged in user" timestamp="3 days ago">The vaccination result rate is abnormally high in this region. Can this be explained @Siyabonga Okafor? This is an important issue to fix.</DisplayComment>
</DevExample>

<DevExample title="Example: Conversation">
  <Conversation>
  <DisplayComment author="Example Name" timestamp="Just now">
    Content
  </DisplayComment>
  <DisplayComment author="Example Name" timestamp="Just now">
    Content
  </DisplayComment>
  <DisplayComment author="Example Name" timestamp="Just now">
    Content
  </DisplayComment>
  <EmptyComment/>
</Conversation>
</DevExample>


    </>
  );
}

export default App;
