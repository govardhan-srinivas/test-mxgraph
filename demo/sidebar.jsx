import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Tooltip } from 'antd';
import IMAGE_SHAPES from './shape-config/image-shape';

import './sidebar.less';

const { Panel } = Collapse;

const SIDEBAR_BASIC_SHAPES = [
  {
    name: 'rectangle',
    key: 'Rectangle',
    logo: 'https://img.alicdn.com/tfs/TB19O8OokvoK1RjSZFNXXcxMVXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: 'rounded rectangle',
    key: 'Rounded Rectangle',
    logo: 'https://img.alicdn.com/tfs/TB1rzVHojDpK1RjSZFrXXa78VXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: 'trapezoid',
    key: 'Trapezoid',
    logo: 'https://img.alicdn.com/tfs/TB1nEXPokvoK1RjSZPfXXXPKFXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: 'circle',
    key: 'Circle',
    logo: 'https://img.alicdn.com/tfs/TB15iXQogHqK1RjSZFkXXX.WFXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: 'triangle',
    key: 'Triangle',
    logo: 'https://img.alicdn.com/tfs/TB1cxNKohTpK1RjSZR0XXbEwXXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: 'line',
    key: 'Line',
    logo: 'https://img.alicdn.com/tfs/TB1LOxPoirpK1RjSZFhXXXSdXXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: 'text',
    key: 'Text',
    logo: '',
    width: 60,
    height: 20,
  }
];

const SIDEBAR_FLOOR_PLAN_SHAPES = [
  {
    name: 'wall', key: 'mxgraph.floorplan.wall', logo: './images/0.svg', width: 100, height: 10 
  },
  {
    name: 'wallVertical', key: 'mxgraph.floorplan.wallVertical', logo: './images/1.svg', width: 10, height: 100 
  },
  {
    name: 'wallCornerNW', key: 'mxgraph.floorplan.wallCornerNW', logo: './images/2.svg', width: 100, height: 100 
  },
  {
    name: 'wallCornerNE', key: 'mxgraph.floorplan.wallCornerNE', logo: './images/3.svg', width: 100, height: 100 
  },
  {
    name: 'wallCornerSE', key: 'mxgraph.floorplan.wallCornerSE', logo: './images/4.svg', width: 100, height: 100 
  },
  {
    name: 'wallCornerSW', key: 'mxgraph.floorplan.wallCornerSW', logo: './images/5.svg', width: 100, height: 100 
  },
  {
    name: 'wallU', key: 'mxgraph.floorplan.wallU', logo: './images/6.svg', width: 100, height: 100 
  },
  {
    name: 'room', key: 'mxgraph.floorplan.room', logo: './images/7.svg', width: 100, height: 100 
  },
  {
    name: 'dimensionBottom', key: 'mxgraph.floorplan.dimensionBottom', logo: './images/8.svg', width: 100, height: 40 
  },
  {
    name: 'dimensionTop', key: 'mxgraph.floorplan.dimensionTop', logo: './images/9.svg', width: 100, height: 40 
  },
  {
    name: 'dimensionRight', key: 'mxgraph.floorplan.dimensionRight', logo: './images/10.svg', width: 40, height: 100 
  },
  {
    name: 'dimensionLeft', key: 'mxgraph.floorplan.dimensionLeft', logo: './images/11.svg', width: 40, height: 100 
  },
  {
    name: 'window', key: 'mxgraph.floorplan.window', logo: './images/12.svg', width: 100, height: 10 
  },
  {
    name: 'windowGlider', key: 'mxgraph.floorplan.windowGlider', logo: './images/13.svg', width: 100, height: 20 
  },
  {
    name: 'windowGarden', key: 'mxgraph.floorplan.windowGarden', logo: './images/14.svg', width: 100, height: 20 
  },
  {
    name: 'windowBow', key: 'mxgraph.floorplan.windowBow', logo: './images/15.svg', width: 100, height: 20 
  },
  {
    name: 'windowBay', key: 'mxgraph.floorplan.windowBay', logo: './images/16.svg', width: 100, height: 40 
  },
  {
    name: 'stairs', key: 'mxgraph.floorplan.stairs', logo: './images/17.svg', width: 300, height: 100 
  },
  {
    name: 'stairsVertical', key: 'mxgraph.floorplan.stairsVertical', logo: './images/18.svg', width: 100, height: 300 
  },
  {
    name: 'stairsRest', key: 'mxgraph.floorplan.stairsRest', logo: './images/19.svg', width: 300, height: 200 
  },
  {
    name: 'doorLeft', key: 'mxgraph.floorplan.doorLeft', logo: './images/20.svg', width: 80, height: 85 
  },
  {
    name: 'doorRight', key: 'mxgraph.floorplan.doorRight', logo: './images/21.svg', width: 80, height: 85 
  },
  {
    name: 'doorDouble', key: 'mxgraph.floorplan.doorDouble', logo: './images/22.svg', width: 160, height: 85 
  },
  {
    name: 'doorUneven', key: 'mxgraph.floorplan.doorUneven', logo: './images/23.svg', width: 160, height: 85 
  },
  {
    name: 'doorOpposing', key: 'mxgraph.floorplan.doorOpposing', logo: './images/24.svg', width: 160, height: 165 
  },
  {
    name: 'doorRevolving', key: 'mxgraph.floorplan.doorRevolving', logo: './images/25.svg', width: 80, height: 85 
  },
  {
    name: 'doorPocket', key: 'mxgraph.floorplan.doorPocket', logo: './images/26.svg', width: 104, height: 10 
  },
  {
    name: 'doorDoublePocket', key: 'mxgraph.floorplan.doorDoublePocket', logo: './images/27.svg', width: 104, height: 10 
  },
  {
    name: 'doorBypass', key: 'mxgraph.floorplan.doorBypass', logo: './images/28.svg', width: 104, height: 10 
  },
  {
    name: 'doorBifold', key: 'mxgraph.floorplan.doorBifold', logo: './images/29.svg', width: 160, height: 40 
  },
  {
    name: 'doorSlidingGlass', key: 'mxgraph.floorplan.doorSlidingGlass', logo: './images/30.svg', width: 104, height: 10 
  },
  {
    name: 'doorOverhead', key: 'mxgraph.floorplan.doorOverhead', logo: './images/31.svg', width: 104, height: 30 
  },
  {
    name: 'opening', key: 'mxgraph.floorplan.opening', logo: './images/32.svg', width: 100, height: 30 
  },
  {
    name: 'doorAccordion', key: 'mxgraph.floorplan.doorAccordion', logo: './images/33.svg', width: 160, height: 30 
  },
  {
    name: 'doorDoubleAction', key: 'mxgraph.floorplan.doorDoubleAction', logo: './images/34.svg', width: 80, height: 165 
  }
];

