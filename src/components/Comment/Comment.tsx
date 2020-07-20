import React from 'react';
import { CommentInterface } from '../../Interfaces/Interfaces';

import './Comment.css';

type Props = {
  comment: CommentInterface;
};

export const Comment: React.FC<Props> = ({ comment }) => (
  <>
    <h4 className="comment__name">{comment.name}</h4>
    <a className="comment__link" href={comment.email}>{comment.email}</a>
    <p className="comment__text">{comment.body}</p>
  </>
);
