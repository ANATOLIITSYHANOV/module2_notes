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
   box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
   border-radius: 10px;
   padding: 5px 10px;
   display: inline-block;
 }
 button:hover{
   background-color: rgb(255, 255, 255);
   color: rgb(221, 31, 38);
 }
 .button_addNote{
   position: fixed;
   top: 20px;
   left: 3%;
   z-index: 2;
 }
 @media screen and (max-width: 1200px){
   .contain_content{
     width: 96.5%;
   }
   .textarea{
     width: 99%;
   }
   .contain_content_big{
     width: 98%;
   }
   .textarea_big{
     width: 100%
   }
 }
 @media screen and (max-width: 1100px){
   .contain_content{
     width: 96%;
   }
   .contain_content_big{
     width: 98%;
   }
   .textarea_big{
     width: 100%
   }
 }
 @media screen and (max-width: 920px){
   .contain_content{
     width: 97%;
     margin: 0 0 10px 10px;
   }
   .contain_content_big{
     width: 98%;
   }
   .textarea_big{
     width: 100%
   }
 }
 @media screen and (max-width: 840px){
   .note_div{
     box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.75);
   }
   .contain_content{
     width: 96.5%;
   }
   .contain_title{
     margin: 40px 0 0 40px;
   }
   button{
     font-size: 20px;
   }
   .contain_content_big{
     width: 98%;
   }
   .textarea_big{
     width: 100%
   }
 }
 @media screen and (max-width: 700px){
   .div-clear{
     height: 12vh;
   }
   .contain_content{
     width: 96%;
   }
   .contain_title{
     margin: 40px 0 0 14px;
     width: 100%;
   }
   .input-content{
     font-size: 20px;
   }
   .contain_content_big{
     width: 97.5%;
   }
   .textarea_big{
     width: 99.5%
   }
 }
 @media screen and (max-width: 600px){
    button{
     font-size: 18px;
     box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.75);
   }
   .contain_content{
     width: 97%;
     margin: 0 0 10px 5px;
   }
   .contain_title{
     margin: 40px 0 0 15px;
   }
   .input-content{
     font-size: 18px;
   }
   .contain_content_big{
     width: 98%;
   }
   .textarea_big{
     width: 100%
   }
   .input-content_big{
     font-size: 20px;
   }
 }
 @media screen and (max-width: 550px){
   .contain_title{
     margin: 40px 0 0 10px;
     height: 35px;
   }
   .input-content{
     font-size: 16px;
   }
   .contain_content{
     height: 80%;
   }
   .contain_content_big{
     height: 85.5%;
   }
   .input-content_big{
     font-size: 20px;
   }
 }
 @media screen and (max-width: 480px){
   .div-clear{
     height: 11vh;
   }
   .contain_title{
     margin: 40px 0 0 5px;
   }
   .input-content{
     font-size: 14px;
   }
   .contain_content{
     margin: 0 0 10px 3px;
     width: 98%;
   }
   .input-content_big{
     font-size: 19px;
   }
 }
</style>
