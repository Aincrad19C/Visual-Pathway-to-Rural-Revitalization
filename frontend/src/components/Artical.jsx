import {useState} from "react";
import {MdCatalog, MdPreview} from "md-editor-rt";
import PropTypes from "prop-types";
const scrollElement = document.documentElement;

const mdCon = `# MySQL

MySQL本质是一个DBMS(Database Management System)，负责管理数据库，是用户和数据库之间的桥梁。属于是关系型数据库(类excel)。

## 创建

\`\`\`sql
CREATE DATABASE 数据库名称; -- 创建数据库database
\`\`\`

> 数据库名称唯一

\`\`\`sql 
CREATE TABLE 表格名 (
    列名1 INT AUTO_INCREMENT PRIMARY KEY, -- AUTO_INCREMENT 自动递增；PRIMARY KEY主键，保证唯一，非空
    列名2 VARCHAR(字符个数) NOT NULL, -- NOT NULL 非空
    列名3 DATE UNIQUE -- UNIQUE 唯一
); -- 创建表table
\`\`\`

> 分号必须，但创建表格最后一个字段不能加逗号

## 增

\`\`\`sql
INSERT INTO 数据库.表格名 (列名1, 列名2, 列名3) VALUES (数值1, 数值2, 数值3);
\`\`\`

> VARCHAR和DATE中的数值要用单引号括起
>
> 对于默认自增的字段，可以使用DEFAULT代替数值，表示默认值

## 改

\`\`\`sql
ALTER TABLE 数据库名.表格名 ADD 列名 数据类型 默认条件； -- 增加字段(列)
\`\`\`

\`\`\`sql
UPDATE 数据库名.表格名 SET 值 WHERE 条件;
UPDATE egg.eggs_record SET sold = '2022-06-06' WHERE id = 3;
\`\`\`

> SQL中单个等号有赋值和相等的双重含义

## 删

\`\`\`sql
DELETE FROM 数据库名.表格名 WHERE 条件;
\`\`\`

\`\`\`sql
DELETE FROM egg.egg_record WHERE id = 1;
\`\`\`

\`\`\`sql
DROP TABLE 数据库名.表格名; -- 删除表格
DROP DATABASE 数据库名; -- 删除数据库
\`\`\`

## 查

\`\`\`sql
SELECT (可选: distinct) */列名1, 列名2 
FROM 表格名
WHERE 条件
ORDER BY 列名 ASC/ DESC;
\`\`\`

> DISTINCT保证没有重复记录
>
> ASC为升序, DESC为降序，默认ASC

### 条件子句

| 比较运算符  | 含义              |
| ----------- | ----------------- |
| !=或 <>     | 不等于            |
| BETWEEN-AND | 两值之间          |
| IN          | 一组值里          |
| LIKE        | 相似匹配(类regex) |

逻辑运算符: \`AND\`，\`OR\`，\`NOT\`(或\`!\`)

\`\`\`sql
WHERE Country IN ('Brazil', 'India')
WHERE Country LIKE 'B%' -- 以B开头，不区分大小写
WHERE Country LIKE '%a' -- 以a结尾，不区分大小写
WHERE Country LIKE '__b%' -- _为通配符，表示第三个字符为b
\`\`\`

## 合并

\`\`\`sql
INNER JOIN 表格名 ON 条件;
\`\`\`

\`\`\`sql
SELECT 语句...
INNER JOIN Covid_total ON Covid_month.Country = Covid_total.Country; -- 交集, 横向合并
\`\`\`

\`\`\`sql
SELECT 语句...
UNION
SELECT 语句... -- 并集, 纵向合并
\`\`\`

\`\`\`sql
SELECT 语句...
LEFT JOIN 表格名 ON 条件 -- 保留左表格所有数据
\`\`\`

> LEFT JOIN和INNER JOIN的区别是前者会保留左表格的所有记录，对于右表格不符条件的记录会为NULL；但INNER JOIN只会取其交集

\`\`\`sql
SELECT 语句...
RIGHT JOIN 表格名 ON 条件 -- 保留右表格所有数据
\`\`\`

**简写**

\`\`\`sql
SELECT *
FROM Covid_month AS mm -- 简写
RIGHT JOIN Covid_total AS tt -- 简写
ON mm.Country = tt.Country;
\`\`\`

`;

export default function Article() {
  const content = mdCon;
  const [id] = useState('previewOnly');
  return (
      <div style={{display: "flex"}}>
        <MdPreview editorId={id} modelValue={content}
                   showCodeRowNumber={false}
                   previewTheme={'vuepress'}
                   style={{flex: 8}}/>
        <MdCatalog editorId={id} scrollElement={scrollElement} style={{flex: 2, position: "sticky", top: "50px", height: "100vh"}}/>
      </div>
  )
}

Article.propTypes = {
  content: PropTypes.string.isRequired,
}