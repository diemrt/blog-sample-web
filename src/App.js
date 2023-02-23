import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostsPage from './pages/PostsPage/posts.page';
import PostPage from './pages/PostsPage/SinglePostPage/post.page';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PostsPage />
    },
    {
      path: "/post/:postId",
      element: <PostPage />
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
