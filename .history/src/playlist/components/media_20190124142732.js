import React, {Component} from 'react'
import './media.css'
class Media extends Component {
    render() {
        const styles = {
            container:{
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media">
                <div>
                    <img
                        src="./images/covers/bitcoin.jpg"
                        alt=""
                        width={260}
                        height={160}
                    />

                    <h3>¿Por qué aprender React?</h3>
                    <p>Leonidas Esteban</p>
                </div>
            </div>
        )
    }
}

export default Media;