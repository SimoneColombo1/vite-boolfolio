<script>
export default {};
</script>
<template>
  <section class="YourProjects">
    <span>
      <h4>Manage your projects</h4>
      <p>
        Thanks to our tool you will be able to manage your projects in a simple
        and detailed way.
      </p></span
    ><span>
      <router-link class="btn btn-md button" :to="{ name: 'projects' }">
        Go to your projects
        <i class="fa-solid fa-arrow-right-long"></i></router-link
    ></span>
  </section>
</template>

<style scoped lang="scss">
.YourProjects {
  background-color: #0d6af2;
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  align-items: center;
  h4 {
    font-size: 3rem;
  }
  span {
    margin-left: 1.4rem;
  }
  .button {
    background-color: white;
    border: #171a18 1px solid;
    &:hover {
      background-color: #171a18;
      color: white;
    }
  }
}
</style>
