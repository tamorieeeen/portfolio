<script setup>
import PageItem from './parts/PageItem.vue';
</script>
<template>
  <PageItem iconCode="bullhorn">
    <template #heading>Request</template>
    <template #explanation>お仕事のご相談は下部のSNSよりご連絡いただけますと幸いです。</template>
    <ul>
      <li><font-awesome-icon :icon="['fas', 'forward']" class="icon" />現在は在宅案件のみお受けしております。必要に応じて対面での打ち合わせは可能ですが、定常的に出社するのは難しいです。</li>
      <li><font-awesome-icon :icon="['fas', 'forward']" class="icon" />すでに稼働している案件があるため、お受けできる稼働時間は週15～20時間程度です。</li>
      <li><font-awesome-icon :icon="['fas', 'forward']" class="icon" />適格請求書(インボイス)発行事業者です。</li>
    </ul>
    <p class="explain">なお、詳しいスキルは<RouterLink to="/skill">Skill</RouterLink>をご覧ください。</p>
  </PageItem>
</template>

<style scoped>
ul {
  padding-left: 0;
  position: relative;
}
ul li {
  list-style-type: none;
  padding: 0.2rem 0;
}
.icon {
  color: var(--color-main-theme);
  margin-right: 0.5rem;
}
.explain {
  margin-top: 1rem;
}
</style>
