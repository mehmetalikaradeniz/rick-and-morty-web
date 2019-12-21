import React, {Component} from 'react';
import CharacterCard from '../components/CharacterCard';
import Paginator from '../components/Paginator';
class CharacterListPagination extends Component{
    constructor(props){
      super(props);
      this.state = {
        activePage : 1,
        pageInfo : null,
        characters : null,
      };
    }
    getCharacters = () => {
        console.log(this.state.activePage);
        var url = this.state.activePage == 1 ? 'https://rickandmortyapi.com/api/character' :  'https://rickandmortyapi.com/api/character/?page=' +  this.state.activePage;
        console.log(url);
      this.setState(
        {
          characters : null,
        }
      );
      fetch(url)
      .then((data) => {
        if (data.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + data.status);
          return;
        }
        data.json().then((response) => {
          setTimeout(() => { //Start the timer
            this.setState(
              {
                characters : response.results,
                pageInfo : response.info
              }
            );
          }, 1400)
        })
      });
    }
    paginatorClicked = async (data) =>{
        await this.setState(
            {
              activePage : data,
            }
          );
        this.getCharacters();
    }
    componentDidMount = () => {
      this.getCharacters();
    }
    render(){
      return(
        <div className={"container"}>
          {
            this.state.characters != null ?
            <div className={"flex-container row center both character-list"}> 
              {
                this.state.characters.map((character) => {
                  return(
                    <CharacterCard character={character}  key={'character-' + character.id}/>
                  )
                })
              }
            </div>
            :
            <div className={"flex-container column center both loading"}> 
              <img src="/loader3.gif" />
            </div>
          }
          {
            this.state.characters &&
                <Paginator paginatorClicked = {this.paginatorClicked} pageInfo = {this.state.pageInfo} activePage = {this.state.activePage}/>
          }
        </div>
      )
    }
  }
  
  export default CharacterListPagination;
  