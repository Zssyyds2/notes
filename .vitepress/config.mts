import { defineConfig } from "vitepress";

import escookConfig from "@escook/vitepress-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: escookConfig,
  title: "Zssyyds2的笔记本",
  description: "Record learning",
  outDir: "docs", //打包输出的目录
  base: "/notes/", //部署到github pages的路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Zssyyds2的笔记本",
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/frontend" },
      { text: "项目", link: "/project" },
      { text: "数学", link: "/math" }
    ],
    sidebar: {
      // 当用户在 `前端` 目录页面下将会展示这个侧边栏
      "/frontend/": [
        {
          text: "介绍",
          items: [{ text: "目的", link: "/frontend/" }],
        },
        {
          text: "HTML",
          items: [{ text: "HTML基础", link: "/frontend/html" }],
        },
        {
          text: "CSS",
          items: [{ text: "CSS", link: "/frontend/css" }],
        },
        {
          text: "JavaScript",
          items: [
            { text: "JavaScript基础", link: "/frontend/js01" },
            { text: "JavaScript进阶", link: "/frontend/js02" },
            { text: "JavaScript高级", link: "/frontend/js03" },
          ],
        },
        {
          text: "TypeScript",
          items: [{ text: "泛型", link: "/frontend/ts" }],
        },
        {
          text: "Vue",
          items: [
            { text: "Vue源码", link: "/frontend/vue01.md" },
            { text: "Vue周边生态", link: "/frontend/vue02.md" },
          ],
        },
        {
          text: "工程化",
          items: [
            { text: "Vite", link: "/frontend/vite.md" },
            { text: "Webpack", link: "/frontend/webpack.md" },
          ],
        },
      ],
      // 当用户在 `项目` 目录页面下将会展示这个侧边栏
      "/project/": [
        {
          text: "介绍",
          items: [{ text: "介绍", link: "/project/" }],
        },
        {
          text: "git",
          items: [{ text: 'git的常用操作', link: "/project/git" }]
        },
        {
          text: "金色年华开发--理响",
          items: [
            { text: "项目起步", link: "/project/lx/lx-yilai" },
            { text: "底部导航", link: "/project/lx/lx-tabbar" },
            { text: "路由切换", link: "/project/lx/lx-路由切换" },
            { text: "home界面", link: "/project/lx/lx-home" },
            { text: "home传参", link: "/project/lx/lx-home调用接口.md" },
          ],

        },
      ],
      "/math/": [
        {
          text: "介绍",
          items: [{ text: "介绍", link: "/math/" }],
        },
        {
          text: "立体几何",
          items: [
            { text: "二面角", link: "/math/二面角" },
          ],

        },
      ]
    },

    //搜索栏
    search: {
      provider: "local",
    },

    //最后更新时间
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    socialLinks: [{ icon: "github", link: "https://gitee.com/Zssyyds2" }],
    footer: {
      copyright: "Copyright © Zss & Sclc",
    },
  },
  vite: {
    ssr: {
      noExternal: ["@excook/vitepress-theme", "vitepress"],
    },
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
});