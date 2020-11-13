import React, { useState } from "react";
import "./App.scss";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import BottomBtn from "./components/BottomBtn";
import TabList from "./components/TabList";
import EditContainer from "./components/EditContainer";
import { fileListData } from "./utils/defaultJson";
import { map, find, includes, filter, findIndex, get } from "lodash";

function App() {
  // 当前选中的acitive
  const [activeId, setActiveId] = useState(null);
  const [files, setFiles] = useState(fileListData);
  // 存储选中的选项卡
  const [openFileIDs, setOpendFileIDs] = useState([]);
  // 未保存的文件
  const [unsaveFileIDs, setUnsaveFileIDs] = useState([]);

  // tablist的选项卡
  const openedFiles = map(openFileIDs, (openID) => {
    return find(files, (file) => {
      return file.id === openID;
    });
  });
  // 编辑的内容
  const activeFileEdit = find(files, (file) => {
    return file.id === activeId;
  });

  // 左侧选择文件
  const chooseFile = (id) => {
    // 避免重复点击
    if (id === activeId) return;
    // 设置当前选中的文件内容
    setActiveId(id);
    // 加入选项卡，如果不存在即加入列表选项卡
    if (!includes(openFileIDs, id)) {
      setOpendFileIDs([...openFileIDs, id]);
    }
  };

  // 关闭tab选项卡
  const closeTabClick = (id) => {
    if (id === activeId) {
      const closeIndex = findIndex(openFileIDs, (tabId) => {
        return tabId === id;
      });
      const preIndex = get(openFileIDs, `${closeIndex - 1}`, "");
      const nextndex = get(openFileIDs, `${closeIndex + 1}`, "");
      // 当前选中的内容被关闭时，进行判断，默认选中前一个，否则后一个
      setActiveId(preIndex || nextndex);
    }
    const filterID = filter(openFileIDs, (tabId) => {
      return tabId !== id;
    });
    setOpendFileIDs(filterID);
  };
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
              files={files}
              activeId={activeId}
              onFileCilck={(id) => {
                chooseFile(id);
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
              files={openedFiles}
              activeId={activeId}
              unsaveIds={unsaveFileIDs}
              onTabClick={(id) => {
                setActiveId(id);
              }}
              onCloseTab={(id) => {
                closeTabClick(id);
              }}
            />
            <EditContainer
              activeId={activeId}
              value={activeFileEdit && activeFileEdit.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
