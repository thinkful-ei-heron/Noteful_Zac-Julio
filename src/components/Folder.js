import React from 'react'
import './Folder.css'

function Folder(props) {
    
	const list = props.store.map(item => {
		return (
		<li className='folder-btn' key={item.id} onClick={() => props.handleFolder(item.id)}>
            <p>{item.name}</p>
        </li>
		)
	});

    return (
        <ul className='allFolders'>
            {list}
            <button>Add Folder</button> 
        </ul>  
    )
}

export default Folder
