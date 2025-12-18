# 配置 腾讯云 为个人图床

## 写在前面

使用腾讯云做图床之前，需要先注册对应的账号。腾讯云账号注册地址：

[https://cloud.tencent.com/login](https://cloud.tencent.com/login)



注册好之后登录。



> **PicPlus 仅测试了腾讯 COS 的 V5 版本， 如果使用 V4 有什么问题，请联系。**
>



## 配置腾讯云


配置腾讯云需要四个参数



+ 密钥 secretId
+ 密钥 secretKey
+ 存储桶名称
+ 存储区域



## 获取 SecretId/SecretKey:


登录腾讯云控制台，打开[密钥管理](https://console.cloud.tencent.com/cam/capi)，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1583675122686-9f22bc13-9f5c-49f8-84c9-77f0bfcc85c4.png)



如果还没有密钥点击新建密钥，新建后两个参数靠在一起，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1583675122699-8c18882c-ef47-4a21-b4ee-0600f689ac95.png)



接着拷贝信息，然后发送到手机备用。



## 获取存储桶以及存储区域


打开存储桶页面:



[https://console.cloud.tencent.com/cos5/bucket](https://console.cloud.tencent.com/cos5/bucket)



如果还没有存储桶，点击新建，新建完毕后即可获得存储桶以及存储区域信息，如下所示：



![](https://cdn.nlark.com/yuque/0/2020/png/159409/1583675122726-f0bb9c8b-35a7-49b4-918d-6973e4813bb1.png)



接着复制上面的信息发送到手机备用。





至此配置腾讯云 COS 的参数齐全，分别填入 PicPlus 中配置腾讯云的表单即可，填写完毕后，右上角的『测试一下』按钮将变为可用状态，点击测试，如果测试成功，点击小对勾，保存配置即可正常使用。



如果配置有问题，会提示配置失败信息，显示在一个对话框中，根据提示自行查看参数是否异常，如果不能解决，可发邮件给开发者解决。



![](https://cdn.nlark.com/yuque/0/2020/jpeg/159409/1588899537605-489ce5f5-e725-4801-aff0-8f4324532fdb.jpeg)

