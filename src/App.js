import React from "react";
import "./App.css";

import {
  CssReset,
  CssVariables,
  Button,
  ButtonStrip,
  TextArea,
  colors,
  spacers
} from "@dhis2/ui-core";

import { DevExample } from "./assets/DevExample.js";
import { Like, Reply, View, Share, Edit, Delete } from "./assets/icons.js";

const Avatar = props => <div class="avatar">{props.initials}</div>;

const CommentInput = props => (
  <div class="comment-wrap comment-input">
    <div class="avatar-wrap">
      <Avatar initials="MM" />
    </div>

    <div class="input-wrap">
      {"idle-empty" in props && (
        <TextArea placeholder="Write a comment" rows="1" />
      )}

      {"active" in props && (
        <>
          <TextArea value="a comment which is being written into" />
          <div class="extras-wrap">{props.extras}</div>
          <Button primary small>
            Save comment
          </Button>
          <Button secondary small>
            Cancel
          </Button>
        </>
      )}
    </div>
  </div>
);

const DisplayCommentToolbar = props => (
  <div class="actions">{props.children}</div>
);

const DisplayCommentDefaultToolset = props => (
  <>
    <Action icon={<Like />} />
    <Action icon={<Reply />} />
    {"logged-in" in props && (
      <>
        <Action icon={<Edit />} />
        <Action icon={<Delete />} />
      </>
    )}
  </>
);

const DisplayCommentReplyToolset = props => (
  <>
    <Action icon={<Like />} />
    {"logged-in" in props && (
      <>
        <Action icon={<Edit />} />
        <Action icon={<Delete />} />
      </>
    )}
  </>
);

const Action = props => (
  <div class="action">
    <a href="#">{props.icon}</a>
  </div>
);

const DisplayMetaItem = props => (
  <span class="meta-item">{props.children}</span>
);

const DisplayAuthor = props => <span class="author">{props.children}</span>;

const DisplayContent = props => <p class="content">{props.children}</p>;

const DisplayReplies = props => <div class="replies">{props.children}</div>;
const DisplayComment = props => (
  <>
    <div class="comment-wrap display-comment">
      <div class="avatar-wrap">
        <Avatar initials="MM" />
      </div>
      <div class="display-wrap">
        <div class="meta">
          <DisplayAuthor>{props.author}</DisplayAuthor>
          <DisplayMetaItem>{props.timestamp}</DisplayMetaItem>
          {"edited" in props && <DisplayMetaItem>Edited</DisplayMetaItem>}
        </div>
        <DisplayContent>{props.children}</DisplayContent>
        <DisplayCommentToolbar>{props.actions}</DisplayCommentToolbar>
      </div>
    </div>
    <DisplayReplies>{props.replies}</DisplayReplies>
  </>
);

const Conversation = props => (
  <div class="conversation-wrap">{props.children}</div>
);

function App() {
  return (
    <>
      <CssReset />
      <CssVariables colors spacers />

      <DevExample title="Empty, idle comment input">
        <CommentInput idle-empty />
      </DevExample>

      <DevExample title="Active comment with input">
        <CommentInput active />
      </DevExample>

      <DevExample title="Active comment with extra content">
        <CommentInput active extras="some extra custom content" />
      </DevExample>

      <DevExample
        title="Comment in display mode"
        notes="The component comes supplied with a default action bar. If an app wants custom actions, they must compose their own action bar using the icon button components supplied."
      >
        <DisplayComment
          actions={<DisplayCommentDefaultToolset logged-in />}
          author="Logged in user"
          timestamp="3 days ago"
          logged-in
        >
          The vaccination result rate is abnormally high in this region. Can
          this be explained @Siyabonga Okafor? This is an important issue to
          fix.
        </DisplayComment>
      </DevExample>

      <DevExample
        title="Conversation"
        notes="Replies to a comment use the same comment component, except the wrapper has a margin left. DHIS2 replies do not support more than one level of replies, so nesting replies on replies is not supported yet. So, the default toolset needs to omit the reply action if the comment is a reply."
      >
        <Conversation>
          <DisplayComment
            author="Example Name"
            timestamp="Just now"
            actions={<DisplayCommentDefaultToolset />}
          >
            Content
          </DisplayComment>
          <DisplayComment
            author="Currently logged in user"
            timestamp="2 days ago"
            logged-in
            actions={<DisplayCommentDefaultToolset logged-in />}
            replies={
              <DisplayComment
                author="Example Name"
                timestamp="5 hours ago"
                actions={<DisplayCommentReplyToolset />}
              >
                This is a reply to the above comment
              </DisplayComment>
            }
          >
            Content
          </DisplayComment>
          <DisplayComment
            author="Example Name"
            timestamp="3 days ago"
            edited
            actions={<DisplayCommentDefaultToolset />}
          >
            Content
          </DisplayComment>
          <CommentInput idle-empty />
        </Conversation>
      </DevExample>
    </>
  );
}

export default App;
