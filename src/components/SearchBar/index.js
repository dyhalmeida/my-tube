import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <Segment raised>
                    <Input type="text" placeholder="Search..." size="large" icon="search" />
                </Segment>
            </div>
        );
    };
}
export default SearchBar;