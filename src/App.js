import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";

function App() {
  const fileListData = [
    {
      id: "1",
      title: "第一个标题测试一个非常长的内容，使其溢出",
      content: "测试文本内容1",
      createTime: "1604244656588",
    },
    {
      id: "2",
      title: "第二个标题",
      content: "### electron的展示",
      createTime: "1604244656588",
    },
  ];
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
          <FileList files={fileListData} />
        </div>
        {/* 右侧内容 */}
        <div className="col-9 bg-success">One of three columns</div>
      </div>
    </div>
  );
}

export default App;
