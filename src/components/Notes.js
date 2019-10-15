import React from 'react'
import './Notes.css'

function Notes(props) {
    const notes = props.store.map(item => {
		return (
		<li className='list-btn' key={item.id} onClick={() => props.handleNote(item.id)}>
			<h2>{item.name}</h2>
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