<template>
  <div
    class="contents-area"
    ref="contentsArea"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="base-option">
      <img 
        :src="chainOptionImage"
        alt="base-option"
        draggable="false"
      >
    </div>

    <div 
      v-for="(item, index) in selectedCharms" 
      :key="item.id" 
      :style="item.style"
      ref="draggableItems"
      :class="['charm-item', { 'is-active': currentDraggingIndex === index }]"
      @mousedown="handleStartDragging(index)"
      @mousemove="handleMouseMoveEvent(index, $event)"
      @mouseup="handleStopDragging"
      @mouseleave="handleStopDragging"
    >
      <div class="item-content">
        <img
          :src="item.image"
          :alt="item.title"
          style="width: 50px;"
          draggable="false"
        >
        <CloseCircleOutlined
          @click="removeCharm(index)"
          class="close-button"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useResult, type CharmItemType } from '@/composables/use-result'
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';

const { chainOption, charmOptionList: selectedCharms } = useResult()

// const selectedCharms = ref<CharmItemType[]>([])
const isDragging = ref(false);
const contentsArea = ref<HTMLElement>()
const currentDraggingIndex = ref<number>();


const chainOptionImage = computed<string>(() => {
  if (chainOption.value === null) return ''
  return chainOption.value.image
})


function handleStartDragging (index: number) {
  // 드래그가 시작될 때 해당 아이템을 배열의 끝으로 이동
  isDragging.value = true;

  const item = selectedCharms.value.splice(index, 1)
  
  selectedCharms.value.push(item[0])
  
  // 드래그 중인 아이템의 인덱스를 현재 배열의 마지막 요소로 설정
  currentDraggingIndex.value = selectedCharms.value.length - 1;
}

function handleMouseMoveEvent (index: number, event: DragEvent) {
  console.log(isDragging.value, currentDraggingIndex.value === index)

  if (isDragging.value && currentDraggingIndex.value === index && contentsArea.value) {
      const rect = contentsArea.value.getBoundingClientRect();
      
      // Mouse position relative to the contents-area
      let newX = event.clientX - rect.left - event.target.offsetWidth / 2;
      let newY = event.clientY - rect.top - event.target.offsetHeight / 2;


      // 아이템의 새로운 위치가 contentsArea의 경계를 넘지 않도록 제한
      const itemRect = {
        width: event.target.offsetWidth,
        height: event.target.offsetHeight,
      };

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX + itemRect.width > rect.width) newX = rect.width - itemRect.width;
      if (newY + itemRect.height > rect.height) newY = rect.height - itemRect.height;


      selectedCharms.value[currentDraggingIndex.value].style.left = `${newX}px`;
      selectedCharms.value[currentDraggingIndex.value].style.top = `${newY}px`;
  }
}

function handleStopDragging () {
  isDragging.value = false;
  currentDraggingIndex.value = undefined;
}

// 아이템 삭제 함수
function removeCharm (index: number) {
  selectedCharms.value.splice(index, 1);
}

function globalMouseUpHandler () {
  handleStopDragging();
}

onMounted(() => {
  window.addEventListener('mouseup', globalMouseUpHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener('mouseup', globalMouseUpHandler);
});
</script>

<style scoped lang="scss">
.contents-area {
  flex: 1 1 auto;
  height: 100vh;
  background-color: #ececec;
  position: relative;
  
  &::selection {
    background-color: transparent;
  }

  .base-option {
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  }
}


.charm-item {
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px dotted transparent;
  transition: border 0.2s ease;

  &:hover {
    border: 2px dotted #d9d9d9;

    .close-button {
      display: block;
    }
  }

  &.is-active {
    border: 2px dotted red;
  }

  .item-content {
    // border: 1px solid blue;
    position: relative;
  }

  .close-button {
    display: none;
    position: absolute;
    top: -20px; right: -20px;
    background: #FFF;
    padding: 3px;
    border-radius: 50%;
    color: #d9d9d9;
    transition: color 0.3s ease;

    &:hover {
      color: #333;
    }
  }
}

</style>