export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after build
    //token: 'BQBavbsy1TbsP3-PyJEf3Rhj1mLM0CMIZAl8vhbmiPfFRsmAvhdgFF7M0_HA3ur-meMvRWZU6BHQ4tMCyJO89qpM0NxpRfIk8JIJUz9AtesvbMBB-r-tR0SN_dj8080FUNKuxUPSnj3e6nLSvuM_JFfwMFDwoV_K1myRBqP1IKq-LViyS9oQ,'
};

const reducer = (state, action) => {
    console.log(action);

        switch(action.type) {
            case 'SET_USER':
                return  {
                    ...state,
                    user: action.user
                };

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                }

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                }
                
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                };

            case "SET_TOP_ARTISTS":
                return {
                    ...state,
                    top_artists: action.top_artists,
                };

            default:
                return state;
        }

}

export default reducer;