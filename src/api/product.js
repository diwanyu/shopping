import request from '@/utils/request'

// 获取搜索商品列表
export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

// 获取商品详情
export const getProDetail = (goodsId) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/goods/detail', {
    params: {
      goodsId
    }
  })
}

// 获取商品评价
export const getProComment = (goodsId, limit) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
