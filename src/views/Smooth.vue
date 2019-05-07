<template>
  <div class="home">
    <div class="notice">
      This is Smooth scroll html sample page. Look at right down control.
      <ol>
        <li>Select a section where you want to go</li>
        <li>Select a method how scroll behavior is</li>
        <ul>
          <li>
            direct: Jump to selected section. Not smoothly.
          </li>
          <li>constant speed: Move at a constant pixels per frame</li>
          <li>
            constant frame: Move at a constant frame(similar with constant time)
          </li>
          <li>
            via router: Same with scrolling constant 10px per frame speed.
            Difference is only hooking via vue router.
          </li>
        </ul>
        <li>
          Click a 'Go' Button. Browser will be scroll to selected section
          smoothly
        </li>
      </ol>
    </div>

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
    <div class="control_area">
      <div class="control_section">
        <select v-model="where" class="control">
          <option v-for="anchor in anchors" :key="anchor.id" :value="anchor.id">
            {{ anchor.id }}
          </option>
        </select>
      </div>
      <div class="control_section">
        <select v-model="how" class="control">
          <option value="direct">Direct</option>
          <option value="speed">Constant Speed</option>
          <option value="frame">Constant Frame</option>
          <option value="router">Via Router</option>
        </select>
      </div>
      <div class="control_section speed" v-if="how === 'speed'">
        <input v-model="speed" type="number" class="control" />
      </div>
      <div class="control_section frame" v-if="how === 'frame'">
        <input v-model="frame" type="number" class="control frame" />
      </div>
      <div class="control_section">
        <button class="button" @click="goToAnchor">GO</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    anchors: [],
    where: "section3",
    how: "speed",
    speed: 5,
    frame: 120
  }),
  computed: {
    selected() {
      return this.anchors.find(anchor => anchor.id === this.where);
    }
  },
  mounted() {
    this.anchors = [...document.querySelectorAll("h1")];
  },
  methods: {
    goToAnchor() {
      if (this.how === "direct") {
        this.moveByDirect(this.selected);
      } else if (this.how === "speed") {
        this.moveByConstantSpeed(this.selected, this.speed);
      } else if (this.how === "frame") {
        this.moveByConstantFrame(this.selected, this.frame);
      } else if (this.how === "router") {
        this.moveByRouter(this.selected);
      }
    },
    moveByDirect(target) {
      const top = target.offsetTop;
      window.scrollTo(0, top);
    },
    moveByConstantSpeed(target, speed) {
      const step = (currentTime, prevTime) => {
        const deltaTime = currentTime - prevTime;
        const top = target.getBoundingClientRect().top;
        if (Math.abs(top) <= 1) return;
        if (top > 0) {
          const sc = document.scrollingElement;
          if (sc.scrollTop + sc.clientHeight === sc.scrollHeight) return;
          const deltaV = Math.min(deltaTime * speed, top);
          window.scrollBy(0, deltaV);
        } else {
          if (document.scrollingElement.scrollTop === 0) return;
          const deltaV = Math.max(-deltaTime * speed, top);
          window.scrollBy(0, deltaV);
        }
        window.requestAnimationFrame(nextTime => step(nextTime, currentTime));
      };
      window.requestAnimationFrame(currentTime =>
        step(currentTime, window.performance.now())
      );
    },
    moveByConstantFrame(target, time) {
      const distance = Math.abs(target.getBoundingClientRect().top);
      const speed = distance / time;
      this.moveByConstantSpeed(target, speed);
    },
    moveByRouter(target) {
      const name = this.$route.name;
      const hash = "#" + target.id;
      this.$router.push({ name, hash });
    }
  }
};
</script>

<style scoped>
.notice {
  font-size: 1.2rem;
}

.control_area {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px;
  background: #f5cba7;
}

.control_section {
  display: flex;
  margin: 10px;
}

.control {
  width: 100%;
}

.control_section::after {
  position: fixed;
  font-size: 0.5rem;
  right: 2.5rem;
  transition: all 0.05s ease-in-out;
}
.speed::after {
  content: "px per frame";
}
.frame::after {
  content: "frames";
}

.button {
  width: 100%;
}
</style>
