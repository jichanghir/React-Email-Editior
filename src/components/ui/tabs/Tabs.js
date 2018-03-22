/**
 * Example
    <Tabs 
      tabs={['first','second','third']} 
      selectedTab={this.state.selectedTab} 
      onClick={(tabName)=>{ this.setState({'selectedTab': tabName}) }}
    />

  * в props.tabs передается массив с названиями табов
  * в props.selectedTab передается индекст выбранного таба
  * в onClick передается функция, которая выполняется при клике на один из табов. в аргументы функции передается индекс выбранного таба.
*/
import React, {Component} from 'react';
import './tabs.css';

export default class Tabs extends Component {

  static defaultProps = {
    blockClasses: ''
  };

  render() {
    // let ww = 100/this.props.tabs.length+'%';
    return (
      <div className={`tabs ${this.props.blockClasses}`}>
        {
          this.props.tabs.map((tabName) => {
            return(
              <div
                key={`tab-${tabName}`}
                className={`tabs__tab ${this.props.selectedTab === tabName ? 'active' : ''}`}
                onClick={this.props.onClick.bind(this, tabName)}
              >
                {tabName}
              </div>
            )
          })
        }
      </div>
    )
  }
}
