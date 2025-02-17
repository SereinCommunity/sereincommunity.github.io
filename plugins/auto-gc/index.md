---
id: auto-gc
name: 自动垃圾回收
version: 1.0.0
description: 自动垃圾回收，减少内存占用
tags:
  - tool
targetingSerein: []
dependencies: []
authors:
  - name: Zaitonn
    description: ''
type: js
entryFile: gc.js
repo:
  owner: SereinCommunity
  repo: auto-gc
  branch: main
  url: https://github.com/SereinCommunity/auto-gc
  stars: 0
  forks: 0
  issues: 0
  pullRequests: 0
  createAt: '2025-01-06T14:17:08Z'
  pushedAt: '2025-01-07T02:07:53Z'
  updatedAt: '2025-01-07T02:08:10Z'
  license: null
  releases:
    v1.0.0:
      url: https://github.com/SereinCommunity/auto-gc/releases/tag/v1.0.0
      body: ''
      downloads: 14
      publishedAt: '2025-01-07T02:07:53Z'
      assets:
        - name: auto-gc_v1.0.0.zip
          size: 707
          downloads: 14
          url: >-
            https://github.com/SereinCommunity/auto-gc/releases/download/v1.0.0/auto-gc_v1.0.0.zip
  downloads: 14
title: 自动垃圾回收

---



定时调用[`System.GC.Collect()`](https://learn.microsoft.com/zh-cn/dotnet/api/system.gc.collect?view=net-8.0)，减少内存占用

## 食用方法

| 版本  | 操作方法                                       |
| :---: | ---------------------------------------------- |
| v2.0+ | 解压后将**文件夹**复制到`Serein/plugins`下即可 |
| v1.3  | 解压后将 **`gc.js`** 复制到`plugins`下即可     |
