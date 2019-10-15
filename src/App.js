import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Notes from './components/Notes'
import NoteContent from './components/NoteContent'
import Folder from './components/Folder'
import store from './store'
import BackBtn from './components/BackBtn'
import {Route, Switch} from 'react-router-dom'

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
      
      <Switch>
      
        <Route exact path='/' render={() => 
          <Main store={this.state.store} />}
        />

        <Route exact path='/folder/:id' render={routeProps => {
          const {id} = routeProps.match.params;
          let filteredNotes = store.notes.filter(note => note.folderId === id);
          return(
            <div>
              <Notes store={filteredNotes}/>
              <Folder store={this.state.store.folders} /> 
            </div>
          )}}/>

          <Route exact path='/note/:id' render={routeProps => {
            const {id} = routeProps.match.params;
            let note = store.notes.filter(note => note.id === id);
            let currFolder = store.folders.find(folder => folder.id === note[0].folderId);
            console.log(currFolder);
            return(
              <div>
                <Notes store={note}/>
                <NoteContent content={note[0].content} />
                <BackBtn folder={note[0].folderId} name={currFolder.name} />
              </div>
          )}}/>
        
        
       
      </Switch>
      
    </div>
  )};
}

/* <Route exact path='/note/:id' render={() =>
          <Notes store={this.state.store.notes}/>}
        /> */

/*  <div className="app">
            // Exact route - will only match /
            <Route exact path="/" component={HomePage} />
            // Inexact route - will match /settings, /settings/profile
            // and /settings/email
            <Route path="/settings" component={SettingsNavigation} />
            <Route
                exact
                path="/settings/profile"
                component={ProfileSettings}
            />
            // If you want to pass props to the component, use the render prop
            <Route
                exact
                path="/settings/email"
                render={() => <EmailSettings email="jturner@thinkful.com" />}
            />
        </div> */