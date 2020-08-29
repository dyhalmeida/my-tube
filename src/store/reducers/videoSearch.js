const INITIAL_STATE = {
    videoList: [],
    loading: false,
    error: false
}

const searchVideo = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'INIT_SEARCH': return {
            videoList: [],
            loading: true,
            error: false
        } 

        case 'SEARCH_SUCCESS': return {
            videoList: [...action.videoList],
            loading: false,
            error: false,
        }  

        case 'SEARCH_ERROR': return {
            videoList: [],
            loading: false,
            error: false,
        }
    
        default: return state;
    }

}

export default searchVideo;