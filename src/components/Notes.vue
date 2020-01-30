<template>
 <div class="note_div"  
      :class="[{'show_div': showdiv}, color]"
      @dblclick="bigDiv">

   <button @click="smallDiv"
           title="dblclick">
    Y 
   </button>

   <button @click="deleteNote(keyNote)" id="button-delete">X</button>
   
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
   
   <div class="div-calor div-calor_main"
        :class="color"
        v-if="showColor"
        @click="showColor=!showColor"></div>
   <div v-else class="container-div-calor">
   <div class="div-calor div-calor_red" @click="changeColor('red')"></div>
   <div class="div-calor div-calor_green" @click="changeColor('green')"></div>
   <div class="div-calor div-calor_white" @click="changeColor('white')"></div>
   </div>
 </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data (){
   return {
     showTitle: false,
     showContent: false,
     showdiv: false,
     showColor: true,
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
    color () {
      return this.getNotes[this.keyNote].color;
    }
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
    ...mapMutations({
      addColor: "addColor",
    }),
    changeColor(color) {
      this.addColor({
        key: this.keyNote,
        color: color,
      });
      this.showColor = true;
    }
  },
  watch: {
    title () {
       window.localStorage.setItem("notes-array", JSON.stringify(this.getNotes));
    },
    content () {
       window.localStorage.setItem("notes-array", JSON.stringify(this.getNotes));
    },
    color () {
       window.localStorage.setItem("notes-array", JSON.stringify(this.getNotes));
    },
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
   box-shadow: 0px 0px 28px 5px rgba(0, 0, 0, 0.75);
   border-radius: 10px;
   position: relative;
 }
 #button-delete{
   position: absolute;
   top: 3%;
   right: 3%;
   font-size: 18px;
 }
 .white{
   background-color: rgb(233, 231, 193) ;
 }
 .green{
   background-color: aqua;
 }
 .red{
   background-color: red;
 }
 .container-div-calor{
   position: absolute;
   bottom: 3%;
   right: 3%;
 }
 .div-calor{
   width: 15px;
   height: 15px;
   border-radius: 50%;
   cursor: pointer;
   display: inline-block;
   margin-left: 2px;
 }
 .div-calor:hover{
   transform: scale(1.1, 1.1);
 }
 .div-calor_red{
   background-color: red;
 }
 .div-calor_green{
   background-color: green;
 }
 .div-calor_white{
   background-color: white;
 }
 .div-calor_main{
   height: 11px;
   width: 11px;
   border: 4px solid  rgb(221, 31, 38);
   position: absolute;
   bottom: 3%;
   right: 3%;
 }
 .div-calor_main:hover{
   transform: scale(1.3, 1.3);
   border: 4px solid  white;
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