import React from 'react';
import PostsPage from './pages/PostsPage/posts.page';

function App() {
  return (
    <div className='flex flex-col p-4'>
      <header className='p-4 text-indigo-500 font-bold'><h1 className='text-2xl'>Blog sample web</h1></header>
      <PostsPage />
    </div>
  );
}

export default App;
