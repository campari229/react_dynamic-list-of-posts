import React from 'react';
import { FullPost } from '../../Interfaces/Interfaces';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList/CommentsList';

import './Post.css';

type Props = {
  post: FullPost;
};

export const Post: React.FC<Props> = ({ post }) => (
  <>
    <div className="post">
      <div className="post__user user">
        <UserInfo userData={post.user} />
      </div>
      <div className="post__info">
        <h3 className="post__title">
          {post.title}
        </h3>
        <p className="post__text">
          {post.body}
        </p>
      </div>
    </div>
    <CommentsList comments={post.comments} />
  </>
);
