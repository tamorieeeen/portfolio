<script setup>
import RequestContents from '@/components/RequestContents.vue';
import BlogContents from '@/components/BlogContents.vue';
import SnsContents from '@/components/SnsContents.vue';
</script>

<template>
  <main>
    <div class="introduction">
      <p>こんにちは、Webエンジニアのもりんちゅです。<br>今さらではありますが、ポートフォリオサイトをOPENしました。</p>
    </div>
    <RequestContents />
    <BlogContents />
    <SnsContents />
  </main>
</template>

<style scoped>
.introduction {
  margin: 2rem 0;
}
</style>
