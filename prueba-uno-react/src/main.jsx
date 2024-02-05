import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UsersApp } from './UsersApp'

/*
PROPS:
import { PrimerComponente } from './PrimerComponente'
<PrimerComponente titulo='Esta sección es de props'/>
*/

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UsersApp />
	</React.StrictMode>,
)
