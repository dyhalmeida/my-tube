const INITIAL_STATE = {
    videoList: [],
    loading: false,
    error: false
}

const searchVideo = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'INIT_SEARCH': return {
            loading: true,
            ...state,
        } 

        case 'SEARCH_SUCCESS': return {
            videoList: [...action.videoList],
            loading: false,
            ...state,
        }  

        case 'SEARCH_ERROR': return {
            loading: false,
            error: false,
            videoList: []
        }
    
        default: return state;
    }

}

export default searchVideo;