// @flow
export const UPDATE = 'UPDATE';

var remote = require('electron').remote;
var fs = require('fs');
var Datastore = require('nedb');
var quranDB = new Datastore({ filename: 'D:/quran.db', autoload: false, onload:function(error) {console.log('haha');} });


function update(verseIndex) {
  return {
    type: UPDATE,
    verseIndex: verseIndex

  };
}

export function updateVerseIndex(dispatch, verseIndex) {
  dispatch(update(verseIndex));
}
export function searchQuery(dispatch, verseIndex) {
  dispatch(update(verseIndex));
}
