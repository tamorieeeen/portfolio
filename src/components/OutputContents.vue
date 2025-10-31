<script setup>
import PageItem from './parts/PageItem.vue';
import SnsCard from './parts/SnsCard.vue';
</script>

<template>
  <PageItem iconGroup="fas" iconCode="code">
    <template #heading>Output</template>
    <template #explanation>できるだけアウトプットするように心掛けています。ちなみにこのサイトのコードはGitHubで公開しているので気になる方はどうぞ。</template>
    <div class="flex-wrapper">
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
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>