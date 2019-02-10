import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastWatchedStarships: []
  },
  mutations: {
    addWatchedStarship (state, payload) {
      // проверка на наличие в списке просмотренных
      let wasWatched
      state.lastWatchedStarships.forEach(function (item) {
        if (item.name === payload.starship.name) {
          item.watchTime = payload.date.toLocaleString('ru')
          state.lastWatchedStarships.sort(function (a, b) {
            if (Date.parse(a.watchTime) > Date.parse(b.watchTime)) return 1
            if (Date.parse(a.watchTime) < Date.parse(b.watchTime)) return -1
          })
          wasWatched = true
        }
      })

      if (!wasWatched) {
        let newWatchedStarship = {}
        newWatchedStarship.name = payload.starship.name
        newWatchedStarship.watchTime = payload.date.toLocaleString('ru')
        state.lastWatchedStarships.push(newWatchedStarship)
        if (state.lastWatchedStarships.length > 5) {
          state.lastWatchedStarships.shift()
        }
      }
    }
  },
  actions: {}
})
