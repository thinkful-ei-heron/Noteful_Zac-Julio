import React from 'react'
import {Link} from 'react-router-dom'

function BackBrn(props) {
    
    return (
        <ul className='allFolders'>
            <Link to={`/folder/${props.folder}`}>Go back</Link>
			<h3>{props.name}</h3>
        </ul>  
    )
}

export default BackBrn