const PostsURL = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/posts.json';
const UsersURL = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/users.json';
const CommentsURL = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/comments.json';

export const getUsers = async () => (
  fetch(UsersURL)
    .then(response => response.json())
);

export const getPost = async () => (
  fetch(PostsURL)
    .then(response => response.json())
);

export const getComments = async () => (
  fetch(CommentsURL)
    .then(response => response.json())
);
