import React, {Component} from 'react'

class CharacterCard extends Component{
    render(){
        return(
            <div className={"flex-container column character-card"}>
                <div className = {"character-image-container"}>
                    <img src={this.props.character.image} alt={this.props.character.name}/>
                </div>
                <div className={"flex-container column content-container"}>
                    <div className={"character-name"}>{this.props.character.name}</div>
                    <div className={"character-gender"}>{this.props.character.gender}</div>
                    <div className={"character-species"}>{this.props.character.species} - {this.props.character.status}</div>
                    <a className={"card-action-button"} href={"/character/"+this.props.character.id} >Go To Detail</a>
                </div>
            </div>
        )
    }
}
export default CharacterCard;