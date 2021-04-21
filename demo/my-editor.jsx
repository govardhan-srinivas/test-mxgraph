import React from 'react';
import { message, Layout } from 'antd';

import Sidebar from './sidebar';
import Toolbar from './toolbar';
import Editor from '../src/editor';

import IMAGE_SHAPES from './shape-config/image-shape';
import CARD_SHAPES from './shape-config/card-shape';
import SVG_SHAPES from './shape-config/svg-shape.xml';

import './my-editor.less';

const { Sider, Content } = Layout;

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null
    };

    this.graphContainerClickCount = 0;
  }

  componentDidMount() {
    this.mounted = true;

    const editor = new Editor({
      container: '.graph-content',
      clickFunc: this.clickFunc,
      doubleClickFunc: this.doubleClickFunc,
      autoSaveFunc: this.autoSaveFunc,
      cellCreatedFunc: this.cellCreatedFunc,
      deleteFunc: this.deleteFunc,
      undoFunc: this.undoFunc,
      copyFunc: this.copyFunc,
      valueChangeFunc: this.valueChangeFunc,
      IMAGE_SHAPES,
      CARD_SHAPES,
      SVG_SHAPES
    });

    this.editor = editor;

    window.editor = editor;

    editor.initCustomPort('https://gw.alicdn.com/tfs/TB1PqwZzzDpK1RjSZFrXXa78VXa-200-200.png', false);

    const xml = window.localStorage.getItem('autosaveXml');

    this.editor.renderGraphFromXml(xml);

    this.setState({ editor });
  }

  componentWillUnmount() {
    this.mounted = false;

    // remove event listeners when component will unmount
    this.editor.removeEventListeners();
  }


  /**
   * double click event callback
   */
  doubleClickFunc = (cell) => {
    console.log('double click', cell);
  };

  cellCreatedFunc = (cell) => {
    console.log('cells created: ', cell);
  };

  deleteFunc = (cells) => {
    console.log('cells deleted: ', cells);
  };

  /**
   * value change callback
   * @param {*} cell cell
   * @param {*} newValue new value
   */
  valueChangeFunc = (cell, newValue) => {
    console.log(`new value: ${newValue}`);
  };

  autoSaveFunc = (xml) => {
    console.log('xml', xml);
  };
  
  clickFunc = (cell) => {
    console.log('click', cell);
  };

  undoFunc = (histories) => {
    console.log('undo', histories);
  }

  copyFunc = (cells) => {
    console.log('copy', cells);
  }

  updateDiagramData = (data) => {
    console.log(`update diagram: ${data}`);

    message.info('diagram save success');
  }

  render() {
    const { editor } = this.state;

    return (
      <div className="editor-container">
        <Layout>
          <Sider width="235" theme="light">
            <Sidebar key="sidebar" editor={editor} />
          </Sider>
          <Content>
            <div className="graph-inner-container">
              {editor ? (
                <Toolbar
                  editor={editor}
                  updateDiagramData={this.updateDiagramData}
                />
              ) : null}
              <div className="graph-content" key="graphcontent" />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default MyEditor;
