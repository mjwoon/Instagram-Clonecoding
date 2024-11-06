//프로필 태그됨
import React from 'react';

const TaggedPosts: React.FC = () => {
  return (
    <div className="post-grid">
      {/* 태그된 게시물들 */}
      <img src="https://via.placeholder.com/300" alt="Tagged Post 1" />
      <img src="https://via.placeholder.com/300" alt="Tagged Post 2" />
      <img src="https://via.placeholder.com/300" alt="Tagged Post 3" />
      {/* 더 많은 태그된 게시물 */}
    </div>
  );
};

export default TaggedPosts;

