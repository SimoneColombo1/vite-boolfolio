<script>
export default {
  data() {
    return {
      faqs: [
        {
          Question:
            "How can I track the progress of multiple projects simultaneously?",
          Answer:
            "Our tool offers a customizable dashboard where you can view and monitor the progress of all your active projects in real time. You can use Gantt charts, task lists, and milestone trackers to get a clear overview of each project's status.",
          isVisible: false,
        },
        {
          Question:
            "Can team members collaborate and communicate within the tool?",
          Answer:
            "Yes, our tool includes built-in collaboration features such as chat, file sharing, and task comments. This allows team members to communicate seamlessly, share documents, and provide updates directly within the platform.",
          isVisible: false,
        },
        {
          Question:
            "Is it possible to integrate this tool with other software we already use?",
          Answer:
            "Absolutely! Our tool supports integrations with a wide range of popular software, including task management apps, cloud storage services, and communication platforms, ensuring a smooth workflow across all your existing tools.",
          isVisible: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isVisible = !this.faqs[index].isVisible;
    },
  },
};
</script>

<template>
  <section class="container">
    <section class="faq-container">
      <div class="faqs">
        <div v-for="(faq, index) in faqs" :key="index" class="single-faq">
          <p @click="toggleAnswer(index)" style="cursor: pointer">
            {{ faq.Question }}
          </p>
          <p v-if="faq.isVisible">
            {{ faq.Answer }}
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.faq-container {
  display: flex;
  max-width: 1000px;
  padding: 2rem;
  .faqs {
    display: flex;
    justify-content: start;
    flex-direction: column;
    .single-faq {
      border-top: 1px black solid;
      width: 60rem;
    }
  }
}
</style>
