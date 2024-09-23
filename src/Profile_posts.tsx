//프로필 기본화면에서 불러올 게시글 컴포넌트
import React from 'react';

const ProfilePosts: React.FC = () => {
  return (
    <div className="post-grid">
      {/* 게시물들 */}
      <img src="https://via.placeholder.com/300" alt="Post 1" />
      <img src="https://via.placeholder.com/300" alt="Post 2" />
      <img src="https://via.placeholder.com/300" alt="Post 3" />
      {/* 더 많은 게시물 */}
    </div>
  );
};

export default ProfilePosts;
