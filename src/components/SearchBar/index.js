import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';

class SearchBar extends Component {

    searchWord = e => {
        const KEY_ENTER = 13;
        if (e.keyCode === KEY_ENTER) {
            const word = e.target.value;
            console.log(word);
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
export default SearchBar;