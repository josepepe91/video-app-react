import React, { Component } from 'react';
import Media from './media.js';

function Playlist (props) {
    render() {
        const playlist = this.props.data.categories[0].playlist;
        console.log(this.props.data);
        return (
            <div className="Playlist">
                {
                    playlist.map((item) => {
                        return <Media key={item.id} {...item}/>
                    })
                }
            </div>
        )
    }
}

export default Playlist;
