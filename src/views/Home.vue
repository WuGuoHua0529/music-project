<template>
  <div
    ref="container"
    class="container"
  >
    <div class="page">
      <div class="page_bk page_bk1"></div>
      <PageContent :data="pageData[1]" />
      <div
        v-show="!arrowStatus"
        class="pageArrow"
        @click="nextPage"
      ></div>
    </div>
    <div class="page">
      <div class="page_bk page_bk2"></div>
      <PageContent :data="pageData[2]" />
    </div>
    <div class="page">
      <div class="page_bk page_bk3"></div>
      <PageContent :data="pageData[3]" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import PageContent from '../components/PageContent.vue'

export default {
  name: 'Home',
  components: {
    PageContent
  },
  setup () {
    const container = ref(null);
    const pageData = {
      1: [
        '少年與海',
        'HELL',
        '只有我和你的地方',
        '你不是第一個離開的人',
        '不想回家',
        '冰河時代'
      ],
      2: [
        '又到天黑 We Will Be Fine',
        '我無法克制自己 When The Wind Blows',
        '我想要佔據你 How To Do',
        '一念之間 Without Me',
        '你所到之處（就下雨） Your Guilt-trip',
        '啊我忘了帶傘 Aaaaah!'
      ],
      3: []
    }

    onMounted(() => {
      container.value.addEventListener("wheel", (event) => {
        event.preventDefault();
        container.value.scrollLeft += event.deltaY;
        arrowStatus.value = !(container.value.scrollLeft <= 100);
      });
    });

    const arrowStatus = ref(false);

    function nextPage () {
      arrowStatus.value = true;
      container.value.scrollLeft += 1060;
    }

    return {
      container,
      pageData,
      arrowStatus,
      nextPage
    };
  }
}
</script>

<style scoped>
.container {
  display: flex;
  overflow-x: scroll;
}

.page {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background-color: #1b1b1b;
  position: relative;
}

.page_bk {
  width: 100%;
  height: 50%;
  background-size: contain;
  background-repeat: no-repeat;
}

.page_bk1 {
  background-image: url("../assets/images/home/music_1.jpeg");
  background-size: 100vw;
}

.page_bk2 {
  background-image: url("../assets/images/home/music_2.jpeg");
  background-size: 100vw;
}

.page_bk3 {
  background-image: url("../assets/images/home/music_3.jpeg");
  background-size: 100vw;
}

@keyframes blink-smooth {
  to {
    background-color: transparent;
  }
}

.pageArrow {
  background-color: rgba(255, 255, 255, 0.533);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 46%;
  right: 0;
  cursor: pointer;
  animation: 0.5s blink-smooth 10 alternate;
}

.pageArrow:before {
  content: "GO!";
  display: block;
  position: absolute;
  right: 35%;
  top: 20%;
  width: 20px;
  height: 20px;
  transform: rotate(50deg);
  font-weight: bold;
}

.pageArrow:hover::before {
  right: 42%;
  top: 30%;
  transform: rotate(10deg);
  color: #a32626;
}
</style>
