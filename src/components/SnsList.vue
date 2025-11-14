<script setup>
import SnsCard from './parts/SnsCard.vue';
</script>

<template>
  <div class="grid-wrapper">
    <SnsCard url="https://x.com/tamorieeeen" colorCode="x-twitter">
      X (Twitter)
    </SnsCard>
    <SnsCard url="https://bsky.app/profile/tamorieeeen.bsky.social" colorCode="bluesky">
      Bluesky
    </SnsCard>
    <SnsCard url="https://www.instagram.com/tamorieeeen/" colorCode="instagram">
      Instagram
    </SnsCard>
  </div>
</template>

<style scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
}
@media (min-width: 768px) {
  .grid-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(170px, 170px));
  }
}
</style>
