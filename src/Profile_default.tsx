import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePosts from './Profile_posts';
import SavedPosts from './Profile_saved';
import TaggedPosts from './Profile_tagged';
import Search from './Search'; // Search 모달 컴포넌트 추가
import './Profile.css';
import dummyImg from './img2.png'

const ProfileDefault: React.FC = () => {
  // 현재 선택된 탭을 저장하는 state (기본값은 'posts')
  const [activeTab, setActiveTab] = useState('posts');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // 모달 상태 관리
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleProfileClick = () => {
    navigate('/'); // 버튼 클릭 시 /로 navigate
  };
  
  const handleEditClick = () => {
    navigate('/edit'); //버튼 클릭 시 /edit으로 navigate
  }

  // 버튼 클릭에 따라 activeTab 값이 변경됨
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // 검색 모달 열기
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  // 검색 모달 닫기
  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className="profile-container">
      {/* 좌측 네비게이션 바 */}
      <div className="sidebar">
        <div className="logo">Instagram</div>
        <nav className="menu">
          <ul>
            <li><button onClick={handleProfileClick}>Profile</button></li>
            <li><button onClick={openSearchModal}>Search</button></li> 
          </ul>
        </nav>
        {/* <img src={dummyImg}/> */}
      </div>

      {/* 우측 프로필 섹션 */}
      <div className="profile-content">
        <header className="profile-header">
          <div className="profile-info">
            <div className="profile-image">
              <img src="https://via.placeholder.com/250" alt="Profile" />
            </div>
            <div className="profile-details">
              <div className="profile-username">
                <h2>username</h2>
                <button onClick={handleEditClick} className="edit-btn">프로필 편집</button>
                <button onClick={handleEditClick} className="edit-btn">보관된 스토리 보기</button>
                <span className="settings-icon">⚙️</span>
              </div>
              <ul className="profile-stats">
                <li>게시물 <strong>3</strong></li>
                <li>팔로워 <strong>150</strong></li>
                <li>팔로우 <strong>200</strong></li>
              </ul>
              <ul className="profile-stats">
                <li>사용자 이름</li>
              </ul>
            </div>
          </div>
          <div className="profile-story">
            <img src="https://via.placeholder.com/80" alt="story1"></img>
            <img src="https://via.placeholder.com/80" alt="story2"></img>
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

      {/* Search 모달 */}
      {isSearchModalOpen && <Search closeModal={closeSearchModal} />} {/* 모달이 열려있을 때만 Search 컴포넌트 렌더링 */}
    </div>
  );
};

export default ProfileDefault;