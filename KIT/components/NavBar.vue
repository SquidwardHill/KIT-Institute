<template>
  <div class="nav">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/images/kit-logo.png" />
      </nuxt-link>
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

//
<script>
// export default {
//   mounted() {
//     window.addEventListener('scroll', this.updateScroll)
//   },
//   methods: {
//     updateScroll() {
//       this.scrollPosition = window.scrollY
//     }
//   },
//   destroy() {
//     window.removeEventListener('scroll', this.updateScroll)
//   }
// }
//
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  padding: 1em 5em;
  transition: 0.2s ease;
  width: 100%;
  position: fixed;
  z-index: 10;
  background: #000;
}
.hasScrolled {
  background: #000;
  transition: 0.2s ease;
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
