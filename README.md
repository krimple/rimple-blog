# Rimple Blog
A simple example using Next.JS to pre-render content from a GraphCMS headless CMS into a static blog using Next.js.

Features:
* Next Router
* Pre-rendered routes
* Data porting from RSS feed into GraphCMS to publish data
* Querying of GraphCMS data to render page using `graphql-request` lightweight library.
* Passing of environment key and url for GraphCMS with .env file (hence not checked in)

Setup with Yarn:

```
$ yarn
```

Run in development mode:

```
yarn run dev
```

Build static pages

```
yarn run build
```

Serve static pages / next services

``` 
yarn run start
```

Graphql Schema:

```graphql

```
