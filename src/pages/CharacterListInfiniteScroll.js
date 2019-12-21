import React, {Component} from 'react';
import CharacterCard from '../components/CharacterCard';
class CharacterListInfiniteScroll extends Component{
    constructor(props){
      super(props);
      this.state = {
        activePage : 1,
        pageInfo : null,
        characters : [],
        processing : false,
      };
    }
    getCharacters = () => {
        this.setState({processing : true});
      fetch('https://rickandmortyapi.com/api/character/?page=' +  this.state.activePage)
      .then((data) => {
        if (data.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + data.status);
          return;
        }
        data.json().then((response) => {
            setTimeout(() => {
                var characters = this.state.characters;
                response.results.map((ch) => {
                    characters.push(ch);
                });
    
                this.setState(
                  {
                    characters : characters,
                    pageInfo : response.info,
                    processing : false
                  }
                );
                
            }, 600);
        })
      });
    }
    pageScrolled = () => {
        if(this.state.processing == false){
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
                if(this.state.activePage + 1 <= this.state.pageInfo.pages){
                    this.setState({activePage : this.state.activePage + 1})    
                    this.getCharacters();
                }
            }
        }
    }
    goToTop = () =>{
        window.scrollTo(0, 0);
    }
    componentDidMount = () => {
      this.getCharacters();
      window.addEventListener('scroll', this.pageScrolled);
    }
    render(){
      return(
        <div className={"container"}>
          {
            this.state.characters &&
            <div className={"flex-container row center both character-list"}> 
              {
                this.state.characters.map((character) => {
                  return(
                    <CharacterCard character={character}  key={'character-' + character.id}/>
                  )
                })
              }
            </div>
          }
          {
              this.state.processing &&
              <div className={"flex-container column horizontal center infinite-loading"}>
                  <img src="/loading.gif" />
              </div>
          }
          <div className={"go-to-up"} onClick={this.goToTop}>
              <img src="./up-arrow.png"/>
          </div>
        </div>
      )
    }
  }
  
  export default CharacterListInfiniteScroll;
  