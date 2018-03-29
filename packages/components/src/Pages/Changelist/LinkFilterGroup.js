import React from 'react'
import { Link, Route,withRouter } from "react-router-dom";

import { getSearchString, getFullUrl,getKeyOnly } from "./utils";
const SimpleLink = ({ label, to }) =>
  <li>
    <a href={to}>
      {label}
    </a>
  </li>;

const FilterLink = ({ label, to, activeOnlyWhenExact, active, ...rest }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match, location }) => {
          return (
            <li className={active ? "selected" : ""}>
              <Link to={to} {...rest}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };
  
const ParentLink = ({ pathname, children, currentUrl = "/auth/user" }) => {
    const newChildren = React.Children.map(children, (child, index) => {
      const { to,pathNode, ...rest } = child.props;
      const node = React.createElement(FilterLink, {
        to: getSearchString(
            {
              pathname,
              search: to
            },
            currentUrl,
            getKeyOnly(pathNode)
          ),
        ...rest
      });
      return node;
    });
    return (
      <ul>
        {newChildren}
      </ul>
    );
  };
  
  class LinkFilterGroup extends React.Component{
    state = {
      currentIndex: 0
    };
    componentDidMount(){
        const {options, location:{search},pathname,currentUrl} = this.props
        const index = options.findIndex(x=> search.includes(x.path) && !!x.path)
        if(index > -1){
            this.updateState(index)
        }
    }
    updateState = index => {
        const {options,pathname,currentUrl,updateParentUrl} = this.props;
      this.setState({ currentIndex: index });
      const urlObj = getSearchString({
        pathname,
        search:options[index].path
    },currentUrl,
    getKeyOnly(this.getKeyFromOptions())
)
    const fullUrl = getFullUrl(urlObj)
    console.log(fullUrl)
    updateParentUrl(fullUrl)
    };
    getKeyFromOptions = ()=>{
        const {options} = this.props;
        let oo = options.filter(x=> !!x.path)
        return oo[0].path
    }
    render(){
      const {heading,options,...rest} = this.props;
      return (
        <div >
        <h3>{heading} </h3>
        <ParentLink {...rest}>
          {options.map((opt, new_index) =>
            <SimpleLink key={new_index}
            onClick={() => {
              this.updateState(new_index);
            }}
            pathNode={this.getKeyFromOptions()}
             label={opt.name} to={opt.path}
            active={this.state.currentIndex === new_index} />
          )}
        </ParentLink>
      </div>
      )
    }
  }

  export default withRouter(LinkFilterGroup)