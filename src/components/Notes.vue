<template>
<transition name="transition-notes" appear>
 <div class="note_div"  
      :class="color"
      v-if="!showdiv">

   <div @click="bigDiv"
        class="small-big-button button-big"
        v-if="!showdiv">
   </div>
   <div @click="smallDiv"
        class="small-big-button button-small"
        v-else>
   </div>

   <button @click="deleteNote(keyNote)" id="button-delete">X</button>
   
   
   <div class="contain_title">
      <input v-focus 
             type="text"
             v-model="getNotes[keyNote].titleNote"
             v-if="showTitle" 
             @blur="changeTitleBox"
             class="input-content" 
             maxlength="25"/>
      <span  v-else 
             @click="changeTitleBox"
             class="input-content">
        {{title}}
      </span>
   </div>
   <div class="contain_content"> 
      <textarea v-if="showContent"
                v-focus
                v-model="getNotes[keyNote].content"
                @blur="changeContentBox"
                class="textarea-content textarea"
                wrap="off"
                :style="fontSize">
     </textarea>
     <div v-else
        @click="changeContentBox"
        class="textarea-content"
        :style="fontSize">
      <i>{{content}}</i>
     </div>
   </div>
   
   
   <div class="div-calor div-calor_main"
        :class="color"
        v-if="showColor"
        @click="showColor=!showColor">
   </div>
   <div v-else class="container-div-calor">
     <div class="div-calor div-calor_red" @click="changeColor('red')"></div>
     <div class="div-calor div-calor_green" @click="changeColor('green')"></div>
     <div class="div-calor div-calor_white" @click="changeColor('white')"></div>
   </div>

   <div class="container-fontsize">
     <button class="button-fontsize" @click="decrement(keyNote)">-</button>
     {{getNotes[this.keyNote].fontSize}}
     <button class="button-fontsize" @click="increment(keyNote)">+</button>
   </div>
 </div>
 
 <div v-else>
  <transition name="transition-notes_big" appear>
  <div :class="color"
      class="note_div-big">
   <div @click="bigDiv"
        class="small-big-button button-big"
        v-if="!showdiv">
   </div>
   <div @click="smallDiv"
        class="small-big-button button-small"
        v-else>
   </div>

   <button @click="deleteNote(keyNote)" id="button-delete">X</button>
   
   
   <div class="contain_title">
      <input v-focus 
             type="text"
             v-model="getNotes[keyNote].titleNote"
             v-if="showTitle" 
             @blur="changeTitleBox"
             class="input-content" 
             maxlength="25"/>
      <span  v-else 
             @click="changeTitleBox"
             class="input-content">
        {{title}}
      </span>
   </div>
   <div class="contain_content contain_content_big"> 
      <textarea v-if="showContent"
                v-focus
                v-model="getNotes[keyNote].content"
                @blur="changeContentBox"
                class="textarea-content textarea textarea_big"
                wrap="off"
                :style="fontSize">
     </textarea>
     <div v-else
        @click="changeContentBox"
        class="textarea-content"
        :style="fontSize">
      <i>{{content}}</i>
     </div>
   </div>
   
   
   <div class="div-calor div-calor_main"
        :class="color"
        v-if="showColor"
        @click="showColor=!showColor">
   </div>
   <div v-else class="container-div-calor">
     <div class="div-calor div-calor_red" @click="changeColor('red')"></div>
     <div class="div-calor div-calor_green" @click="changeColor('green')"></div>
     <div class="div-calor div-calor_white" @click="changeColor('white')"></div>
   </div>

   <div class="container-fontsize">
     <button class="button-fontsize" @click="decrement(keyNote)">-</button>
     {{getNotes[this.keyNote].fontSize}}
     <button class="button-fontsize" @click="increment(keyNote)">+</button>
   </div>
  </div>
  </transition>
 </div>
</transition>
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
    },
    fontSize() {
      return `font-size: ${this.getNotes[this.keyNote].fontSize}px;`;
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
      increment: "incrementFontSize",
      decrement: "decrementFontSize",
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
    fontSize() {
       window.localStorage.setItem("notes-array", JSON.stringify(this.getNotes));
    },
  },
}
</script>


<style >
.note_div{
   display: inline-block;
   width: 48.5%;
   height: 70vh;
   margin-left: 1%;
   margin-bottom: 20px;
   box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
   border-radius: 10px;
   position: relative;
   overflow: hidden;
 }
 .note_div-big{
   width: 98%;
   height: 98%;
   position: fixed;
   z-index: 3;
   top: 1%;
   left: 1%;
   margin-left: 0;
   box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
   border-radius: 10px;
   overflow: hidden;
 }
 .small-big-button{
   background-color: inherit;
   height: 11px;
   width: 11px;
   border: 4px solid  rgb(221, 31, 38);
   position: absolute;
   top: 2%;
   left: 2%;
   cursor: pointer;
 }
.button-big:hover{
  transform: scale(1.1, 1.1);
}
.button-small:hover{
  transform: scale(0.9, 0.9);
}
 #button-delete{
   position: absolute;
   top: 2%;
   right: 2%;
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
   bottom: 1%;
   right: 2%;
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
   bottom: 1%;
   right: 2%;
 }
 .div-calor_main:hover{
   transform: scale(1.1, 1.1);
 }
 .contain_title{
   margin: 40px 0 0 55px;
   height: 45px;
   width: 80%;
 }
 .contain_content{
   position: relative;
   overflow: auto;
   width: 97%;
   height: 77%;
   margin: 0 0 10px 15px;
 }
 .contain_content_big{
   width: 98%;
   height: 84%;
 }
 .input-content{
   display: block;
   outline: none;
   background: inherit;
   border: none;
   font-size: 22px;
   padding: 5px 0;
   width: 100%;
 }
 .textarea-content{
   display: block;
   background: inherit;
   font-size: 19px;
   white-space: pre-wrap;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   letter-spacing: 1px;
   line-height: normal;
   font-family: 'Roboto', sans-serif;
   padding: 1px;
 }
 .textarea{
   width: 99.5%;
   resize: none;
   border: none;
   outline: none;
 }
 .textarea_big{
   width: 100%
 }
 i{
   font-style: normal;
 }
 .container-fontsize{
   position: absolute;
   bottom: 1%;
   left: 2%;
   font-size: 17px;
 }
 .button-fontsize{
   font-size: 12px;
   box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
   border-radius: 1px;
   padding: 1px;
   width: 15px;
 }
 .transition-notes-enter-active{
   animation: transition-notes-in 0.4s;
 }
 @keyframes transition-notes-in{
   0%{
     transform: scale(.7)
   }
   100%{
     transform: scale(1)
   }
 }
.transition-notes_big-enter-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.transition-notes_big-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.transition-notes_big-enter, .transition-notes_big-leave-to{
  transform: scale(.9);
  opacity: 0;
}
</style>