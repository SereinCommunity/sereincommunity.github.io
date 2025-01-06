---
id: stdio
name: 文件管理
version: '1.1'
description: 一个提供文件读写、目录创建删除等功能的前置插件
tags:
  - development
targetingSerein:
  - 1.3.3
  - 1.3.4
  - 1.3.5
dependencies: []
authors:
  - name: Zaitonn
    description: ''
type: js
entryFile: ''
repo:
  owner: SereinCommunity
  repo: stdio
  branch: main
  url: https://github.com/SereinCommunity/stdio
  stars: 0
  forks: 0
  issues: 0
  pullRequests: 0
  createAt: '2024-03-20T14:53:06Z'
  pushedAt: '2025-01-03T02:02:53Z'
  updatedAt: '2025-01-03T02:03:12Z'
  license: null
  releases:
    v1.1:
      url: https://github.com/SereinCommunity/stdio/releases/tag/v1.1
      body: ''
      downloads: 0
      publishedAt: '2024-12-27T09:17:47Z'
      assets:
        - name: stdio.d.ts
          size: 9611
          downloads: 0
          url: >-
            https://github.com/SereinCommunity/stdio/releases/download/v1.1/stdio.d.ts
        - name: stdio.js
          size: 10644
          downloads: 0
          url: >-
            https://github.com/SereinCommunity/stdio/releases/download/v1.1/stdio.js
  downloads: 0
title: 文件管理

---



一个提供文件读写、目录创建删除等功能的前置插件

:::tip
你可以在[此处](https://learn.microsoft.com/zh-cn/dotnet/api/system.io?view=net-8.0)找到更详细的说明
:::

## 函数一览

```ts
declare function appendTextToFile(path: string, content: string, encoding?: any): void;
declare function appendLinesToFile(path: string, content: string[], encoding?: any): void;
declare function readAllLinesFromFile(path: string, encoding?: any): string[];
declare function readAllTextFromFile(path: string, encoding?: any): string;
declare function writeLinesToFile(path: string, content: string[], encoding?: any): void;
declare function writeAllTextToFile(path: string, contents?: string, encoding?: any): void;

declare function existFile(path: string): boolean;
declare function copyFile(sourceFileName: string, destFileName: string, overwrite?: boolean): void;
declare function deleteFile(path: string): void;
declare function moveFile(sourceFileName: string, destFileName: string, overwrite?: boolean): void;
declare function renameFile(sourceFileName: string, destFileName: string): void;

declare function existFileOrDirectory(path: string): boolean;
declare function existDirectory(path: string): boolean;
declare function createDirectory(path: string): void;
declare function deleteDirectory(path: string): void;
declare function moveDirectory(sourceDirName: string, destDirName: string): void;

declare function getFiles(path: string, searchPattern?: string, searchOption?: any): string[];
declare function getDirectories(path: string, searchPattern?: string, searchOption?: any): string[];
declare function getDirectoryName(path: string): string | null;
declare function getFileName(path: string): string | null;
declare function getExtension(path: string): string | null;
declare function getFileNameWithoutExtension(path: string): string | null;
declare function getFullPath(path: string, basePath?: string): string;
declare function getFileCreationTime(path: string): Date;
declare function getFileLastAccessTime(path: string): Date;
declare function getFileLastWriteTime(path: string): Date;
```
