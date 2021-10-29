const dotenv = require('dotenv');
const fs = require('fs');

const { connect, getPosts } = require('./process-graphql');
const { parseFeed } = require('./feedparser');

/*parseFeed()
    .then(
        (data) => {
            console.dir(data);
        }
    );
 */

getPosts();


