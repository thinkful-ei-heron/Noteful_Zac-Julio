import React, { Component } from 'react'
import Header from './Header'
import Folder from './Folder'
import Notes from './Notes'
import store from '../store'
import './Main.css'


export class Main extends Component {
    constructor(props) {
        super(props);

	this.state = {
        store: store
    }
    }


	handleFolder = (folderId) => {
        // aFoo={this.state.foos.find(foo => foo.id === routeProps.match.params.foodId)}
        // takes in folder id, and returns all the notes corresponding to that id
	}
	
	handleNote = (noteId) => {
        
    }

    render() {
        return (
            <div className='main'>
              <Header />
              <main>
              <Folder store={this.state.store.folders} handleFolder={this.handleFolder} />
              <Notes store={this.state.store.notes} handleNote={this.handleNote} />
              </main>
            </div> 
        )
    }
}


export default Main