import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = "EDIT_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const THUMB_UP_DOWN = "THUMB_UP_DOWN";

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

const boundAddComment = text => dispatch(addComment(text));
boundAddComment("Add own comment");

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text: text,
    id: id
  }
}

const boundEditComment = (text, id) => dispatch(editComment(text, id));
boundEditComment("Any text to edit", 34);

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(34);

function thumbUpDown(id, ratingFunction) {
  return {
    id: id,
    thumb: ratingFunction
  }
}

const boundThumbUpDown = id => dispatch(thumbUpDown(id, ratingfunction);
boundThumbUpDown(34, rating);