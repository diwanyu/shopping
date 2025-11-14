import request from '@/utils/request'

// 获得分类页面数据
export const getCategoryData = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/category/list')
}
