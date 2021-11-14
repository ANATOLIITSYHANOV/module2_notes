<template>
  <div id="app">
   <button v-on:click.prevent="addNote" 
           class="button_addNote">
    {{addSheet}}
   </button>

   <div class="div-clear" :style = "heightDivClear"></div>

   <lang-menu/>

   <notes v-for="(note, noteKey) in getNotes" 
          :key="noteKey" 
          :keyNote="noteKey"
          :deviseHeight="deviseHeight"> 
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
      deviseHeight: 0,
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
    heightDivClear() {
      let deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (deviceWidth < 1024) {
        return `height: ${Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.12}px;`
      } 
      return `height: ${Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.14}px;`
    },
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
    this.deviseHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
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
   position: absolute;
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
     width: 99%
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
     width: 99%
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
     margin: 40px 0 0 20px;
   }
   button{
     font-size: 18px;
   }
   .contain_content_big{
     width: 98%;
   }
   .textarea_big{
     width: 99%
   }
   .input-content{
     font-size: 24px;
   }
 }
 @media screen and (max-width: 700px){
   .contain_content{
     width: 96%;
   }
   .contain_title{
     margin: 40px 0 0 14px;
     width: 95%;
   }
   .contain_content_big{
     width: 97.5%;
   }
   .textarea_big{
     width: 99%
   }
 }
 @media screen and (max-width: 600px){
    button{
     font-size: 18px;
     box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.75);
   }
    .note_div{
     box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
   }
   .contain_content{
     width: 97%;
     margin: 0 0 10px 5px;
   }
   .contain_title{
     margin: 40px 0 0 10px;
     width: 95%;
   }
   .contain_content_big{
     width: 98%;
   }
   .textarea_big{
     width: 99%
   }
   .input-content_big{
     font-size: 20px;
   }
 }
 @media screen and (max-width: 550px){
   .contain_title{
     margin: 40px 0 0 7px;
     height: 35px;
   }
   .input-content{
     font-size: 18px;
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
   .contain_title{
     margin: 40px 0 0 2px;
     width: 98%;
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
