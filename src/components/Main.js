import React, { Component } from 'react'
import Folder from './Folder'
import Notes from './Notes'


export class Main extends Component {

    render() {
        return (
            <div className='container'>
                <Folder store={this.props.store.folders} />
                <Notes store={this.props.store.notes} />
            </div> 
        )
    }
}

export default Main
