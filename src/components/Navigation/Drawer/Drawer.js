import React, {Component} from "react";
import c from './Drawer.module.css';
import BlackDrop from "../../UI/Blackdrop/Blackdrop";

const links = [
    1, 2, 3
]
class Drower extends Component {
    renderLinks = () => {
        return links.map((link, index) => {
          return (
              <li key={index}>
                  <a>Link {link}</a>
              </li>
          )
        });
    }
    render() {
        const cls = [c.drawer]
        if (!this.props.isOpen) {
            cls.push(c.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen && <BlackDrop onClick={this.props.onClose} />}
            </React.Fragment>

        );
    }
}

export default Drower;