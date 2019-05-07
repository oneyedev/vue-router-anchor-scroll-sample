<template>
  <div class="home">
    This is vue router anchor scroll sample!
    <h1 id="section1">section1</h1>
    Lorem ipsum litora lacinia phasellus aenean placerat phasellus, urna sed
    cubilia convallis cubilia feugiat nec feugiat, diam eu proin feugiat
    vulputate fusce porta quis dictum auctor phasellus posuere tempus convallis
    vel tincidunt elit.
    <h1 id="section2">section2</h1>
    Diam at etiam tellus id scelerisque aliquam lacinia lacus, placerat habitant
    faucibus sagittis eu platea dapibus sit, varius ut phasellus etiam amet
    vehicula eleifend.
    <h1 id="section3">section3</h1>
    Mollis vehicula quis hac nunc id etiam vivamus iaculis primis, aenean
    ultricies pretium torquent conubia adipiscing habitasse eget, aptent orci
    quis odio et elementum praesent at nec eu posuere mauris ultricies.
    <h1 id="section4">section4</h1>
    Orci maecenas tincidunt ut sapien pretium phasellus volutpat eu lacus cursus
    integer nostra aptent iaculis, lectus tellus aenean turpis erat senectus
    rutrum feugiat tortor molestie himenaeos tristique diam scelerisque feugiat
    semper conubia fames metus sollicitudin.
    <h1 id="section5">section5</h1>
    Nisi nullam ultrices auctor risus himenaeos vulputate commodo eros, augue
    litora ad praesent dapibus luctus pellentesque quam, quisque ultrices
    laoreet commodo ultrices enim nulla.
    <h1 id="section6">section6</h1>
    Est elementum semper diam odio venenatis scelerisque blandit elit orci,
    aptent euismod interdum curae felis nisi taciti conubia, feugiat porta
    posuere pellentesque massa at sapien bibendum.
    <div class="index">
      <ul>
        <li
          v-for="anchor in anchors"
          :key="anchor.id"
          class="index_item"
          @click="goToAnchor(anchor)"
        >
          {{ anchor.id }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    anchors: []
  }),
  mounted() {
    this.anchors = [...document.querySelectorAll("h1")];
  },
  methods: {
    goToAnchor(anchor) {
      const name = this.$route.name;
      const hash = "#" + anchor.id;
      this.$router.push({ name, hash });
    }
  }
};
</script>

<style scoped>
.index {
  position: fixed;
  font-size: 1.2rem;
  right: 20px;
  bottom: 20px;
  padding-right: 20px;
  background: #f5cba7;
}
.index_item {
  cursor: pointer;
}
</style>
