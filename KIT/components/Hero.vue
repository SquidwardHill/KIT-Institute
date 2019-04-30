<template>
  <div
    class="hero"
    :style="{
      backgroundImage: `url('${backgroundImage}')`
    }"
  >
    <div class="columns">
      <div class="column is-one-third">
        <h1>{{ title }}</h1>
        <h2>
          <em>{{ subhead }}</em>
        </h2>
        <p>
          {{ heroText }}
        </p>
        <div class="button-wrap">
          <a class="button is-primary" :href="{ link }">Apply Now</a>
          <a class="button is-ghost" :href="{ link }"><span>+</span> My List</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subhead: {
      type: String,
      default: ''
    },
    heroText: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
$color--red: #ed2517;
h1 {
  font-size: calc(12px + 1.5vw);
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 1em;
}
h2 {
  font-size: calc(12px + 1vw);
}
p {
  font-size: calc(12px + 0.4vw);
  margin: 2em 0;
}
.is-primary {
  background-color: $color--red;
}
.is-ghost {
  color: #fff;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  span {
    font-size: 3em;
    padding-right: 0.2em;
  }
}
.hero {
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 5em 4em;
  @media (min-width: 1280px) {
    padding: 5em 4em 10em 5em;
  }
}
.button {
  border-radius: 0;
  padding: 1.5em 2em 1.7em 2em;
  text-transform: uppercase;
  font-style: italic;
}
</style>
