<script setup>
import { computed } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
    required: true,
  }
});

const color = computed(() => {
  switch(props.colorCode) {
    case 'github':
      return {
        rgb: "rgb(14, 12, 13 ,0.1)",
        hex: "#0E0C0D",
        filter: "invert(1%) sepia(6%) saturate(2261%) hue-rotate(278deg) brightness(97%) contrast(92%)"
      };
    case 'qiita':
      return {
        rgb: "rgb(85, 197, 0 ,0.1)",
        hex: "#55C500",
        filter: "invert(70%) sepia(51%) saturate(3943%) hue-rotate(52deg) brightness(96%) contrast(103%)"
      };
    case 'x-twitter':
      return {
        rgb: "rgb(15, 20, 25, 0.1)",
        hex: "#0F1419"
      };
    case 'bluesky':
      return {
        rgb: "rgb(0, 133, 255, 0.1)",
        hex: "#0085FF",
        filter: "invert(32%) sepia(76%) saturate(2025%) hue-rotate(194deg) brightness(102%) contrast(103%)"
      };
    case 'instagram':
      return {
        rgb: "rgb(207, 46, 146, 0.1)",
        hex: "#CF2E92",
        filter: "invert(26%) sepia(98%) saturate(2134%) hue-rotate(304deg) brightness(85%) contrast(88%)"
      };
  }
});
const imgUrl = new URL(`../../assets/icon/${props.colorCode}.svg`, import.meta.url).href;
</script>

<template>
  <div class="card-box">
    <a :href="url" target="_blank" rel="noopener">
      <img :alt="colorCode" :src="imgUrl" :class="colorCode" />
      <div class="sns-name"><slot></slot></div>
    </a>
  </div>
</template>

<style scoped>
.card-box {
  border: 2px solid v-bind('color.hex');
  border-radius: 10px;
}
.card-box > a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  height: 50px;
}
.card-box img:not(.x-twitter) {
  width: 28px;
  filter: v-bind('color.filter');
}
.card-box img.x-twitter {
  width: 32px;
}
.sns-name {
  font-size: 1.1rem;
  color: v-bind('color.hex');
}
@media (hover: hover) {
  .card-box > a:hover {
    background-color: v-bind('color.rgb');
  }
}
</style>
