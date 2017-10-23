import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

const post = {
  title: "This is my title",
  author: "Title goes here",
  body: "bunch of important body text will be read here",
  comments: ["comment 1", "comment number 2", "comment numero tres"]
};

// ReactDOM.render(<Post title={post.title} author={post.author} body={post.body} comments={post.comments}/>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
