## 快速上手

### 基础用法

```vue
<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>
```

#### 不同尺寸

```vue
<template>
  <div>
    <el-button size="medium">中等按钮</el-button>
    <el-button size="small">小型按钮</el-button>
    <el-button size="mini">超小按钮</el-button>
  </div>
</template>
```

#### 带有链接的按钮

```vue
<template>

### 禁用状态

```vue
<template>
  <div>
    <el-button disabled>默认按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
  </div>
</template>
```

### 图标按钮

```vue
<template>
  <div>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>
```

### 按钮组
