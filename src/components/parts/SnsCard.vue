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
        hex: "#0E0C0D"
      };
    case 'qiita':
      return {
        rgb: "rgb(85, 197, 0 ,0.1)",
        hex: "#55C500"
      };
    case 'x-twitter':
      return {
        rgb: "rgb(15, 20, 25, 0.1)",
        hex: "#0F1419"
      };
    case 'bluesky':
      return {
        rgb: "rgb(0, 133, 255, 0.1)",
        hex: "#0085FF"
      };
    case 'instagram':
      return {
        rgb: "rgb(207, 46, 146, 0.1)",
        hex: "#CF2E92"
      };
  }
});
</script>

<template>
  <div class="card-box">
    <a :href="url" target="_blank" rel="noopener">
      <span class="sns-icon"><slot name="icon"></slot></span>
      <span class="sns-name"><slot></slot></span>
    </a>
  </div>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.card-box {
  width: 150px;
  border: 2px solid v-bind('color.hex');
  border-radius: 10px;
}
.sns-icon {
  font-size: 30px;
  color: v-bind('color.hex');
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
@media (min-width: 768px) {
  .card-box {
    width: 170px;
  }
}
</style>
