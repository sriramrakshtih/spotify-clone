export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after build
    token: 'BQBavbsy1TbsP3-PyJEf3Rhj1mLM0CMIZAl8vhbmiPfFRsmAvhdgFF7M0_HA3ur-meMvRWZU6BHQ4tMCyJO89qpM0NxpRfIk8JIJUz9AtesvbMBB-r-tR0SN_dj8080FUNKuxUPSnj3e6nLSvuM_JFfwMFDwoV_K1myRBqP1IKq-LViyS9oQ,'
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
            default:
                return state;
        }

}

export default reducer;