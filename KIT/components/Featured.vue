<template>
  <div class="column is-one-fifth">
    <nuxt-link :to="'/featured/' + canonical">
      <article
        class="featured--item"
        :style="{ backgroundImage: 'url(' + imgSrcSmall + ')' }"
      >
        <div class="featured--item-content">
          <h4>{{ title }}</h4>
          <p>{{ description }}</p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    canonical: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    imgSrcSmall: {
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
.featured {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  @media (min-width: 1280px) {
    margin-top: -90px;
  }
  &--item {
    padding: 5em 1em 1em 1em;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 1em 0.5em;
    position: relative;
    min-height: 24vw;
    display: flex;
    align-items: flex-end;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    &-content {
      position: relative;
      z-index: 2;
      color: #fff;
      font-size: calc(12px + 0.4vw);
    }
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.81) 0%,
        rgba(0, 0, 0, 0) 53.31%
      );
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
    }
  }
}

/* .featured--item-content {
  background: linear-gradient(0deg, #000000 2.69%, rgba(28, 51, 86, 0) 32.39%);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
} */
</style>
