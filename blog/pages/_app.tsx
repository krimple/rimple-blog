import '../styles/globals.css'
import type AppLayoutProps from 'next/app';
import React, { ReactNode } from 'react';
import '../styles/globals.css';
import Layout from "../components/layout/layout";

// adapted from https://github.com/ippo012/nextjs-starter/blob/master/src/pages/_app.tsx

// in case the layout doesn't exist for a given page, we take this silly default
// one instead.


// @ts-ignore
function getDefaultLayout(page) {
  return (
      <Layout>
        { page }
      </Layout>

  )
}

// the layout engine applied - see types added in next-env.d.ts
// as a Typescript workaround for the missing layout types in 2021
function MyApp(props: AppLayoutProps) {
  // @ts-ignore
  const { Component, pageProps } = props;
  // if no loyout, apply the default function above
  const getLayout = Component.getLayout || getDefaultLayout;
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp
