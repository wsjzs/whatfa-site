export const readme = `
# 小润书

本项目使用lerna进行多包维护

# TODO

- [ ] Jupiter去除naive-ui

去除naive-ui

项目[仓库地址 https://jihulab.com/xiaorunshu/xiaorunshu](https://jihulab.com/xiaorunshu/xiaorunshu)

# 参与项目前请先配置local账号，以免用了其他平台的账号(切换一次即可)

    git config user.name "Author Name"
    git config user.email "Author Email"

# 初始化

1. npm install #安装依赖库
2. npm run bootstrap #初始化多包（安装子包依赖库）
3. npm run dev #运行前后端
   - npm run web #运行小润书web端
   - npm run backend #运行小润书后端

# 路由

- 全局路由前缀为/api
- 如 /api/user/getTest
  
# 自动部署（代办
）

gitlab-ci进行自动构建&部署


# 为什么用lerna

1. 如果不用lerna多包管理工具的话，就需要建立多个仓库（用户端、后台管理、后端），并且每个仓库都需要重复配置（自动部署、代码检查、husky等）

2. lerna使得只需要配置一次即可运用到多个包，并提供了版本发布等功能

# 版本发布

发布新版本的时候使用已经封装好的命令

    npm run publish # 1.0.0 => 1.1.0

使用其他模式，如下所示

    npm run publish [mode]  
mode 可选项：'major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', or 'prerelease'.  

例子：

    npm run publish  # 默认mode为minor
    npm run publish minor
    npm run publish major
    npm run publish patch

# 代码检查

- 每次执行npm install的时候会自动执行prepare命令，即执行husky install，这会安装husky的脚本，此后git commit前会自动进行代码检查
- 项目使用husky，当git commit前自动启用ESlint+prettier检查
- 代码检查配置在项目最外层

# commit message 格式
    feat: 新功能
    update: 更新某功能
    fix: 修补某功能的bug
    refactor: 重构某个功能
    optimize: 优化构建工具或运行时性能
    style: 仅样式改动
    docs: 仅文档新增/改动
    chore: 构建过程或辅助工具的变动
    build: 架构变化
注意: feat: test 冒号是英文版的，并且后面需要空一格

# 向子包中添加依赖

- lerna add @midwayjs/typegoose@3 --scope=xiaorunshu-backend
- --scope=xiaohongshu-backend去掉则向所有子包中添加依赖
- 注意：每次添加依赖之后需要执行npm run bootstrap
- lerna add pinia --scope=xiaorunshu-web

# 数据库开发调试

- 开发环境数据库用本地数据库
- 线上环境用服务器数据库
- 因此数据库连接地址都为localhost或者127.0.0.1
    
# 控制器统一返回格式
- 0成功，1xx业务错误，2xx
- 100 默认
\`\`\`json
{
  "code": 0,
  "data": {},
  "msg": 0,
  "success": true
}
\`\`\`
\`\`\`typescript

import {Context} from '@midway/koa'

// 在控制器中使用返回工具
@Inject()
ctx: Context

return this.ctx.success(data)
    // 其他接口返回工具
    // this.ctx.fail()
    // this.ctx.makeResult()
    // this.ctx.fail()

\`\`\`
`
