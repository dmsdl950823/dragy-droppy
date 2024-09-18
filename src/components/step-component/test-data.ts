import { ref } from "vue";
import type { CardItemType } from "../sider-area/card-item/card-item.type";

export const chainData = [
  { id: 'chain01', title: 'Chain01', price: 13.0, image: 'https://cameronjewellery.co.nz/cdn/shop/products/B1_b109ec88-7110-4fec-93a1-a54a846ab66d.jpg?v=1637550555' },
  { id: 'chain02', title: 'Chain02', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd-qjYZq_aZM-zsN1XN3VGdiP-HUqQt-W-bU03Co7z4w9O_VaMXwR2JgKdl2T0Yn1EHA&usqp=CAU' },
  { id: 'chain03', title: 'Chain03', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nd21tTXcpAiuo54pHSPAXjkl2_QYqd65uK8s7gG3P2FXGExzb-6XMSzlkbxnnNTSBxg&usqp=CAU' },
  { id: 'chain04', title: 'Chain04', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8L4m71HpiW2Zx-tUMvkQ5jnk2K1_KkKKpXzVz4kr-yYmwA2Px2K8qySqF1Pu_0OBlAI&usqp=CAU' },
  { id: 'chain05', title: 'Chain05', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbaSJJNG8JgIf8P17KScWGsI8nCYlxt9fuFcAU-38KPblZWThVdBkPQfeT7OVs452nH8&usqp=CAU' },
  { id: 'chain06', title: 'Chain06', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hc3u6fUqc-R6ks5_9eEx2Ek6H3rEPJxgkw&s' },
  { id: 'chain07', title: 'Chain07', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nd21tTXcpAiuo54pHSPAXjkl2_QYqd65uK8s7gG3P2FXGExzb-6XMSzlkbxnnNTSBxg&usqp=CAU' },
  { id: 'chain08', title: 'Chain08', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDdH92UZ5dNun5TpoSqqS8aMHwaRbFVdioZKCwKOKmIoj4SUlscZHf6Ay4sWHSfml3hE&usqp=CAU' },
  { id: 'chain09', title: 'Chain09', price: 13.0, image: 'https://au.kirstinash.com/cdn/shop/products/bespoke-curb-chain-18k-gold-vermeil-front-1-web_4803ed14-b392-4221-979d-8ce84ed53de9_1024x1024.png?v=1605073236' },
  { id: 'chain10', title: 'Chain010', price: 13.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0p_aaJ1193cu4EYuK98JEBxXQAX-bmN38CLge6WnaZiwst0kgcuXmMgy1PR2l16EWL_M&usqp=CAU' },
]

export const charmData = [
  { id: 'charm01', title: 'Charm01', price: 3.0, image: 'https://shophart.com/cdn/shop/files/Oui-Front_1_00b32af6-41f4-43c0-acce-4de9184e4fa3_large.png?v=1723141246' },
  { id: 'charm02', title: 'Charm02', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBjg3kYQF5wAdGES1DJpSgX0Qh4Wrc2CIy53J29kTsxMQ0C9H_rYVJg06jPrDDWNL72U&usqp=CAU' },
  { id: 'charm03', title: 'Charm03', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWBbLsxHcmPP2GrFkbTa5Sx5NAxVVM_sIH3oDEKqHZXglcQfZyfCdwyXuYDz_BnE9mwI&usqp=CAU' },
  { id: 'charm04', title: 'Charm04', price: 3.0, image: 'https://pandorashop.com.lb/cdn/shop/products/HIGH_RGB_790800C00_RGB_e6ce8023-67f7-4063-93f6-82454776f6f5_800x.jpg?v=1671022182' },
  { id: 'charm05', title: 'Charm05', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3uybMBHmlrjslbtAasIC4aAL2hkq1ngb9T7l7s6VFq5qKY2V07UpSuQTYVzd4GlZR1A&usqp=CAU' },
  { id: 'charm06', title: 'Charm06', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFYXoox2dlHMla05PXDRhFp9tMDIPV3QrxGjtN6XjcNmclWgUcKHNiZBIWCb6hbYYmF8&usqp=CAU' },
  { id: 'charm07', title: 'Charm07', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcxyiTNPu9yhaNkFMHjLJ-Idr4EWlczICwrSZqch4eA1ZLTx_chRMZrU6FA2pilJa4jk&usqp=CAU' },
  { id: 'charm08', title: 'Charm08', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6DLhBIqBVPLNwW_a28U7H3c1-0t7WBOfySMzMJx4h-L47jE00kY8koFLyI92_pT1JQo&usqp=CAU' },
  { id: 'charm09', title: 'Charm09', price: 3.0, image: 'https://cdn.shopify.com/s/files/1/0149/7343/5968/products/fingerprint-heart-charm-sterling-silver-offset-BACK1_7d818e09-ec4c-4928-aac4-cdf2bfa48873.jpg?v=1626959104' },
  { id: 'charm10', title: 'Charm010', price: 3.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklF4xkcyKALxUMvDNuHljP6yERDbEuOKM3RPFvueZNYYCmQLNfXP1QfcwsuqvUgXA4o4&usqp=CAU' },
]

export default {
  chainData,
  charmData
}