import React from 'react';
import styles from './BlogStatsSidebar.module.css'; // Sidebar styles
import BlogStatsChart from './BlogStatsChart'; // chart component

const BlogStatsSidebar = ({ posts, totals }) => {
  return (
    <aside className={styles.rightSidebar}>
      <h2 className={styles.sidebarTitle}>Blog Stats</h2>

      {/* Chart */}
      <div className={styles.chartContainer}>
        <p className={styles.chartLabel}>Views: By Post</p>
        <BlogStatsChart posts={posts} />
      </div>

      {/* Stats */}
      <div className={styles.statsContainer}>
        <div className={styles.statSection}>
          <h3>Total Views</h3>
          <p>{totals.views}</p>
        </div>

        <div className={styles.statSection}>
          <h3>Total Likes</h3>
          <p>{totals.likes}</p>
        </div>

        <div className={styles.statSection}>
          <h3>Total Comments</h3>
          <p>{totals.comments}</p>
        </div>
      </div>
    </aside>
  );
};

export default BlogStatsSidebar;
