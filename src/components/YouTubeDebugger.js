// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    bitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, bitrate: 12
            }
        })
    }

    resolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.bitrate} className='bitrate'>{this.state.settings.bitrate}</button>
                <button onClick={this.resolution} className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
        )
    }

}

export default YouTubeDebugger