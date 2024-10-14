---
outline: deep
---
# git
在多人开发协作中git的使用必不可少，熟练掌握git操作，可以省去翻阅资料的时间，以下是总结的git中的常用操作。

## git的常用操作

### 克隆一个现有的仓库:
``` 
git clone <url>
```
### 添加所有文件到暂存区:
```
git add .
```
### 提交暂存区更改：
```
git commit -m "message"
```
### 分支的操作
```
    //查看所有分支
    git branch
    //创建新分支
    git branch <branch-name>
    //切换到指定分支
    git checkout <branch-name>
    //创建并切换到新分支
    git checkout -b <branch-name>
    //删除分支
    git branch -d <branch-name>
```
### 合并分支
```
    git merge <branch-name>
```
### 远程仓库的操作
```
    //查看是否连接到远程仓库
    git remote -v
    //拉取远程仓库的最新更改
    git pull origin <branch-name>
    //推送更改到远程仓库
    git push origin <branch-name>
```
### 更新本地仓库
```
    git fetch origin
```