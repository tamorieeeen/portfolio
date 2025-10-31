<script setup>
import { computed } from 'vue';

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});
const starList = computed(() => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < props.rating ? 'yellow' : 'gray');
  }
  return stars;
});
const imgUrl = new URL(`../../assets/icon/${props.iconName}.svg`, import.meta.url).href;
</script>

<template>
  <div class="card-box">
    <div class="box-left">
      <img :alt="iconName" :src="imgUrl" width="48" />
    </div>
    <div class="box-right">
      <div class="skill-name"><slot name="skill"></slot></div>
      <div class="rate-star">
        <font-awesome-icon :icon="['fas', 'star']" v-for="star in starList" :key="star" :class="star"/>
      </div>
    </div>
    <div class="detail"><slot></slot></div>
  </div>
</template>

<style scoped>
.card-box {
  width: 100%;
  background-color: var(--color-main-triadic-pale);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 80px auto;
}
.box-left {
  font-size: 50px;
  text-align: center;
}
.box-right {
  padding-left: 1rem;
  padding-top: 0.5rem;
}
.detail {
  grid-column: 1 / 3;
  margin-bottom: 0.5rem;
}
.skill-name {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 3px;
}
.rate-star {
  font-size: 16px;
}
.rate-star > .gray {
  color: #D1CBC3;
}
.rate-star > .yellow {
  color: #B99B00;
}
.detail {
  overflow-wrap: anywhere;
}
@media (min-width: 768px) {
  .card-box {
    width: 49%;
  }
}
</style>
