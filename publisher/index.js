const fs = require('fs');
const guid = require('guid');

const { getPosts, addPost } = require('./process-graphql');
const { parseFeed } = require('./feedparser');

(async() => {
  const feedData = await parseFeed();
  feedData.forEach(item => {
    addPost(item.title, [], item.content, guid.create().value, item.isoDate, true);
    console.log(item.title + ':' + item.link)
  });
  const posts = await getPosts();
  console.log(posts);
})();

// getPosts();


