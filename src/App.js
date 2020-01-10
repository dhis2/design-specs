import React from 'react';
import './App.css';

import {CssReset, Button, ButtonStrip, TextArea, colors, spacers} from '@dhis2/ui-core';

import {DevExample} from './assets/DevExample.js';
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

const CommentInput = (props) => (
  <div class="comment-wrap comment-input">
    <div class="avatar-wrap">
      <Avatar initials='MM'/>
    </div>

  <div class="input-wrap">
    {"idle-empty" in props &&
  <TextArea placeholder="Write a comment" rows="1"/>
  }

    {"active" in props &&
      <>
      <TextArea value="a comment which is being written into"/>
    <div class="extras-wrap">{props.extras}</div>
    <Button primary small>Save comment</Button><Button secondary small>Cancel</Button>
    </>
    }

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
)

const DisplayComment = props => (
  <>
  <div class="comment-wrap display-comment">
    <div class="avatar-wrap">
      <Avatar initials ='MM'/>
    </div>
    <div class="display-wrap">
      <div class="meta">
        <span class="author">{props.author}
        </span>
    <span class="timestamp">{props.timestamp}</span>
    {"edited" in props &&
  <span class="edit-flag">Edited</span>
  }
  </div>
  <p class="content">
    {props.children}
  </p>
  <div class="actions">
    <Action icon={<Like/>}/>
  <Action icon={<Reply/>}/>
<Action icon={<View/>}/>
{"logged-in" in props &&
  <>
<Action icon={<Share/>}/>
<Action icon={<Edit/>}/>
<Action icon={<Delete/>}/>
</>
}
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
        .replies {
          margin-left:${spacers.dp24};
        }
        .conversation-wrap .replies .display-comment {
          width: 336px;
          margin-bottom:${spacers.dp16};
        }
        `}
    </style>
  </div>
  <div class="replies">
    {props.replies}
  </div>
  </>
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
      .conversation-wrap .comment-input {
        margin-top: ${spacers.dp16};
      }
      `}
    </style>
  </div>
)


function App() {
  return (
    <>
    <CssReset/>

  <DevExample title="Empty, idle comment input">
    <CommentInput idle-empty />
</DevExample>

<DevExample title="Active comment with input">
<CommentInput active />
</DevExample>

<DevExample title="Active comment with extra content">
<CommentInput active extras="some extra custom content"/>
</DevExample>

<DevExample title="Comment in display mode" notes="The component comes supplied with a default action bar. If an app wants custom actions, they must compose their own action bar using the icon button components supplied.">
<DisplayComment author="Logged in user" timestamp="3 days ago">The vaccination result rate is abnormally high in this region. Can this be explained @Siyabonga Okafor? This is an important issue to fix.</DisplayComment>
</DevExample>

<DevExample
  title="Conversation"
  notes="Replies to a comment use the same comment component, except the wrapper has a margin left. DHIS2 replies do not support more than one level of replies, so nesting replies on replies is not supported yet."
  >
  <Conversation>
  <DisplayComment author="Example Name" timestamp="Just now">
    Content
  </DisplayComment>
  <DisplayComment author="Currently logged in user" timestamp="2 days ago" logged-in replies={<DisplayComment author="Example Name" timestamp="5 hours ago">This is a reply to the above comment</DisplayComment>}>
    Content
  </DisplayComment>
  <DisplayComment author="Example Name" timestamp="3 days ago" edited>
    Content
  </DisplayComment>
  <CommentInput idle-empty/>
</Conversation>
</DevExample>


    </>
  );
}

export default App;
