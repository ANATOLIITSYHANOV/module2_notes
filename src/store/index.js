import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import multilang from './modules/multilang'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes,
    multilang,
  }
})