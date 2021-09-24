export default {
// update list
  set_cinema_data(state,cinemaList) {
   state.cinema=cinemaList
  },
  // update selected movie
  selected_movie(state, movie) {
    state.selectedMovie = movie
  },
  // update from localstorage
  update_list_from_local(state,movie)
  {
    state.cinema= movie
  }
}