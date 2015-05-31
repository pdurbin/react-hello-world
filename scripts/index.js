'use strict';

// old Hello World example
//var React = require('react'),
//    App = require('./app');
//React.render(<App />, document.body);

var React = require('react'),
    CommentBox = require('./commentbox');

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);

// Upcoming
//React.render(
//  <CommentBox url="comments.json" />,
//  document.getElementById('content')
//);
