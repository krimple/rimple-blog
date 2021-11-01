import Link from 'next/link';
import {getPosts} from '../../shared/graphql';

export default function renderPosts(request: any) {
    console.dir(request);
    const { posts } = request;
    const postRows = posts.blogPosts.map((p: any, index: number) => (
       <tr key={`post-${p.postSlug}`}>
           <td>{ p.title }</td>
           <td><Link href={`/posts/${ p.postSlug }`}>{p.postSlug}</Link></td>
       </tr>
    ))
    return (
        <section className="blogPosts">
            <table >
                <thead>
                  <th>Title</th>
                  <th>Slug</th>
                </thead>
                <tbody>
                { postRows }
                </tbody>
            </table>
            <div className="title">
            </div>
        </section>
    );
};

export async function getStaticProps(context: any) {
    const posts = await getPosts();
    return { props: { posts } };
}
