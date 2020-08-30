import { combineReducers } from 'redux';

import videoSearch from './videoSearch';
import videoPlayer from './videoPlayer';

const rootReducer = combineReducers({
    videoSearch,
    videoPlayer
});

export default rootReducer;