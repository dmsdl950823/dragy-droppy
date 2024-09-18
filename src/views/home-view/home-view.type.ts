import type { Ref } from "vue"

export const CURRENT_STEP_KEY = 'CURRENT_STEP_KEY'

export interface CurrentStepProviderModel {
  currentStep: Ref<number>
}