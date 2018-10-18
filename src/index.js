import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { database } from './base'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App database={database} />, document.getElementById('root'))
registerServiceWorker()
