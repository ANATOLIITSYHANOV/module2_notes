import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: {
      en: {
        ADDSHEET: "ADD SHEET",
        LANG: "EN",
      },
      ua: {
        ADDSHEET: "ДОДАТИ АРКУШ",
        LANG: "UA",
      },
      ru: {
        ADDSHEET: "ДОБАВИТЬ ЛИСТ",
        LANG: "RU",
      },
    },
    selectedLang: 'ua',
  },
  mutations: {
    changeLang (state, lang) {
      state.selectedLang = lang;
    }
  },
  actions: {
    startLang (ctx) {
      if(!window.localStorage.getItem("lang-notes")) {
        return;
      }
      let lang = JSON.parse(window.localStorage.getItem("lang-notes"));
      ctx.commit("changeLang", lang);
    },
  },
  getters: {
    getAddSheet (state) {
      return state.lang[state.selectedLang].ADDSHEET;  
    },
    getlang (state) {
      return state.lang[state.selectedLang].LANG;  
    },
  },
  modules: {
    notes,
  }
})