import React from 'react'
import {Link} from 'react-router-dom'
import './Notes.css'

function Notes(props) {
    const notes = props.store.map(item => {
		const noteLink = `/note/${item.id}`;
		return (
		<li className='list-btn' key={item.id}>
            <h2><Link to={noteLink}>{item.name}</Link></h2>
            <p>Date Modified: {item.modified}</p>
			<button>Delete</button>
        </li>
		)
    });

    return (
        <ul className='allNotes'>
            {notes}
            <button>Add Note</button>
        </ul>  
    )
    
}

export default Notes