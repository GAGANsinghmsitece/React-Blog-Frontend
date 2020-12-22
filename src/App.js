import React from 'react';
import{Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Category from './pages/Category.js';
import Home from './pages/Home.js';
import PostTags from './pages/PostTags.js';
import MainPost from './pages/MainPost.js';
function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/Category" component={Category}/>
        <Route path="/Tags" component={PostTags}/>
        <Route path="/Post/:id" component={MainPost}/>
      </Switch>
    </main>
  );
}

export default App;
