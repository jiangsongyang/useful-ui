:::demo

```vue
<template>
  <span style="margin-right:20px">
    <Button type="primary">primary</Button>
  </span>
  <span style="margin-right:20px">
    <Button type="default">default</Button>
  </span>
  <span style="margin-right:20px">
    <Button type="dashed">dashed</Button>
  </span>
</template>

<script setup>
  const handleClick = () => {
    alert('clicked')
  }
</script>
```

:::
