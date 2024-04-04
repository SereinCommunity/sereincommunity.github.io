# Json Schemas

用于为JSON编写提供提示和校验

## 一览

### v1（已过时）

| 文件名                                                                                                    | 备注     | `$schema`                                                            |
| --------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| [~~plugin-info.json~~](https://github.com/SereinCommunity/json-schemas/blob/main/src/v1/plugin-info.json) | 插件信息 | `https://sereincommunity.github.io/json-schemas/v1/plugin-info.json` |

### v2✨

| 文件名                                                                                                  | 备注         | `$schema`                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------- |
| [plugin-info.json](https://github.com/SereinCommunity/json-schemas/blob/main/src/v2/plugin-info.json)   | 插件信息     | `https://sereincommunity.github.io/json-schemas/v2/plugin-info.json`  |
| [plugin-index.json](https://github.com/SereinCommunity/json-schemas/blob/main/src/v2/plugin-index.json) | 插件索引     | `https://sereincommunity.github.io/json-schemas/v2/plugin-index.json` |
| [data-info.json](https://github.com/SereinCommunity/json-schemas/blob/main/src/v2/data-info.json)       | 数据文件信息 | `https://sereincommunity.github.io/json-schemas/v2/data-info.json`    |

## 使用方法

1. 新建一个JSON文件
2. 复制如下文本到该文件中
3. 将`$schema`的值替换为上面的链接

```json
{
    "$schema": "https://sereincommunity.github.io/json-schemas/v2/plugin-info.json",
}
```
