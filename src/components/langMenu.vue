<template>
  <nav>
    <button v-if="showbutton"
            @click="showbutton=!showbutton">
    {{lang}}</button>
    <div v-else>
    <button @click="changeLang('ua')">UA</button>
    <button @click="changeLang('en')">EN</button>
    <button @click="changeLang('ru')">RU</button>
    </div>
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
      window.localStorage.setItem("lang", JSON.stringify(lang));
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

<style scoped>
div button {
  display: inline-block;
}
</style>