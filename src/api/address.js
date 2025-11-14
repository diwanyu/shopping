import request from '@/utils/request'

// 获取收货地址
export const getAddress = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/address/list')
}
