<script setup>
import SnsCard from './parts/SnsCard.vue';
</script>

<template>
  <div class="flex-wrapper">
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
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
