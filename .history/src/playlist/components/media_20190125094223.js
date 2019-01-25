import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './media.css';

class Media extends PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            author: props.author,
        }        
    }

    handleClick = (event) => {
        
    }

    render() {
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        src={this.state.cover}
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.state.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;