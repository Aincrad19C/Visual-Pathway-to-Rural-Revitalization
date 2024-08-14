import {useState} from "react";
import {MdCatalog, MdPreview} from "md-editor-rt";
import PropTypes from "prop-types";
const scrollElement = document.documentElement;

const mdCon = `# Markdown content
Here is your markdown content...
ss68ssfdefergergerg
g45785785858578ggggggg`;

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