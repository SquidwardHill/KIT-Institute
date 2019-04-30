<template>
  <div class="page-wrapper">
    <section class="featured">
      <div class="row">
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
          title: 'Featured 1',
          description: 'Featured 1 description lalal',
          imgSrcSmall: 'http://placekitten.com/g/400/300'
        },
        {
          id: '2',
          title: 'Featured 2',
          description: 'Featured 2 description lalal',
          imgSrcSmall: 'http://placekitten.com/g/400/300'
        }
      ]
    }
  }
}
</script>
