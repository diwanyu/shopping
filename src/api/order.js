import request from '@/utils/request'

// obj => 立即购买下单-goodsId-goodsNum-goodsSkuId
//     => 购物车下单-cartIds
export const checkOrder = (mode, obj) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/checkout/order', {
    params: {
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      remark: '',
      mode,
      ...obj
    }
  })
}

// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/checkout/submit', {
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    payType: '10',
    mode,
    ...obj
  })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/order/list', {
    params: {
      dataType,
      page
    }
  })
}
