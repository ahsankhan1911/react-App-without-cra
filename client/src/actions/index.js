export const selectUser = (user) => {
    console.log("You clicked on User: " , user.first);

    return {
        type : 'USER_SELECTED',
        payload : user
    };
};