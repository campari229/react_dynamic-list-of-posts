export const PostsURL = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/posts.json';
export const UsersURL = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/users.json';
export const CommentsURL = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/comments.json';

export const getData = async <T>(url: string): Promise<T> => (
  fetch(url)
    .then(response => response.json())
);
