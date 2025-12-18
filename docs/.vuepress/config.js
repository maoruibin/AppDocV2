import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'
import taskLists from 'markdown-it-task-lists'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '咕咚',
  description: '我的软件使用说明文档',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon-32.png' }]
  ],
  markdown: {
    extendsMarkdown: (md) => {
      md.use(taskLists)
    }
  },
  theme: defaultTheme({
    logo: '/img/gudong-doc-logo.svg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '知识卡片', link: 'https://card.gudong.site/' },
      { text: '下载地址', link: '/inbox/download' },
      {
        text: '作品集合',
        children: [
          { text: 'inBox 笔记', link: '/inbox/' },
          { text: '仓咚咚', link: '/cang/' },
          { text: '点亮', link: '/light/' },
          { text: '咕咚订阅', link: '/rssplus/' },
          { text: '咕咚云图', link: '/picplus/' }
        ]
      },
      {
        text: '更多',
        children: [
          { text: '联系我们', link: '/inbox/contact' },
          { text: '购买 PRO', link: '/inbox/pay/' },
          { text: '我的博客', link: 'https://blog.gudong.site/' }
        ]
      }
    ],
    sidebar: {
      '/inbox/': [
        { text: '你好', collapsible: false, children: [
          { text: '常见问题', link: '/inbox/qa' },
          { text: '使用指南', link: '/inbox/guide' },
          { text: '更新日志', link: '/inbox/changelog' },
          { text: '开发计划', link: '/inbox/dev_plan' },
          { text: '购买 PRO', link: '/inbox/pay' },
          { text: '捐赠', link: '/inbox/donate' }
        ]},
        { text: '数据', collapsible: false, children: [
          { text: '数据备份', link: '/inbox/data_backup' },
          { text: 'WebDAV 云盘', link: '/inbox/data_webdav' },
          { text: '图片选择', link: '/inbox/image_select' },
          { text: '历史记录', link: '/inbox/history' }
        ]},
        { text: '网页版', collapsible: false, children: [
          { text: '网页端', link: '/inbox/web' },
          { text: '网页同步', link: '/inbox/websync' }
        ]},
        { text: '功能', collapsible: false, children: [
          { text: 'Markdown', link: '/inbox/markdown' },
          { text: '快速操作', link: '/inbox/quick' },
          { text: '标签', link: '/inbox/tag' },
          { text: '盒子', link: '/inbox/box' },
          { text: '时间笔记', link: '/inbox/time_note' },
          { text: '热力图', link: '/inbox/heatmap' },
          { text: '链接', link: '/inbox/link' },
          { text: '图片服务', link: '/inbox/image_server' }
        ]},
        { text: '开放', collapsible: false, children: [
          { text: 'Kimi 接入', link: '/inbox/ai_kimi' },
          { text: 'DeepSeek', link: '/inbox/deepseek' },
          { text: 'Web S3 教程', link: '/inbox/lesson-web-s3' },
          { text: 'Memos', link: '/inbox/memos' },
          { text: '思源', link: '/inbox/siyuan' },
          { text: 'API', link: '/inbox/api' },
          { text: 'Scheme', link: '/inbox/scheme' }
        ]},
        { text: '教程', collapsible: false, children: [
          { text: 'Web S3 教程', link: '/inbox/lesson-web-s3' },
          { text: '导出到 Obsidian', link: '/inbox/export_obsidian' },
          { text: '导出到思源', link: '/inbox/export_siyuan' },
          { text: '数据恢复', link: '/inbox/data_recovery' },
          { text: '导入数据', link: '/inbox/lesson-import' },
          { text: '时间笔记教程', link: '/inbox/lesson-timenote' },
          { text: 'WebDAV 教程', link: '/inbox/lesson-webdav' },
          { text: '数据推送', link: '/inbox/data_push' }
        ]},
        { text: '关于', collapsible: false, children: [
          { text: '缘起', link: '/inbox/reason' },
          { text: '下载地址', link: '/inbox/download' },
          { text: '更新日志', link: '/inbox/changelog' },
          { text: '联系我们', link: '/inbox/contact' }
        ]},
        { text: '服务协议', collapsible: false, children: [
          { text: '服务协议', link: '/inbox/agreement' },
          { text: '隐私政策', link: '/inbox/private' }
        ]}
      ],
      '/cang/': [
        { text: '你好', collapsible: false, children: [
          { text: '常见问题', link: '/cang/qa' },
          { text: '使用指南', link: '/cang/guide' },
          { text: '更新日志', link: '/cang/changelog' }
        ]},
        { text: '使用场景', collapsible: false, children: [
          { text: '使用场景', link: '/cang/usage_scenarios' },
          { text: '专业版', link: '/cang/pro_version' }
        ]},
        { text: '数据', collapsible: false, children: [
          { text: '数据安全', link: '/cang/data_security' }
        ]},
        { text: '服务协议', collapsible: false, children: [
          { text: '服务协议', link: '/cang/agreement' },
          { text: '隐私政策', link: '/cang/privacy' }
        ]}
      ],
      '/light/': [
        { text: '你好', collapsible: false, children: [
          { text: '介绍', link: '/light/' },
          { text: '常见问题', link: '/light/qa' },
          { text: '愿望清单', link: '/light/wish' }
        ]},
        { text: '打卡', collapsible: false, children: [
          { text: '打卡记录', link: '/light/note' },
          { text: '开放接口', link: '/light/api' }
        ]},
        { text: '数据', collapsible: false, children: [
          { text: '数据备份', link: '/light/data_backup' },
          { text: '数据恢复', link: '/light/data_recovery' },
          { text: 'WebDAV 云盘', link: '/light/data_webdav' }
        ]},
        { text: '教程', collapsible: false, children: [
          { text: 'WebDAV 教程', link: '/light/lesson-webdav' }
        ]},
        { text: '服务协议', collapsible: false, children: [
          { text: '隐私政策', link: '/light/private' }
        ]},
        { text: '关于', collapsible: false, children: [
          { text: '为什么', link: '/light/why' },
          { text: '更新日志', link: '/light/changelog' },
          { text: '联系我们', link: '/light/contact' }
        ]}
      ],
      '/rssplus/': [
        { text: '你好', collapsible: false, children: [
          { text: '常见问题', link: '/rssplus/qa' }
        ]},
        { text: '服务协议', collapsible: false, children: [
          { text: '服务协议', link: '/rssplus/agreement' },
          { text: '隐私政策', link: '/rssplus/private' }
        ]},
        { text: '关于', collapsible: false, children: [
          { text: '什么是 RSS', link: '/rssplus/whatrss' },
          { text: '更新日志', link: '/rssplus/changelog' }
        ]}
      ],
      '/picplus/': [
        { text: '你好', collapsible: false, children: [
          { text: '介绍', link: '/picplus/' },
          { text: '常见问题', link: '/picplus/qa' },
          { text: '更新日志', link: '/picplus/changelog' }
        ]},
        { text: '教程', collapsible: false, children: [
          { text: 'WebDAV 教程', link: '/picplus/lesson_webdav' },
          { text: 'GitHub 教程', link: '/picplus/lesson_github' },
          { text: '七牛云教程', link: '/picplus/lesson_qiniu' },
          { text: '腾讯云教程', link: '/picplus/lesson_tenxun' },
          { text: 'Lsky 教程', link: '/picplus/lesson-lsky' }
        ]},
        { text: '使用', collapsible: false, children: [
          { text: 'WebDAV 使用', link: '/picplus/webdav' },
          { text: '推荐配置', link: '/picplus/recommend' },
          { text: '使用方式', link: '/picplus/way' }
        ]},
        { text: '服务协议', collapsible: false, children: [
          { text: '隐私政策', link: '/picplus/private' },
          { text: '服务协议', link: '/picplus/agreement' }
        ]},
        { text: '关于', collapsible: false, children: [
          { text: '为什么', link: '/picplus/why' },
          { text: '关于', link: '/picplus/about' }
        ]}
      ]
    }
  }),
  bundler: webpackBundler({
    chainWebpack: (config) => {
      ['scss', 'sass'].forEach((ruleName) => {
        const rule = config.module.rule(ruleName)
        if (rule) {
          const use = rule.use('sass-loader')
          if (use) {
            use.tap((opts) => {
              opts = opts || {}
              opts.sassOptions = Object.assign({}, opts.sassOptions, {
                silenceDeprecations: ['legacy-js-api']
              })
              return opts
            })
          }
        }
      })
    }
  })
})
