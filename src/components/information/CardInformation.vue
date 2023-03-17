<template>
  <div class="card_information">
    <div class="card_imgRow">
      <img :src="require(`../../assets/images/information/${data.img}.jpeg`)" />
    </div>
    <div class="card_content">
      <div
        class="card_contentTitle"
        :style="`color: ${isColor}`"
      >{{ data.title }}</div>
      <div class="card_contentSlogan">{{ data.slogan }}</div>
      <div class="card_contentDate">日期地點：</div>
      <div
        v-for="(item, index) in data.content"
        :key="`contents_${index}`"
        class="card_contents"
        :style="`color: ${isColor}`"
      >
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
  name: 'CardInformation',
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  },
  setup () {

    const getRandomColor = function () {
      return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    }

    const isColor = ref('');

    onMounted(() => {
      console.log(getRandomColor());
      isColor.value = getRandomColor();
    });

    return {
      isColor,
      getRandomColor
    };
  }
}
</script>

<style scoped>
.card_information {
  display: flex;
  height: 300px;
  margin: 1rem 0;
  background-color: #f8f8f8;
}

.card_imgRow {
  width: 40%;
}

.card_imgRow img {
  width: 100%;
  height: 100%;
}

.card_content {
  width: 60%;
  text-align: left;
  padding: 1rem 2rem;
}

.card_content div {
  margin: 0.3rem 0;
}

.card_contentDate {
  color: #e24849;
  border-bottom: 1px dashed #e24849;
  padding: 10px 0;
}

.card_contentSlogan {
  font-size: 1.1rem;
  font-weight: bold;
}

.card_contentTitle {
  font-size: 1.2rem;
  font-weight: bold;
}

.card_contents div {
  margin: 10px 0;
}
</style>
