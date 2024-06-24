<script setup>
import { ref } from "vue";
import { useQuizStore } from "../stores/quizz.js";
import { useRouter } from "vue-router";
const quizzStore = useQuizStore();
const router = useRouter();

const theme = ref(null);
const question = ref(null);

const options = ref([
  {
    id: 0,
    isTrue: false,
    text: "",
  },
]);

function dontAdd() {
  console.log("Qo'shib bolmaydi");
}

function addOption(id) {
  options.value?.push({
    id,
    isTrue: false,
    text: "",
  });
}

function removeOption(index) {
  console.log(index);
  options.value?.splice(index, 1);
}

function trueAnswer(index) {
  options.value?.forEach((item) => {
    item.isTrue = false;
  });
  options.value[index].isTrue = true;
}

function save() {
  if (options.value?.length < 4) {
    console.log("Ishlayamdi");
  }

  console.log("++++");

  const newQuestion = {
    id: quizzStore.question?.length + 1,
    text: question.value,
    theme: theme.value,
    options,
  };
  quizzStore.saveQuiz(newQuestion);
  router.push("/");
}
</script>

<template>
  <div class="w-[500px] mt-10 mx-auto">
    <h1 class="text-3xl font-mono font-medium text-center mb-5">
      Create quizze
    </h1>
    <div>
      <input
        type="text"
        placeholder="theme......"
        v-model="theme"
        required
        class="text-2xl border p-4 w-full focus:outline-none focus:border-yellow-400 rounded-md"
      />
      <div class="my-5">
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="question......"
            v-model="question"
            required
            class="text-2xl border p-2 w-full focus:outline-none focus:border-yellow-400 rounded-md"
          />
          <!-- <button
            @click="<div class="quizzStore"></div>removeQuiz()"
            class="px-4 rounded-md py-2 text-xl bg-red-500 hover:text-white"
          >
            Remove
          </button> -->
        </div>
        <div class="my-5">
          <div
            v-for="(item, index) in options"
            :key="index"
            class="flex mb-2 flex-row items-center gap-x-4 text-lg font-medium font-mono cursor-pointer"
          >
            <input name="aaaaaa" type="radio" @change="trueAnswer(index)" />
            <input
              type="text"
              placeholder="option......"
              v-model="options[index].text"
              class="text-2xl border p-2 rounded-md w-full focus:outline-none focus:border-yellow-400"
            />
            <button
              @click="removeOption(index)"
              class="px-6 rounded-md py-2 text-xl bg-red-500 hover:text-white"
            >
              Remove
            </button>
          </div>
        </div>
        <button
          @click="addOption"
          class="px-6 rounded-md py-2 text-xl bg-blue-500 hover:text-white"
        >
          Add option
        </button>
      </div>
    </div>
    <div class="flex justify-end gap-5">
      <!-- <button
        @click="quizzStore.addQuestion"
        class="px-6 rounded-md py-2 text-xl bg-green-500 hover:text-white"
      >
        Add question
      </button> -->
      <button
        @click="save"
        class="px-6 rounded-md py-2 text-xl bg-green-500 hover:text-white"
      >
        Save
      </button>
    </div>
  </div>
</template>

<style scoped></style>
