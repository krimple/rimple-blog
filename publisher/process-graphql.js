const config = require('./config');
const fetch = require('cross-fetch');
const { setContext } = require('@apollo/client/link/context');
const {
  ApolloClient,
  InMemoryCache,
  useQuery,
  createHttpLink,
  gql
} = require('@apollo/client');

const GET_POSTS = gql`
    query getPosts {
      blogPosts {
        title
      }
    }
`;

function connect() {
    console.dir(config);
  const cmsEndpoint = config.GRAPHCMS_CONTENT_ENDPOINT;
  const token = config.GRAPHCMS_PUBLISHED_TOKEN;
  console.log(cmsEndpoint);
  const httpLink = createHttpLink({ uri: cmsEndpoint, fetch });
  const authLink = setContext((_, { headers }) => {
    console.log('authorizing a link', arguments);
  	const newHeaders = {
  		headers: {
  			...headers,
  			authorization: `Bearer: ${token}`
  		}
  	};
    console.dir(newHeaders);
  });
  console.dir(authLink);

  return new ApolloClient({
  	link: authLink.concat(httpLink),
  	cache: new InMemoryCache()
  });
}

const connection = connect();

async function getPosts() {
    try {
        const result = await connection.query({query: GET_POSTS})
        console.log(result);
    } catch (e) {
        console.dir(e);
    }
}

module.exports = { connect, getPosts };
