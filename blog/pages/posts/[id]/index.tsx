import {getPosts, getPost, getPostKeys} from '../../../shared/graphql';

export default function renderPost(request: any) {
  console.dir(request);
  const { post } = request;
   return (
     <section className="blogPost">
       <div className="title">
         {post.title}
       </div>
     </section>
   );
};

export async function getStaticPaths() {
  const postIds = await getPostKeys();
  console.dir('postIds', postIds);
  if (postIds.blogPosts && postIds.blogPosts.length > 0) {
    const paths = postIds.blogPosts.map((p: any) => ({ params: { id: p.postSlug } }));
    return {
      paths, fallback: false
    };
  } else {
    throw new Error('posts not found');
  }
}

export async function getStaticProps(context: any) {
  console.log('**** GETTING PROPS FOR CONTEXT', context);
  const {params} = context;
   console.log('rendering page with guid ', params);
   const post = await getPost(params.id);
   console.log(`post is ${params.id}`);
   console.log(`got ${post} back.`);
   return {
      props: {
         post
      }
   };
}
