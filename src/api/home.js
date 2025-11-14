import request from '@/utils/request'
// 获得首页数据
export const getHomeData = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/page/detail', {
    params: {
      platform: 0
    }
  })
}
