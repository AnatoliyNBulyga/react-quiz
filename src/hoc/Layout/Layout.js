import React, {Component} from "react";
import c from './Layout.module.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import {connect} from "react-redux";

class Layout extends Component {
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
              <Drawer
                  isOpen={this.state.menu}
                  onClose={this.menuCloseHandler}
                  isAuthenticated={this.props.isAuthenticated}
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

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);
