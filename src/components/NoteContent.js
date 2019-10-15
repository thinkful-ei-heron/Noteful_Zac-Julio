import React from 'react'

function NoteContent(props) {
    return(
        <div className='desc'>
            <p>{props.content}</p>
        </div>
	);
}

export default NoteContent

