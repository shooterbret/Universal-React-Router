// increment
// export function increment(index) {
//     return {
//         type: 'INCREMENT_LIKES',
//         index
//     }
// }
export function AddText(t) {
   // console.log("Action Creators Working");
    return (dispatch) => {
        dispatch({type: 'ADD_TEXT',
        t})
    }
}

// add comment
// export function addComment(postId, author, comment) {
//     return {
//         type: 'ADD_COMMENT',
//         postId,
//         author,
//         comment
//     }
// }

// remove comment

// export function removeComment(postId, i) {
//     return {
//         type: 'REMOVE_COMMENT',
//         i,
//         postId
//     }
// }
