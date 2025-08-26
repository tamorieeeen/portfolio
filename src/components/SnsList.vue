<script setup>
import SnsCard from './parts/SnsCard.vue';
</script>

<template>
  <div class="flex-wrapper">
    <SnsCard url="https://x.com/tamorieeeen" colorCode="x-twitter">
      <template #icon>
        <font-awesome-icon :icon="['fab', 'square-x-twitter']" />
      </template>
      X (Twitter)
    </SnsCard>
    <SnsCard url="https://bsky.app/profile/tamorieeeen.bsky.social" colorCode="bluesky">
      <template #icon>
        <font-awesome-icon :icon="['fab', 'square-bluesky']" />
      </template>
      Bluesky
    </SnsCard>
    <SnsCard url="https://www.instagram.com/tamorieeeen/" colorCode="instagram">
      <template #icon>
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </template>
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
