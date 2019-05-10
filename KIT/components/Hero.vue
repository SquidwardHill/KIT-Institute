<template>
  <div
    class="hero"
    :style="{
      backgroundImage: `url('${backgroundImage}')`
    }"
  >
    <div class="columns">
      <div class="column is-two-fifths">
        <h1>{{ title }}</h1>
        <h2>
          <em>{{ subhead }}</em>
        </h2>
        <h4>
          {{ heroText }}
        </h4>
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
h1,
h2,
p {
  margin-bottom: 0.5em;
  line-height: 1.2em;
}
h4 {
  line-height: 1.2em;
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
  z-index: 0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 85vh;
  color: #fff;
  padding: 10%;
  &:before {
    content: '';
    width: 100%;
    height: 85vh;
    position: absolute;
    background: linear-gradient(
      69.77deg,
      rgba(0, 0, 0, 0.43) 10.99%,
      rgba(0, 0, 0, 0) 87.18%
    );
    mix-blend-mode: multiply;
    top: 0;
    left: 0;
    z-index: 0;
  }
  @media (min-width: 1280px) {
    // padding: 5em 4em 10em 5em;
  }
  .columns {
    position: relative;
    z-index: 1;
  }
}
.button-wrap {
  margin-top: 3em;
}
.button {
  border-radius: 0;
  padding: 1.5em 2em 1.7em 2em;
  text-transform: uppercase;
  font-style: italic;
}
</style>
