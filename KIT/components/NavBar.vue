<template>
  <div class="nav">
    <div class="logo">
      <img src="/images/kit-logo.png" />
    </div>
    <div class="nav-links">
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nuxt-link to="/Featured">
        Featured
      </nuxt-link>
      |
      <nuxt-link to="/Internships">
        Internships
      </nuxt-link>
      <nuxt-link to="/Scholarships">
        Scholarships
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  background: #000;
  display: flex;
  align-items: center;
  padding: 1em 5em;
}
.logo {
  padding-right: 5em;
}

a {
  color: #fff;
  margin: 0 0.5em;
  font-size: calc(12px + 0.3vw);
}
</style>
