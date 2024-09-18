<template>
  <ACard
    hoverable
    class="card-item"
  >
    <template #cover>
      <img
        :alt="props.title"
        :src="props.image"
      >
      <!-- <ASkeletonImage /> -->
    </template>
    <ACardMeta :title="props.title">
      <template #description>
        ${{ props.price }}
      </template>
    </ACardMeta>
  </ACard>
</template>

<script setup lang="ts">
import type { CardItemType } from './card-item.type';

// 1. 타입 설정 : 팔찌 ($13) / 목걸이 ($17) / 발찌 ($13)
// 2. 참 선택 : $3, $4, $6, $8, $10

const props = withDefaults(defineProps<CardItemType>(), {
  title: '-',
  price: 0,
  image: '-'
})
</script>

<style scoped lang="scss">
  .card-item {
    width: 240px;
  }
</style>