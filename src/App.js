import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import { fileListData } from "./utils/defaultJson";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        {/* 左侧内容 */}
        <div className="col-3 app-left-nav">
          {/* 远程搜索模块 */}
          <FileSearch
            title="我的云文档"
            onFileSearch={(val) => {
              console.log(val);
            }}
          />
          {/* 文件列表 */}
          <FileList
            files={fileListData}
            onFileCilck={(id) => {
              console.log(id);
            }}
            onFileEdit={(id) => {
              console.log(id);
            }}
            onFileDelete={(id) => {
              console.log(id);
            }}
          />
        </div>
        {/* 右侧内容 */}
        <div className="col-9 bg-success">One of three columns</div>
      </div>
    </div>
  );
}

export default App;
