import React from 'react'
import {Link} from 'react-router-dom'
import './Folder.css'

function BackBtn(props) {
    
    return (
        <ul className='allFolders'>
			<li className='folder-btn'>
                <Link to={`/folder/${props.folder}`}>Go back</Link>
        	</li>
			<li>
                <h3>{props.name}</h3>
            </li>
        </ul>  
    )
}

export default BackBtn