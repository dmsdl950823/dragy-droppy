import type { CardItemType } from "@/components/sider-area/card-item/card-item.type"
import { ref } from "vue"
import { cloneDeep } from "lodash-es"

export interface CharmItemType extends CardItemType {
  style?: {
    position: string
    top: string
    left: string
  }
  ratio?: {
    top: number
    left: number
  }
}

const chainOption = ref<CardItemType | null>(null)
const charmOptionList = ref<CardItemType[]>([])

function setChainOption (selectedChain: CardItemType) {
  chainOption.value = cloneDeep(selectedChain)
}

function setCharmOptionList (charmItem: CharmItemType) {
  charmOptionList.value.push(charmItem)
}


export function useResult () {
  return {
    chainOption,
    charmOptionList,
    setChainOption,
    setCharmOptionList
  }
}