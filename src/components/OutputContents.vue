<script setup>
import PageItem from './parts/PageItem.vue';
import SnsCard from './parts/SnsCard.vue';
</script>

<template>
  <PageItem iconCode="code">
    <template #heading>Output</template>
    <template #explanation>できるだけアウトプットするように心掛けています。ちなみにこのサイトのコードはGitHubで公開しているので気になる方はどうぞ。</template>
    <div class="grid-wrapper">
      <SnsCard url="https://github.com/tamorieeeen" colorCode="github">
        GitHub
      </SnsCard>
      <SnsCard url="https://qiita.com/tamorieeeen" colorCode="qiita">
        Qiita
      </SnsCard>
    </div>
  </PageItem>
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