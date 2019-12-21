import React, {Component} from 'react';
class CharacterDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
        character : null,
         episodes : null
    }
  }
  getCharacter = () => {
    fetch("https://rickandmortyapi.com/api/character/" + this.props.match.params.id).then((data) => {
        if (data.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + data.status);
            return;
          }
          data.json().then((response) => {
            var episodes = response.episode.map((episode) => {
                var parts = episode.split('/');
                var key = "episode - " + parts[parts.length - 1];
                return <a className={"flex-container row center both action-button"} href={"/episode/" + parts[parts.length - 1]} key={key}>Episode {parts[parts.length - 1]}</a>;
            });
            this.setState({character : response, episodes : episodes})
            
          })
    });
  }
  componentDidMount(){
    this.getCharacter();
  }
  render(){
    return(
        <div className={"container"}>
            {
                this.state.character && 
                <div className={'flex-container column character-details'}>
                    <h2 className={"title yellow"}>
                        {this.state.character.name}
                    </h2>
                    <div className={'flex-container row cover-width'}>
                        <div className={"image-container"}>
                            <img src={this.state.character.image}></img>
                        </div>
                        <div className={"flex-container column character-details-container"}> 
                            <div className={"flex-container row cover-width info-row"}>
                                <div className={"info-detail-column"}>Status :</div>
                                <div className={"info-detail-column green"}>
                                        {this.state.character.status}
                                </div>
                            </div>   
                            <div className={"flex-container row cover-width info-row"}>
                                <div className={"info-detail-column"}>Species :</div>
                                    <div className={"info-detail-column dark-orange"}>
                                        {this.state.character.species}
                                    </div>
                            </div>
                            <div className={"flex-container row cover-width info-row"}>
                                <div className={"info-detail-column"}>Gender :</div>
                                    <div className={"info-detail-column light-blue"}>
                                        {this.state.character.gender}
                                    </div>
                            </div>
                            <div className={"flex-container row cover-width info-row"}>
                                <div className={"info-detail-column"}>Origin :</div>
                                <div className={"info-detail-column dark-red"}>
                                    <a href={this.state.character.origin.url}  
                                    className={"action-button dark-red"}>
                                        {this.state.character.origin.name} 
                                        <span>></span>
                                    </a>
                                </div>
                            </div>
                            <div className={"flex-container row cover-width info-row"}>
                                <div className={"info-detail-column"}>Current Location :</div>
                                <div className={"info-detail-column"}>
                                    <a href={this.state.character.location.url} 
                                    className={"action-button purple"}>
                                        {this.state.character.location.name} 
                                        <span>></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className={"title red"}>Episodes</h2>
                    {
                            <div className={"flex-container row cover-width horizontal center episodes-container"}>
                                {
                                    this.state.episodes
                                }
                            </div>

                    }
                </div>
            }
        </div>  
    )
  }
}

export default CharacterDetail;
