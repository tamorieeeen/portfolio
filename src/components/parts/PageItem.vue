<script setup>
defineProps({
  iconCode: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="item">
    <h3>
      <span class="icon"><font-awesome-icon :icon="['fas', iconCode]" /></span>
      <slot name="heading"></slot>
    </h3>
    <div class="item-contents">
      <p class="explanation"><slot name="explanation"></slot></p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
}
h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  border-bottom: solid 3px var(--color-main-triadic);
  padding: 0.4rem;
}
.icon {
  margin-right: 0.5rem;
  color: var(--color-heading);
}
.item-contents {
  padding: 0 0.5rem;
}
.explanation {
  margin: 1rem 0;
}
</style>
