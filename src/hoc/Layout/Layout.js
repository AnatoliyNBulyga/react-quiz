import React, {Component} from "react";
import c from './Layout.module.css';

export default class Layout extends Component {
  render() {
      return (
          <div className={c.layout}>

              <main>
                  { this.props.children }
              </main>
          </div>
      );
  }
};
