export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            let friend = action.friend;
            return {...state, friends: [...state.friends, friend]}
            break;
        case "REMOVE_FRIEND":
            let filter = state.friends.filter(friend => friend.id !== action.id)
            return {...state, friends: filter}
            
            break;
        default:
            return state;
            break;
    }
}
