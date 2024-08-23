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
      <nav class="socials">
        <span>
          Follow us on:
          <p><i class="fa-brands fa-twitter"></i></p>
          <p><i class="fa-brands fa-instagram"></i></p>
          <p><i class="fa-brands fa-facebook"></i></p>
          <p><i class="fa-brands fa-linkedin"></i></p>
        </span>
        <span>
          <button class="btn btn-md btn-primary">
            Subscribe to the Newsletter
          </button>
        </span>
      </nav>
    </section>
  </footer>
</template>

<style scoped lang="scss">
.main-footer {
  display: flex;
  justify-content: space-between;
  max-width: 1450px;
  margin: 0 auto;
  padding: 2rem;
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

    flex-direction: column;
    color: white;
    margin-top: 12rem;
    span {
      display: flex;
      p {
        margin-left: 1rem;
      }
    }
    button {
      &:hover {
        background-color: white;
        color: #171a18;
      }
    }
  }
}
</style>
