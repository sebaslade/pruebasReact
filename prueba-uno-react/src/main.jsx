import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {ListadoApp} from './ListadoApp'

/*
PROPS:
import { PrimerComponente } from './PrimerComponente'
<PrimerComponente titulo='Esta sección es de props'/>
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoApp value={0}/>
  </React.StrictMode>,
)
