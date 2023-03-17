<template>
  <div class="Notice">
    <h3 class="title">購物相關問題 ABOUT SHOPPING</h3>
    <div>
      <CardNotice
        v-for="(item, index) in noticeData"
        :key="`cardNotice_${index}`"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import CardNotice from '../components/notice/CardNotice.vue';

export default {
  name: 'Notice',
  components: {
    CardNotice
  },
  setup () {
    const noticeData = reactive([
      {
        title: '寄送服務 Delivery Service',
        content: [
          '貨品由宅配公司配送到您府上,(外島與海外不在此限)，為確保您能順利收到商品，收件人與收件地址請詳細填寫確認，避免遺失。貨品內附訂購品項明細表、及發票供您查收。'
        ]
      },
      {
        title: '換貨 Exchange',
        content: [
          '本網站商品為版權商品，無法拆封試聽與觀賞的鑑賞期，在購買前請詳細閱讀商品資訊、商品規格，下單後，請確認商品的訂購',
          '請您於收到商品一星期內，詳細檢查商品，Five Music 音樂網銷售的所有商品均提供品質保證，若您收到的商品有瑕疵或損壞或遞送途中因不慎疏失造成商品毀損的情形發生欲辦理換貨時，請勿拆封並且保持商品完整包裝，依下列換貨準則辦理',
          'Please check the items you order in on week after you take it. Five Music has Quality Assurance, so if you want to return or exchange the item(s) you order cause it’s defective or damaged when delivering, please don’t open it and everything must be in their original packaging. Then following the tips'
        ]
      },
      {
        title: '其它問題 Others',
        content: [
          '若您有任何關於商品購物的疑問可直接至網站首頁: 連絡我們 留言 或上班時間來電訂單查詢 TEL: 國內08-8788878國外886-8888888將有專員為您解說、服務。 (上班時間 週一到週五 10:00 ～ 17:30 )',
          'If you have any questions about shopping on Five Music, call the customer service in business hours.'
        ]
      }
    ]);

    return {
      noticeData
    };
  }
}
</script>

<style scoped>
.Notice {
  padding: 2rem;
}
</style>
