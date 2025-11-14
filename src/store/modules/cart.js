import { getCartList, changeCount, delSelect } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    cartList: [] // 购物车列表
  },
  actions: {
    // 请求cart数据并为每一个商品添加isChecked属性
    async getCartList (context) {
      const { data: { list } } = await getCartList()
      list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', list)
    },
    //  请求修改cart商品的数量
    async changeCountactions (context, { goodsNum, goodsId, goodsSkuId }) {
      context.commit('setCartCount', { goodsId, goodsNum })
      await changeCount(goodsId, goodsNum, goodsSkuId)
    },
    // 删除cart里选择的商品
    async delSelectactions (context) {
      const cartIds = context.getters.selCartList.map(item => item.id)
      await delSelect(cartIds)
      Toast('删除成功')
      // 重新拉取最新的购物车数据 (重新渲染)
      context.dispatch('getCartList')
    }
  },
  mutations: {
    // 更新购物车
    setCartList (state, newCartList) {
      state.cartList = newCartList
    },
    // 改变单个商品的isChecked属性
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    // 改变所有商品的isChecked属性
    toggleAllCheck (state, type) {
      state.cartList.forEach((item) => {
        item.isChecked = type
      })
    },
    // 更新cart商品的数量
    setCartCount (state, { goodsId, goodsNum }) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.goods_num = goodsNum
    }
  },
  getters: {
    // 计算购物车商品总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => {
        return sum + item.goods_num
      }, 0)
    },
    // 过滤选择的商品
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 计算选择商品的总数量
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num
      }, 0)
    },
    // 计算选择商品的总价格
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0)
    },
    // 是否选择所有商品
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
