export default {
  state: {
    notesArray: [],
  },
  mutations: {
    addNote(state) {
      state.notesArray.push({
        titleNote: '(ᵔ.ᵔ)',
        content: '¬‿¬',
        color: 'white',
        fontSize: 19,
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
    incrementFontSize(state, key){
      state.notesArray[key].fontSize++
    },
    decrementFontSize(state, key){
      state.notesArray[key].fontSize--
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
      if(confirm(`${ctx.getters.getDelete}`)){
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