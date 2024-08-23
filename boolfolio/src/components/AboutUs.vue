<script>
export default {};
</script>
<template>
  <section class="AboutUs">
    <span></span>
    <div>
      <span
        ><h3>About us <i class="fa-solid fa-arrow-down-long"></i></h3
      ></span>
      <span class="paragrafo"
        ><p>
          At ProjeXpert, we offer an innovative project management tool designed
          to empower teams and streamline workflows. Our platform is built to
          simplify complex tasks, enhance collaboration, and keep projects on
          track from start to finish. With intuitive features and real-time
          updates, our tool adapts to your team’s needs, making project
          management more efficient and less stressful. Whether you're managing
          a small team or overseeing multiple projects, our solution provides
          the flexibility and insights you need to achieve success. We're
          committed to helping you turn your ideas into reality, one project at
          a time.
        </p></span
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
.AboutUs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem;
  div {
    margin-left: 4rem;
  }
  .paragrafo {
    display: flex;
    width: 40rem;
    flex-wrap: wrap;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #0d6af2;
  }
}
</style>
