### demo[【H5游戏】你敢瘦吗？](https://mao1105.github.io/【H5游戏】你敢瘦吗？/)（请配合手机食用）
![QR](https://github.com/Mao1105/-H5-/blob/master/img/QR.png )

花了一天的功夫做了个H5小游戏。

**设计来源：**

自学移动端布局的时候，看到了重力感应，陀螺仪，遂想到能不能做一款小游戏出来。开始想做3d小球迷宫之类的，但是考虑到手机用户流量消耗太大，优化方面我不一定能做的很好。

后来，想到手机摇一摇功能，但是太普通，没创意。

再后来，就想到让手机摇一摇不就是运动，和运动结合起来的不就是瘦身。

所以就有了这么一款运用重力感应，陀螺仪api的瘦身运动小游戏。

**遇到问题**：

1. H5小游戏是轻量级的，所以可能并不需要游戏多复杂，所以，一个精致的界面的设计就尤为重要。

    这款小游戏的主要功能只有一个：用户拿手机跟随图片运动，动作过关得奖励。所以怎么尽可能多的让用户觉得有意思就尤为重要。
    
    - 界面设计：走卡通主题风（面向对象主要是女性）。（没有设计功底的我已经尽可能设计的不low了~~~）
    - 交互：尽可能让用户多一些选择自由。所以首页以‘问答’的开篇，选择“敢”与“不敢”，对应不同效果！但是最终都将引导用户进入游戏界面！同时，游戏进入前有一段虚拟对话界面，隐式介绍了游戏内容。让游戏更丰满。
    
2. 背景音乐问题

    - 游戏界面需要用到两个audio标签。一个放背景音乐，一个放游戏音效。但移动端不能同时播放两段音乐。只能暂停一个播另一个。
    - 移动端对autopaly无效，并且需要和用户进行有效交互后，才能触发audio。所以想放背景音乐，我在首页添加了一个touch事件，只要用户点击屏幕，就会触发，从而播放背景音乐。（ps:在手机上，用户总会‘触碰’到屏幕）。
    
**优化改进**

1. 游戏动画效果设计的有些粗糙，有待改进。有时间用框架在写一遍，加上更加有意思的动画效果。
2. ......
