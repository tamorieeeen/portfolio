<script setup>
import PageTitle from '@/components/parts/PageTitle.vue';
import WorkCard from '@/components/parts/WorkCard.vue';
</script>
<template>
  <main>
    <PageTitle>制作実績</PageTitle>
    <div class="introduction">
      <p>公開が可能なものをご紹介します。</p>
      <p>※非公開なシステム開発が大半となっております。掲載許可をくださったクライアントのみなさま、ありがとうございます。</p>
    </div>
    <div class="flex-wrapper">
      <WorkCard url="https://tamorieeeen.github.io/portfolio/" pcImgFile="tamorieeeen_portfolio_pc_1200x783_thin.png" spImgFile="tamorieeeen_portfolio_sp_400x788_thin.png">
        <template #title>ポートフォリオサイト</template>
        <template #description>自分のポートフォリオサイトです。</template>
        <template #techStack>Vue.js/CSS/GitHub Pages</template>
      </WorkCard>
    </div>
  </main>
</template>
<style scoped>
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.introduction {
  margin: 2rem 0;
}
.introduction > p {
  margin: 0.3rem 0;
}
</style>