import React from 'react';
import{Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Category from './pages/Category.js';
import Home from './pages/Home.js';
import PostTags from './pages/PostTags.js';
import MainPost from './pages/MainPost.js';
import Category_detail from './pages/Category_detail.js';
import TagDetail from './pages/TagDetail.js';
import Error from './pages/Error.js';
function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/page/:pagenumber" component={Home} exact/>
        <Route path="/Category" component={Category} exact/>
        <Route path="/Category/:id" component={Category_detail} />
        <Route path="/Tags" component={PostTags} exact/>
        <Route path="/Tags/:id" component={TagDetail} />
        <Route path="/Post/:id" component={MainPost} exact/>
        <Route component={Error}/>
      </Switch>
    </main>
  );
}

export default App;
