import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notesArray: [],
  },
  mutations: {
    addNote(state) {
      state.notesArray.push({
        titleNote: 'назва примітки',
        content: 'зміст',
      })
    },
    startNotesArray(state, arr){
      state.notesArray = arr.slice()
    },
    deleteNotesArray(state, key){
      state.notesArray.splice(key, 1)
    },
  },
  actions: {
    mountNotes(ctx) {
      if(!window.localStorage.getItem("notes-array")) {
        return;
      }
      let arr = JSON.parse(window.localStorage.getItem("notes-array"));
      ctx.commit("startNotesArray", arr);
    },
    deleteNote(ctx, key) {
      ctx.commit("deleteNotesArray", key);
    }
  },
  getters: {
    getNotesArray(state) {
      return state.notesArray;
    },
  },
})