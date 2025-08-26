<template>
  <h2><slot></slot></h2>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin: 2rem 0;
  padding: 0.4rem;
  border-top: solid 3px var(--color-main-theme);
  border-bottom: solid 3px var(--color-main-theme);
}
</style>
