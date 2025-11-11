import request from '@/utils/request'

export const getHomeData = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/page/detail', {
    params: {
      platform: 0
    }
  })
}
