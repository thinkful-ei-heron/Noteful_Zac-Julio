import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Notes from './components/Notes'
import Folder from './components/Folder'
import store from './store'
import {Route, Switch} from 'react-router-dom'

// handleNote = (noteId) => {
// }

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
    // console.log(this),
    // <h1>Hello</h1>
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
        
        /* <Route exact path='/note/:id' render={() =>
          <Notes store={this.state.store.notes}/>}
        /> */}
       
      </Switch>
      
    </div>
  )};
}

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