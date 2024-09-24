import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Search.css';

Modal.setAppElement('#root');

interface User {
  username: string;
  name: string;
  avatar: string;
}

const mockUsers: User[] = [
  { username: 'john_doe', name: 'John Doe', avatar: 'https://via.placeholder.com/50' },
  { username: 'jane_smith', name: 'Jane Smith', avatar: 'https://via.placeholder.com/50' },
  { username: 'alice_jones', name: 'Alice Jones', avatar: 'https://via.placeholder.com/50' },
];

interface SearchProps {
  closeModal: () => void;
}

const Search: React.FC<SearchProps> = ({ closeModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [searchHistory, setSearchHistory] = useState<User[]>([]);

  useEffect(() => {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query === '') return;

    const results = mockUsers.filter(
      (user) =>
        user.username.toLowerCase().includes(query) ||
        user.name.toLowerCase().includes(query)
    );
    setSearchResults(results);

    const foundUser = mockUsers.find(
      (user) =>
        user.username.toLowerCase() === query ||
        user.name.toLowerCase() === query
    );
    if (foundUser && !searchHistory.find((u) => u.username === foundUser.username)) {
      setSearchHistory([foundUser, ...searchHistory]);
    }

    setSearchQuery('');
  };

  const handleDeleteHistory = (username: string) => {
    const updatedHistory = searchHistory.filter((user) => user.username !== username);
    setSearchHistory(updatedHistory);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Search Modal"
      className="search-modal"
      overlayClassName="search-overlay"
    >
      <button className="close-button" onClick={closeModal}>
        &times;
      </button>
      <h2>사용자 검색</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="사용자 이름 또는 닉네임을 검색하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>

      {searchHistory.length > 0 && (
        <div className="search-history">
          <h3>최근 검색</h3>
          <button className="clear-history" onClick={handleClearHistory}>
            검색 기록 지우기
          </button>
          <ul>
            {searchHistory.map((user) => (
              <li key={user.username}>
                <img src={user.avatar} alt={user.username} />
                <span>{user.name} (@{user.username})</span>
                <button className="delete-history" onClick={() => handleDeleteHistory(user.username)}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>검색 결과</h3>
          <ul>
            {searchResults.map((user) => (
              <li key={user.username}>
                <img src={user.avatar} alt={user.username} />
                <span>{user.name} (@{user.username})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default Search;
