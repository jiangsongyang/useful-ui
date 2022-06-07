### 基本使用

基本使用。

:::demo

```vue
<template>
  <u-input placeholder="Basic usage" />
</template>
```

:::

### 三种大小

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

:::demo

```vue
<template>
  <u-input size="large" placeholder="large size" prefix="smile" />
  <br />
  <br />
  <u-input placeholder="default size" prefix="smile" />
  <br />
  <br />
  <u-input size="small" placeholder="large size" prefix="smile" />
</template>
```

:::

### API

#### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `dashed` | 是否虚线 | _boolean_ | `false` |
| `orientation` | 分割线标题的位置 | `'left \| right \| center'` | `center` |
| `orientationMargin` | 标题和最近 `left/right` 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right` | _number_ | `0` |

#### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 文本内容 | `-`  |
