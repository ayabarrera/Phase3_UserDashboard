import BlogPosts from '../components/BlogPost';
import { getUserData } from '@/lib/dal';
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';
import styles from './dashboard.module.css';

export default async function Dashboard() {
  const response = await getUserData();
  const posts = await client.request(readItems('posts'));

  return (
    <main className={styles.contentContainer}>
      <h1>Hello, {response?.user?.first_name || 'User'}</h1>

      <section className={styles.postSection}>
        <h2>Your Posts</h2>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </section>

      <section className={styles.blogpostsSection}>
        <BlogPosts />
      </section>
    </main>
  );
}
