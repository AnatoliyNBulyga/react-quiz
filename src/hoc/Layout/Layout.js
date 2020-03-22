import React, {Component} from "react";
import c from './Layout.module.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drower from "../../components/Navigation/Drawer/Drawer";

export default class Layout extends Component {
  state = {
    menu: false
  }
  toggleMenuHendler = () => {
     this.setState( state => ({
         menu: !state.menu
     }))
  }
  menuCloseHandler = () => {
      this.setState( {
          menu: false
      });
  }
  render() {
      return (
          <div className={c.layout}>
              <Drower
                  isOpen={this.state.menu}
                  onClose={this.menuCloseHandler}
              />
              <MenuToggle
                  onToggle={this.toggleMenuHendler}
                  isOpen={this.state.menu}
              />
              <main>
                  { this.props.children }
              </main>
          </div>
      );
  }
};
