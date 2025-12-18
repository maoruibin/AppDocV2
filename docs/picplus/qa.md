#  常见问题

###  腾讯、七牛等云图床设置防盗链后，图片上传成功后，在 APP 中不能正常显示怎么办？

从 4.1.1 版本开始，咕咚云图支持了防盗链设置，只需要将域名

> [http://pic.plus (opens new window)](http://pic.plus/)

加入 Referer 白名单即可

###  GitHub 上传失败了，怎么办？

![](https://cdn.nlark.com/yuque/0/2020/jpeg/159409/1587469723441-c2eb4c5d-3e98-4fe7-8297-5e494eea1762.jpeg#height=297&id=RS66s&originHeight=297&originWidth=1080&originalType=binary&ratio=1&size=0&status=done&style=none&width=1080)

GitHub 因为服务器在国外的缘故，所以服务会出现不稳定的情况，导致有时上传失败，这属于已知问题，是 GitHub 自身服务导致，这种时候，**可以尝试使用移动网络上传，或者等待一段时间重试**。

###  如何添加图床

打开咕咚云图，点击主页左上角的图床下拉菜单，然后选择添加，如下所示： ![](https://cdn.nlark.com/yuque/0/2021/jpeg/159409/1610034291386-438b4807-3ce3-468a-9b23-98d094a99f98.jpeg#height=1536&id=dtQ7x&originHeight=1536&originWidth=2048&originalType=binary&ratio=1&size=0&status=done&style=shadow&width=2048)

### [#](#)

###  如何编辑图床名称？

图床添加完毕后，PicPlus 会自动为图床创建一个名字，如 GItHub 图床、阿里云图床等，但是创建完成后，你也可以选择重命名。 步骤：主页右上角下拉菜单 > 编辑 > 点击图床更多菜单 > 选择重命名

![](https://cdn.nlark.com/yuque/0/2021/jpeg/159409/1610034557256-3d2f9bde-e7af-4637-9901-6462101f62e2.jpeg#height=600&id=P8MEx&originHeight=2400&originWidth=1080&originalType=binary&ratio=1&size=0&status=done&style=shadow&width=270)

###  支持 gif 上传吗？

支持，具体跟图床也有关系… 另外，只要是 gif 图片，picplus 则不会对图片压缩，原图上传。

###  GitHub 开启 CDN 后，图片不能立即删除，多久失效？

开启 CDN 后，图片会进行缓存，缓存在一些节点上，所以删除后，不能立即生效，一般需要24小时的时间，才可以删除生效，在这期间，图片一直可以访问。

###  会开发 PC 客户端吗

暂时不考虑，建议使用 [PicGo (opens new window)](https://picgo.github.io/PicGo-Doc/zh/guide/) ，Mac 也可以使用 iPic。

###  我平时只在本地做笔记，把图片通过PicPlus上传到阿里云，然后复制链接到纯纯写作/可乐记等软件，然后预览，请问每预览一次都算请求和下载吗？

app 一般都会在本地做图片缓存，除非你手动清理掉写作 app 中图片缓存，一般情况下预览时不会每次都去请求和下载…而是使用缓存图片…

###  可以重复上传图片吗？

如果之前向一个图床上传过一张图片，再次选择同样路径，同样名称的图片上传时，部分图床可能不能继续上传，如 GitHub、码云，这时 App 会提示重复上传，如果要继续上传，可以选择重命名后上传。