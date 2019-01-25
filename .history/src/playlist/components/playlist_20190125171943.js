import Media from './media.js';
import React from 'react';
import './playlist.css';
import Play from '../../icons/components/play';

function Playlist(props) {
    const playlist = props.data.categories[0].playlist;
    console.log(props.data);
    return (
        <div className="Playlist">
        <Play
        size={50}
        color="red"/>
        <Play
        size={50}
        color="red"/>
        <Play
        size={50}
        color="red"/>
            {
                playlist.map((item) => {
                    return <Media key={item.id} {...item} />
                })
            }
        </div>
    )
}

export default Playlist;
