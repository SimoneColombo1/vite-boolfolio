<script>
import welcome from "../components/welcome.vue";
import AboutUs from "../components/AboutUs.vue";
import reviews from "../components/reviews.vue";
import YourProjects from "../components/YourProjects.vue";
import Faq from "@/components/Faq.vue";
export default {
  components: {
    welcome,
    AboutUs,
    Faq,
    reviews,
    YourProjects,
  },
};
</script>
<template>
  <section class="AppMain">
    <welcome />
    <AboutUs />
    <YourProjects />
    <reviews />
    <Faq />
  </section>
</template>

<style scoped lang="scss"></style>
