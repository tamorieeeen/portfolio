<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
    }
})

const imgUrl = new URL(`../../assets/${props.imgName}`, import.meta.url).href
</script>

<template>
  <div class="card-box">
    <a :href="url" target="_blank" rel="noopener">
      <div class="image"><img alt="blog OGP" :src="imgUrl" /></div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="sub-title">
        <slot name="subtitle"></slot>
      </div>
    </a>
  </div>
</template>

<style scoped>
a {
  display: block;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  color: var(--color-heading);
}
img {
  object-fit: contain;
  width: 100%;
}
.card-box {
  width: 100%;
  text-align: center;
  background-color: var(--color-main-triadic-pale);
  border-radius: 10px;
}
.image {
  width: 95%;
  margin: 0 auto;
}

.title {
  font-weight: bold;
}
.sub-title {
  font-size: 0.8rem;
}
@media (min-width: 768px) {
  .card-box {
    width: 49%;
  }
}
@media (hover: hover) {
  a:hover {
    background-color: var(--color-main-triadic-background);
  }
}
</style>
