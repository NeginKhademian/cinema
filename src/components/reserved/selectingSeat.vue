<template>
  <div>
    <div
      class="d-flex flex-row-reverse flex-wrap p-2 justify-content-around align-items-center"
    >
      <div class="col-md-12 col-sm-12">
        <h1 class="text-left text-white fs-4 pt-5">cinema hall</h1>
        <div
          class="d-flex flex-row-reverse flex-wrap p-2 justify-content-around align-items-center"
        >
        <!-- displey counts -->
          <div
            class="flex-wrap justify-content-start d-flex flex-column fs-6 p-2"
          >
            <p class="text-white-50 text-left justify">
              <span class="d-flex m-2">
                <span class="text-white-50 text-left d-inline-block col-6">
                  taken seat:</span
                >
                <span class="bought col-2 mx-2 seats  text-white-50"> </span>
                <span class="col-2">count:{{ taken }}</span>
              </span>
              <span class="d-flex seatWrapper m-2">
                <span class="text-white-50 text-left d-inline-block col-6"
                  >available seat:</span
                >
                <span class="mx-2 seats  d-inline-block col-1 text-white-50">
                </span>
                <span class="col-1  d-inline-block">count:{{ avaiable }}</span>
              </span>
              <span class="d-flex m-2">
                <span class="text-white-50 text-left d-inline-block col-6">
                  reserved seat:</span
                >
                <span
                  class="mx-2 seats reserveSeats d-inline-block text-white-50"
                >
                </span>
                <span class="d-inline-block">count:{{ reserved }}</span>
              </span>
              <span class="d-flex m-2">
                <span class="text-white-50 text-left d-inline-block col-6">
                  selected seat:</span
                >

                <span
                  class="mx-2 seats selectedSeats d-inline-block text-white-50"
                >
                </span>
                <span class="d-inline-block">count:{{ selected }}</span>
              </span>
            </p>
            <div class="d-flex  justify-content-start pt-5">
              <!-- if user select a seat the button will be avaialbe -->
              <button
                :disabled="selected == 0"
                @click="buyTicket()"
                class="btn btn-primary"
              >
                reserve
              </button>
            </div>
          </div>

          <div class="d-flex flex-column justify-content-center">
            <span class="d-inline pardehCinema text-white-50"
              >Cinema screens</span
            >
            <span class="d-inline fazaCinema">
              <span class="d-flex  flex-wrap justify-content-center p-1">
                <template v-for="(seat, id) in selectedMovie.seats">
                  <!-- seats -->
                  <span
                    @click="reserve(seat)"
                    :key="id"
                    class="d-inline m-1 seats"
                    :class="
                      seat.available && seat.selected
                        ? 'selectedSeats'
                        : !seat.available && !seat.user
                        ? 'bought'
                        : !seat.available && seat.user
                        ? 'reserveSeats'
                        : 'avaiableSeat'
                    "
                  ></span>
                </template>
              </span>
            </span>
            <!-- confirmation modal -->
            <Modal headerClass="flex-row-reverse" title="confirmtion" :hideFooter="false" ref="myModal">
              <div class="bg-dark py-4">
                <h1 class="text-left fs-4  text-white-50">
                  are you sure about buying these tickes?
                </h1>
                <div class="pt-2 d-flex justify-content-end">
                  <button
                    @click="finalizing()"
                    class="btn btn-outline-primary mx-2"
                  >
                    yes
                  </button>
                  <button @click="$refs.myModal.close()" class="btn btn-danger">
                    no
                  </button>
                </div>
              </div>
            </Modal>
            <!-- modal for result -->
            <Modal
              :disableClick="true"
              title="seats reserved"
              :hideFooter="false"
              ref="ok"
            >
              <div class="bg-dark py-4">
                <h1 class="text-left fs-4  text-white-50">
                  your seats reserved successfuly
                </h1>
                <div class="pt-2 d-flex  justify-content-end">
                  <button
                    @click="okSubmit()"
                    class="btn btn-outline-primary mx-2"
                  >
                    ok
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selectedMovie"],
  data() {
    return {
      // counter for seats
      taken: 0,
      reserved: 0,
      avaiable: 0,
      selected: 0,
    };
  },
  computed: {
    // get all items
    itemList() {
      return this.$store.getters["cinema/getAllList"];
    },
  },
  watch: {
    //   watch for any change in seats
    "selectedMovie.seats": {
      handler(seats) {
        this.calculateSeats(seats);
      },
      deep: true,
    },
  },

  methods: {
    // calculate seats number
    calculateSeats(seats) {
      let reserved = 0;
      let taken = 0;
      let avaiable = 0;
      let selected = 0;
      seats.map((seat) => {
        taken = !seat.available && !seat.user ? ++taken : taken;
        selected = seat.selected ? ++selected : selected;
        reserved = !seat.available && seat.user ? ++reserved : reserved;
        avaiable = seat.available ? ++avaiable : avaiable;
      });
      this.taken = taken;
      this.reserved = reserved;
      this.selected = selected;
      this.avaiable = avaiable;
      return this.taken, this.reserved, this.selected, this.avaiable;
    },
    reserve(seat) {
      // reserve seat
      this.$store.dispatch("cinema/selectSeat", seat);
    },
    closeModal() {
      this.$refs.myModal.close();
    },
    okSubmit() {
      // after submitting reserve user will redirect to main page
      this.$router.push("/");
    },
    finalizing() {
      // submit seats
      this.$store.dispatch("cinema/finalizingseats").then(() => {
        let localStorageItems = JSON.stringify(this.itemList);
        localStorage.setItem("selected", localStorageItems);
        this.$refs.myModal.close();
        this.$refs.ok.open();
      });
    },
    buyTicket() {
      this.$refs.myModal.open();
    },
  },
  destroyed(){
    // disable selected seats
    this.$store.dispatch('cinema/resetSelected')
  },
  mounted() {
    // calculate seats
    this.calculateSeats(this.selectedMovie.seats);
  },
};
</script>
<style lang="scss" scoped>
// seatss classes
.seatWrapper {
  width: 200px;
}
.seats {
  width: 40px;
  height: 12px;
  border: 1px solid white;
  cursor: pointer;
}
.freeSeats:hover {
  transition: background-color 500ms linear;
  background-color: rgb(219, 219, 243);
}
.avaiableSeat:hover {
  background-color: red;
}
.reserve:hover {
  transition: background-color 500ms linear;
  background-color: greenyellow;
}
.bought {
  background-color: #484845;
}
.reserveSeats {
  background-color: greenyellow;
}
.selectedSeats {
  background-color: peru;
}
// cinema
.pardehCinema {
  width: 200px;
  height: 35px;
  border: 1px solid;
  border-radius: 41px 41px 0 0;
  border-bottom: none;
  text-align: center;
  line-height: 2;
}
.fazaCinema {
  width: 200px;
  height: 150px;
  border: 1px solid;
}
</style>
