import {useState} from "react";
import {MdCatalog, MdPreview} from "md-editor-rt";
import PropTypes from "prop-types";
import 'md-editor-rt/lib/preview.css';
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
`;

const Article = () => {
  const content = mdCon;
  const [id] = useState('previewOnly');
  return (
    <div style={{ display: "flex", marginLeft: "300px",marginRight:"100px",marginTop:"100px", maxWidth: "calc(100% - 40px)", maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
      <MdPreview editorId={id} modelValue={content}
                 showCodeRowNumber={true}
                 previewTheme={'vuepress'}
                 style={{ flex: 10, paddingRight: "20px",backgroundColor: "#eeebe4" }}
      />
      <MdCatalog editorId={id}
                 scrollElement={scrollElement}
                 style={{ paddingTop: "32px", flex: 2 }}
      />
    </div>
  )
};

Article.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Article;