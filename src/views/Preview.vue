<template>
  <div class="preview">
    <h3 class="title">專輯預告 NEW</h3>
    <div>
      <ul class="ul_preview">
        <li
          v-for="(item, index) in albumData"
          :key="`album_${index}`"
        >
          <a :href="`#table_${index}`">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div>
      <table
        v-for="(item, index) in albumData"
        :id="`table_${index}`"
        :key="`table_${index}`"
        class="table_album"
        border="0"
        cellspacing="0"
        cellpadding="0"
      >
        <thead>
          <tr class="table_albumTitle">
            <th colspan="5">專輯資訊</th>
          </tr>
          <tr class="table_albumTitleiInfo">
            <th>藝人名稱</th>
            <th>專輯名稱</th>
            <th>預定發行日</th>
            <th>發行/製作公司</th>
            <th>品項</th>
          </tr>
        </thead>
        <tbody class="table_albumTbody">
          <tr
            v-for="(dataItem, dataIndex) in item.data"
            :key="`data_${dataIndex}`"
          >
            <td>{{ dataItem.name }}</td>
            <td>{{ dataItem.album }}</td>
            <td>{{ dataItem.date }}</td>
            <td>{{ dataItem.company }}</td>
            <td>{{ dataItem.quality }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Preview',
  setup () {
    const albumData = reactive([
      {
        name: '華語音樂',
        data: [
          { name: '周華健', album: '不願一個人', date: '2023/6/16', company: '滾石', quality: 'LP黑膠' },
          { name: '張艾嘉', album: '忙與盲', date: '2023/5/19', company: '滾石', quality: 'LP黑膠' },
          { name: '伍佰', album: '愛你伍佰年', date: '2023/5/12', company: '滾石', quality: 'LP黑膠' },
          { name: '鄧麗君', album: '15週年 限量編號典藏金色彩膠', date: '2023/5/8', company: '音橋', quality: 'LP黑膠' },
          { name: '白安', album: '【 麥田捕手Catcher in the Rye 】珍藏限定版', date: '2023/5/5', company: '相信音樂', quality: 'LP黑膠' },
          { name: '蕭秉治', album: '首張個人創作專輯《凡人》珍藏限定版黑膠', date: '2023/5/5', company: '相信音樂', quality: 'LP黑膠' },
          { name: '縱貫線', album: '北【上】列車 (黑膠)', date: '2023/4/21', company: '滾石', quality: 'LP黑膠' },
          { name: 'VERA', album: 'Venus Era (通路版)', date: '2023/3/31', company: 'avex', quality: 'CD' }
        ]
      },
      {
        name: '西洋音樂',
        data: [
          { name: 'M83', album: '幻想 (黑膠) Fantasy 2LP', date: '2023/3/31', company: '環球', quality: 'LP黑膠' },
          { name: '天才男孩樂團 boygenius', album: '首張專輯(黑膠) the record', date: '2023/3/31', company: '環球', quality: 'LP黑膠' },
          { name: '艾爾頓強 Elton John', album: '白人城鎮 (50周年紀念 黑膠) Honky Chateau 50th Anniversary Edition 2LP', date: '2023/3/31', company: '環球', quality: 'LP黑膠' },
          { name: '警察合唱團 The Police', album: 'Greatest Hits 2LP Remastered', date: '2023/3/31', company: '環球', quality: 'LP黑膠' },
          { name: 'U2合唱團 U2', album: 'Songs Of Surrender Super Deluxe Collectors Edition', date: '2023/3/21', company: '環球', quality: 'CD' },
          { name: '巴布狄倫 Bob Dylan', album: 'The Bootl', date: '2023/3/17', company: 'SONY MUSIC', quality: 'LP黑膠' },
          { name: '艾薇兒 Avril Lavigne', album: '展翅高飛 20周年紀念版 (2LP黑膠) Let Go (20th Anniversary Edition) (2LP)', date: '2023/3/17', company: '', quality: 'LP黑膠' },
          { name: '凱莎 Kesha', album: '派對動物 (2LP黑膠) Animal (Expanded Edition) (2LP)', date: '2023/3/17', company: 'SONY MUSIC', quality: 'LP黑膠' },
        ]
      },
      {
        name: '韓語音樂',
        data: [
          { name: '金智秀 JISOO(BLACKPINK)', album: '(一般版)第一張單曲「ME」(韓國進口限量版黑膠LP)', date: '2023/8/1', company: 'YG Entertainment', quality: 'LP黑膠' },
          { name: '', album: '非常律師禹英隅-電視原聲帶(韓國進口黑膠LP)', date: '2023/6/29', company: '韓國進口版', quality: 'LP黑膠' },
          { name: '金南俊(防彈少年團) RM(BTS)', album: '個人專輯「Indigo」(韓國進口黑膠LP)', date: '2023/5/30', company: 'Big Hit Entertainment', quality: 'LP黑膠' },
          { name: 'MAMAMOO+', album: '第一張單曲「ACT 1, SCENE 1」(韓國進口版)', date: '2023/3/29', company: 'Rainbow Bridge World', quality: 'CD' },
          { name: 'ENHYPEN', album: '(一般版DVD)WORLD TOUR [MANIFESTO] in SEOUL DVD(韓國進口版)', date: '2023/3/28', company: '韓國進口版', quality: 'DVD' },
          { name: '金知元 BOBBY(IKON)', album: '(一般版)第一張單曲「S.I.R」(韓國進口版)', date: '2023/3/24', company: '韓國進口版', quality: 'CD' },
          { name: '徐東賢 BIG Naughty', album: '第三張迷你專輯「Hopeless Romantic」(韓國進口版)', date: '2023/3/24', company: '韓國進口版', quality: 'CD' },
          { name: 'CRAXY', album: '(SNS版)第四張迷你專輯「XX」(韓國進口版)	', date: '2023/3/23', company: '韓國進口版', quality: 'CD' }
        ]
      }
    ])

    return {
      albumData
    };
  }
}
</script>

<style scoped>
.preview {
  padding: 2rem;
}

.ul_preview {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
}

.ul_preview li {
  color: #222;
  cursor: pointer;
  font-size: 1.1875rem;
  font-weight: bold;
  border-left: 2px solid #222;
  border-right: 2px solid #222;
  margin: 0 1rem;
  padding: 0 1rem;
}

.ul_preview li a:hover {
  color: #a32626;
}

.ul_preview li a {
  color: #222;
  text-decoration: none;
}

.table_album {
  width: 100%;
  margin: 2rem 0;
  border-bottom: 1px solid #b44141;
}

.table_albumTitle {
  color: #fff;
  background: #b44141;
  line-height: 50px;
  letter-spacing: 10px;
  font-size: 1.125rem;
  margin: 0;
}

.table_albumTitleiInfo {
  width: 100%;
  height: 40px;
  background: #1b1b1b;
  color: #fff;
}

.table_albumTbody tr {
  height: 60px;
}

.table_albumTbody tr:hover {
  color: #fff;
  background-color: #d27b7b !important;
}

.table_albumTbody tr td {
  word-wrap: break-word;
}

.table_albumTbody tr td:nth-child(1) {
  width: 150px;
}

.table_albumTbody tr td:nth-child(2) {
  width: 200px;
}

.table_albumTbody tr td:nth-child(3) {
  width: 60px;
}

.table_albumTbody tr td:nth-child(4) {
  width: 60px;
}

.table_albumTbody tr td:nth-child(5) {
  width: 50px;
}

.table_albumTbody tr:nth-child(odd) {
  background-color: #fff;
}

.table_albumTbody tr:nth-child(even) {
  background-color: #eee;
}
</style>
