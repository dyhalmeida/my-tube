import React, { Component } from 'react';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import videoPlayer from '../../store/actions/videoPlayer';

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List.Item 
                key={video.id.videoId} 
                onClick={() => this.props.handleVideoPlayer(video)}
                className="video-item"
            >
            <Image src={video.snippet.thumbnails.default.url} />
                <List.Content>
                <List.Header>{video.snippet.title}</List.Header>
                </List.Content>
            </List.Item>
        );
    }

    render() {
        return (
            <div className="video-list">
                <List animated verticalAlign="middle">
                    {this.props.loading && (
                        <Dimmer active>
                            <Loader size="medium">loading...</Loader>
                        </Dimmer>
                    )}
                   {this.props.videoList.map(video => this.renderVideo(video))}
                </List>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleVideoPlayer: (video) => dispatch(videoPlayer(video))
    }
}

const mapStateToProps = (state) => {
    const { videoList, loading, error } = state.videoSearch;
    return {
        videoList,
        loading,
        error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);