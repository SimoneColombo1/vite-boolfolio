<script>
export default {
  name: "",
  components: {},
};
</script>
<template>
  <nav>
    <span><h1>Projects</h1></span>

    <span class="links">
      <a href="">Link</a>
      <a href="">Link</a>
      <a href="">Link</a>
    </span>
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
    margin-top: 0.8rem;
    a {
      margin-left: 0.3rem;

      text-decoration: none;

      &:hover {
        color: black;
      }
    }
  }
}
span {
  padding: 1rem;
  h1 {
    color: #3787fd;
  }
}
</style>
