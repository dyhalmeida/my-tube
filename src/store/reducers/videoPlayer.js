const INITIAL_STATE = {
    video: {}
}

const videoPlayer = (state = INITIAL_STATE, action) => {
    if (action.type === 'VIDEO_PLAYER') {
        return {
            video: action.video
        }
    }
    return state;
}

export default videoPlayer;