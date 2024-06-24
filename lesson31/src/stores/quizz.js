import { defineStore } from "pinia";

export const useQuizStore = defineStore("quizz", {
  state: () => ({
    themes: [], // {id, name}
    question: [], // {id, questionString, topic, option: [], trueOption}
    answers: [], // {id, trueOption}
  }),

  actions: {
    // since we rely on `this`, we cannot use an arrow function
    addOption(id) {
      console.log("Add Option");
    },

    removeOption() {
      console.log("Remove Option");
    },

    addQuestion() {
      console.log("Add Question");
    },

    removeQuiz(questionId) {
      console.log("Remove Question: " + questionId);
    },

    saveQuiz(newQuestion) {
      console.log(newQuestion);
      console.log("+++++++++");
      this.question.push(newQuestion);
    },
  },
});
