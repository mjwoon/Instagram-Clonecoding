//프로필 기본화면에서 불러올 게시글 컴포넌트
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Profile.css';

interface Comment {
  username: string;
  text: string;
}

interface Post {
  id: number;
  imageUrl: string;
  likes: number;
  comments: Comment[];
}

const mockPosts: Post[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    likes: 120,
    comments: [{ username: 'user1', text: 'Nice post!' }],
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    likes: 150,
    comments: [],
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/300',
    likes: 90,
    comments: [],
  },
];

Modal.setAppElement('#root'); // 모달 접근성 설정

const ProfilePosts: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const [hideLikes, setHideLikes] = useState(false);
  const [hideComments, setHideComments] = useState(false);

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
    setIsMoreOptionsOpen(false); // 모달 닫을 때 더보기 옵션도 초기화
  };

  const handleAddComment = () => {
    if (selectedPost && newComment.trim()) {
      const updatedPost = {
        ...selectedPost,
        comments: [
          ...selectedPost.comments,
          { username: 'currentUser', text: newComment },
        ],
      };
      setSelectedPost(updatedPost);
      setNewComment('');
    }
  };

  const handleDeletePost = () => {
    // 게시글 삭제 처리 로직
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  const toggleMoreOptions = () => {
    setIsMoreOptionsOpen(!isMoreOptionsOpen);
  };

  return (
    <div className="post-grid">
      {mockPosts.map((post) => (
        <div key={post.id} className="post-item" onClick={() => openModal(post)}>
          <img src={post.imageUrl} alt={`Post ${post.id}`} />
          <div className="post-overlay">
            {!hideLikes && <span>{post.likes} ❤️</span>}
            <span>{post.comments.length} 💬</span>
          </div>
        </div>
      ))}

      {selectedPost && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="post-modal"
          overlayClassName="post-modal-overlay"
        >
          <div className="modal-header">
            <button className="more-button" onClick={toggleMoreOptions}>⋮</button>
            <button className="close-button" onClick={closeModal}>&times;</button>
          </div>

          <div className="modal-content">
            <div className="modal-image-section">
              <img src={selectedPost.imageUrl} alt={`Post ${selectedPost.id}`} className="modal-image" />
            </div>

            <div className="modal-info">
              <div className="comments-section">
                {!hideComments && selectedPost.comments.map((comment, index) => (
                  <p key={index}><strong>{comment.username}</strong>: {comment.text}</p>
                ))}
              </div>

              <textarea
                placeholder="댓글을 입력하세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleAddComment}>댓글 달기</button>

              <div className="modal-actions">
                <button>❤️ 좋아요</button>
                <button>💾 저장</button>
              </div>
            </div>
          </div>

          {/* 더보기 옵션 모달 */}
          {isMoreOptionsOpen && (
            <div className="more-options-modal"> {/* 세로로 긴 모달 */}
              <button onClick={handleDeletePost}>게시글 삭제</button>
              <button>게시글 수정</button>
              <button onClick={() => setHideLikes(!hideLikes)}>
                {hideLikes ? '좋아요 개수 표시하기' : '좋아요 개수 숨기기'}
              </button>
              <button onClick={() => setHideComments(!hideComments)}>
                {hideComments ? '댓글 기능 활성화' : '댓글 기능 해제'}
              </button>
              <button onClick={() => alert('링크 복사 완료!')}>링크 복사</button>
              <button onClick={toggleMoreOptions}>취소</button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ProfilePosts;