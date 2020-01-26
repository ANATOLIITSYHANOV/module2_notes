<template>
 <div class="note_div"  
      :class="{'show_div': showdiv}"
      @click="bigDiv">

   <button @dblclick="smallDiv"
           title="dblclick">
    Y 
   </button>
   
   <input v-focus 
          type="text"
          v-model="getNotes[keyNote].titleNote"
          v-if="showTitle" 
          @blur="changeTitleBox" />
   <span  v-else 
          @click="changeTitleBox">
   {{title}}
   </span>

   <textarea v-if="showContent"
             v-focus
             v-model="getNotes[keyNote].content"
             @blur="changeContentBox">
   </textarea>
   <div v-else
        @click="changeContentBox">
   {{content}}
   </div>
   <button @dblclick="deleteNote(keyNote)">X</button>
 </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  data (){
   return {
     showTitle: false,
     showContent: false,
     showdiv: false,
     }
  },
  props:{
    keyNote: Number,
  },
  computed: {
    ...mapGetters({
        getNotes: "getNotesArray",
    }),
    title () {
      return this.getNotes[this.keyNote].titleNote;
    },
    content () {
      return this.getNotes[this.keyNote].content;
    },
  },
  methods: {
    changeTitleBox (){
     this.showTitle = !this.showTitle
    },
    changeContentBox () {
      this.showContent = !this.showContent
    },
    bigDiv (){
      this.showdiv = true;
    },
    smallDiv (){
      this.showdiv = false;
    },
    ...mapActions({
      deleteNote: "deleteNote",
    }),
  },
  watch: {
    title () {
       window.localStorage.setItem("notes-array", JSON.stringify(this.getNotes));
    },
    content () {
       window.localStorage.setItem("notes-array", JSON.stringify(this.getNotes));
    }
  },
}
</script>


<style >
.note_div{
   display: inline-block;
   width: 45%;
   height: 400px;
   margin-left: 3.333%;
   margin-bottom: 20px;
   background-color: rgb(233, 231, 193) ;
   box-shadow: 0px 0px 28px 5px rgba(0, 0, 0, 0.75);
   border-radius: 10px;
 }
 span{
   display: block;
 }
.display_none{
   display: none;
 }
textarea{
  width: 90%;
  min-height: 60%;
  display: block;
}
.show_div{
   width: 98%;
    height: 98%;
    position: fixed;
    z-index: 1;
    top: 1%;
    left: 1%;
    margin-left: 0;
 }
</style>