<template>
  <div class="header">
    <router-link
      v-slot="{ navigate }"
      custom
      :to="{ name: 'Home' }"
    >
      <div
        class="title_header"
        @click="navigate"
      >HUA 唱片</div>
    </router-link>
    <ul class="ul_header">
      <router-link
        v-for="item in ulData"
        :key="`li_${item.to}`"
        v-slot="{ navigate }"
        custom
        :to="{ name: item.to }"
      >
        <li @click="navigate">
          <div>{{ item.name }}</div>
          <div>{{ item.to }}</div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  setup () {
    const ulData = [
      { name: '專輯預告', to: 'Preview' },
      { name: '活動訊息', to: 'Information' },
      { name: '購物須知', to: 'Notice' }
    ]

    return {
      ulData
    };
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #a32626;
}

.title_header {
  padding: 10px;
  font-weight: bold;
  color: #a32626;
  font-size: 24px;
  font-family: cursive;
  cursor: pointer;
}

.ul_header {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 63px;
}

.ul_header li {
  list-style: none;
  width: 120px;
  height: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;
}

.ul_header li:hover {
  color: #a32626;
}
</style>
