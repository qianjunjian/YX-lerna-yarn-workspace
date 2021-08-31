# 开发步骤
## 第一步： 安装依赖 （未安装yarn的话，执行npm install yarn -g）
    yarn install --npm-client yarn --use-workspaces
## 第二步 启动工程
    yarn start <projectName>
    注意：第二种启动工程命令：yarn workspace <projectName> run start
## 第三步 启动mock
    yarn mock

# 导入第三库
## 全局安装库
    yarn install <pkg> -W [-D]
## 单个工程安装包
    yarn workspace <projectName> install <pkg> [-D]

# 新建新工程
    yarn create <projectName>

# ---------------------------------------------------------------------------------------------------------------------------
# lerna 常用命令
## --hoist 来把每个 package 下的依赖包都提升到工程根目录，来降低安装以及管理的成本
    lerna bootstrap --hoist

## 配置好后，对于之前依赖包已经被安装到各个 package 下的情况，我们只需要清理一下安装的依赖即可：
    lerna clean

# yarn 常用命令 参考网址 https://zhuanlan.zhihu.com/p/71385053
## 通过使用workspace，yarn install会自动的帮忙解决安装和link问题, 等价于 lerna bootstrap
    yarn install --npm-client yarn --use-workspaces

## 清理环境
    1.​ lerna clean​ 清理所有的node_modules
    2.​ ​yarn workspaces run clean​ 执行所有package的clean操作

## 安装|删除依赖
    1. 给某个package安装依赖【例如：将packageA作为packageB的依赖进行安装】
        yarn workspace packageB add packageA
    2. 给所有的package安装依赖
        yarn workspaces add lodash
    3. 给root安装依赖 【例如：一般的公用的开发工具都是安装在root里，如​typescript​】
        yarn add -W -D typescript​

    删除把add改为remove

    注意点：
        如果ui-button没有发布到npm则
        yarn workspace ui-form add ui-button 会安装失败，但是
        yarn workspace ui-form add ui-button@1.0.0会成功

## 项目构建
    lerna支持按照拓扑排序规则执行命令, ​--sort​参数可以控制以拓扑排序规则执行命令
    lerna run --stream --sort build
