<script>
import Reviews from "./reviews.vue";

export default {
  data() {
    return {
      Reviews: [
        {
          name: "Emma Carter",
          ReviewTitle: "A Game-Changer for Our Team!",
          ReviewContent:
            "Weve been using ProjeXpert for six months now, and it has completely transformed the way we manage projects. The intuitive interface and real-time updates keep everyone on the same page, reducing misunderstandings and delays. Its a must-have for any team looking to improve productivity.",
          rating: 4,
          img_path: "/src/assets/img/Face(3).jpeg",
        },
        {
          name: "Noah Peterson",
          ReviewTitle: "Efficient and User-Friendly",
          ReviewContent:
            "ProjeXpert is incredibly user-friendly and efficient. It didn’t take long for our team to get the hang of it, and now it’s an integral part of our daily workflow. The customizable dashboards and reporting tools are particularly helpful for keeping track of progress and spotting potential issues early on.",
          rating: 5,
          img_path: "/src/assets/img/Face(4).jpeg",
        },
        {
          name: "Liam Harris",
          ReviewTitle: "Boosts Team Collaboration",
          ReviewContent:
            "One of the best things about ProjeXpert is how it enhances team collaboration. We work remotely, and the tool's features make it feel like we’re all in the same room. Task assignments, document sharing, and communication are seamless. Our projects are more organized and our team is more connected than ever.",
          rating: 4,
          img_path: "/src/assets/img/Face(2).jpeg",
        },
        {
          name: "Olivia Bennett",
          ReviewTitle: "Boosts Team Collaboration",
          ReviewContent:
            "One of the best things about ProjeXpert is how it enhances team collaboration. We work remotely, and the tool's features make it feel like we’re all in the same room. Task assignments, document sharing, and communication are seamless. Our projects are more organized and our team is more connected than ever.",
          rating: 5,
          img_path: "/src/assets/img/Face(5).jpeg",
        },
        {
          name: "Sophia Martinez",
          ReviewTitle: "A Game-Changer for Our Team!",
          ReviewContent:
            "Weve been using ProjeXpert for six months now, and it has completely transformed the way we manage projects. The intuitive interface and real-time updates keep everyone on the same page, reducing misunderstandings and delays. Its a must-have for any team looking to improve productivity.",
          rating: 5,
          img_path: "/src/assets/img/Face.jpeg",
        },
        {
          name: "Ethan Collins",
          ReviewTitle: "Improved Project Visibility",
          ReviewContent:
            "With ProjeXpert, I finally have clear visibility over all ongoing projects. The Gantt charts and milestone tracking are especially useful for keeping everything on schedule. It’s an excellent tool for both high-level overviews and detailed task management. I highly recommend it to any team looking to improve their project management process.",
          rating: 4,
          img_path: "/src/assets/img/Face(1).jpeg",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="card" v-for="review in Reviews">
    <img :src="review.img_path" :alt="review.ReviewTitle" />
    <h5>{{ review.ReviewTitle }}</h5>
    <p>{{ review.ReviewContent }}</p>
    <span v-if="review.rating > 4">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </span>
    <span v-else-if="review.rating < 5">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </span>
    <span v-else-if="review.rating < 4">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </span>
    <span v-else-if="review.rating < 3">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </span>
    <span v-else-if="review.rating < 2">
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </span>
    <p>From: {{ review.name }}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 20rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
  }
}
</style>
