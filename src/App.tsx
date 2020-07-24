import React, { useState } from 'react';
import './App.css';
import {
  getData,
  PostsURL,
  UsersURL,
  CommentsURL,
} from './api';

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
    const users = await getData<User[]>(UsersURL);
    const posts = await getData<Post[]>(PostsURL);
    const comments = await getData<CommentInterface[]>(CommentsURL);
    const preperedPosts = posts.map((post) => ({
      ...post,
      user: users.find((user) => user.id === post.userId) as unknown as User,
      comments: comments.filter((comment) => comment.postId === post.id),
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
