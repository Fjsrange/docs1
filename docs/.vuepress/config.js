import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  base: "/docs1/",
  lang: "zh-CN",
  title: "路痴行为艺术家",
  description: "这是我的第一个 VuePress 站点",
  head: [
    ["link", { rel: "icon", href: "./public/favicon.ico" }],
    ["meta", { name: "author", content: "越过高山海洋" }],
  ],
  theme: defaultTheme({
    lastUpdated: "更新时间", // 显示最后更新时间
    contributors: true, // 显示贡献者信息
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "快速上手",
        link: "/guide/primary",
      },
      {
        text: "项目简介",
        link: "/guide/secondary",
      },
      {
        text: "学习",
        link: "/learn/",
        children: [
          {
            text: "HTML",
            link: "/learn/HTML/index",
          },
          {
            text: "JavaScript",
            link: "/learn/JavaScript/index",
          },
          {
            text: "CSS",
            link: "/learn/CSS/index",
            collapsable: false, // 不折叠
            sidebarDepth: 1, // 显示标题层级
            children: [
              {
                text: "知识拓展",
                link: "/learn/CSS/知识拓展/index",
              },
              {
                text: "拓展",
                link: "/learn/CSS/expansion",
              },
            ],
          },
          {
            text: "TypeScript",
            link: "/learn/TypeScript/index",
          },
          {
            text: "Vue2",
            link: "/learn/Vue2/index",
          },
          {
            text: "Vue3",
            link: "/learn/Vue3/index",
          },
        ],
      },
      {
        text: "选择语言",
        children: [
          {
            text: "中文",
            link: "/",
          },
          {
            text: "English",
            link: "/en/",
          },
        ],
      },
      {
        text: "GitHub",
        link: "https://github.com/Fjsrange/docs1",
      },
    ],
    sidebar: {
      "/learn/": [
        {
          text: "HTML",
          children: ["/learn/HTML/index"],
        },
        {
          text: "美丽的CSS",
          link: "/learn/CSS/index",
          collapsable: false, // 不折叠
          sidebarDepth: 1, // 显示标题层级
          children: ["/learn/CSS/知识拓展/index", "/learn/CSS/expansion"],
        },
      ],
    },
  }),
});
