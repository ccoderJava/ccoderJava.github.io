(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{440:function(t,a,r){t.exports=r.p+"assets/img/jvm_memory.3cd10e32.jpg"},441:function(t,a,r){t.exports=r.p+"assets/img/java_thread_status.6a61ceb6.jpg"},490:function(t,a,r){"use strict";r.r(a);var e=r(9),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"笔试题-牛客网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#笔试题-牛客网"}},[t._v("#")]),t._v(" 笔试题(牛客网)")]),t._v(" "),e("p",[t._v("给定一个房间连接,准时参加牛客网面试题笔试。")]),t._v(" "),e("ul",[e("li",[t._v("leetcode "),e("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/",target:"_blank",rel:"noopener noreferrer"}},[t._v("144-二叉树的前序遍历"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("牛客网 "),e("a",{attrs:{href:"https://www.nowcoder.com/questionTerminal/501fb3ca49bb4474bf5fa87274e884b4",target:"_blank",rel:"noopener noreferrer"}},[t._v("求二叉树的前序遍历"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"首先是简单的自我介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先是简单的自我介绍"}},[t._v("#")]),t._v(" 首先是简单的自我介绍")]),t._v(" "),e("p",[t._v("面试官会根据简历和自我介绍内容进行提问，找到一个切入口。\n首先是提问Java的一些内容。")]),t._v(" "),e("h2",{attrs:{id:"jvm内存模型知道吗-说一下你对jvm内存模型的理解。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存模型知道吗-说一下你对jvm内存模型的理解。"}},[t._v("#")]),t._v(" JVM内存模型知道吗？说一下你对JVM内存模型的理解。")]),t._v(" "),e("p",[t._v("主要有一个图很经典。脑海里面要有这个图。\n"),e("img",{attrs:{src:r(440),alt:"JVM内存模型"}}),t._v("\nclass文件->类加载器(classloader)->加载这个图,哪些内存区间是私有独立的，哪些是线程共享的。")]),t._v(" "),e("h2",{attrs:{id:"java类加载器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java类加载器"}},[t._v("#")]),t._v(" Java类加载器")]),t._v(" "),e("p",[t._v("主要从类加载流程(加载、验证、解析、初始化)几个过程说一下。\n继续说一下经典的双亲委派模型")]),t._v(" "),e("ul",[e("li",[t._v("Bootstrap ClassLoader")]),t._v(" "),e("li",[t._v("Extension ClassLoader")]),t._v(" "),e("li",[t._v("Application ClassLoader")]),t._v(" "),e("li",[t._v("Custom ClassLoader")])]),t._v(" "),e("p",[t._v("这几个加载器有一个图很经典脑海里面得有印象。\n还有双亲委派模型的优势是哪些？\n线程上下文加载器是如何对双亲委派模型进行破坏的。")]),t._v(" "),e("h2",{attrs:{id:"说一下hashmap初始化的时候16和0-75是指什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一下hashmap初始化的时候16和0-75是指什么"}},[t._v("#")]),t._v(" 说一下HashMap初始化的时候16和0.75是指什么")]),t._v(" "),e("ul",[e("li",[t._v("capacity 即容量，默认16。")]),t._v(" "),e("li",[t._v("loadFactor 加载因子，默认是0.75")]),t._v(" "),e("li",[t._v("threshold 阈值。阈值=容量*加载因子。默认12。当元素数量超过阈值时便会触发扩容。")])]),t._v(" "),e("p",[t._v("这个要说一下HashMap的扩容机制。")]),t._v(" "),e("ul",[e("li",[t._v("什么时候触发的扩容")]),t._v(" "),e("li",[t._v("JDK7中的扩容机制、元素迁移")]),t._v(" "),e("li",[t._v("JDK8中的扩容机制、元素迁移\n然后还可以扩展说一下HashMap的底层原理、数据结构。")])]),t._v(" "),e("h2",{attrs:{id:"线程的几个状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程的几个状态"}},[t._v("#")]),t._v(" 线程的几个状态")]),t._v(" "),e("p",[t._v("这个脑海里面也有个线程生命周期的图。New、Runnable、Running、Terminated、Timed_Waiting、Blocked、Waiting等。\n"),e("img",{attrs:{src:r(441),alt:"线程状态"}}),t._v("\n在线程转移图中的各个状态是如何跃迁转移的。涉及到哪些方法，在什么时候触发。")]),t._v(" "),e("h2",{attrs:{id:"说说你对线程池的了解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说说你对线程池的了解"}},[t._v("#")]),t._v(" 说说你对线程池的了解")]),t._v(" "),e("p",[t._v("几个固定的创建方法、七大核心参数、四个拒绝策略这些都是需要提出来的。")]),t._v(" "),e("ul",[e("li",[t._v("ExecutorService中四大线程池创建方法，各自应用场景。")]),t._v(" "),e("li",[t._v("线程池七大参数:"),e("code",[t._v("corePoolSize")]),t._v(" "),e("code",[t._v("maximunPoolSize")]),t._v(" "),e("code",[t._v("keepAliveTime")]),t._v(" "),e("code",[t._v("unit")]),t._v(" "),e("code",[t._v("workQueue")]),t._v(" "),e("code",[t._v("threadFactory")]),t._v(" "),e("code",[t._v("handler")])]),t._v(" "),e("li",[t._v("四大拒绝策略: "),e("code",[t._v("AbortPolicy")]),t._v(" "),e("code",[t._v("DiscardPolicy")]),t._v(" "),e("code",[t._v("DiscardOldestPolicy")]),t._v(" "),e("code",[t._v("CallerRunsPolicy")])])]),t._v(" "),e("h2",{attrs:{id:"说说数据库索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说说数据库索引"}},[t._v("#")]),t._v(" 说说数据库索引")]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/_bk2JVOm2SkXfdcvki6-0w",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL索引"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/350863953",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL高频问题"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"索引的优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引的优缺点"}},[t._v("#")]),t._v(" 索引的优缺点")]),t._v(" "),e("h3",{attrs:{id:"索引如何优化、为什么会失效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引如何优化、为什么会失效"}},[t._v("#")]),t._v(" 索引如何优化、为什么会失效")]),t._v(" "),e("h3",{attrs:{id:"聚簇索引、覆盖索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引、覆盖索引"}},[t._v("#")]),t._v(" 聚簇索引、覆盖索引")]),t._v(" "),e("h3",{attrs:{id:"联合索引、最左前缀匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联合索引、最左前缀匹配"}},[t._v("#")]),t._v(" 联合索引、最左前缀匹配")]),t._v(" "),e("h3",{attrs:{id:"索引下推、查询优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引下推、查询优化"}},[t._v("#")]),t._v(" 索引下推、查询优化")]),t._v(" "),e("h2",{attrs:{id:"分布式事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[t._v("#")]),t._v(" 分布式事务")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("参考"),e("a",{attrs:{href:"http://icyfenix.cn/architect-perspective/general-architecture/transaction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("凤凰架构-事务处理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000040321750",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务经典七中解决方案"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"_2pc-tcc-3pc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-tcc-3pc"}},[t._v("#")]),t._v(" 2PC/TCC/3PC")]),t._v(" "),e("h3",{attrs:{id:"saga-事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#saga-事务"}},[t._v("#")]),t._v(" SAGA 事务")]),t._v(" "),e("h3",{attrs:{id:"本地消息表-补偿事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地消息表-补偿事件"}},[t._v("#")]),t._v(" 本地消息表+补偿事件")]),t._v(" "),e("h3",{attrs:{id:"异常处理-防空回滚-幂等-防悬挂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常处理-防空回滚-幂等-防悬挂"}},[t._v("#")]),t._v(" 异常处理(防空回滚，幂等，防悬挂)")]),t._v(" "),e("h3",{attrs:{id:"子事务屏障-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子事务屏障-原理"}},[t._v("#")]),t._v(" 子事务屏障/原理")]),t._v(" "),e("h2",{attrs:{id:"rabbitmq-如何保证消息可靠传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-如何保证消息可靠传递"}},[t._v("#")]),t._v(" RabbitMQ 如何保证消息可靠传递")]),t._v(" "),e("h2",{attrs:{id:"synchronized和lock锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronized和lock锁"}},[t._v("#")]),t._v(" Synchronized和Lock锁")]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000022456039",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java锁Lock的种类"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"synchronized和lock区别和认识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronized和lock区别和认识"}},[t._v("#")]),t._v(" Synchronized和Lock区别和认识")]),t._v(" "),e("h3",{attrs:{id:"锁的类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#锁的类型"}},[t._v("#")]),t._v(" 锁的类型")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("锁/类型")]),t._v(" "),e("th",[t._v("公平/非公平锁")]),t._v(" "),e("th",[t._v("可重入/不可重入锁")]),t._v(" "),e("th",[t._v("共享/独享锁")]),t._v(" "),e("th",[t._v("乐观/悲观锁")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("synchronized")]),t._v(" "),e("td",[t._v("非公平锁")]),t._v(" "),e("td",[t._v("可重入锁")]),t._v(" "),e("td",[t._v("独享锁")]),t._v(" "),e("td",[t._v("悲观锁")])]),t._v(" "),e("tr",[e("td",[t._v("ReentrantLock")]),t._v(" "),e("td",[t._v("都支持")]),t._v(" "),e("td",[t._v("可重入锁")]),t._v(" "),e("td",[t._v("独享锁")]),t._v(" "),e("td",[t._v("悲观锁")])]),t._v(" "),e("tr",[e("td",[t._v("ReentrantReadWriteLock")]),t._v(" "),e("td",[t._v("都支持")]),t._v(" "),e("td",[t._v("可重入锁")]),t._v(" "),e("td",[t._v("读锁-共享，写锁-独享")]),t._v(" "),e("td",[t._v("悲观锁")])])])]),t._v(" "),e("h3",{attrs:{id:"readwritelock-reentrantlock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readwritelock-reentrantlock"}},[t._v("#")]),t._v(" ReadWriteLock/ReentrantLock")]),t._v(" "),e("h3",{attrs:{id:"偏向锁-轻量级锁-重量级锁-自旋锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁-轻量级锁-重量级锁-自旋锁"}},[t._v("#")]),t._v(" 偏向锁/轻量级锁/重量级锁 /自旋锁")]),t._v(" "),e("h2",{attrs:{id:"业务技术面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#业务技术面"}},[t._v("#")]),t._v(" 业务技术面")]),t._v(" "),e("h2",{attrs:{id:"技术总监面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术总监面"}},[t._v("#")]),t._v(" 技术总监面")]),t._v(" "),e("h2",{attrs:{id:"hr面试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hr面试"}},[t._v("#")]),t._v(" HR面试")])])}),[],!1,null,null,null);a.default=v.exports}}]);