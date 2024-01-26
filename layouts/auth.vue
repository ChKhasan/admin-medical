<template lang="html">
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware: ["auth", "access"],

};
</script>
<style lang="css"></style>
