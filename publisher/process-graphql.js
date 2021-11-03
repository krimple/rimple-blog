const config = require('./config');
const { GraphQLClient, gql } = require('graphql-request');
const cmsEndpoint = config.GRAPHCMS_CONTENT_ENDPOINT;
const token = config.GRAPHCMS_PUBLISHED_TOKEN;

const graphQLClient = new GraphQLClient(cmsEndpoint, {
  headers: {
    authorization: `Bearer ${token}`
  },
})

const GET_POSTS = gql`
    query getPosts {
      blogPosts {
        title
      }
    }
`;

const ADD_POST = gql`
mutation create($data: BlogCreateInput!) {
  createBlog(data: $data) {
    id
    title
    tags
    description
    postSlug
    published
    postTime
    postContent
  }
}`;

async function getPosts() {
    try {
        const result = await graphQLClient.request(GET_POSTS);
        console.log(result);
    } catch (e) {
        console.dir(e);
    }
}

async function addPost(title, tags, description, postContent, postSlug, postTime, published) {
  try {
    const result = await graphQLClient.request(ADD_POST, {
      data: {
        title,
        tags,
        description,
        postContent,
        postSlug,
        postTime,
        published
      }
    });
    console.log('added', result);
  } catch (e) {
    console.log('error!');
    console.error(e);
  }
}

module.exports = { getPosts, addPost };
