import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePosts from './Profile_posts';
import SavedPosts from './Profile_saved';
import TaggedPosts from './Profile_tagged';
import './Profile.css';

const ProfileDefault: React.FC = () => {
  // 현재 선택된 탭을 저장하는 state (기본값은 'posts')
  const [activeTab, setActiveTab] = useState('posts');

  // 버튼 클릭에 따라 activeTab 값이 변경됨
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      {/* 좌측 네비게이션 바 */}
      <div className="sidebar">
        <div className="logo">Instagram</div>
        <nav className="menu">
          <ul>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>
      </div>

      {/* 우측 프로필 섹션 */}
      <div className="profile-content">
        <header className="profile-header">
          <div className="profile-info">
            <div className="profile-image">
              <img src="https://via.placeholder.com/150" alt="Profile" />
            </div>
            <div className="profile-details">
              <div className="profile-username">
                <h2>username</h2>
                <Link to="/edit">
                  <button className="edit-btn">프로필 편집</button>
                </Link>
                <span className="settings-icon">⚙️</span>
              </div>
              <ul className="profile-stats">
                <li>게시물 <strong>10</strong></li>
                <li>팔로워 <strong>150</strong></li>
                <li>팔로우 <strong>200</strong></li>
              </ul>
            </div>
          </div>
        </header>

        {/* 탭 버튼 */}
        <div className="profile-tabs">
          <button 
            className={activeTab === 'posts' ? 'active' : ''}
            onClick={() => handleTabClick('posts')}
          >
            게시물
          </button>
          <button 
            className={activeTab === 'saved' ? 'active' : ''}
            onClick={() => handleTabClick('saved')}
          >
            저장됨
          </button>
          <button 
            className={activeTab === 'tagged' ? 'active' : ''}
            onClick={() => handleTabClick('tagged')}
          >
            태그됨
          </button>
        </div>

        {/* 선택된 탭에 따라 다른 게시글 컴포넌트 렌더링 */}
        <div className="profile-posts">
          {activeTab === 'posts' && <ProfilePosts />}
          {activeTab === 'saved' && <SavedPosts />}
          {activeTab === 'tagged' && <TaggedPosts />}
        </div>
      </div>
    </div>
  );
};

export default ProfileDefault;