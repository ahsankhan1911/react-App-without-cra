export default function (state = null, action) {

    switch(action.payload) {
        case 'User_Selected':
           return action.payload;
    }

    return state;
}