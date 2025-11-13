const INFO_KEY = 'shopping_info'
const HISTORY_KEY = 'shop_search_history'

// 从本地存储中获取个人信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}

// 将个人信息保存至浏览器中
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除所有个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取搜索历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

// 设置搜索历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
