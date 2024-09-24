import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

interface User {
  username: string;
  name: string;
  avatar: string;
}

const mockUsers: User[] = [
  { username: 'john_doe', name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
  { username: 'jane_smith', name: 'Jane Smith', avatar: 'https://via.placeholder.com/150' },
  { username: 'alice_jones', name: 'Alice Jones', avatar: 'https://via.placeholder.com/150' },
  // 추가적인 모의 사용자 데이터
];

const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const user = mockUsers.find((u) => u.username === username);

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="user-profile-container">
      {/* 좌측 네비게이션 바 */}
      <div className="sidebar">
        <div className="logo">Instagram</div>
        <nav className="menu">
          <ul>
            <li><a href="/">Profile</a></li>
            <li><a href="/search">Search</a></li>
          </ul>
        </nav>
      </div>

      {/* 우측 프로필 섹션 */}
      <div className="profile-content">
        <header className="profile-header">
          <div className="profile-info">
            <div className="profile-image">
              <img src={user.avatar} alt={user.username} />
            </div>
            <div className="profile-details">
              <div className="profile-username">
                <h2>{user.username}</h2>
                {/* 추가적인 버튼들 (팔로우 등) */}
              </div>
              <ul className="profile-stats">
                <li>게시물 <strong>10</strong></li>
                <li>팔로워 <strong>150</strong></li>
                <li>팔로우 <strong>200</strong></li>
              </ul>
            </div>
          </div>
        </header>

        {/* 탭 버튼 등 추가 가능 */}
        {/* 게시물 섹션 등 추가 가능 */}
      </div>
    </div>
  );
};

export default UserProfile;
