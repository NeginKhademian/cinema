export default {
  // fetch for selected movie based on id
  getMovie({
    commit,
    state
  }, id) {
    let movie = state.cinema.find(data => data.id == id)
    commit("selected_movie", movie)
    return movie
  },
  // update selected seat
  selectSeat({
    commit,
    state
  }, seat) {
    state.cinema[state.selectedMovie.id - 1].seats.find(data => {
      if (data.id == seat.id && data.available) {
        {
          data.selected = !data.selected
          return data
        }
      }
    })
    commit('set_cinema_data', state.cinema)
    return state.cinema
  },
  // reserve ticket and seat
  finalizingseats({
    commit,
    state
  }) {
    state.cinema[state.selectedMovie.id - 1].seats.map((seat) => {
      if (seat.selected) {
        seat.user = true
        seat.available = false
        seat.selected = false
      }
      return seat
    })
    commit('set_cinema_data', state.cinema)
    return state.cinema
  },
  // reset selected seat
  resetSelected({
    state
  }) {
    return state.cinema.map((film) => film.selected = false)
  },
  // get update from localstorage
  updateFromLocal({
    commit
  }, list) {
    commit("update_list_from_local", list)
  }
}