<template>
  <div class="page_Content">
    <div class="page_title">- 專輯曲目 TRACK -</div>
    <table
      class="page_table"
      border="0"
      cellspacing="0"
      cellpadding="0"
    >
      <thead>
        <tr class="page_theadTr">
          <th>編號</th>
          <th>曲目</th>
        </tr>
      </thead>
      <tbody class="page_tbody">
        <template v-if="data.length">
          <tr
            v-for="(item, index) in data"
            :key="`tbody_${index}`"
          >
            <td>{{ index + 1 }}.</td>
            <td>{{ item }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="2">暫無專輯曲目</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PageContent',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup () {

    return {
    };
  }
}
</script>

<style scoped>
.page_Content {
  color: white;
  padding: 0 20px;
  height: 100%;
}

.page_title {
  font-size: 26px;
  font-weight: bolder;
  padding: 10px 0;
}

.page_table {
  width: 100%;
  height: 30%;
}

.page_theadTr {
  background-color: #a32626;
}

.page_theadTr th {
  padding: 6px 0;
}

.page_tbody tr td {
  padding: 5px 0;
  color: black;
}

.page_tbody tr:nth-child(odd) {
  background-color: #fff;
}

.page_tbody tr:nth-child(even) {
  background-color: #eee;
}
</style>
