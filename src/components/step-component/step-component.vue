<template>
  <div class="step-component">
    <div class="step-component__steps">
      <ASteps
        :current="currentStep"
        :items="stepList"
      />
    </div>

    <article class="step-component__content">
      <slot
        name="step0"
        v-if="showAccessoryType"
      />
      <slot
        name="step1"
        v-else
      />
    </article>


    <AFlex
      gap="small"
      align="center"
      justify="center"
    >
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
  import type { StepType, StepComponentEmits } from "./step-component.type"
  
  const emits = defineEmits<StepComponentEmits>()

  const currentStep = ref<number>(0)
  const stepList = ref<StepType[]>([
    { title: 'Type' },
    { title: 'Chain' },
    { title: 'Charm' },
    { title: 'Result' },
  ])

  const showAccessoryType = computed<boolean>(() => currentStep.value === 0)
  const isDisabledPrevious = computed<boolean>(() => currentStep.value === 0)
  const isDisabledNext = computed<boolean>(() => currentStep.value === 3)

  function handlePreviousStepEvent () {
    currentStep.value = currentStep.value -= 1
    emits('change', currentStep.value)
  }
  function handleNextStepEvent () {
    currentStep.value = currentStep.value += 1
    emits('change', currentStep.value)
  }
</script>

<style scoped lang="scss">
.step-component {
  &__steps {
    width: 800px;
    margin: 40px auto;
  }

  &__content {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
}
</style>