---
id: stdio
title: 文件管理
order: 9

---


::: warning

由于*Serein*从2.0起已内置文件相关的函数，故此插件不再更新。

:::

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
