import React from 'react'
import CharacterInfo from './characterInfo'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getCharacterInfoThCr} from '../../redux/characterInfoReducer'

class CharacterInfoContainer extends React.Component {
    componentDidMount = () => {
        this.props.getCharacterInfoThCr(this.props.match.params.UserId);        
    }
    render(){
        return(
            <div>
                <CharacterInfo characterData = {this.props.characterData}/>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return{
        characterData: state.charactersInfo.characterData
    }
}
let mapDispatchToProps = {

    getCharacterInfoThCr
}
let WithUrlCharInfo = withRouter(CharacterInfoContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlCharInfo)