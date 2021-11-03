import Link from 'next/link';
import styles from './posts.module.css';
import {getPosts} from '../../shared/graphql';

export default function renderPosts(request: any) {
    console.dir(request);
    const { posts } = request;
    const cards = posts.blogPosts.map((post: any, index: number) => {

        return (
            <section className={styles.blogPosts} key={post.postSlug}>
                <div className={styles.card}>
                    <h2>
                        <Link href={`/posts/${post.postSlug}`}>
                            <a>{post.title}</a>
                        </Link>
                    </h2>
                    <div className={styles.postBody}
                        dangerouslySetInnerHTML={{__html: post.postContent}}>
                    </div>
                </div>
            </section>
        );
    });

    return (
        <section className={styles.blogPosts}>
            { cards}
        </section>
    );
};

export async function getStaticProps(context: any) {
    const posts = await getPosts();
    return { props: { posts } };
}
