import React, {Component} from 'react'
import Media from './media.js'

class Playlist extends Component {
    render() {
        conts playlist = this.props.data.categories[0].playlist;
        console.log(this.props.data);
        return (
            <div></div>
        )
    }
}

export default Playlist;
