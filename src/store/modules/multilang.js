export default {
  state: {
    lang: {
      en: {
        ADDSHEET: "ADD SHEET",
        LANG: "EN",
        DELETESHEET: "Delete sheet?",
        TITLE: "Title",
        CONTENT: "Text"
      },
      ua: {
        ADDSHEET: "ДОДАТИ АРКУШ",
        LANG: "UA",
        DELETESHEET: "Видалити аркуш?",
        TITLE: "Назва",
        CONTENT: "Текст"
      },
      ru: {
        ADDSHEET: "ДОБАВИТЬ ЛИСТ",
        LANG: "RU",
        DELETESHEET: "Удалить лист?",
        TITLE: "Название",
        CONTENT: "Текст"
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
    getDelete (state) {
      return state.lang[state.selectedLang].DELETESHEET; 
    },
    getLangTitle (state) {
      return  state.lang[state.selectedLang].TITLE; 
    },
    getLangContent (state) {
      return  state.lang[state.selectedLang].CONTENT; 
    }
  },
}