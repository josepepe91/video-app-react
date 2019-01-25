import Media from './media.js';
import React from 'react';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause.js';
import Volume from '../../icons/components/volume.js';
import FullScreen from '../../icons/components/full-screen.js';

function Playlist(props) {
    const playlist = props.data.categories[0].playlist;
    console.log(props.data);
    return (
        <div className="Playlist">
            <Play
                size={50}
                color="red" />
            <Pause size={50} />
            <Volume size={50} />
            <FullScreen size={50} />
            {
                playlist.map((item) => {
                    return <Media key={item.id} {...item} />
                })
            }
        </div>
    )
}

export default Playlist;
