export const selectUser = (user) => {
    console.log("You clicked on User: " , user.first);

    return {
        type : "User_Selected",
        payload : user
    };
};