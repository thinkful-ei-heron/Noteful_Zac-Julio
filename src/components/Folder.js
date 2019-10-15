import React from 'react'
import {NavLink} from 'react-router-dom'
import './Folder.css'

function Folder(props) {
    
	const list = props.store.map(item => {
		return (
		<li className='folder-btn' key={item.id}>
            <p><NavLink to={`/folder/${item.id}`} >{item.name}</NavLink></p>
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
