import React, { useState } from "react";
import "./App.scss";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import BottomBtn from "./components/BottomBtn";
import TabList from "./components/TabList";
import { fileListData, tabChoose } from "./utils/defaultJson";

function App() {
  const [activeId, setActiveId] = useState(null);
  return (
    <div className="App container-fluid app-container">
      <div className="row app-content">
        {/* 左侧内容 */}
        <div className="col-3 app-left-nav">
          {/* 远程搜索模块 */}
          <div className="app-left-nav-search">
            <FileSearch
              title="我的云文档"
              onFileSearch={(val) => {
                console.log(val);
              }}
            />
          </div>
          {/* 文件列表 */}
          <div className="app-left-nav-list">
            <FileList
              files={fileListData}
              onFileCilck={(id) => {
                console.log(id);
              }}
              onFileEdit={(id, value) => {
                console.log(id, value);
              }}
              onFileDelete={(id) => {
                console.log(id);
              }}
            />
          </div>
          {/* 底部按钮 */}
          <div className="row no-gutters app-left-nav-bottom">
            <div className="col">
              <BottomBtn text="新建" colorClass="btn-primary" icon={faPlus} />
            </div>
            <div className="col">
              <BottomBtn
                text="导入"
                colorClass="btn-success"
                icon={faFileImport}
              />
            </div>
          </div>
        </div>
        {/* 右侧内容 */}
        <div className="col-9 app-right-content">
          <div className="app-right-tab">
            <TabList
              files={tabChoose}
              activeId={activeId}
              onTabClick={(id) => {
                console.log(id);
                setActiveId(id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
