# Scheme
inBox 支持通过 scheme 打开笔记详情页面和发布笔记页面

## 笔记详情
通过该 scheme 可以打开笔记详情页面，支持跳转到指定的卡片，具体格式为：

**inbox://open?cardId=[cardId]**
> cardId 为卡片的 id

## 搜索笔记
通过该 scheme 可以打开笔记搜索页面，并支持带搜索内容，具体格式为：

**inbox://search?keyword=[keyword]**
> keyword 为搜索内容


## 发布笔记
通过该 scheme 可以打开发布笔记页面，支持配置时候显示为悬浮窗发布入口，具体格式为：

**inbox://write?content=笔记内容&isFloat=1**
> content 为笔记内容，isFloat 为是否显示为悬浮窗发布入口，1 为显示，0 为正常发布器模式，默认为 0