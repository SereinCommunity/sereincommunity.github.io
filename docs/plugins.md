# 插件

:::caution
此页面尚未完善，可能还有许多变动
:::

## 1. 初始化仓库

1. 在GitHub创建插件的仓库，方便创建索引和下载
2. 在仓库的根目录或是其他文件夹中创建`plugin-info.json`
3. 插入如下文本
    ```json
    {
        "$schema": "https://sereincommunity.github.io/json-schemas/v2/plugin-info.json",
    }
    ```
4. 按编辑器提示写入相应的项

## 2. 发布新版本

直接发布Releases即可

### 发布内容

不做限制，但推荐写更新日志或重大变更

### Tag

需要为如下格式之一

- `{版本号}`
  - `1.1.4`
- `v{版本号}`
  - `v1.1.4`
- `{插件ID}-{版本号}`
  - `example-1.1.4`
- `{插件ID}-v{版本号}`
  - `example-v1.1.4`

### 文件格式

未定

## 3. 提交

### Pull Requset

未定

<!-- 1. fork此仓库的`main`分支
2. 打开根目录下的[`list.json`](https://github.com/SereinCommunity/PluginsGallery/blob/main/list.json)
3. 在其中加入自己的插件项，其中`key`为插件ID，`value`为插件的仓库信息
   ```json title="list.json"
    {
        // .........
        "example": {
            "owner": "", // 仓库所有者
            "repo": "", // 仓库名称
            "branch": null, // 分支。保留为空则使用默认分支
            "path": "/" // `plugininfo.json`的所在路径
        }
    }
   ```
4. 推送并提交pr等待审核 -->

### Issue

[提交Issue](https://github.com/SereinCommunity/gallery/issues/new?template=plugin.yml)
