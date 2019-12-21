import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class index extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={"container"}>
        <div className={"greeting"}>
          
          <div className={"flex-container row cover greeting-actions-container"}>
            <div className={"flex-container row cover-height center both greeting-action"}>
                <a className={"action-button"} href="/characters">List With Pagination</a>
                <a className={"action-button"} href="/characters-infinite-scroll">List With Infinite Scroll</a>
            </div>
            <div className={"flex-container row cover-height greeting-action"}>
              <img className={"greeting-image"} src="/rick.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index;
