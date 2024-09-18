<template>
  <AEmpty
    class="empty-area"
    v-if="isEmpty"
  >
    <template #description>
      Select Chain First!
    </template>
  </AEmpty>
    
  <div
    v-else
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
      :class="[
        'charm-item',
        { 'is-editable': !isReadOnly },
        { 'is-active': currentDraggingIndex === index }]"
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
import { computed, ref, inject, onMounted, onBeforeUnmount } from 'vue';
import { useResult } from '@/composables/use-result'
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { type CurrentStepProviderModel, CURRENT_STEP_KEY } from "../../views/home-view/home-view.type"
import { isNil } from 'lodash-es';

const { chainOption, charmOptionList: selectedCharms } = useResult()

const injected = inject<CurrentStepProviderModel>(CURRENT_STEP_KEY)
if (!injected) {
  console.error('CURRENT_STEP_KEY is Empty!')
}

const isDragging = ref<boolean>(false);
const contentsArea = ref<HTMLElement>()
const currentDraggingIndex = ref<number>();
const originalSizes = ref({ width: 0, height: 0 });

const isReadOnly = computed<boolean>(() => injected?.currentStep.value === 3)
const isEmpty = computed<boolean>(() => isNil(chainOption.value))
const chainOptionImage = computed<string>(() => {
  if (chainOption.value === null) return ''
  return chainOption.value.image
})


function handleStartDragging (index: number) {
  if (isReadOnly.value) return

  // 드래그가 시작될 때 해당 아이템을 배열의 끝으로 이동
  isDragging.value = true;

  const item = selectedCharms.value.splice(index, 1)
  
  selectedCharms.value.push(item[0])
  
  // 드래그 중인 아이템의 인덱스를 현재 배열의 마지막 요소로 설정
  currentDraggingIndex.value = selectedCharms.value.length - 1;
}

function handleMouseMoveEvent (index: number, event: DragEvent) {
  if (isReadOnly.value) return
  
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


      selectedCharms.value[currentDraggingIndex.value].ratio.left = newX / rect.width;
      selectedCharms.value[currentDraggingIndex.value].ratio.top = newY / rect.height;

      selectedCharms.value[currentDraggingIndex.value].style.left = `${newX}px`;
      selectedCharms.value[currentDraggingIndex.value].style.top = `${newY}px`;
  }
}

function handleStopDragging () {
  if (isReadOnly.value) return
  
  isDragging.value = false;
  currentDraggingIndex.value = undefined;
}

// 아이템 삭제 함수
function removeCharm (index: number) {
  if (isReadOnly.value) return

  selectedCharms.value.splice(index, 1);
}

function globalMouseUpHandler () {
  handleStopDragging();
}

function handleResize () {
  if (!contentsArea.value) return

  const newWidth = contentsArea.value.offsetWidth;
  const newHeight = contentsArea.value.offsetHeight;

  // 각 아이템의 상대적 비율에 따라 위치를 다시 설정
  selectedCharms.value.forEach(item => {
    const newLeft = item.ratio.left * newWidth;
    const newTop = item.ratio.top * newHeight;

    item.style.left = `${newLeft}px`;
    item.style.top = `${newTop}px`;
  });

  originalSizes.value.width = newWidth;
  originalSizes.value.height = newHeight;
}

onMounted(() => {
  window.addEventListener('mouseup', globalMouseUpHandler);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('mouseup', globalMouseUpHandler);
  window.removeEventListener('resize', handleResize);
});

</script>

<style scoped lang="scss">
.empty-area {
  flex: 1 1 auto;
  height: 100vh;
  background-color: #ececec;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
}

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
  border-radius: 10px;
  box-sizing: border-box;
  transition: border 0.2s ease;

  &.is-editable {
    cursor: grab;
    
    &:hover {
      border: 2px dotted #d9d9d9;
  
      .close-button {
        display: block;
      }
    }
  }
  

  &.is-active {
    border: 2px dotted red;
    cursor: grabbing
  }

  .item-content {
    position: relative;
    padding: 10px;
  }

  .close-button {
    display: none;
    position: absolute;
    top: -10px; right: -10px;
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