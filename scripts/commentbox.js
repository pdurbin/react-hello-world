'use strict';

var React = require('react');

/*
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
*/


var CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        {/* <h1>Comments</h1> */}
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
          <Comment author={comment.author}>
            {comment.text}
          </Comment>
      );
    });
    return (
      <div className="commentList">
      {/*
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      */}
      {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render() {
    //var rawMarkup = this.props.children;
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {/* this.props.children */}
        {/* this.props.children.toString() */}
        {/* marked(this.props.children.toString()) */}
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

module.exports = CommentBox;
