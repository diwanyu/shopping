import request from '@/utils/request'

export const getCategoryData = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/category/list')
}
