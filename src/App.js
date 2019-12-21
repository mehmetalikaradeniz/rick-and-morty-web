import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharacterListPagination from './pages/CharacterListPagination'
import CharacterListInfiniteScroll from './pages/CharacterListInfiniteScroll'
import CharacterDetail from './pages/CharacterDetail'
import index from './pages/index'
import "./styles/dist/app.css"
class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <div className={'header'}>
          <nav className={"container"}>
            <ul className={"navigations flex-container row center vertical"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/characters">Character List With Pagination</Link>
              </li>
              <li>
                <Link to="/characters-infinite-scroll">Character List With Infinite Scroll</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Route path="/" exact component={index} />
        <Route path="/characters" component={CharacterListPagination} />
        <Route path="/characters-infinite-scroll" component={CharacterListInfiniteScroll} />
        <Route path="/character/:id" component={CharacterDetail} />
      </div>
    </Router>
    )
  }
}

export default App;