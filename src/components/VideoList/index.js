import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List.Item key={video.id.videoId}>
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
                   {this.props.videoList.map(video => this.renderVideo(video))}
                </List>
            </div>
        )
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

export default connect(mapStateToProps, null)(VideoList);