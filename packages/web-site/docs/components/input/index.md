### 基本使用

基本使用。

:::demo

```vue
<template>
  <u-input placeholder="Basic usage" />
</template>
```

:::

### 前缀和后缀

在输入框上添加前缀或后缀图标。

:::demo

```vue
<template>
  <u-input prefix="code" suffix="check-circle" placeholder="input some thing" />
</template>
```

:::

### 三种大小

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

:::demo

```vue
<template>
  <u-input size="large" placeholder="large size" />
  <br />
  <br />
  <u-input placeholder="default size" />
  <br />
  <br />
  <u-input size="small" placeholder="small size" />
</template>
```

:::

### 密码框

密码框。

:::demo

```vue
<template>
  <u-input-password placeholder="input password" />
</template>
```

:::

### API

#### 属性

| 参数          | 说明                       | 类型     | 默认值    |
| ------------- | -------------------------- | -------- | --------- |
| `placeholder` | placeholder                | _string_ | `''`      |
| `prefix`      | 在输入框前插入的 icon name | _string_ | `null`    |
| `suffix`      | 在输入框后插入的 icon name | _string_ | `null`    |
| `size`        | 输入框的大小               | _string_ | `default` |
