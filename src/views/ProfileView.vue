<script setup>
import PageTitle from '@/components/parts/PageTitle.vue';
import PageItem from '@/components/parts/PageItem.vue';
import CareerContents from '@/components/CareerContents.vue';
import CertificationContents from '@/components/CertificationContents.vue';
</script>

<template>
  <main>
    <PageTitle>プロフィール</PageTitle>
    <div>
      <p>私生活ではASD&ADHDグレーゾーンの娘に振り回されているアラフォーです。<br>元々動物病院で保護されていたうさぎを飼っています。少々気性が荒くて手のかかる子ですが癒しです。</p>
    </div>
    <CareerContents />
    <PageItem iconCode="head-side-cough">
      <template #heading>16 Personalities</template>
      <template #explanation>性格診断テストの性格タイプはESTJ-T[幹部]です。</template>
      <a href="https://www.16personalities.com/ja/%E6%80%A7%E6%A0%BC%E3%82%BF%E3%82%A4%E3%83%97" target="_blank" rel="noopener"><font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" /> 16 Personalities | 性格タイプ</a>
    </PageItem>
    <CertificationContents />
  </main>
</template>
