<template>
  <div>
    {{$route.query.keyword}}
    {{$route.params.k}}
    {{keyword}}
    {{k}}
  </div>
</template>

<script>
export default {
  props: ['keyword', 'k']
}
</script>

<style>

</style>