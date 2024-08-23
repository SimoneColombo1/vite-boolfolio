<script>
import ReviewSinglecard from "./ReviewSinglecard.vue";
export default {
  components: {
    ReviewSinglecard,
  },
};
</script>
<template>
  <section class="container">
    <section class="card-container">
      <ReviewSinglecard />
    </section>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  padding: 4rem;
  border-bottom: 0.1px solid white;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
