:::demo

```vue
<template>
  Small
  <Button type="a" @click="handleClick"></Button>
  Middle
  <Button type="a"></Button>
  Large
  <Button type="a"></Button>
  Disabled
  <Button type="a"></Button>
</template>

<script setup>
  const handleClick = () => {
    alert('clicked')
  }
</script>
```

:::
