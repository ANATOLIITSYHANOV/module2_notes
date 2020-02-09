<template>
  <nav class="lang-button">
    <transition  name="transition-lang" mode="out-in">
    <button v-if="showbutton"
            @click="showbutton=!showbutton">
    {{lang}}</button>
    
    <div v-else>
    <button @click="changeLang('ua')">UA</button>
    <button @click="changeLang('en')">EN</button>
    <button @click="changeLang('ru')">RU</button>
    </div>
    </transition>
  </nav> 
</template>

<script>

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data () {
    return{
      showbutton: true,
    }
  },
  computed: {
    ...mapGetters ({
      lang: "getlang",
    }),
  },
  methods: {
    ...mapMutations ({
      mutationLang: "changeLang",
    }),
    changeLang (lang) {
      this.mutationLang(lang);
      this.showbutton = true;
      window.localStorage.setItem("lang-notes", JSON.stringify(lang));
    },
    ...mapActions ({
      startLang: "startLang",
    }),
  },
  mounted () {
    this.startLang();
  }
}
</script>

<style>
.lang-button{
  display: flex;
  position: absolute;
  top: 20px;
  right: 3%;
}
.transition-lang-enter-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.transition-lang-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.transition-lang-enter, .transition-lang-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>