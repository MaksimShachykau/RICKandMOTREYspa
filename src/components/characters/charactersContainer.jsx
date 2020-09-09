import React from 'react'
import Characters from './characters'
import { connect } from 'react-redux';
import {getCharacterThCr, getFilterThCr} from '../../redux/characterReducer'
import { withRouter } from 'react-router-dom';


class CharactersContainer extends React.Component {
    constructor(props){
        super(props);
    } 

    componentDidMount = () =>{
        this.props.getCharacterThCr(this.props.currentPage)
            
    }
    setCurrentPageFilter = (page = this.props.currentPage, filter = null) => {
        this.props.getFilterThCr(page, filter);
    }
    
    render(){
        let allPages = []
        for(let i = 1; i <= this.props.allPages; i++){
            allPages.push(i)
        }
  
        return (
            <Characters characters = {this.props.characters} 
                        allPages = {this.props.allPages} 
                        setCurrentPageFilter = {this.setCurrentPageFilter} 
                        currentPage = {this.props.currentPage} 
                        filter = {this.props.filter}/>

        )
    }
}

let mapStateToPRops = (state) =>{
    return{
        characters: state.charactersPage.characters,
        allPages: state.charactersPage.allPages,
        currentPage: state.charactersPage.currentPage,
        filter: state.charactersPage.filter
    }
}
let mapDispatchToProps = {
    getCharacterThCr,
    getFilterThCr
}
let WithUrlCharacters = withRouter(CharactersContainer)

export default connect(mapStateToPRops, mapDispatchToProps)(WithUrlCharacters)