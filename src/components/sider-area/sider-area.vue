<template>
  <PerfectScrollbar>
    <div class="sider-area">
      <ReceiptComponent
        v-if="showReceipt"
        :options="{ swipeEasing: true, wheelPropagation: true } "
      />

      <ARow
        v-else
        :gutter="[20, 20]"
        justify="center"
        align="middle"
      >
        <ACol
          v-for="item in itemList"
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
  </PerfectScrollbar>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import CardItem from './card-item/card-item.vue'
import type { CardItemType } from './card-item/card-item.type';
import type { SiderAreaProps } from "./sider-area.type"
import { useResult, type CharmItemType } from "@/composables/use-result"
import { type CurrentStepProviderModel, CURRENT_STEP_KEY } from "../../views/home-view/home-view.type"
import { cloneDeep } from "lodash-es"
import ReceiptComponent from '../receipt-component/receipt-component.vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';


const { setChainOption, setCharmOptionList } = useResult()

const injected = inject<CurrentStepProviderModel>(CURRENT_STEP_KEY)
if (!injected) {
  console.error('CURRENT_STEP_KEY is Empty!')
}

const props = defineProps<SiderAreaProps>()
const itemList = computed<CardItemType[]>(() => {
  if (!props.data) return []
  return props.data
})

const showReceipt = computed<boolean>(() => injected?.currentStep.value === 2)


function handleClickEvent (item: CardItemType) {
  console.log(item)

  if (!injected) return
  if (injected.currentStep.value === 0) {
    setChainOption(item)
  }
  
  if (injected.currentStep.value === 1) {
    addCharm(item)
  }
}


// 아이템의 포지션과 offset 저장
function addCharm (item: CardItemType) {
  const newCharm: CharmItemType = {
    ...cloneDeep(item),
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
    }
  };

  setCharmOptionList(newCharm);
}
</script>

<style scoped lang="scss">
.sider-area {
  width: 520px;
  padding: 30px;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  max-height: 100vh;
  // overflow-y: auto;
}
</style>