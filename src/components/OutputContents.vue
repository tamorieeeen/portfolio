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
        <template #icon>
          <img alt="github icon" src="@/assets/icon/github.svg" width="30" />
        </template>
        GitHub
      </SnsCard>
      <SnsCard url="https://qiita.com/tamorieeeen" colorCode="qiita">
        <template #icon>
          <img alt="qiita icon" src="@/assets/icon/qiita.svg" width="30" />
        </template>
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
img {
  vertical-align: -3px;
}
</style>