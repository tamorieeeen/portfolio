<template>
  <div class="card-box">
    <div class="job-name"><slot name="job"></slot></div>
    <div class="year"><slot name="year"></slot></div>
    <div class="detail"><slot name="detail"></slot></div>
  </div>
</template>

<style scoped>
.card-box {
  margin-top: 1rem;
  background-color: var(--color-main-triadic-pale);
  border-radius: 10px;
  padding: 0.8rem 1rem;
}
.job-name {
  font-weight: 500;
}
.year {
  font-size: 0.8rem;
  color: #45685C;
  margin-top: 0.1rem;
}
.detail {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
</style>
