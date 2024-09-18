<template>
  <StepComponent @change="handleStepChangeEvent">
    <ContentsArea />
    <SiderArea :data="itemList" />
  </StepComponent>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import ContentsArea from '@/components/contents-area/contents-area.vue';
import StepComponent from '../components/step-component/step-component.vue';
import SiderArea from '@/components/sider-area/sider-area.vue';
import { CardItemType } from '@/components/sider-area/card-item/card-item.type';
import { chainData, charmData } from "@/components/step-component/test-data"

const ProviderKey = 'HomeView'
interface ProviderModel {
  currentStep: ref<number>
}

const currentStep = ref<number>(0)
const itemList = ref<CardItemType[]>([])

function handleStepData (current: number) {

  if (current === 0) {
    itemList.value = JSON.parse(JSON.stringify(chainData))
  }

  if (current === 1) {
    itemList.value = JSON.parse(JSON.stringify(charmData))
  }
}

function handleStepChangeEvent (current: number) {
  currentStep.value = current

  handleStepData(current)
}

onMounted(() => {
  handleStepData(currentStep.value)
})

provide<ProviderModel>('ProviderKey', {
  currentStep
})
</script>
