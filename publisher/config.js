const dotenv = require('dotenv');
const env = dotenv.config({
  path: '../.env'
}).parsed;

import { GraphQLClient, gql } from 'graphql-request';

const cmsEndpoint = env.GRAPHCMS_CONTENT_ENDPOINT;
const token = env.GRAPHCMS_PUBLISHED_TOKEN;

module.exports = env;
