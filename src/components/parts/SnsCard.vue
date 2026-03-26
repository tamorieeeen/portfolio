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
        rgb: "var(--color-github-background)",
        hex: "var(--color-github)",
        filter: "var(--color-github-filter)"
      };
    case 'qiita':
      return {
        rgb: "var(--color-qiita-background)",
        hex: "var(--color-qiita)",
        filter: "invert(70%) sepia(51%) saturate(3943%) hue-rotate(52deg) brightness(96%) contrast(103%)"
      };
    case 'x-twitter':
      return {
        rgb: "var(--color-x-twitter-background)",
        hex: "var(--color-x-twitter)",
        filter: "invert(71%) sepia(19%) saturate(12%) hue-rotate(14deg) brightness(99%) contrast(90%)"
      };
    case 'bluesky':
      return {
        rgb: "var(--color-bluesky-background)",
        hex: "var(--color-bluesky)",
        filter: "invert(32%) sepia(76%) saturate(2025%) hue-rotate(194deg) brightness(102%) contrast(103%)"
      };
    case 'instagram':
      return {
        rgb: "var(--color-instagram-background)",
        hex: "var(--color-instagram)",
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
  /* SNSアイコンに色を付けるために必要 */
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
@media (prefers-color-scheme: dark) {
  .card-box img.x-twitter {
    filter: v-bind('color.filter');
  }
  .card-box {
    background-color: v-bind('color.rgb');
  }
}
</style>
