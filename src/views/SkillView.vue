<script setup>
import PageTitle from '@/components/parts/PageTitle.vue';
import SkillContents from '@/components/SkillContents.vue';
import OutputContents from '@/components/OutputContents.vue';
</script>

<template>
  <main>
    <PageTitle>スキル</PageTitle>
    <div>
      <p>新卒時代からWeb一筋なのでWebに関する知識はひと通りあると思います。<span class="star"><font-awesome-icon :icon="['fas', 'star']" /></span>は主観的な習熟度です。</p>
    </div>
    <SkillContents />
    <OutputContents />
  </main>
</template>

<style scoped>
.star {
  color: #b99b00;
}
</style>
