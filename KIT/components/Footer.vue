<template>
  <div class="footer ">
    <div class="container-fluid has-padding-left has-padding-right">
      <div class="columns ">
        <div class="column is-one-fourth is-flex-column">
          <nuxt-link to="/">
            Home
          </nuxt-link>
          <nuxt-link to="/">
            Jobs
          </nuxt-link>
        </div>
        <div class="column is-one-fourth is-flex-column">
          <nuxt-link to="/internships">
            Internships
          </nuxt-link>
          <nuxt-link to="/events">
            Events
          </nuxt-link>
        </div>
        <div class="column is-one-fourth is-flex-column">
          <nuxt-link to="/blog">
            Media
          </nuxt-link>
          <nuxt-link to="/">
            Privacy
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: #022f40;
  color: #999999;
}
a {
  color: #999999;
}
</style>
