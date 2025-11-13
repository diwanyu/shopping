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
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSub () {
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
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
