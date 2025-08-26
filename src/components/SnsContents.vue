<script setup>
import PageItem from './parts/PageItem.vue';
import SnsList from './SnsList.vue';
</script>
<template>
  <PageItem iconGroup="fas" iconCode="comments">
    <template #heading>SNS</template>
    <template #explanation>ご連絡は各SNSのDMにお願いします。1番反応が良いのはX(Twitter)です。</template>
    <SnsList />
  </PageItem>
</template>
