import type { CardItemType } from "@/components/sider-area/card-item/card-item.type"
import { ref } from "vue"
import { cloneDeep } from "lodash-es"
import { type AccessoryType } from "@/components/accessory-type-list/accessory-type-list.type"

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

const accessoryTypeOption = ref<AccessoryType | null>(null)
const chainOption = ref<CardItemType | null>(null)
const charmOptionList = ref<CharmItemType[]>([])

function setAccessoryTypeOption (type: AccessoryType) {
  accessoryTypeOption.value = type
}

function setChainOption (selectedChain: CardItemType) {
  chainOption.value = cloneDeep(selectedChain)
}

function setCharmOptionList (charmItem: CharmItemType) {
  charmOptionList.value.push(charmItem)
}


export function useResult () {
  return {
    accessoryTypeOption,
    chainOption,
    charmOptionList,
    setAccessoryTypeOption,
    setChainOption,
    setCharmOptionList
  }
}