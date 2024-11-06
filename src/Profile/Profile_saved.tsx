//프로필 저장된 게시물
import React from 'react';

const SavedPosts: React.FC = () => {
  return (
    <div className="post-grid">
      {/* 저장된 게시물들 */}
      <img src="https://via.placeholder.com/300" alt="Saved Post 1" />
      <img src="https://via.placeholder.com/300" alt="Saved Post 2" />
      <img src="https://via.placeholder.com/300" alt="Saved Post 3" />
      {/* 더 많은 저장된 게시물 */}
    </div>
  );
};

export default SavedPosts;