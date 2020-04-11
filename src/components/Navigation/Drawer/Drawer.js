import React, {Component} from "react";
import c from './Drawer.module.css';
import BlackDrop from "../../UI/Blackdrop/Blackdrop";
import {NavLink} from "react-router-dom";

class Drawer extends Component {
    clickHandler = () => {
        this.props.onClose()
    }
    renderLinks = (links) => {
        return links.map((link, index) => {
          return (
              <li key={index}>
                <NavLink
                  to={link.to}
                  exact={link.extends}
                  activeClassName={c.active}
                  onClick={this.clickHandler}
                >
                    {link.label}
                </NavLink>
              </li>
          )
        });
    }

    render() {
        const cls = [c.drawer]
        if (!this.props.isOpen) {
            cls.push(c.close)
        }
        const links = [
            {to: '/', label: 'Список', exact: true}
        ]
        if (this.props.isAuthenticated) {
           links.push({to: '/quiz-creator', label: 'Создать тест', exact: false});
           links.push({to: '/logout', label: 'Выйти', exact: false});
        } else {
           links.push({to: '/auth', label: 'Авторизация', exact: false});
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks(links)}
                    </ul>
                </nav>
                { this.props.isOpen && <BlackDrop onClick={this.props.onClose} />}
            </React.Fragment>

        );
    }
}

export default Drawer;