<template>
  <ARow
    justify="center"
    align="middle"
    :gutter="40"
    class="accessory-type-list"
  >
    <ACol 
      v-for="accessory in accessoryTypeList"
      :key="accessory.title"
    >
      <ACard
        hoverable
        style="width: 300px"
        :bordered="false"
        class="accessory-item"
        @click="handleClickTypeEvent(accessory)"
      >
        <template #cover>
          <div class="accessory-image">
            <img
              alt="example"
              :src="accessory.image"
            >
  
            <div :class="['checked-icon', { 'is-checked': isChecked(accessory) }]">
              <CheckCircleOutlined />
            </div>
          </div>
        </template>
        <ACardMeta :title="accessory.title" />
      </ACard>
    </ACol>
  </ARow>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type AccessoryItemType } from "./accessory-type-list.type"
import { useResult } from "@/composables/use-result"
import { CheckCircleOutlined } from '@ant-design/icons-vue';
import { isNil } from 'lodash-es';

const { accessoryTypeOption, setAccessoryTypeOption } = useResult()

const accessoryTypeList = ref<AccessoryItemType[]>([
  { type: 'NECKLESS', title: 'Neckless', image: 'https://engagejewels.com/cdn/shop/files/138EJ_e58ef62d-eef3-4c83-a603-99f13530dd65.jpg?v=1720763487' },
  { type: 'BRICELET', title: 'Bracelet', image: 'https://static.bloom-boutique.co.uk/media/catalog/product/f/r/freshwater-pearl-and-chain-double-heart-bracelet-05.jpg?width=265&height=265&store=default&image-type=image' },
  { type: 'ANCKLE_BRACELET', title: 'Ankle Bracelet', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7jClIxItPtOZN_EmnQUfdp4lHlAL3ln2N5Ly-vQrrsln5TFX7OS4yEsJea24og97GtfWHTPBTryczhSzwAyCnseidcCwbtDs7dUKBGH0&usqp=CAE' },
])

function isChecked (item: AccessoryItemType) {
  if (isNil(accessoryTypeOption.value)) return false
  return accessoryTypeOption.value === item.type
}

function handleClickTypeEvent (item: AccessoryItemType) {
  setAccessoryTypeOption(item.type)
}
</script>

<style lang="scss" scoped>
.accessory-type-list {
  width: 100%;
  height: 50vh;
}
.accessory-item {
  cursor: pointer;

}
.accessory-image {
  > img {
    width: 100%;
    aspect-ratio: 1;
  }

  position: relative;

  .checked-icon {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #FFF;
    transition: all 0.5s ease;
    font-size: 6em;
    top: 0;
    left: 0;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    &.is-checked {
      opacity: 1;
      display: flex;
      background: rgb(255, 255, 255, 0.5);
      color: #FFF;
    }
  }

}
</style>