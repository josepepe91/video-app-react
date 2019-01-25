import React, {Component} from 'react'

class Media extends Component {
    render() {
        const styles = {
            container:{
                color: 'aliceblue'
            }
        }
        return (
            <div style={styles.container}>
                <div>
                    <img
                        src=""
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