const SIDEBAR_SVG_SHAPES = [
  {
    name: 'Bathtub',
    key: 'Bathtub',
    logo: './images/35.svg',
    width: 180,
    height: 60
  },
  {
    name: 'Bed Double',
    key: 'Bed Double',
    logo: './images/36.svg',
    width: 200,
    height: 180
  },
  {
    name: 'Bed Single',
    key: 'Bed Single',
    logo: './images/37.svg',
    width: 100,
    height: 180
  },
  {
    name: 'Bookcase',
    key: 'Bookcase',
    logo: './images/38.svg',
    width: 120,
    height: 30
  },
  {
    name: 'Chair',
    key: 'Chair',
    logo: './images/39.svg',
    width: '41.24',
    height: 52.35
  },
  {
    name: 'Copier',
    key: 'Copier',
    logo: './images/40.svg',
    width: 110,
    height: 60
  },
  {
    name: 'Couch',
    key: 'Couch',
    logo: './images/41.svg',
    width: 150,
    height: 80
  },
  {
    name: 'CRT TV',
    key: 'CRT TV',
    logo: './images/42.svg',
    width: 60,
    height: 40
  },
  {
    name: 'Desk Corner',
    key: 'Desk Corner',
    logo: './images/43.svg',
    width: 150,
    height: 150
  },
  {
    name: 'Desk Corner 2',
    key: 'Desk Corner 2',
    logo: './images/44.svg',
    width: 150,
    height: 120
  },
  {
    name: 'Dresser',
    key: 'Dresser',
    logo: './images/45.svg',
    width: 100,
    height: 65
  },
  {
    name: 'Elevator',
    key: 'Elevator',
    logo: './images/46.svg',
    width: 100,
    height: 100
  },
  {
    name: 'Fireplace',
    key: 'Fireplace',
    logo: './images/47.svg',
    width: 304,
    height: 200
  },
  {
    name: 'Flat TV',
    key: 'Flat TV',
    logo: './images/48.svg',
    width: 70,
    height: 10
  },
  {
    name: 'Floor Lamp',
    key: 'Floor Lamp',
    logo: './images/49.svg',
    width: 50,
    height: 50
  },
  {
    name: 'Laptop',
    key: 'Laptop',
    logo: './images/50.svg',
    width: 40,
    height: 35
  },
  {
    name: 'Office Chair',
    key: 'Office Chair',
    logo: './images/51.svg',
    width: 40.14,
    height: 42.86
  },
  {
    name: 'Piano',
    key: 'Piano',
    logo: './images/52.svg',
    width: 135,
    height: 143.19
  },
  {
    name: 'Plant',
    key: 'Plant',
    logo: './images/53.svg',
    width: 47.34,
    height: 51.13
  },
  {
    name: 'Printer',
    key: 'Printer',
    logo: './images/54.svg',
    width: 40,
    height: 47
  },
  {
    name: 'Range 1',
    key: 'Range 1',
    logo: './images/55.svg',
    width: 50,
    height: 62
  },
  {
    name: 'Range 2',
    key: 'Range 2',
    logo: './images/56.svg',
    width: 75,
    height: 62
  },
  {
    name: 'Refrigerator',
    key: 'Refrigerator',
    logo: './images/57.svg',
    width: 60,
    height: 62.04
  },
  {
    name: 'Shower',
    key: 'Shower',
    logo: './images/58.svg',
    width: 100,
    height: 100
  },
  {
    name: 'Sink 1',
    key: 'Sink 1',
    logo: './images/59.svg',
    width: 40,
    height: 35
  },
  {
    name: 'Sink 2',
    key: 'Sink 2',
    logo: './images/60.svg',
    width: 40,
    height: 35
  },
  {
    name: 'Sink Double',
    key: 'Sink Double',
    logo: './images/61.svg',
    width: 80,
    height: 35
  },
  {
    name: 'Sofa',
    key: 'Sofa',
    logo: './images/62.svg',
    width: 90,
    height: 80
  },
  {
    name: 'Spiral Stairs',
    key: 'Spiral Stairs',
    logo: './images/63.svg',
    width: 200,
    height: 200
  },
  {
    name: 'Table',
    key: 'Table',
    logo: './images/64.svg',
    width: 90,
    height: 50
  },
  {
    name: 'Toilet',
    key: 'Toilet',
    logo: './images/65.svg',
    width: 50,
    height: 67
  },
  {
    name: 'Water Cooler',
    key: 'Water Cooler',
    logo: './images/66.svg',
    width: 40,
    height: 40
  },
  {
    name: 'Workstation',
    key: 'Workstation',
    logo: './images/67.svg',
    width: 50,
    height: 40
  },
  {
    name: 'Table 1',
    key: 'Table 1',
    logo: '',
    width: 120,
    height: 119.13
  },
  {
    name: 'Table 2',
    key: 'Table 2',
    logo: '',
    width: 217.73,
    height: 104.26
  },
  {
    name: 'Table 3',
    key: 'Table 3',
    logo: '',
    width: 217.73,
    height: 109.26
  },
  {
    name: 'Table 4',
    key: 'Table 4',
    logo: '',
    width: 239.36,
    height: 159.64
  },
  {
    name: 'Table 5',
    key: 'Table 5',
    logo: '',
    width: 440.03,
    height: 181.67
  },  
];

