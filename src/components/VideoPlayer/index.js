import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Advertisement, Embed } from 'semantic-ui-react';

class VideoPlayer extends Component {
    render() {
        return (
            <div className="video-player">
                {
                    !this.props.video.id && (
                        <Advertisement 
                        style={{ 'height': '433px' }}
                        unit="top banner"
                        test="Escolha um vídeo para redroduzir"
                    />
                    )
                }
                {
                    this.props.video.id && (
                        <div>
                            <Embed 
                                id={this.props.video.id.videoId} 
                                source="youtube"
                            />
                            <p className="video-player-title">{this.props.video.snippet.title}</p>
                            <p className="video-player-description">{this.props.video.snippet.description}</p>
                        </div>
                    )
                }
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { video } = state.videoPlayer;
    return {
        video,
    }
}
export default connect(mapStateToProps, null)(VideoPlayer);