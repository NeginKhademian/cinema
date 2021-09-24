<template>
  <div>
    <div :id="randomId" class="modal">
      <div class="modal-content">
        <div :class="headerClass?headerClass:null"  class="modal-header bg-dark">
          <span v-if="!disableClick" @click="close()" class="close text-white-50">&times;</span>
          <h2 class="text-white-50">{{ title }}</h2>
        </div>
        <div class="modal-body bg-dark">
          <slot></slot>
        </div>
        <div v-if="hideFooter" class="modal-footer">
          <h3>
            <button @click="close()">close</button>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "hideFooter","disableClick","headerClass"],
  data() {
    return {
        // generate random id for separate modals
      randomId: Math.floor(Math.random() * 10000),
    };
  },
  methods: {
    //   open modal
    open() {
      let modal = document.getElementById(this.randomId);
      modal.classList.add("openAnimation");
      modal.style.display = "block";
    },
    // close modal
    close() {
      let modal = document.getElementById(this.randomId);
      modal.classList.remove("openAnimation");
      modal.classList.add("closeAnimation");
      modal.style.top = "-300px";
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("closeAnimation");
        modal.style.top = "0px";
      }, 100);
    },
  },
  mounted() {
    let modal = document.getElementById(this.randomId);

    // close modal if user clicl outside of modal 
    if(!this.disableClick)
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.classList.remove("openAnimation");
        modal.classList.add("closeAnimation");
        modal.style.top = "-300px";
        setTimeout(() => {
          modal.style.display = "none";
          modal.classList.remove("closeAnimation");
          modal.style.top = "0px";
        }, 100);
      }
    };
  },
};
</script>
<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 40%;
  border: none;
  transition: all 0.3s ease;
}

.openAnimation {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
.closeAnimation {
  -webkit-animation-name: animateClose;
  -webkit-animation-duration: 0.4s;
  animation-name: animateClose;
  animation-duration: 0.4s;
}
.modal-header {
  border-color: #6a6b6d;
}
/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@-webkit-keyframes animateClose {
  from {
    top: 0;
    opacity: -300px;
  }
  to {
    top: 1;
    opacity: 0;
  }
}

@keyframes animateClose {
  from {
    top: 0;
    opacity: -300px;
  }
  to {
    top: 1;
    opacity: 0;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-body {
  padding: 2px 16px;
}
</style>
