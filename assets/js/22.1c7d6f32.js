(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{469:function(s,t,a){"use strict";a.r(t);var e=a(9),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("hello，大家好，我是聪聪。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("最近在梳理MySQL常用知识点，将已有知识点进行结构化、方便后续回稳固。")]),s._v(" "),a("p",[s._v("今天就来总结梳理一下常用的"),a("code",[s._v("explain")]),s._v("命令。")]),s._v(" "),a("p",[a("code",[s._v("explian")]),s._v("命名是用来获取查询执行计划的信息，查询优化器是如何决定执行查询的主要方法。")]),s._v(" "),a("h3",{attrs:{id:"_1-如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何使用"}},[s._v("#")]),s._v(" 1. 如何使用")]),s._v(" "),a("p",[s._v("使用非常简单，只需在查询语句"),a("code",[s._v("select")]),s._v("关键字前添加"),a("code",[s._v("explain")]),s._v("即可。MySQL会在该查询方法上进行标记，当执行查询时，标记会返回该执行计划中的每一步信息，而不是执行它，并且会返回多行信息，显示执行计划中的每一步和执行顺序。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_user_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------------+------------+------+---------------+------+---------+------+------+----------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" select_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" partitions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" possible_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" key_len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ref  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" filtered "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------------+------------+------+---------------+------+---------+------+------+----------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SIMPLE")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" t_user_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------------+------------+------+---------------+------+---------+------+------+----------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_user_info a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" t_user_info b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------+------------+--------+---------------+---------+---------+--------------+------+----------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" select_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" partitions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" possible_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" key_len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ref          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" filtered "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------+------------+--------+---------------+---------+---------+--------------+------+----------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SIMPLE")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SIMPLE")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" b     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" eq_ref "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" test_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------+------------+--------+---------------+---------+---------+--------------+------+----------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("查询中的每个表输出一行，如果查询是两个表关联则会输出两行。")]),s._v(" "),a("li",[s._v("别名表算作一个表。")]),s._v(" "),a("li",[s._v('上面将两个表自关联，输出记录也是两行。这里一个子查询、一个union结果都可以称之为一个"表"。')])]),s._v(" "),a("h3",{attrs:{id:"_2-介绍列属性含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-介绍列属性含义"}},[s._v("#")]),s._v(" 2. 介绍列属性含义")]),s._v(" "),a("p",[s._v("学习explain命令，必然要知道该命令获取查询计划的每一步时，输出各列含义。")]),s._v(" "),a("h4",{attrs:{id:"_2-1-id列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-id列"}},[s._v("#")]),s._v(" 2.1 id列")]),s._v(" "),a("p",[s._v("包含一个编号，标志select所属行，当查询语句中没有子查询、没有联合查询，只有唯一select时，该值将显示1。否则内层查询语句一般会顺序编号，对应其在原始语句中的位置。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_user_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_user_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------------+------------+-------+---------------+---------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" select_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" partitions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" possible_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" key_len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ref  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" filtered "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------------+------------+-------+---------------+---------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" t_user_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SUBQUERY    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" t_user_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+-------------+-------------+------------+-------+---------------+---------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("MySQL将select语句分为简单查询、复杂查询。复杂类型查询又可分为：")]),s._v(" "),a("ul",[a("li",[s._v("简单子查询")]),s._v(" "),a("li",[s._v("派生表，可以理解为from 语句中的子查询。")]),s._v(" "),a("li",[s._v("union查询。")])]),s._v(" "),a("h4",{attrs:{id:"_2-2-select-type列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-select-type列"}},[s._v("#")]),s._v(" 2.2 select_type列")]),s._v(" "),a("p",[s._v("该列表示了查询语句是简单还是复杂，如果是复杂的，那么对应下面复杂类型中的哪一种。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("SIMPLE")]),s._v("：表示不包括子查询和union。")])]),s._v(" "),a("p",[s._v("当然如果查询存在复杂的子查询，那么外层查询标记为"),a("code",[s._v("PRIMARY")]),s._v("，内层查询则标记为：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("SUBQUERY")]),s._v("：包含在select列表中的子查询。可以理解为不在from子语句中的部分标记为该关键字。如上面SQL所示。"),a("code",[s._v("explain select (select 1 from t_user_info) from t_user_info;")])]),s._v(" "),a("li",[a("strong",[s._v("DERIVED")]),s._v("：包含在from语句中的子查询select。服务器将其结果放到临时表，内部称之为派生表。")]),s._v(" "),a("li",[a("strong",[s._v("UNION")]),s._v("：union中第二个或后面的查询语句。")]),s._v(" "),a("li",[a("strong",[s._v("DEPENDENT UNION")]),s._v("：union中的第二个或后面的SELECT语句,取决于外面的查询")]),s._v(" "),a("li",[a("strong",[s._v("UNION RESULT")]),s._v("：union结果")]),s._v(" "),a("li",[a("strong",[s._v("DEPENDENT SUBQUERY")]),s._v("：子查询中第一个select，取决于外面查询。")])]),s._v(" "),a("h4",{attrs:{id:"_2-3-table列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-table列"}},[s._v("#")]),s._v(" 2.3 table列")]),s._v(" "),a("p",[s._v("该列表示该行正在访问哪个表。通常情况下就是该表名称或者别名。")]),s._v(" "),a("h4",{attrs:{id:"_2-4-partitions列。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-partitions列。"}},[s._v("#")]),s._v(" 2.4 partitions列。")]),s._v(" "),a("p",[s._v("当前查询记录匹配的分区，未分配区的表返回NULL。")]),s._v(" "),a("h4",{attrs:{id:"_2-5-type列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-type列"}},[s._v("#")]),s._v(" 2.5 type列")]),s._v(" "),a("p",[s._v("关联类型，访问类型。可以理解为MySQL决定如何查询表中的行。下面几种取值性能"),a("strong",[s._v("从最差到最好")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("ALL")]),s._v("： 全表扫描，性能最差。使用了limit除外不进行全表扫描。")]),s._v(" "),a("li",[a("strong",[s._v("index")]),s._v("：和全表扫描一样，只不过扫描按照索引顺序进行，而不是行顺序。优点是避免了排序，缺点是需要承担按照索引顺序读取整个表的性能开销。\n"),a("ul",[a("li",[s._v("如果在"),a("code",[s._v("Extra")]),s._v("列中看到"),a("code",[s._v("Using index")]),s._v("则说明，MySQL正在使用覆盖索引，只扫描索引数据，而不是按照索引顺序扫描每一行数据，相比索引次序来讲，性能开销较小。")])])]),s._v(" "),a("li",[s._v("**range：**范围扫描，表示索引检索了指定范围的行，通常用于有限制的索引扫描。\n"),a("ul",[a("li",[s._v("相对全索引扫描要一些，不用遍历全部索引。")]),s._v(" "),a("li",[s._v("当使用索引进行查询使用"),a("code",[s._v("in()")]),s._v("、"),a("code",[s._v("or()")]),s._v("匹配列表时，也会显示为范围扫描。当然这和下面where语句带有between、>=等操作不同的，这类访问类型其实是"),a("code",[s._v("范围条件")]),s._v("。")]),s._v(" "),a("li",[s._v("比较常见的范围扫描是带有BETWEEN子句或WHERE子句里有>、>=、<、<=、IS NULL、<=>、BETWEEN、LIKE、IN()等操作符。")])])]),s._v(" "),a("li",[a("strong",[s._v("ref")]),s._v("：该类型类似于ref，但是MySQL会额外搜索哪些行包含了NULL。这种类型常见于解析子查询。\n"),a("ul",[a("li",[s._v("使用非唯一索引或者唯一性索引的非唯一性前缀时才会发生。")]),s._v(" "),a("li",[s._v("当满足索引的最左前缀规则，或者索引不是主键也不是唯一索引时才会发生。如果使用的索引只会匹配到少量的行，性能也是不错的。")])])]),s._v(" "),a("li",[a("strong",[s._v("eq_ref")]),s._v("：当使用了索引的全部组成部分，并且索引是PRIMARY KEY或UNIQUE NOT NULL 才会使用该类型，性能仅次于system及const。")]),s._v(" "),a("li",[a("strong",[s._v("system、const")]),s._v("：该表只有一行（相当于系统表），system是const类型的特例。理解为MySQL将查询的部分进行了优化，将其变为常量。\n"),a("ul",[a("li",[s._v("可以在where语句中使用主键查询，就会将查询结果转化为常量，就能够提高查询效率。")])])]),s._v(" "),a("li",[a("strong",[s._v("NULL")]),s._v("：MySQL能够在优化阶段分解查询语句，使其在执行阶段不用再访问表或索引。\n"),a("ul",[a("li",[s._v("从索引列中去除最小数据，可以单独通过查询索引完成，不需要在执行时访问表")]),s._v(" "),a("li",[a("code",[s._v("explain select min(id) from t_user_info")]),s._v(".")])])])]),s._v(" "),a("h4",{attrs:{id:"_2-6-possible-keys-列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-possible-keys-列"}},[s._v("#")]),s._v(" 2.6 possible_keys 列")]),s._v(" "),a("p",[s._v("该列表示查询时可以使用哪些索引。是基于查询访问的列和使用比较操作符来判断的，在SQL优化阶段创建，该索引列表可能对于后续优化执行过程并没有用。")]),s._v(" "),a("h4",{attrs:{id:"_2-7-key列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-key列"}},[s._v("#")]),s._v(" 2.7 key列")]),s._v(" "),a("p",[s._v("表示MySQL实际选择的索引。")]),s._v(" "),a("ul",[a("li",[s._v("如果该索引没有出现在"),a("code",[s._v("possible_keys")]),s._v("列表中。那么可以肯定的是MySQL使用该索引肯定是选择了"),a("strong",[s._v("覆盖索引")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("possible_keys")]),s._v("提示哪一个索引嫩够有助于高效的查询。")]),s._v(" "),a("li",[a("code",[s._v("key")]),s._v("执行优化采用哪一个所以可以最小化查询成本。")])]),s._v(" "),a("h4",{attrs:{id:"_2-8-key-len列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-key-len列"}},[s._v("#")]),s._v(" 2.8 key_len列")]),s._v(" "),a("p",[s._v("MySQL在索引里使用的字节数。")]),s._v(" "),a("h4",{attrs:{id:"_2-9-ref列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-ref列"}},[s._v("#")]),s._v(" 2.9 ref列")]),s._v(" "),a("p",[s._v("表示将哪个字段或常量和key列所使用的字段进行比较。")]),s._v(" "),a("h4",{attrs:{id:"_2-10-rows列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-rows列"}},[s._v("#")]),s._v(" 2.10 rows列")]),s._v(" "),a("p",[s._v("MySQL估算会扫描的行数，数值越小越好。")]),s._v(" "),a("ul",[a("li",[s._v("估计为了找到所需的行记录而要读取的行数。")]),s._v(" "),a("li",[s._v("该数字是内嵌循环关联计算里的循环数目。")])]),s._v(" "),a("h4",{attrs:{id:"_2-11-filtered列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-filtered列"}},[s._v("#")]),s._v(" 2.11 filtered列")]),s._v(" "),a("p",[s._v("表示符合查询条件的数据百分比，最大100。")]),s._v(" "),a("ul",[a("li",[s._v("用rows × filtered可获得和下一张表连接的行数。例如rows = 1000，filtered = 50%，则和下一张表连接的行数是500。")]),s._v(" "),a("li",[s._v("表示表中复核条件的记录的百分比做出的悲观估算。")])]),s._v(" "),a("h4",{attrs:{id:"_2-12-extra列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-extra列"}},[s._v("#")]),s._v(" 2.12 Extra列")]),s._v(" "),a("p",[s._v("扩展信息。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("Using index")]),s._v("：仅使用索引树中的信息从表中检索列信息，而不必进行其他查找以读取实际行。当查询仅使用属于单个索引的列时，可以使用此策略。\n"),a("ul",[a("li",[s._v("覆盖索引，避免访问表。")]),s._v(" "),a("li",[a("code",[s._v("explain select id from t_user_info")])])])]),s._v(" "),a("li",[a("strong",[s._v("Using where")]),s._v("：如果我们不是读取表的所有数据，或者不是仅仅通过索引就可以获取所有需要的数据，则会出现using where信息。例如上面范围条件时。\n"),a("ul",[a("li",[s._v("在存储引擎执行后再进行过滤。")]),s._v(" "),a("li",[s._v("并不是所有where语句均会出现"),a("code",[s._v("Using where")]),s._v("。出现时表示：查询可以受益于不同索引。")])])]),s._v(" "),a("li",[a("strong",[s._v("Using temporary")]),s._v("：表示在对MySQL查询结果进行排序时，使用了临时表,,这样的查询效率是比外部排序更低的，常见于"),a("code",[s._v("order by")]),s._v("和"),a("code",[s._v("group by")]),s._v("。\n"),a("ul",[a("li",[a("code",[s._v("explain select t.username from t_user_info t group by t.username ;")])])])])]),s._v(" "),a("p",[s._v("上面整理了explain一些常见的参数及其说明，但是实际进行SQL优化时，情况相对复杂，需要了解这些参数含义，明白当前SQL可以从哪些方面进行优化，索引优化、索引覆盖、是否回表，连表查询是否增加缓存buffer从而减少join次数等。")]),s._v(" "),a("h3",{attrs:{id:"_3-参考文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考文件"}},[s._v("#")]),s._v(" 3. 参考文件")]),s._v(" "),a("ul",[a("li",[s._v("高性能MySQL")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000023565685",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL Explain应用详解"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/explain.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL - EXPLAIN Statement"),a("OutboundLink")],1)])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("了解更多内容，可以关注我的微信公众号，更多首发文章。\n"),a("img",{attrs:{src:"https://ccoder-markdown-oss.oss-cn-shanghai.aliyuncs.com/md/2022-07-28-064228.bmp",alt:"wechat"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);