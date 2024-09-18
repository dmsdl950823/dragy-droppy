<template>
  <div class="receipt-component">
    <h2>Total Budget</h2>

    <div
      class="total-budget"
      v-for="option in receiptList"
      :key="option.type"
    >
      <ADivider dashed>
        {{ option.type }}
      </ADivider>
    
      <div class="item-info__list">
        <div
          class="item-info"
          v-for="item in option.items"
          :key="item.id"
        >
          <span>{{ item.title }}</span>
          <small class="item-info__dashed" />
          <strong>$ {{ item.price }}</strong>
        </div>
      </div>
    </div>

    <ADivider orientation="right">
      {{ totalBudget }}
    </ADivider>

    <AButton
      type="primary"
      size="large"
      @click="handleOrderButton"
    >
      Order
    </AButton>
  </div>
</template>

<script setup lang="ts">
import { useResult } from "@/composables/use-result"
import { cloneDeep, isEmpty, isNil } from "lodash-es";
import { computed } from "vue";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const { chainOption, charmOptionList } = useResult()
const receiptList = computed(() => {
  const result = []

  if (!isNil(chainOption.value)) {
    result.push({
      type: 'Chain',
      items: [cloneDeep(chainOption.value)]
    })
  }

  if (!isEmpty(charmOptionList.value)) {
    result.push({
      type: 'Charms',
      items: cloneDeep(charmOptionList.value)
    })
  }

  return result
})

const totalBudget = computed<string>(() => {
  let total = 0
  if (!isNil(chainOption.value)) {
    total += chainOption.value.price
  }
  if (!isEmpty(charmOptionList.value)) {
    const priceList = charmOptionList.value.map(charm => charm.price)
    const reducedValue = priceList.reduce((acc: number, curr: number) => acc += curr)
    total += reducedValue
  }
  return `Total $ ${total.toLocaleString()}`
})

function handleOrderButton () {
  const contentsArea: HTMLElement | null = document.querySelector('.contents-area');

  if (isNil(contentsArea)) return
  
  html2canvas(contentsArea, {
    useCORS: true, // CORS 문제를 피하기 위한 옵션
  }).then(canvas => {
    canvas.toBlob(blob => {
      saveAs(blob, 'screenshot.png');
    });
  });
}
</script>

<style scoped lang="scss">
.receipt-component {
  padding: 40px;
}

.item-info {
  &__list {
    display: grid;
    gap: 10px;
    padding: 40px;
  }

  &__dashed {
    flex: 1 1 auto;
    border-top: 1px dotted #d9d9d9;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
</style>
