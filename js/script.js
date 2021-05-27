// Attraverso l'apposita API di Boolean
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = new Vue ({
  el: "#root",
  data: {
     emails: []
  },
  methods: {},
  mounted: function() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https:flynn.boolean.careers/exercises/api/random/mail")
        .then((element) => {
          const email = element.data.response;
          this.$data.emails.push(email);
        });
    }
  }
});