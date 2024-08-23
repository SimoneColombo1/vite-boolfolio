<script>
export default {};
</script>
<template>
  <section class="welcome-container">
    <section class="welcome">
      <h1>
        <img src="../assets/img/pngwing.com.png" />
        Welcome to Project Manager 1.0
      </h1>
    </section>
  </section>
</template>

<style scoped lang="scss">
.welcome-container {
  background-color: #0d6af2;
}
.welcome {
  max-width: 1500px;
  margin: 0 auto;

  padding: 6rem;
  h1 {
    font-size: 3rem;
    img {
      filter: brightness(0) saturate(100%) invert(10%) sepia(9%) saturate(854%)
        hue-rotate(169deg) brightness(98%) contrast(90%);
    }
  }
}
</style>
