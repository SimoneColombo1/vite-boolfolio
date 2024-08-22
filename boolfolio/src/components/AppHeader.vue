<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      NavLink: [
        {
          label: "Home page",
          name: "home",
        },

        {
          label: "All projects",
          name: "projects",
        },
      ],
    };
  },
};
</script>
<template>
  <nav>
    <span
      ><img src="../assets/img/pngwing.com.png" />
      <h1>Projects</h1></span
    >

    <ul class="links">
      <li v-for="NavItem in NavLink">
        <router-link class="link" :to="{ name: NavItem.name }">{{
          NavItem.label
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.3px solid gray;
  vertical-align: middle;
  .links {
    margin: 0.8rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    list-style: none;
    .link {
      margin-left: 0.3rem;

      text-decoration: none;

      &:hover {
        color: white;
      }
    }
  }
}
span {
  margin: 0rem 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    color: #3787fd;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
    filter: brightness(0) saturate(100%) invert(43%) sepia(38%) saturate(3585%)
      hue-rotate(202deg) brightness(102%) contrast(98%);
  }
}
</style>
