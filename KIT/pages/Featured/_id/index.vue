<template>
  <!-- route params is a default paramater given to you by the vue router -->
  <section class="single-feature">
    <p>{{ $route.params.id }}</p>
    <h1>Title</h1>
    <img src="" alt="" />
    <p>The feature description</p>
  </section>
</template>

<style scoped>
/* styles here */
</style>
