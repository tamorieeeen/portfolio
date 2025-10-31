<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="profile icon" class="logo" src="@/assets/profile_circle_900.png" width="125" height="125" />
    <div class="wrapper">
      <h1>tamorieeeen's Portfolio</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/skill">Skill</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footer-link">
      <RouterLink to="/policy">プライバシーポリシー</RouterLink>
    </div>
    &copy; 2025 tamorieeeen. Brand icons by <a href="https://icons8.jp/" target="_blank" rel="noopener">Icons8</a> and <a href="https://simpleicons.org/" target="_blank" rel="noopener">Simple Icons</a>.
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 0.5rem;
}
nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 1.5rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: 500;
}
nav a:first-of-type {
  border: 0;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  color: var(--color-main-theme);
}
footer {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}
.footer-link {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}
</style>
