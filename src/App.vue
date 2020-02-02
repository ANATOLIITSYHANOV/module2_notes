<template>
  <div id="app">
   <button v-on:click.prevent="addNote" 
           class="button_addNote">
    {{addSheet}}
   </button>

   <div class="div-clear"></div>

   <lang-menu/>

   <notes v-for="(note, noteKey) in getNotes" 
          :key="noteKey" 
          :keyNote="noteKey"> 
   </notes>
  </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from "vuex";
import Notes from './components/Notes.vue';
import langMenu from './components/langMenu'

export default {
  data() {
    return {
      keyNote: null,
    }
  },
  components: {
    Notes,
    langMenu,
  },
  computed: {
    ...mapGetters({
      getNotes: "getNotesArray",
      addSheet: "getAddSheet",
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
   font-family: 'Roboto', sans-serif;
 }
 #app{
   background: linear-gradient(45deg, rgba(255, 232, 21, 0.7), rgba(120, 192, 252, 0.7)),url(../public/gerb-vinnici.png);
   background-position: center;
   background-repeat: no-repeat;
   min-height: 100vh;
   position: relative;
 }
 .div-clear{
   height: 14vh;
 }
 button{
   cursor: pointer;
   background-color: rgb(221, 31, 38);
   color: rgb(255, 255, 255);
   font-size: 24px;
   border: none;
   outline: none;
   box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.55);
   border-radius: 10px;
   padding: 5px 10px;
   display: inline-block;
 }
 button:hover{
   background-color: rgb(255, 255, 255);
   color: rgb(221, 31, 38);
 }
 .button_addNote{
   position: absolute;
   top: 20px;
   left: 3%;
 }
</style>
