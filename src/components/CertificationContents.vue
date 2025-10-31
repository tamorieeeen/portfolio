<script setup>
import PageItem from './parts/PageItem.vue';
</script>

<template>
  <PageItem iconCode="award">
    <template #heading>Certification</template>
    <template #explanation>取得した資格一覧です。</template>
    <div class="box">
      <div>IPA 応用情報技術者試験</div>
      <div class="year">2021年12月 合格</div>
    </div>
    <div class="box">
      <div>IPA 基本情報技術者試験</div>
      <div class="year">2014年05月 合格</div>
    </div>
    <div class="box">
      <div>普通自動車第一種運転免許(現: 8t限定中型)</div>
      <div class="year">2007年01月 取得</div>
    </div>
  </PageItem>
</template>

<style scoped>
.box {
  margin: 0.7rem 0;
}
.year {
  font-size: 0.8rem;
  color: #45685C;
  margin-top: 0.1rem;
}
</style>
