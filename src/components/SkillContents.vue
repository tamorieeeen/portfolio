<script setup>
import PageItem from './parts/PageItem.vue';
import SkillCard from '@/components/parts/SkillCard.vue';
</script>

<template>
  <PageItem iconGroup="fas" iconCode="keyboard">
    <template #heading>Back-end</template>
    <template #explanation>元々サーバーサイドエンジニアなので1番得意な分野ではありますが、ほぼJava専門店です(笑)</template>
    <div class="flex-wrapper">
      <SkillCard iconGroup="fab" iconCode="java" rating="5">
        <template #skill>Java/SpringBoot</template>
        新卒時代からずっと使っているので1番得意な言語です。最近はもっぱらSpringBootを使っています。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="php" rating="2">
        <template #skill>PHP</template>
        一時期業務でCakePHPを使っていました。最近ではWordPressをカスタマイズする際に使う程度です。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="golang" rating="1">
        <template #skill>Go</template>
        一時期業務で触ったことがある程度ですが、キャッチアップはできそうだなという感じでした。
      </SkillCard>
      <SkillCard iconGroup="fas" iconCode="terminal" rating="2">
        <template #skill>bash script</template>
        サーバー上で何か処理をしたいときに使う程度です。
      </SkillCard>
    </div>
  </PageItem>
  <PageItem iconGroup="fas" iconCode="display">
    <template #heading>Front-end</template>
    <template #explanation>デザインは専門外ですが、フロントエンジニアとしてやっていける程度にはできると思います。</template>
    <div class="flex-wrapper">
      <SkillCard iconGroup="fab" iconCode="square-js" rating="4">
        <template #skill>JavaScript/jQuery</template>
        素のJavaScriptを書くこともありますが、基本的にはjQueryで書いています。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="html5" rating="4">
        <template #skill>HTML5</template>
        基本的なタグ構造は理解しているつもりです。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="css3-alt" rating="3">
        <template #skill>CSS3</template>
        思った通りの見た目に整える、という点では不便なく書けると思います。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="vuejs" rating="2">
        <template #skill>Vue.js</template>
        完全に独学で絶賛勉強中です。ちなみにこのサイトはVue.jsで作っています。
      </SkillCard>
    </div>
  </PageItem>
  <PageItem iconGroup="fas" iconCode="network-wired">
    <template #heading>Infra</template>
    <template #explanation>インフラは元々苦手意識がありましたが、フリーランスになってからすべて自分でやっているのでだいぶ身に付きました。</template>
    <div class="flex-wrapper">
      <SkillCard iconGroup="fab" iconCode="aws" rating="3">
        <template #skill>AWS</template>
        主に使っているのはEC2/RDS/S3/SES/ELB/Route53/VPC/IAMです。
      </SkillCard>
      <SkillCard iconGroup="fas" iconCode="database" rating="4">
        <template #skill>MySQL</template>
        DBはずっとMySQLを使っています。逆に言えばMySQL以外は使ったことがありません。
      </SkillCard>
      <SkillCard iconGroup="fas" iconCode="server" rating="3">
        <template #skill>nginx</template>
        Apacheを使っていた時期もありましたが、最近はもっぱらnginxを使っています。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="linux" rating="3">
        <template #skill>Linux</template>
        以前はCentOSを使っていましたが、AWSの利用を始めてからAmazon Linuxを使っています。
      </SkillCard>
    </div>
  </PageItem>
  <PageItem iconGroup="fas" iconCode="robot">
    <template #heading>DevOps / Tool</template>
    <template #explanation>直近で使っているツール等です。</template>
    <div class="flex-wrapper">
      <SkillCard iconGroup="fab" iconCode="github" rating="4">
        <template #skill>Git/GitHub</template>
        基本的にはSourceTreeを使っていますが、CUIでコマンドを叩くこともあります。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="wordpress" rating="2">
        <template #skill>WordPress</template>
        独自ドメインのブログはすべてWordPressを使って管理しています。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="jenkins" rating="4">
        <template #skill>Jenkins</template>
        build/deploy、batch処理の定期実行ツールとしてJenkinsを使っています。
      </SkillCard>
      <SkillCard iconGroup="fab" iconCode="slack" rating="4">
        <template #skill>Slack</template>
        チャットツールはSlackが1番使い慣れています。Jenkinsと連携させたりして活用しています。
      </SkillCard>
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
