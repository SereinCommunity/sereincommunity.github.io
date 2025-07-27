---
id: BetterChat
title: BetterChat
order: 1

---

 # BetterChat

<img src="https://count.getloli.com/@BetterChat?name=BetterChat&theme=minecraft&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto">

<div>
    <img src="https://img.shields.io/badge/version-1.0.1-blue.svg" alt="version">
    <img src="https://img.shields.io/badge/license-Apache--2.0-green.svg" alt="license">
    <img src="https://img.shields.io/badge/language-JavaScript-orange.svg" 
alt="language">
</div>

## 项目介绍

这是一个基于Serein JS引擎开发的支持多服务器、多群组群聊服互通插件，适用于Serein 2.1+的版本。

## 插件功能

1. 支持多服务器或群聊转发。
2. 支持自定义匹配触发服务器聊天转发格式。
3. 支持自定义转发格式。
4. 支持CQ码替换。
5. 支持群昵称替换绑定在serein中的玩家ID。

## 插件配置

1. 插件配置文件为`setting.json`，放在本插件目录下。
2. 插件配置文件格式为JSON，每个配置项的说明如下：
    - `EnableGameID`：是否启用游戏ID匹配，默认值为`false`。
    - `Format`：转发格式，默认值为`{{title}} {{name}}:{{msg}}`。
    - `ChatContent`：匹配触发服务器聊天转发格式，默认值为空。
    - `ForwardGroupFormat`：转发群聊格式，默认值为空。
    - `Filtersymbol`：群聊过滤符号，默认值为空。
    - `Filtercontent`：群聊过滤内容，默认值为空。
    - `ForwardServer`：转发服务器列表，默认值为空。
    - `ForwardGroup`：转发群聊列表，默认值为空。
    - `GroupName`：群聊名称列表，默认值为空。
    - `CQCode`：CQ码替换列表，默认值无需修改。
3. 配置文件示例
    ```json
    {
        "EnableGameID": false,
        "Format": "{{title}} {{name}}:{{msg}}",
        "ChatContent": ".*Chat.*?\\s(\\<.*\\>\\s.*)",
        "ForwardGroupFormat": "$1",
        "Filtersymbol": "#",
        "Filtercontent": "帮助",
        "ForwardServer": {
            "12345678": [
                "velocity",
                "be1"
            ]
        },
        "ForwardGroup": {
            "velocity": [
                12345678
            ],
            "be1": [
                12345678
            ]
        },
        "GroupName": {
            "12345678": "【群聊】"
        },
        "CQCode": {
            "[CQ:face]": "[表情]",
            "[CQ:reply]": "[回复]",
            "[CQ:image]": "[图片]",
            "[CQ:video]": "[视频]",
            "[CQ:record]": "[语音]",
            "[CQ:music]": "[音乐]",
            "[CQ:redbag]": "[红包]",
            "[CQ:forward]": "[合并转发消息]",
            "[CQ:node]": "[合并转发消息]",
            "[CQ:xml]": "[XML卡片]",
            "[CQ:json]": "[JSON卡片]",
            "[CQ:file]": "[文件]"
        }
    }
    ```

## 插件使用

1. [下载插件压缩包](https://github.com/inf-mc/BetterChat/releases)，解压到`./Serein/Serein/plugins`目录下。
2. 插件安装完成后，在Serein中重新加载所有插件来启用插件。
3. 插件配置完成后，在Serein中测试插件是否正常工作。

## 插件注意事项

1. 插件配置文件中`ForwardServer`和`ForwardGroup`的配置项需要根据实际情况进行配置。
2. 插件配置文件中`GroupName`的配置项需要根据实际情况进行配置。
3. 插件配置文件中`CQCode`的配置项无需修改。
4. 如服务器已启动完成但插件报`发送失败： ServersID未启动或服务器IPv4端口配置错误。`，请检查服务器配置中更多选项下的IPv4端口是否与服务器配置文件`server.properties`中的端口一致。
5. 基岩版服务器需要在服务器配置编辑器中的输入输出选项勾选使用Unicode字符或使用虚拟终端。

## 插件贡献者

- [@MioMiko](https://github.com/MioMiko)
- [@lingran7031](https://github.com/lingran7031)

## 鸣谢

<div>
    <div>
        <a href="https://sereindev.github.io/">
            <img src="serein.png" width="120" alt="logo">
        </a>
        <a href="https://wiki.infinf.info/">
            <img src="inf-logo-x135.png" alt="logo">
        </a>
    </div>
</div>

## 插件许可证

该插件基于Apache-2.0许可证发布，您可以免费使用、修改和分发本插件的代码。但是，您必须保留本插件的版权声明和许可证声明。
