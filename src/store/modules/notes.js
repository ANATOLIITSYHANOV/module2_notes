export default {
  state: {
    notesArray: [],
  },
  mutations: {
    addNote(state) {
      state.notesArray.push({
        titleNote: 'title',
        content: 'зміст',
        color: 'white',
      })
    },
    startNotesArray(state, arr){
      state.notesArray = arr.slice()
    },
    deleteNotesArray(state, key){
      state.notesArray.splice(key, 1)
    },
    addColor(state, payload){
      state.notesArray[payload.key].color = payload.color
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
      if(confirm("Delete?")){
      ctx.commit("deleteNotesArray", key);
      }
    },
  },
  getters: {
    getNotesArray(state) {
      return state.notesArray;
    },
  },
}