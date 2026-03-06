<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  pcImgFile: {
    type: String,
    required: true
  },
  spImgFile: {
    type: String,
    required: true
  }
})
const pcImgUrl = new URL(`../../assets/${props.pcImgFile}`, import.meta.url).href
const spImgUrl = new URL(`../../assets/${props.spImgFile}`, import.meta.url).href
</script>
<template>
  <div class="card-box">
    <a :href="url" target="_blank" rel="noopener">
      <div class="image">
        <img alt="PC image" :src="pcImgUrl" class="pc" />
        <img alt="SmartPhone image" :src="spImgUrl" class="sp" />
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div class="tech-stack">
        <slot name="techStack"></slot>
      </div>
    </a>
  </div>
</template>
<style scoped>
a {
  display: block;
  color: var(--color-heading);
  border-radius: 10px;
  padding: 1rem;
}
.card-box {
  width: 100%;
  text-align: center;
  background-color: var(--color-main-triadic-pale);
  border-radius: 10px;
}
.image {
  width: 100%;
  position: relative;
}
.image > .pc {
  width: 90%;
  position: relative;
  left: -5%;
}
.image > .sp {
  width: 30%;
  position: absolute;
  right: 0;
  bottom: 0;
}
.title {
  font-weight: bold;
  margin: 0.7rem;
}
.description, .tech-stack {
  font-size: 0.8rem;
  margin-top: 0.3rem;
}
@media (min-width: 768px) {
  .card-box {
    width: 49%;
  }
}
@media (hover: hover) {
  a:hover {
    background-color: var(--color-main-triadic-background);
    box-shadow: 2px 2px 4px var(--vt-c-divider-light-2);
  }
}
</style>