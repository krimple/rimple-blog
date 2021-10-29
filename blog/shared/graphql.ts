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
    console.log('post guids', result);
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
    console.log(result);
    return result;
  } catch (e) {
    console.dir(e);
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

    if (result) {
      return result[0];
    } else {
      if (result.length === 0) {
        console.log('No post found with specified GUID');
        return null;
      }
      if (result.length > 1) {
        console.log('More than one post with same slug.');
        return null;
      }
    }
  } catch (e) {
    console.dir(e);
    throw e;
  }
}
