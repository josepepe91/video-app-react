import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media'
const app = document.getElementById('app')

//const holaMundo = <h1>¡Hola mundo!</h1>;
//ReactDOM.render(que voy a renderizar, donde lo haré);
render(<Media/>, app);