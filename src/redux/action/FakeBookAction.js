import { ADD_COMMENT } from "../typed/FakeBookType";

export const addCommentAction = (useComment) => ({
    type: ADD_COMMENT,
    useComment
})
