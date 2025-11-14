import request from '@/utils/request'

// 添加商品至购物车
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 获取购物车商品列表
export const getCartList = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/cart/list')
}

// 修改购物车数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 删除购物车商品
export const delSelect = (cartIds) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/clear', {
    cartIds
  })
}
