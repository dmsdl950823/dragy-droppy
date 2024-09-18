<template>
  <div class="sider-area">
    <ARow :gutter="[10, 10]" justify="space-around" align="middle">
      <ACol
        v-for="item in itemList"
        :key="item.title"
      
      >
        <CardItem
          :title="item.title"
          :price="item.price"
          :image="item.image"
        />
      </ACol>
    </ARow>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardItem from './card-item/card-item.vue';

const itemList = ref([
  { title: 'Charm01', price: 3.0, image: 'https://shophart.com/cdn/shop/files/Oui-Front_1_00b32af6-41f4-43c0-acce-4de9184e4fa3_large.png?v=1723141246' },
  { title: 'Charm02', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBjg3kYQF5wAdGES1DJpSgX0Qh4Wrc2CIy53J29kTsxMQ0C9H_rYVJg06jPrDDWNL72U&usqp=CAU' },
  { title: 'Charm03', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWBbLsxHcmPP2GrFkbTa5Sx5NAxVVM_sIH3oDEKqHZXglcQfZyfCdwyXuYDz_BnE9mwI&usqp=CAU' },
  { title: 'Charm04', price: 3.0, image: 'https://pandorashop.com.lb/cdn/shop/products/HIGH_RGB_790800C00_RGB_e6ce8023-67f7-4063-93f6-82454776f6f5_800x.jpg?v=1671022182' },
  { title: 'Charm05', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3uybMBHmlrjslbtAasIC4aAL2hkq1ngb9T7l7s6VFq5qKY2V07UpSuQTYVzd4GlZR1A&usqp=CAU' },
  { title: 'Charm06', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFYXoox2dlHMla05PXDRhFp9tMDIPV3QrxGjtN6XjcNmclWgUcKHNiZBIWCb6hbYYmF8&usqp=CAU' },
  { title: 'Charm07', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcxyiTNPu9yhaNkFMHjLJ-Idr4EWlczICwrSZqch4eA1ZLTx_chRMZrU6FA2pilJa4jk&usqp=CAU' },
  { title: 'Charm08', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6DLhBIqBVPLNwW_a28U7H3c1-0t7WBOfySMzMJx4h-L47jE00kY8koFLyI92_pT1JQo&usqp=CAU' },
  { title: 'Charm09', price: 3.0, image: 'https://cdn.shopify.com/s/files/1/0149/7343/5968/products/fingerprint-heart-charm-sterling-silver-offset-BACK1_7d818e09-ec4c-4928-aac4-cdf2bfa48873.jpg?v=1626959104' },
  { title: 'Charm010', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklF4xkcyKALxUMvDNuHljP6yERDbEuOKM3RPFvueZNYYCmQLNfXP1QfcwsuqvUgXA4o4&usqp=CAU' },
])

</script>

<style scoped lang="scss">
.sider-area {
  width: 500px;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  max-height: 100vh;
  overflow-y: auto;
  border-left: 1px solid skyblue;
}
</style>