<template>
  <div class="count-box">
    <button @click="handleSub" class = "ben">-</button>
    <input :value="value" @change="handleChange"  class="inp" type="text">
    <button @click="handleAdd" class="ben">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number, // 数量只能为Number类型
      default: 1 // 默认值为1
    }
  },
  methods: {
    // 数量减一
    handleSub () {
      if (this.value > 0) {
        this.$emit('input', this.value - 1)
      } else {
        this.$toast('数量不能小于0')
      }
    },
    // 数量加一
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    // 显示数量
    handleChange (e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style>
.count-box{
    width: 110px;
    display: flex;
}
.ben{
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
}
.inp {
    width: 40px;
    margin: 0 5px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
    text-align: center;
}
</style>