const SIDEBAR_CARD_SHAPES = [{
  name: 'primary equipment',
  key: 'zhushebei',
  logo: 'https://img.alicdn.com/tfs/TB1eD9LdgHqK1RjSZJnXXbNLpXa-144-128.png',
  width: 100,
  height: 80
}, {
  name: 'auxiliary equipment',
  key: 'fujiashebei',
  logo: 'https://img.alicdn.com/tfs/TB1ejUeiAPoK1RjSZKbXXX1IXXa-36-32.png',
  width: 100,
  height: 80
}, {
  name: 'product element',
  key: 'chanchuwu',
  logo: 'https://img.alicdn.com/tfs/TB1ht.aisbpK1RjSZFyXXX_qFXa-32-32.png',
  width: 100,
  height: 80
}];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {
    this.handleSidebarItems();
  }

  handleSidebarItems() {
    const { editor } = this.props;

    if (editor && editor.initSidebar) {
      const sidebarItems = document.querySelectorAll('.custom-sidebar-node');

      const newSidebarItems = Array.from(sidebarItems).filter((item) => {
        if (!item.classList.contains('has-inited')) {
          item.classList.add('has-inited');
          return true;
        }
        return false;
      });

      editor.initSidebar(newSidebarItems);
    }
  }

  onChange() {
    setTimeout(() => {
      this.handleSidebarItems();
    }, 1000);
  }

  render() {
    return (
      <div className="J_Sidebar_Container sidebar-container">

        <Collapse
          bordered={false}
          defaultActiveKey={['floorplan']}
          onChange={() => {
            this.onChange();
          }}
        >
          <Panel key="common" header="basic">

            {SIDEBAR_BASIC_SHAPES.map(shape => (
              <a
                href="#!;"
                key={`panel_a_${shape.key}`}
                className="geItem custom-sidebar-node common-panel-node"
                data-shape-type="general"
                data-shape-name={shape.key}
                data-shape-label={shape.key === 'Text' ? shape.name : ''}
                data-shape-width={shape.width}
                data-shape-height={shape.height}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  {shape.logo ? <img className="sidebar-node-image" src={shape.logo} alt="" /> : shape.key}
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>
              </a>
            ))}

          </Panel>

          <Panel key="floorplan" header="floorplan">

            {SIDEBAR_FLOOR_PLAN_SHAPES.map(shape => (
              <a
                href="#!;"
                key={`panel_a_${shape.key}`}
                className="geItem custom-sidebar-node floorplan-panel-node"
                data-shape-type="general"
                data-shape-name={shape.key}
                data-shape-label=""
                data-shape-width={shape.width}
                data-shape-height={shape.height}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  {shape.logo ? <img className="sidebar-node-image" src={shape.logo} alt="" /> : shape.key}
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>
              </a>
            ))}

          </Panel>

          <Panel header="floor plan interior" key="svg">
            {SIDEBAR_SVG_SHAPES.map(shape => (
              <a
                href="#!;"
                key={`panel_a_${shape.key}`}
                className="geItem custom-sidebar-node common-panel-node"
                data-shape-type="svg"
                data-shape-name={shape.key}
                data-shape-label=""
                data-shape-width={shape.width}
                data-shape-height={shape.height}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  <img className="sidebar-node-image" src={shape.logo} alt="" />
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>
              </a>
            ))}
          </Panel>
          <Panel header="svg images" key="picture">
            {IMAGE_SHAPES.map(shape => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  return false;
                }}
                key={`panel_a_${shape.key}`}
                href="a"
                className="geItem custom-sidebar-node"
                data-shape-type="image"
                data-shape-width={shape.width}
                data-shape-height={shape.height}
                data-shape-name={shape.key}
                data-shape-label=""
                title={shape.name}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  <img className="sidebar-node-image" src={shape.logo} alt="" />
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>

              </a>
            ))}

          </Panel>

          <Panel header="cards" key="card">
            {SIDEBAR_CARD_SHAPES.map(shape => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  return false;
                }}
                key={`panel_a_${shape.key}`}
                href="a"
                className="geItem custom-sidebar-node"
                data-shape-type="card"
                data-shape-width={shape.width}
                data-shape-height={shape.height}
                data-shape-name={shape.key}
                data-shape-label=""
                title={shape.name}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  <img className="sidebar-node-image" src={shape.logo} alt="" />
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>

              </a>
            ))}

          </Panel>

        </Collapse>

      </div>
    );
  }
}

SideBar.propTypes = {
  editor: PropTypes.object,
};

// Specifies the default values for props:
SideBar.defaultProps = {
  editor: {},
};
