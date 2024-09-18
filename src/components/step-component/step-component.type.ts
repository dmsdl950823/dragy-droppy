export interface StepType {
  title: string
}

export interface StepComponentEmits {
  (e: "change", current: number): void
}