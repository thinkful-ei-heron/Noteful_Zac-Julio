import React, { Component } from 'react'
import Folder from './Folder'
import Notes from './Notes'
import './Main.css'


export class Main extends Component {

    render() {
        return (
            <div className='main'>
              <main>
                <Folder store={this.props.store.folders} />
                <Notes store={this.props.store.notes} />
              </main>
            </div> 
        )
    }
}


export default Main
