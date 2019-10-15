import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Notes from './components/Notes'
import NoteContent from './components/NoteContent'
import Folder from './components/Folder'
import store from './store'
import BackBtn from './components/BackBtn'
import {Route, Switch} from 'react-router-dom'
import './components/Main.css'

export default class App extends React.Component {
  state = {
      store: store
  }

  handleFolder = (folderId) => {
    let filteredNotes = store.notes.filter(note => note.folderId === folderId);
    let newStore = {
        folders: this.state.store.folders,
        notes: filteredNotes
    };
    console.log(newStore);
    this.setState({store: newStore});
  }

  render() {
  return (
    <div className='app'>

      <Route path='/' component={Header}/>
      
      <main>
      <Switch>
      
        <Route exact path='/' render={() => 
          <Main store={this.state.store} />}
        />

        <Route exact path='/folder/:id' render={routeProps => {
          const {id} = routeProps.match.params;
          let filteredNotes = store.notes.filter(note => note.folderId === id);
          return(
            <div className='container'>
              <Folder store={this.state.store.folders} /> 
              <Notes store={filteredNotes}/>
            </div>
          )}}/>

          <Route exact path='/note/:id' render={routeProps => {
            const {id} = routeProps.match.params;
            let note = store.notes.filter(note => note.id === id);
            let currFolder = store.folders.find(folder => folder.id === note[0].folderId);
            return(
              <div className='container'>
                <BackBtn folder={note[0].folderId} name={currFolder.name} />
                <Notes store={note}/>
                <NoteContent content={note[0].content} />
              </div>
          )}}/>
      </Switch>
      </main>
    </div>
  )};
}