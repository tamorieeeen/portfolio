<script setup>
import PageItem from './parts/PageItem.vue';
import CareerCard from './parts/CareerCard.vue';
</script>

<template>
  <PageItem iconGroup="fas" iconCode="clock-rotate-left">
    <template #heading>Career</template>
    <template #explanation>簡単な経歴です。</template>
    <CareerCard>
      <template #job>フリーランスWebエンジニア</template>
      <template #year>2018年～現在</template>
      <template #detail>常駐：アプリの広告効果計測ツール開発・運用<br>在宅：Web検定試験サイト構築<br>在宅：化粧品販売ECサイト構築<br>在宅：HRシステム構築・保守運用←Now!!</template>
    </CareerCard>
    <CareerCard>
      <template #job>株式会社サイバーエージェント</template>
      <template #year>2011～2014年</template>
      <template #detail>新卒で入社し、モバイル・スマホ向けのソーシャルゲームのアプリケーションエンジニアとして新規立ち上げ、機能開発、保守運用とひと通り経験しました。<br>2年目以降はシステム責任者としてマネジメント業務も経験しました。</template>
    </CareerCard>
    <CareerCard>
      <template #job>早稲田大学 基幹理工学部<br class="sp-only"> 機械科学・航空学科 卒業</template>
      <template #year>2007～2011年</template>
      <template #detail>在学中は音楽サークルに所属してギター(と時々ベース)を弾いてました。副幹事長をしていました。<br>3つのバイトを掛け持ちしていて、マクドナルドでは時間帯責任者をしていました。</template>
    </CareerCard>
  </PageItem>
</template>

<style scoped>
@media (min-width: 768px) {
  .sp-only {
    display: none;
  }
}
@media (max-width: 767px) {
  .pc-only {
    display: none;
  }
}
</style>
