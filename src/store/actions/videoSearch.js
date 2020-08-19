import youtubeSearch from 'youtube-api-v3-search';
import youtubeKey from '../../api';

/** 
 * Fluxo
 * Incia uma busca
 * Se OK retorna lista de vídeos
 * Senão retorna um erro
 *  */

export const initSearch = () => {
     return {
        type: 'INIT_SEARCH',
        loading: true,
        error: false
     }
 }

 export const searchSuccess = (videoList) => {
    return {
        type: 'SEARCH_SUCCESS',
        videoList,
        loading: false,
        error: false,
    }
 }

 export const searchError = () => {
     return {
         type: 'SEARCH_ERROR',
         loading: false,
         error: true
     }
 }

 export const videoSearch = word => {
    return dispatch => {
        dispatch(initSearch());
        youtubeSearch(youtubeKey, { q: word })
            .then((data) => dispatch(searchSuccess(data.items)))
            .catch(() => dispatch(searchError()))
    }
 }
