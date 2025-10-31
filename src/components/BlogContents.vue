<script setup>
import PageItem from './parts/PageItem.vue';
import BlogCard from './parts/BlogCard.vue';
</script>

<template>
  <PageItem iconCode="pencil">
    <template #heading>Blog</template>
    <template #explanation>管理しているブログ一覧です。</template>
    <div class="flex-wrapper">
      <BlogCard url="https://snow.tamorieeeen.com/" imgName="blog_snow_ogp_1200x675_thin.png">
        <template #title>スノボときどき車中泊</template>
        <template #subtitle>雪山と車中泊を楽しむブログ</template>
      </BlogCard>
      <BlogCard url="https://beauty.tamorieeeen.com/" imgName="blog_beauty_ogp_1200x675_thin.jpg">
        <template #title>もりんちゅはキレイになりたい</template>
        <template #subtitle>手遅れだけど美容を頑張るブログ</template>
      </BlogCard>
      <BlogCard url="https://tamorieeeen.hatenablog.jp/archive" imgName="blog_hatena_header_330x175_thin.png">
        <template #title>ママは毎日お疲れモード</template>
        <template #subtitle>発達凸凹ガール育児で疲弊するママのぼやき</template>
      </BlogCard>
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
