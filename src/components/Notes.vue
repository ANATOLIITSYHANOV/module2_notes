<template>
 <div class="note_div"  
      :class="[{'show_div': showdiv}, color]"
      @dblclick="bigDiv">

   <div @click="bigDiv"
        title="dblclick"
        class="small-big-button button-big"
        v-if="!showdiv">
   </div>
   <div @click="smallDiv"
        class="small-big-button button-small"
        v-else>
   </div>

   <button @click="deleteNote(keyNote)" id="button-delete">X</button>
   
   <div class="content-container">
     <div class="cont-contain_divwidth">
       <input v-focus 
          type="text"
          v-model="getNotes[keyNote].titleNote"
          v-if="showTitle" 
          @blur="changeTitleBox"
          class="input-content" 
          maxlength="30"/>
       <span  v-else 
          @click="changeTitleBox"
          class="input-content">
        {{title}}
       </span>
     </div> 
     <textarea v-if="showContent"
             v-focus
             v-model="getNotes[keyNote].content"
             @blur="changeContentBox"
             class="textarea-content">
     </textarea>
     <div v-else
        @click="changeContentBox"
        class="textarea-content"
        contenteditable="true">
      {{content}}
     </div>
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
      this.showdiv = !this.showdiv;
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
   height: 75vh;
   margin-left: 3.333%;
   margin-bottom: 20px;
   box-shadow: 0px 0px 28px 5px rgba(0, 0, 0, 0.75);
   border-radius: 10px;
   position: relative;
 }
 .small-big-button{
   background-color: inherit;
   height: 11px;
   width: 11px;
   border: 4px solid  rgb(221, 31, 38);
   position: absolute;
   bottom: 3%;
   left: 3%;
   cursor: pointer;
 }
.button-big:hover{
  transform: scale(1.1, 1.1);
}
.button-small:hover{
  transform: scale(0.8, 0.8);
}
 #button-delete{
   position: absolute;
   top: 3%;
   right: 3%;
   font-size: 14px;
   box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
 }
 .white{
   background: linear-gradient(45deg, rgba(255, 255, 255), rgba(233, 231, 193));
 }
 .green{
   background: linear-gradient(45deg, rgb(162, 252, 174), rgb(139, 247, 112));
 }
 .red{
   background: linear-gradient(45deg, rgb(253, 179, 179), rgb(255, 140, 140));
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
   transform: scale(1.1, 1.1);
 }
 .content-container{
   width: 92%;
   height: 90%;
   margin-top: 30px;
   overflow: hidden;
 }
 .cont-contain_divwidth{
   height: 50px;
 }
 .input-content{
   display: block;
   outline: none;
   background: inherit;
   border: none;
   font-size: 28px;
   margin-left: 80px;
   height: 30px;
 }
 .textarea-content{
   margin: 0 0 0 50px;
   width: 90%;
   min-height: 70vh;
   display: block;
   background: inherit;
   outline: none;
   font-size: 22px;
   white-space: pre-wrap;
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