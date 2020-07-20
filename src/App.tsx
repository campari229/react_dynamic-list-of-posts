import React, { useState } from 'react';
import './App.css';
import { getPost, getUsers, getComments } from './api';
import {
  FullPost,
  Post,
  User,
  CommentInterface,
} from './Interfaces/Interfaces';
import { PostsList } from './components/PostsList/PostsList';

const App: React.FC = () => {
  const [fullPosts, setFullPosts] = useState<FullPost[]>([]);
  const [isLoading, switchIsLoading] = useState<boolean>(false);

  const getFullPosts = async () => {
    switchIsLoading(true);
    const users: User[] = await getUsers();
    const posts: Post[] = await getPost();
    const comments: CommentInterface[] = await getComments();
    const preperedPosts: FullPost[] = posts.map((post: Post) => ({
      ...post,
      user: users.find((user: User) => user.id === post.userId) as unknown as User,
      comments: comments.filter((comment: CommentInterface) => comment.postId === post.id),
    }));

    switchIsLoading(false);
    setFullPosts(preperedPosts);
  };

  return (
    <div className="App">
      {
        fullPosts.length
          ? <PostsList posts={fullPosts} />
          : (
            <button
              className="btn"
              type="button"
              onClick={getFullPosts}
              disabled={isLoading}
            >
              {`${isLoading ? 'Loading...' : 'Load'}`}
            </button>
          )
      }
    </div>
  );
};

export default App;
