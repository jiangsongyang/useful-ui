### 基本用法

相邻组件水平间距。。

:::demo

```vue
<template>
  <u-space>
    u-space
    <u-button type="primary">Button</u-button>
    <u-button type="primary">Button</u-button>
    <u-button type="primary">Button</u-button>
  </u-space>
</template>
```

:::

### 垂直间距

相邻组件垂直间距。 可以设置 `width: 100%` 独占一行。

:::demo

```vue
<template>
  <u-space direction="vertical">
    <u-button style="width: 100%" type="primary" block>Button</u-button>
    <u-button style="width: 100%" type="primary" block>Button</u-button>
    <u-button style="width: 100%" type="primary" block>Button</u-button>
  </u-space>
</template>
```

:::

### API

#### 属性

| 参数        | 说明     | 类型                                   | 默认值       |
| ----------- | -------- | -------------------------------------- | ------------ |
| `align`     | 对齐方式 | `'start \| end \| center \| baseline'` | `"center"`   |
| `direction` | 间距方向 | `'vertical \| horizontal'`             | `horizontal` |

#### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 文本内容 | `-`  |
