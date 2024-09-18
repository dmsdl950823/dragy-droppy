<template>

<div class="charm-list">
    <button 
      v-for="(charm, index) in charmData" 
      :key="charm.id" 
      @click="addCharm(index)"
      class="charm-button">
      {{ charm.title }}
    </button>
  </div>
  
  <div
    class="contents-area"
    ref="contentsArea"
    @dragover.prevent
    @dragenter.prevent
  >
    <div 
      v-for="(item, index) in selectedCharms" 
      :key="item.id" 
      :style="item.style"
      ref="draggableItems"
      class="draggable"
      @mousedown="startDragging(index, $event)"
      @mouseup="stopDragging"
      @mousemove="drag(index, $event)">

      <img :src="item.image" :alt="item.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const charmData = [
  { id: 'charm01', title: 'Charm01', price: 3.0, image: 'https://shophart.com/cdn/shop/files/Oui-Front_1_00b32af6-41f4-43c0-acce-4de9184e4fa3_large.png?v=1723141246' },
  { id: 'charm02', title: 'Charm02', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBjg3kYQF5wAdGES1DJpSgX0Qh4Wrc2CIy53J29kTsxMQ0C9H_rYVJg06jPrDDWNL72U&usqp=CAU' },
  { id: 'charm03', title: 'Charm03', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWBbLsxHcmPP2GrFkbTa5Sx5NAxVVM_sIH3oDEKqHZXglcQfZyfCdwyXuYDz_BnE9mwI&usqp=CAU' },
  { id: 'charm04', title: 'Charm04', price: 3.0, image: 'https://pandorashop.com.lb/cdn/shop/products/HIGH_RGB_790800C00_RGB_e6ce8023-67f7-4063-93f6-82454776f6f5_800x.jpg?v=1671022182' },
  { id: 'charm05', title: 'Charm05', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3uybMBHmlrjslbtAasIC4aAL2hkq1ngb9T7l7s6VFq5qKY2V07UpSuQTYVzd4GlZR1A&usqp=CAU' },
  { id: 'charm06', title: 'Charm06', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFYXoox2dlHMla05PXDRhFp9tMDIPV3QrxGjtN6XjcNmclWgUcKHNiZBIWCb6hbYYmF8&usqp=CAU' },
  { id: 'charm07', title: 'Charm07', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcxyiTNPu9yhaNkFMHjLJ-Idr4EWlczICwrSZqch4eA1ZLTx_chRMZrU6FA2pilJa4jk&usqp=CAU' },
  { id: 'charm08', title: 'Charm08', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6DLhBIqBVPLNwW_a28U7H3c1-0t7WBOfySMzMJx4h-L47jE00kY8koFLyI92_pT1JQo&usqp=CAU' },
  { id: 'charm09', title: 'Charm09', price: 3.0, image: 'https://cdn.shopify.com/s/files/1/0149/7343/5968/products/fingerprint-heart-charm-sterling-silver-offset-BACK1_7d818e09-ec4c-4928-aac4-cdf2bfa48873.jpg?v=1626959104' },
  { id: 'charm10', title: 'Charm010', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklF4xkcyKALxUMvDNuHljP6yERDbEuOKM3RPFvueZNYYCmQLNfXP1QfcwsuqvUgXA4o4&usqp=CAU' },
];

const selectedCharms = ref([]);

const isDragging = ref(false);
const currentDraggingIndex = ref<number>();


// 아이템의 포지션과 offset 저장
function addCharm (index: number) {
  const newCharm = {
    ...charmData[index],
    style: {
      position: 'absolute',
      left: '0px',
      top: '0px',
    }
  };
  selectedCharms.value.push(newCharm);
}

function startDragging (index: number, event: DragEvent) {
  isDragging.value = true;
  currentDraggingIndex.value = index
}
function drag (index: number, event: DragEvent) {
  if (isDragging.value && currentDraggingIndex.value === index) {
    const newX = event.clientX - event.target.offsetWidth / 2;
    const newY = event.clientY - event.target.offsetHeight / 2;

    selectedCharms.value[index].style.left = `${newX}px`;
    selectedCharms.value[index].style.top = `${newY}px`;
  }
}

function stopDragging () {
  isDragging.value = false;
  currentDraggingIndex.value = undefined;
}
</script>

<style scoped lang="scss">
.contents-area {
  flex: 1 1 auto;
  height: 100vh;
  background-color: #d9d9d9;
}
</style>