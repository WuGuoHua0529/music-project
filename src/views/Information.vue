<template>
  <div class="information">
    <div class="nav_information">
      <ul class="ul_information">
        <li
          v-for="(item, index) in informationData"
          :key="`information_${index}`"
          :class="{
            'selectNav': nowSelectNav === item.tag
          }"
          @click="selectNav(item.tag)"
        >
          <a>
            <span>{{ item.name }}</span>
            <span>{{ item.tag }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content_information">
      <h3 class="title">活動訊息</h3>
      <template
        v-for="(item, index) in nowSelectInformationData"
        :key="`card_${index}`"
      >
        <CardInformation :data="item" />
      </template>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import CardInformation from '../components/information/CardInformation.vue';

export default {
  name: 'Information',
  components: {
    CardInformation
  },
  setup () {
    const informationData = reactive([
      {
        name: '華語',
        tag: 'Mandarin',
        data: [
          { img: 'Information_1_1', title: '盧廣仲 15 週年 勵志的黃昏 的故鄉 高雄巨蛋演唱會', slogan: '『盧廣仲』與您熱情邀約在現場！', content: ['7月15 日  星期六  PM 17:53  高雄巨蛋'] },
          { img: 'Information_1_2', title: '告五人2023台北小巨蛋演唱會', slogan: '『告五人』與您熱情邀約在現場！', content: ['4月8 日  星期六  PM 19:30  台北小巨蛋', '4月9 日  星期日  PM 17:00  台北小巨蛋'] },
          { img: 'Information_1_3', title: '動力火車 都是因為愛 世界巡迴演唱會 台北安可場', slogan: '『動力火車』與您熱情邀約在現場！', content: ['4月22 日  星期六  PM 19:00  台北小巨蛋', '4月23 日  星期日  PM 17:00  台北小巨蛋'] }
        ]
      },
      {
        name: '西洋',
        tag: 'Western',
        data: [
          { img: 'Information_2_1', title: '1世代路易: Faith In The Future World Tour 2023台北演唱會', slogan: '『Louis Tomlinson』與您熱情邀約在現場！', content: ['4月24 日  星期一  PM 20:00  TICC (台北國際會議中心)'] },
          { img: 'Information_2_2', title: 'TOMORROW X TOGETHER WORLD TOUR ＜ACT：SWEET MIRAGE＞ ', slogan: '『TXT』與您熱情邀約在現場！', content: ['4月5 日  星期三  PM 19:00  台北南港展覽館'] }
        ]
      },
      {
        name: '韓語',
        tag: 'Korean',
        data: [
          { img: 'Information_3_1', title: 'BLACKPINK WORLD TOUR世界巡迴演唱會', slogan: '『BLACKPINK』與您熱情邀約在現場！', content: ['3月18 日  星期六  PM 19:30  高雄世運主場館', '3月19 日  星期日  PM 18:30  高雄世運主場館'] }
        ]
      }
    ])

    const nowSelectNav = ref('Mandarin');

    function selectNav (tag) {
      nowSelectNav.value = tag;
    }

    const nowSelectInformationData = computed(() => {
      const nowSelect = informationData.find(item => item.tag === nowSelectNav.value);

      return nowSelect.data;
    });

    return {
      informationData,
      nowSelectNav,
      selectNav,
      nowSelectInformationData
    };
  }
}
</script>

<style scoped>
.information {
  display: flex;
  padding: 2rem;
}

.nav_information {
  width: 20%;
}

.ul_information li {
  background: #ededed;
  color: #222222;
  height: 40px;
  line-height: 40px;
  margin: 0.5rem 0;
  list-style: none;
  cursor: pointer;
  position: relative;
}

.ul_information .selectNav {
  color: #fff;
  background: #a32626;
}

.ul_information li:hover {
  color: #e36262;
}

.ul_information li a::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  border-color: transparent transparent transparent #c9c9c9;
  border-width: 4px 6px;
  border-style: solid;
  margin-top: -3px;
  right: 18px;
}

.ul_information li a span {
  margin: 0 0.2rem;
}

.content_information {
  width: 80%;
  padding: 0 2rem;
}
</style>
