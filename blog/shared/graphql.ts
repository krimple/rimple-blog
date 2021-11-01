import dotenv from 'dotenv';
import {gql, GraphQLClient} from 'graphql-request';``

const env = dotenv.config({
  path: '../.env'
}).parsed || {};

const cmsEndpoint = env.GRAPHCMS_CONTENT_ENDPOINT;
const token = env.GRAPHCMS_PUBLISHED_TOKEN;

const graphQLClient = new GraphQLClient(cmsEndpoint, {
  headers: {
    authorization: `Bearer ${token}`
  },
});

const GET_POST_GUIDS = gql`
    query getPosts {
      blogPosts {
         postSlug
      }
    }
`;

const GET_POSTS = gql`
    query getPosts {
      blogPosts {
         id
         title
         postSlug
         postContent
         postTime
      }
    }
`;

const GET_POST = gql`
query blogPost($where: BlogWhereInput!) {
  blogPosts(where: $where) {
    id
    title
    postSlug
    postContent
    postTime
  }
}
`;

export async function getPostKeys() {
  try {
    const result = await graphQLClient.request(GET_POST_GUIDS);
    return result;
  } catch (e) {
    console.log('error!');
    console.error(e);
    throw e;
  }
}

export async function getPosts() {
  try {
    const result = await graphQLClient.request(GET_POSTS);
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getPost(postSlug: string) {
  try {
    const result = await graphQLClient.request(
      GET_POST, {
        where: {
          postSlug
        }
      });

    // note: the result is returned with a key of the collection name
    // and within that key is an array of results.
    if (result?.blogPosts) {
      return result.blogPosts[0];
    } else {
      if (result?.blogPosts.length === 0) {
        console.log('No post found with specified GUID');
        return null;
      } else if (result?.blogPosts.length > 1) {
        console.log('Too many posts with same GUID');
        return null;
      } else {
        console.log('Unknown error');
        return null;
      }
    }
  } catch (e) {
    console.dir(e);
    throw e;
  }
}
