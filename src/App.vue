<template>
  <div id="app">
   <button v-on:click.prevent="addNote(keyNote)" 
           class="button_addNote">
    Add Note
   </button>
   
   <notes v-for="(note, noteKey) in getNotes" :key="noteKey" :keyNote="noteKey"> 
   </notes>

  </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from "vuex";
import Notes from './components/Notes.vue';

export default {
  data() {
    return {
      keyNote: null,
    }
  },
  components: {
    Notes,
  },
  computed: {
    ...mapGetters({
      getNotes: "getNotesArray",
    }),
  },
  methods:{
    ...mapActions({
      mountNotes: "mountNotes",
    }),
    ...mapMutations({
      addNote: "addNote"
    }),
  },
  watch: {
    getNotes() {
       window.localStorage.setItem("notes-array", JSON.stringify(this.getNotes));
    }
  },
  mounted() {
      this.mountNotes();
  },
}
</script>

<style>
 body{
 margin: 0;
 }
 #app{
   background: linear-gradient(45deg, rgb(243, 217, 217), rgba(151, 176, 196, 0.8));
   min-height: 100vh;
 }
 .button_addNote{
   margin: 0 auto 20px;
   box-shadow: 0px 0px 28px 5px rgba(0, 0, 0, 0.75);
 }
 button{
   display: block;
 }
</style>
