<template>
  <div class="cardNotice">
    <div
      class="cardNotice_title"
      :class="{ 'active': openStatus }"
      @click="openStatus = !openStatus"
    >
      <div class="cardNotice_titleQ">Q</div>
      <div>{{ data.title }}</div>
      <span :class="{ 'active': openStatus }"></span>
    </div>
    <div
      v-show="openStatus"
      class="cardNotice_content"
    >
      <p
        v-for="(item, index) in data.content"
        :key="`p_${index}`"
      >{{ item }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CardNotice',
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  },
  setup () {
    const openStatus = ref(false);

    return {
      openStatus
    };
  }
}
</script>

<style scoped>
.cardNotice {
  margin: 0.5rem 0;
  text-align: left;
}

.cardNotice_title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  background: #fff;
  color: #a32626;
  padding: 10px 50px 10px 3rem;
  cursor: pointer;
  line-height: 1.6;
  font-size: 1.125rem;
  font-weight: bold;
  position: relative;
}

.active {
  color: #fff !important;
  background-color: #a32626 !important;
}

.cardNotice_titleQ {
  margin-right: 0.3em;
  color: #fff;
  background-color: #a32626;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.active .cardNotice_titleQ {
  color: #a32626;
  background-color: #fff;
}

.cardNotice_content {
  background-color: rgb(221, 221, 221);
  min-height: 300px;
  padding: 1.5rem;
}

.cardNotice_content p {
  margin: 1rem 0;
}

.cardNotice_title span:before {
  content: "";
  display: block;
  position: absolute;
  right: 29px;
  top: 20px;
  width: 5px;
  height: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: #222 #222 transparent transparent;
  transform: rotate(45deg);
}

.cardNotice_title .active:before {
  content: "";
  display: block;
  position: absolute;
  right: 29px;
  top: 20px;
  width: 5px;
  height: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: #fff #fff transparent transparent;
  transform: rotate(135deg);
}
</style>
