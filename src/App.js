import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostsPage from './pages/PostsPage/posts.page';
import Root from './pages/root';
import PostPage from './pages/SinglePostPage/post.page';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/posts",
          element: <PostsPage />
        },
        {
          path: "/posts/:postId",
          element: <PostPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
