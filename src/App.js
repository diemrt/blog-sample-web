import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostsPage from './pages/PostsPage/posts.page';
import PostPage from './pages/SinglePostPage/post.page';

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
    <div className='text-slate-900 flex font-sans sm:h-screen flex-row justify-center sm:p-10'>
      <div className='w-96 sm:border-2 sm:border-slate-900'>
        <div className='sm:h-full sm:overflow-auto'>
          <RouterProvider router={router}/>
        </div>
      </div>
    </div>
  );
}

export default App;
