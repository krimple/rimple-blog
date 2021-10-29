const fs = require('fs');
const Parser = require('rss-parser');
const rssDataRaw = fs.readFileSync('../content/tech-rss.xml');

async function parseFeed() {
  const parser = new Parser();
  let feed = await parser.parseString(rssDataRaw.toString());
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

  return feed;
}

module.exports = { parseFeed };
