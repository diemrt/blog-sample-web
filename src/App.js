import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostsPage from './pages/PostsPage/posts.page';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <PostsPage />
  }])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
