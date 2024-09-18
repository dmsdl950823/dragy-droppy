<template>
  <div class="step-component">
    <ASteps
      :current="currentStep"
      :items="stepList"
    />

    <article class="step-component__content">
      <slot />
    </article>


    <AFlex gap="small" align="center" justify="center">
      <AButton
        type="primary"
        size="large"
        :disabled="isDisabledPrevious"
        @click="handlePreviousStepEvent"
      >
        Previous
      </AButton>
      
      <AButton
        type="primary"
        size="large"
        :disabled="isDisabledNext"
        @click="handleNextStepEvent"
      >
        Next
      </AButton>
    </AFlex>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { type StepType } from "./step-component.type"

  const currentStep = ref<number>(0)
  const stepList = ref<StepType[]>([
    { title: 'Chain' },
    { title: 'Charm' },
    { title: 'Result' },
  ])

  const isDisabledPrevious = computed<boolean>(() => currentStep.value === 0)
  const isDisabledNext = computed<boolean>(() => currentStep.value === 2)

  function handlePreviousStepEvent () {
    currentStep.value = currentStep.value -= 1
  }
  function handleNextStepEvent () {
    currentStep.value = currentStep.value += 1
  }
</script>

<style scoped lang="scss">
.step-component {

  &__content {
    border: 1px solid lawngreen;
    display: flex;
    align-items: center;
  }
}
</style>