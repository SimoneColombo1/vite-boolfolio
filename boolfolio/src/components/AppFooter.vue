<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      NavLink1: [
        "Chi Siamo",
        "Contatti",
        "Termini e Condizioni",
        "Privacy Policy",
        "FAQ",
        "Supporto",
      ],
      NavLink2: [
        "Lavora con Noi",
        "Mappa del Sito",
        "Feedback",
        "Newsletter",
        "Social Media",
        "Cookie Policy",
        "Eventi",
      ],

      NavLink3: [
        "Testimonianze",
        "Risorse",
        "Donazioni",
        "Partnership",
        "Informazioni Legali",
        "Guida all'Acquisto",
      ],
    };
  },
};
</script>
<template>
  <footer>
    <section class="main-footer">
      <nav class="link-footer">
        <ul>
          <li v-for="link in NavLink1">
            <a href="">{{ link }}</a>
          </li>
        </ul>
        <ul>
          <li v-for="link in NavLink2">
            <a href="">{{ link }}</a>
          </li>
        </ul>
        <ul>
          <li v-for="link in NavLink3">
            <a href="">{{ link }}</a>
          </li>
        </ul>
      </nav>
    </section>
  </footer>
</template>

<style scoped lang="scss">
.main-footer {
  display: flex;
  justify-content: space-between;

  .link-footer {
    display: flex;

    ul {
      list-style: none;

      width: rem;
      li {
        font-size: 0.7rem;
        margin: 1rem;
      }
    }
  }

  .socials {
    display: flex;
  }
}
</style>
