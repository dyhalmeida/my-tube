import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { videoSearch } from '../../store/actions/videoSearch';

class SearchBar extends Component {

    searchWord = e => {
        const KEY_ENTER = 13;
        if (e.keyCode === KEY_ENTER) {
            const word = e.target.value;
            this.props.videoSearch(word);
        }
    }

    render() {
        return (
            <div className="search-bar">
                <Segment raised>
                    <Input 
                        type="text" 
                        placeholder="Search..." 
                        size="large" 
                        icon="search"
                        onKeyDown={(e) => this.searchWord(e)}
                    />
                </Segment>
            </div>
        );
    };
}

// const mapStateToProps =
const mapDispatchToProps = (dispatch) => {
    return {
        videoSearch: (word) => dispatch(videoSearch(word))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);