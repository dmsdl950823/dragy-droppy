<template>
  <div class="sider-area">
    <ARow :gutter="[10, 10]" justify="space-around" align="middle">
      <ACol
        v-for="item in props.data"
        :key="item.id"
      >
        <CardItem
          :id="item.id"
          :title="item.title"
          :price="item.price"
          :image="item.image"
          @click="handleClickEvent(item)"
        />
      </ACol>
    </ARow>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardItem from './card-item/card-item.vue';
import type { CardItemType } from './card-item/card-item.type';
import type { SiderAreaProps } from "./sider-area.type"

const props = withDefaults(defineProps<SiderAreaProps>(), {
  data: []
})


function handleClickEvent (item: CardItemType) {
  console.log(item)
}
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