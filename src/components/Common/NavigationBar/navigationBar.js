import React, {Component} from 'react'
import routerConfig from '../../../routes/routerConfig'
import SideNav, { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import { withRouter } from 'react-router-dom';


class Navigation extends Component {

	render() {

		const loc = this.props.history.location.pathname;
		const links = routerConfig;

		return (
				<SideNav
				  onSelect={(selected) => {

					  if (loc !== selected) {
						   this.props.history.push(selected);
						}
					  }
				  }
				  >
				  <SideNav.Toggle />
				  <SideNav.Nav defaultSelected={loc}>
				  {
					links.map(item =>
					  <NavItem key={item.id} eventKey={item.path}>
						<NavIcon>
							<i className={item.icon} style={{ fontSize: '1.5em' }} />
						</NavIcon>
						<NavText>
						  {item.name}
						</NavText>
						{
						  item.subitems.map(subitem =>
							<NavItem key={subitem.id} eventKey={subitem.path}>
							  <NavText>
								{subitem.name}
							  </NavText>
							</NavItem>
						  )
						}
					  </NavItem>
				   )
				  }
				  </SideNav.Nav>
				</SideNav>
		)
	}
}

export default withRouter(Navigation)
