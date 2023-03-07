import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import NotFoundPage from './pages/404page';
import PostsPage from './pages/PostsPage/Posts.page';
import PostPage from './pages/SinglePostPage/Post.page';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
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
