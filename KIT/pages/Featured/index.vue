<template>
  <div class="container-fluid">
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
  </div>
</template>

//register component by importing //
<script>
import Featured from '@/components/Featured'

export default {
  components: {
    Featured
  },
  data() {
    return {
      featured: [
        {
          id: '1',
          canonical: 'featured-1',
          title: 'Featured 1',
          description: 'Featured 1 description lalal',
          imgSrcSmall: '/images/featured-1.jpg'
        },
        {
          id: '2',
          canonical: 'featured-2',
          title: 'Featured 2',
          description: 'Featured 2 description lalal',
          imgSrcSmall: '/images/featured-2.jpg'
        },
        {
          id: '3',
          canonical: 'featured-3',
          title: 'Featured 3',
          description: 'Featured 3 description lalal',
          imgSrcSmall: '/images/featured-3.jpg'
        },
        {
          id: '4',
          canonical: 'featured-4',
          title: 'Featured 4',
          description: 'Featured 4 description lalal',
          imgSrcSmall: '/images/featured-4.jpg'
        },
        {
          id: '5',
          canonical: 'featured-5',
          title: 'Featured 5',
          description: 'Featured 5 description lalal',
          imgSrcSmall: '/images/featured-5.jpg'
        }
      ]
    }
  }
}
</script>
