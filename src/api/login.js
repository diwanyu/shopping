// 此处存放登录相关的请求
// 1.获取图形验证码
import request from '@/utils/request'
export const getPicCode = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/captcha/image')
}
