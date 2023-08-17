import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <div className='pt-20 mx-auto max-w-screen-md'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment >
  );
}

export default App;
