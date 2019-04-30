<template>
  <div class="wrapper">
    <Hero
      v-for="heroSlide in hero"
      :key="heroSlide.id"
      :background-image="heroSlide.backgroundImage"
      :title="heroSlide.title"
      :subhead="heroSlide.subhead"
      :hero-text="heroSlide.heroText"
      :link="heroSlide.link"
    >
    </Hero>
    <section class="featured">
      <div class="container">
        <h3 class="light">FEATURED</h3>
      </div>
      <div class="columns">
        <Featured
          v-for="feature in featured"
          :key="feature.id"
          :img-src-small="feature.imgSrcSmall"
          :title="feature.title"
          :description="feature.description"
        >
        </Featured>
      </div>
    </section>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'
import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
export default {
  components: {
    Featured,
    Hero
    // Carousel,
    // Slide
  },
  data() {
    return {
      featured: [
        {
          id: '1',
          title: 'Featured 1',
          description: 'Featured 1 description lalal',
          imgSrcSmall: '/images/featured-1.jpg'
        },
        {
          id: '2',
          title: 'Featured 2',
          description: 'Featured 2 description lalal',
          imgSrcSmall: '/images/featured-2.jpg'
        },
        {
          id: '3',
          title: 'Featured 3',
          description: 'Featured 3 description lalal',
          imgSrcSmall: '/images/featured-3.jpg'
        },
        {
          id: '4',
          title: 'Featured 4',
          description: 'Featured 4 description lalal',
          imgSrcSmall: '/images/featured-4.jpg'
        },
        {
          id: '5',
          title: 'Featured 5',
          description: 'Featured 5 description lalal',
          imgSrcSmall: '/images/featured-5.jpg'
        }
      ],
      hero: [
        {
          id: '1',
          title: 'Welcome to KIT',
          subhead: 'Watch the Season Finale Now',
          heroText:
            'Every horror sequel has its own set of rules. Can this new generation of teens survive long enough to figureout theirs?',
          link: '#',
          backgroundImage: '/images/KIT-home-hero-1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  background: rgba(29, 29, 29, 0.97);
}
.light {
  color: #fff;
}
@media (min-width: 1280px) {
  .featured {
    margin-top: -90px;
  }
}
</style>
