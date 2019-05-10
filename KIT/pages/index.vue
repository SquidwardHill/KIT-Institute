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
      :class="{ isTop: scrollPosition < 100, isTop: scrollPosition > 100 }"
    >
    </Hero>

    <!-- Featured -->
    <section class="featured">
      <div class="container-fluid has-padding-left has-padding-right">
        <h3 class="light">FEATURED</h3>
      </div>
      <div class="columns has-padding-left has-padding-right">
        <Featured
          v-for="feature in featured"
          :key="feature.id"
          :img-src-small="feature.imgSrcSmall"
          :title="feature.title"
          :canonical="feature.canonical"
          :description="feature.description"
        >
        </Featured>
      </div>
    </section>
    <!-- Events -->
    <section class="events">
      <div class="container-fluid has-padding-left has-padding-right">
        <h3 class="light">EVENTS</h3>
      </div>
      <div class="columns has-padding-left has-padding-right">
        <Event
          v-for="event in events"
          :key="event.id"
          :img-src-small="event.imgSrcSmall"
          :title="event.title"
          :canonical="event.canonical"
          :description="event.description"
        >
        </Event>
      </div>
    </section>

    <!-- Events -->
    <section class="events">
      <div class="container-fluid has-padding-left has-padding-right">
        <h3 class="light">EVENTS</h3>
      </div>
      <div class="columns has-padding-left has-padding-right">
        <Event
          v-for="event in events"
          :key="event.id"
          :img-src-small="event.imgSrcSmall"
          :title="event.title"
          :canonical="event.canonical"
          :description="event.description"
        >
        </Event>
      </div>
    </section>

    <!-- Scholarship -->
    <section class="events">
      <div class="container-fluid has-padding-left has-padding-right">
        <h3 class="light">SCHOLARSHIP</h3>
      </div>
      <div class="columns has-padding-left has-padding-right">
        <Event
          v-for="event in events"
          :key="event.id"
          :img-src-small="event.imgSrcSmall"
          :title="event.title"
          :canonical="event.canonical"
          :description="event.description"
        >
        </Event>
      </div>
    </section>

    <!-- STUDENT LIFE -->
    <section class="events">
      <div class="container-fluid has-padding-left has-padding-right">
        <h3 class="light">STUDENT LIFE</h3>
      </div>
      <div class="columns has-padding-left has-padding-right">
        <Event
          v-for="event in events"
          :key="event.id"
          :img-src-small="event.imgSrcSmall"
          :title="event.title"
          :canonical="event.canonical"
          :description="event.description"
        >
        </Event>
      </div>
    </section>

    <!-- INTERNSHIP -->
    <section class="events">
      <div class="container-fluid has-padding-left has-padding-right">
        <h3 class="light">INTERNSHIP</h3>
      </div>
      <div class="columns has-padding-left has-padding-right">
        <Event
          v-for="event in events"
          :key="event.id"
          :img-src-small="event.imgSrcSmall"
          :title="event.title"
          :canonical="event.canonical"
          :description="event.description"
        >
        </Event>
      </div>
    </section>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'
import Featured from '@/components/Featured'
import Event from '@/components/Event'
import Hero from '@/components/Hero'
export default {
  components: {
    Featured,
    Hero,
    Event
    // Carousel,
    // Slide
  },
  data() {
    return {
      featured: [
        {
          id: '1',
          canonical: 'featured-1',
          title: 'Featured 1',
          description: 'Featured 1 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-tall-1.jpg'
        },
        {
          id: '2',
          canonical: 'featured-2',
          title: 'Featured 2',
          description: 'Featured 2 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-tall-2.jpg'
        },
        {
          id: '3',
          canonical: 'featured-3',
          title: 'Featured 3',
          description: 'Featured 3 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-tall-3.jpg'
        },
        {
          id: '4',
          canonical: 'featured-4',
          title: 'Featured 4',
          description: 'Featured 4 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-tall-4.jpg'
        },
        {
          id: '5',
          canonical: 'featured-5',
          title: 'Featured 5',
          description: 'Featured 5 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-tall-5.jpg'
        }
      ],
      events: [
        {
          id: '1',
          canonical: 'event-1',
          title: 'event 1',
          description: 'event 1 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-1.jpg'
        },
        {
          id: '2',
          canonical: 'event-2',
          title: 'event 2',
          description: 'event 2 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-2.jpg'
        },
        {
          id: '3',
          canonical: 'event-3',
          title: 'event 3',
          description: 'event 3 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-3.jpg'
        },
        {
          id: '4',
          canonical: 'event-4',
          title: 'event 4',
          description: 'event 4 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-4.jpg'
        },
        {
          id: '5',
          canonical: 'event-5',
          title: 'event 5',
          description: 'event 5 description',
          imgSrcSmall: '/images/PLACEHOLDERS/placeholder-5.jpg'
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
          backgroundImage: '/images/PLACEHOLDERS/placeholder-hero-home.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  // background: rgba(29, 29, 29, 0.97);
  background: #141414;
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
