import React from 'react'
import {Link} from 'react-router-dom'
import './Notes.css'

function Notes(props) {
    const notes = props.store.map(item => {
        const noteLink = `/note/${item.id}`;
        let date = new Date(item.modified);
		return (
		<li className='list-btn' key={item.id}>
            <h2><Link to={noteLink}>{item.name}</Link></h2>
            <p>Date Modified: {date.toDateString()}</p>
			<button>Delete</button>
        </li>
		)
    });

    return (
        <div className='notesContainer'>
            <ul className='allNotes'>
                {notes}
                <button>Add Note</button>
            </ul> 
        </div> 
    )
    
}

export default Notes