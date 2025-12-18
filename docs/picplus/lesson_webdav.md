# 配置云备份

**前言**
这里以 PicPlus 如何配置 [WebDAV](https://baike.baidu.com/item/WebDAV/4610909?fr=aladdin) 为例，说明如何在手机上设置 WebDAV 为 app 做数据云备份。



> PicPlus 是一个图床上传 APP，可以帮你上传手机图片到图床，支持七牛云、阿里云、又拍云等主流图床，同时还支持配置 GitHub、码云为个人图床。
>
> 上传时支持自动压缩图片，上传后自动生成 Markdown、Html格式链接。
>





## 关于 WebDAV


简单说，这是一种技术规范，任何云服务只要实现了该规范，可以声称自己是 [WebDAV](https://baike.baidu.com/item/WebDAV/4610909?fr=aladdin) 云盘。



支持 WebDAV 的云服务不少，但是综合来看，推荐国内的坚果云，口碑很不错，如果要在 PicPlus 中配置 WebDAV，也建议使用坚果云。



下面的教程就以坚果云为例，介绍如何配置云备份。



## 通过 PC 配置


坚果云提供网页服务，以下教程针对 PC 网页。



### 准备工作


要使用坚果云做备份云盘，首先需要注册一个坚果云账号（如果已经有，可以忽略），注册地址：[https://www.jianguoyun.com/](https://www.jianguoyun.com/)，注册完成后，登录。



### 打开 PicPlus 配置页面


打开 PicPlus 中的数据备份页面，选择 WebDAV 配置，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/jpeg/159409/1588581804775-9b466dd7-f277-4f50-9fd0-dc6472b5fa11.jpeg)



需要填写三项内容：



+ WebDAV 服务器地址
+ WebDAV 账号
+ 授权密码



### WebDAV 服务器地址


该地址是一个固定的地址，如果使用坚果云，地址为：



> [https://dav.jianguoyun.com/dav/](https://dav.jianguoyun.com/dav/)
>



### WebDAV 账号


WebDAV 账号即注册坚果云后，你的账号信息，具体信息如截图所示：



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1588581687433-33396b84-5d5e-4f5d-8703-9a1fba8610eb.png)



### 授权密码


坚果云是一个 WebDAV 云盘，它支持为不同的应用开辟一块存储空间，以便存储数据。现在要为 PicPlus 划分一片空间，就需要你在坚果云后台创建一个应用空间，以便存储 PicPlus 的应用数据。



具体操作如下所示：



登录坚果云，点击个人昵称，选择账户信息，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1588581687281-3a969a43-b809-4c2e-a20f-6b911fcd3be5.png)



然后点击安全选项，选择安全选项后，滑动到页面底部，选择添加应用



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1588581894541-1c552f4f-1f25-4753-af90-b5f57d2c1510.png)



接着输入框中输入应用名称，如：PicPLus



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1588581686775-e18e5a15-83d4-4b72-b658-653a833327d0.png)



然后点击生成密码，即可生成坚果云对 PicPlus 的授权密码，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1588581687212-2fa81894-2043-480d-b4a4-01aebbb4efaf.png)



点击复制，复制授权密码，然后发送到手机。



### 完成配置


通过以上步骤，已经获取到了 WebDAV 服务器地址，账号名以及最重要的授权密码，这时只要按个输入 PicPlus 配置框即可，输入完成后，点击右上角「测试一下」，验证是否配置成功。



> 「测试一下」会在手机上生成一个临时文件，然后上传到坚果云，上传成功后，再执行删除，如果都可以顺利完成，会提示 "测试成功"
>



测试成功后，点击小对勾，即可完成 WebDAV 的配置工作。



## 通过坚果云 APP


除了通过网页，可以生成坚果云对  PicPlus 的授权密码，其实也可以通过坚果云 APP 生成，不过需要你手机中安装坚果云 app 才可以。



打开坚果云 app，打开侧滑菜单，然后选择设置，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/jpeg/159409/1588581686384-8e4ca887-cce8-4dd8-a5e7-101ce9c6ef15.jpeg)



接着选择**第三方应用管理**，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/jpeg/159409/1588581686364-151f8a93-f8f2-40e3-abee-2f44f493c90e.jpeg)



打开管理页面后，这里可以看到你授权的所有三方应用，同时还展示了坚果云的服务器地址以及账号信息，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/jpeg/159409/1588581686336-63058139-72c2-4569-bc6b-fa8b71ecb57a.jpeg)



接着点击”添加应用密码“，输入 PicPlus 或者其他名称，即可生成一个 PicPlus 的授权密码。



完成后，复制密码、账号信息、服务器地址，填入 PicPlus 配置页面即可。



## 更多


通过以上操作，即可完成 PicPlus 中数据的云备份配置，PicPlus 默认开启自动备份，当你在 PicPlus 中上传、删除图片数据时，它会自动同步 PicPlus 的数据到云端，更多关于 PicPlus 数据备份、同步你可以查看文章 [备份与云同步说明](https://www.yuque.com/gudong-osksb/twgz5k/ec4f3i)。



祝使用愉快~

