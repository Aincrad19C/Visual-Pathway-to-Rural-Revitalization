import React, { useState, useEffect } from "react";
import { MdCatalog, MdPreview } from "md-editor-rt";
import axios from 'axios';
import 'md-editor-rt/lib/preview.css';

const Article = () => {
  const [mdContent, setMdContent] = useState("");
  const [id, setId] = useState('previewOnly');
  const scrollElement = document.documentElement;

  async function postRegionId(regionId) {
    try {
      const response = await axios.post(`http://127.0.0.1:7001/api/article/getArticle/${regionId}`);
      if (response.data.success) {
        console.log("读取成功");
        setMdContent(response.data.content);
      } else {
        console.log('Failed to fetch projects:', response.data);
      }
    } catch (error) {
      alert('请求失败: ' + error.message);
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const idFromQuery = queryParams.get('id');
    if (idFromQuery) {
      setId(idFromQuery);
      postRegionId(idFromQuery);
    }
  }, []);

  return (
    <div style={{ display: "flex", marginLeft: "300px", marginRight: "100px", marginTop: "100px", maxWidth: "calc(100% - 40px)", maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
      <MdPreview editorId={id} modelValue={mdContent}
        showCodeRowNumber={true}
        previewTheme={'vuepress'}
        style={{ flex: 10, paddingRight: "20px", backgroundColor: "#eeebe4" }}
      />
      <MdCatalog editorId={id}
        scrollElement={scrollElement}
        style={{ paddingTop: "32px", flex: 2 }}
      />
    </div>
  );
};

Article.propTypes = {
  // content: PropTypes.string.isRequired, // 由于使用了状态 mdContent，这里不再需要
};

export default Article;
