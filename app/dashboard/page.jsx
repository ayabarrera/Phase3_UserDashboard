import styles from "./dashboard.module.css";
import Image from "next/image";
import { getUserData } from "@/lib/dal";
import client from "@/lib/directus";
import { readItems } from "@directus/sdk";
import BlogPosts from "../components/BlogPost";
import DailyQuote from "../components/DailyQuote";
import BlogStatsSidebar from "../components/BlogStatsSidebar";

export default async function Dashboard() {
  const response = await getUserData();
  const posts = await client.request(readItems("posts"));

  const totals = {
    views: posts.reduce((sum, post) => sum + (post.views || 0), 0),
    likes: posts.reduce((sum, post) => sum + (post.likes || 0), 0),
    comments: posts.reduce((sum, post) => sum + (post.comments || 0), 0),
  };

  const user = response?.user;

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.userInfo}>
          <Image src="/bear.png" width={72} height={72} alt="User" />
          <h3>{user?.first_name || "User"}</h3>
        </div>
      </aside>

      <main className={styles.contentArea}>
        <div className={styles.header}>
          <h1>Hello, {user?.first_name || "User"}</h1>
          <button className={styles.addButton}>+ Add New Post</button>
        </div>

        <div className={styles.cardsGrid}>
          <DailyQuote />
        </div>

        <section className={styles.blogpostsSection}>
          <BlogPosts />
        </section>

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
      </main>

      <BlogStatsSidebar posts={posts} totals={totals} />
    </div>
  );
}
