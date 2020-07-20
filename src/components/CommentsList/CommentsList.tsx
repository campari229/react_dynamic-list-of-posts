import React from 'react';
import { CommentInterface } from '../../Interfaces/Interfaces';

import { Comment } from '../Comment/Comment';

import './CommentsList.css';

type Props = {
  comments: CommentInterface[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list">
    {comments.map(comment => (
      <li key={comment.id} className="comment-list__item comment">
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);
