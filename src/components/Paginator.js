import React, {Component} from 'react';
class Paginator extends Component{
  constructor(props){
    super(props);
    this.state = {
        hasFirst : false,
        hasPrevious : false,
        hasNext : false,
        hasLast : false,
    }
  }
  handlePaginationClicked = (ev) =>{
      var command = ev.target.getAttribute('data-command');
      var page = 0;
      if(command != null){
          switch(command){
              case 'first':
                  page = 1;
                break;
              case 'previous':
                  page = this.props.activePage - 1;
                break;
              case 'next':
                    page = this.props.activePage + 1;
                break;
              case 'last':
                  page = this.props.pageInfo.pages;
                break;
            }
      }
      this.props.paginatorClicked(page);
  }
  initWidget = () =>{
    switch(this.props.activePage){
        case 1:
            this.setState({
                hasPrevious : false,
                hasFirst : false,
                hasNext : this.props.pageInfo.pages > 1 ? true : false,
                hasLast : this.props.pageInfo.pages > 1 ? true : false
            });
        break;
        case this.props.pageInfo.pages:
                this.setState({
                    hasNext : false,
                    hasLast : false,
                    hasPrevious : this.props.pageInfo.pages > 1 ? true : false,
                    hasFirst : this.props.pageInfo.pages > 1 ? true : false
                });
        break;
        default:
                this.setState({
                    hasNext : true,
                    hasLast : true,
                    hasPrevious : true,
                    hasFirst : true
                });
            break;
    }
  }
  componentWillReceiveProps = (nextProps) => {
      this.initWidget();
  }
  componentDidMount = () => {
    this.initWidget();
  } 
  render(){
    return(
        <div className={"flex-container row horizontal center both pagination-container"}>
            {
                this.state.hasFirst &&
                <div className={"pagination-button first"} onClick={this.handlePaginationClicked} data-command="first">First</div>
            }
            {
                this.state.hasPrevious && 
                <div className={"pagination-button previous"} onClick={this.handlePaginationClicked} data-command="previous">Prev</div>
            }

            <div className={"pagination-button current"}>{this.props.activePage}</div>
            {
                this.state.hasNext &&
                <div className={"pagination-button next"} onClick={this.handlePaginationClicked} data-command="next">Next</div>
            }
            {
                this.state.hasLast &&
                <div className={"pagination-button last"} onClick={this.handlePaginationClicked} data-command="last">Last</div>
            }
        </div>
    )
  }
}

export default Paginator;
