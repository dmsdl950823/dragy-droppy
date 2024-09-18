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
      :class="['draggable', { 'is-active': currentDraggingIndex === index }]"
      @mousedown="startDragging(index, $event)"
      @mouseup="stopDragging"
      @mousemove="drag(index, $event)"
      @mouseleave="stopDragging"
      >
      <div class="item-content">
        <img :src="item.image" :alt="item.title" style="width: 50px;" draggable="false"/>
        <CloseCircleOutlined @click="removeCharm(index)" class="close-button"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { CloseCircleOutlined } from '@ant-design/icons-vue';

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
  // 드래그가 시작될 때 해당 아이템을 배열의 끝으로 이동
  const item = selectedCharms.value.splice(index, 1)[0];
  selectedCharms.value.push(item);

  // 드래그 중인 아이템의 인덱스를 현재 배열의 마지막 요소로 설정
  isDragging.value = true;
  currentDraggingIndex.value = selectedCharms.value.length - 1;

  // window 레벨에서 mousemove와 mouseup 이벤트를 추가
  // window.addEventListener('mousemove', handleMouseMove);
  // window.addEventListener('mouseup', stopDragging);
}


const handleMouseMove = (event: MouseEvent) => {
  if (isDragging.value && currentDraggingIndex.value !== null) {
    const newX = event.clientX - event.target.offsetWidth / 2;
    const newY = event.clientY - event.target.offsetHeight / 2;
    
    selectedCharms.value[currentDraggingIndex.value].style.left = `${newX}px`;
    selectedCharms.value[currentDraggingIndex.value].style.top = `${newY}px`;
  }
};

// 아이템 삭제 함수
function removeCharm (index: number) {
  selectedCharms.value.splice(index, 1);
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

  // 드래그가 끝났을 때 window 레벨의 이벤트 제거
  // window.removeEventListener('mousemove', handleMouseMove);
  // window.removeEventListener('mouseup', stopDragging);
}
</script>

<style scoped lang="scss">
.contents-area {
  flex: 1 1 auto;
  height: 100vh;
  background-color: #d9d9d9;
}

.draggable {
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    border: 2px dotted #d9d9d9;
  }

  &.is-active {
    border: 2px dotted red;
  }

  .item-content {
    // border: 1px solid blue;
    position: relative;
  }
  .close-button {
    position: absolute;
    top: -10px; right: -10px;
    background: #FFF;
    padding: 3px;
    border-radius: 50%;
    color: #d9d9d9;
  }
}

</style>