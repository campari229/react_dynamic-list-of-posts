import React, { useState } from 'react';
import { FullPost } from '../../Interfaces/Interfaces';

import { Post } from '../Post/Post';

import './PostList.css';

type Props = {
  posts: FullPost[];
};

export const PostsList: React.FC<Props> = ({ posts }) => {
  const [postsList, setFilter] = useState<FullPost[]>(posts);

  const filter = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const filteredList = [...posts].filter((post) => {
      return post.body.includes(value) || post.title.includes(value);
    });

    setFilter(filteredList);
  };

  return (
    <div>
      <input
        type="textarea"
        onChange={filter}
        className="filter__input"
        placeholder="Search by title or body"
      />
      <ul className="posts-list">
        {postsList.map(post => (
          <li className="posts-list__item" key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
