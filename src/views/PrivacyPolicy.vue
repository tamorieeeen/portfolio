<script setup>
import PageTitle from '@/components/parts/PageTitle.vue';
import PageItem from '@/components/parts/PageItem.vue';
import SnsList from '@/components/SnsList.vue';
</script>

<template>
  <main>
    <PageTitle>プライバシーポリシー</PageTitle>
    <PageItem iconGroup="fas" iconCode="user-lock">
      <template #heading>個人情報について</template>
      <template #explanation>当サイトでは氏名、住所、メールアドレス、電話番号といった個人情報は収集していません。</template>
    </PageItem>
    <PageItem iconGroup="fas" iconCode="chart-line">
      <template #heading>アクセス解析について</template>
      <template #explanation>
        <p>当サイトでは、アクセス解析ツールとしてGoogleが提供している「Googleアナリティクス」を利用しています。「Googleアナリティクス」はトラフィックデータの収集にCookieを使用しています。</p>
        <p>もしCookieを使用されたくない場合は、ブラウザの設定でCookieを無効にすることも可能です。詳しくはお使いのブラウザの設定をご確認ください。</p>
        <p>※Cookieは名前、住所、メールアドレス、電話番号などの個人を特定するものではありません</p>
      </template>
    </PageItem>
    <PageItem iconGroup="fas" iconCode="ban">
      <template #heading>免責事項</template>
      <template #explanation>
        <p>当サイトの内容や情報については、できる限り正確な情報を記載するように努めておりますが、正確性や安全性を保証するものではありません。</p>
        <p>情報が古くなっていたり、誤った情報が含まれる可能性もございますのであらかじめご了承ください。</p>
        <p>また、当サイトに記載している内容を利用することによって生じた損害等は一切の責任を負いかねます。</p>
      </template>
    </PageItem>
    <PageItem iconGroup="fas" iconCode="pen-nib">
      <template #heading>著作権について</template>
      <template #explanation>
        <p>当サイトに記載している文章、画像などにつきましては無断転載を禁止します。</p>
        <p>転載にあたらない範囲で一部引用される場合は、必ず引用元URLの記載をお願いします。</p>
        <p>なお、当サイトは著作権や肖像権の侵害を目的としたものではありません。万が一著作権や肖像権に関して問題点、疑問点がございましたら下記問合せ先よりご連絡いただけますと幸いです。</p>
      </template>
    </PageItem>
    <PageItem iconGroup="fas" iconCode="link">
      <template #heading>リンクについて</template>
      <template #explanation>当サイトにリンクを行う場合の許可や連絡は不要です。ただし、インラインフレームの使用、画像の直リンクはご遠慮ください。</template>
    </PageItem>
    <PageItem iconGroup="fas" iconCode="headset">
      <template #heading>問い合わせ先</template>
      <template #explanation>当サイトに関して何かございましたら下記SNSのDMよりご連絡いただきますようお願いします。</template>
      <SnsList />
    </PageItem>
  </main>
</template>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
