<template>
  <div
    ref="container"
    class="container"
  >
    <div class="page">
      <div class="page_bk page_bk1"></div>
      <PageContent :data="pageData[1]" />
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
      });
    });


    return {
      container,
      pageData
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
}

.page_bk {
  width: 100%;
  height: 50%;
  background-size: contain;
  background-repeat: no-repeat;
}

.page_bk1 {
  background-image: url("../assets/music_1.jpeg");
  background-size: 100vw;
}

.page_bk2 {
  background-image: url("../assets/music_2.jpeg");
  background-size: 100vw;
}

.page_bk3 {
  background-image: url("../assets/music_3.jpeg");
  background-size: 100vw;
}
</style>
