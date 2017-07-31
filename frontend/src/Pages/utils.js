import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div id="header">
            <div id="branding">
                <h1 id="site-name"><a href="/admin/">Django administration</a></h1>
            </div>
            <div id="user-tools">
                Welcome,
                <strong> biola </strong>.
                <Link to="/">View site</Link> /
                <Link to="/password_change"> Change password</Link> /
                <Link to="/logout"> Log out </Link>
            </div>
        </div>
    )
}
const BreadCrumb = ({model}) => {
    const values = Object.values(model)
    return (
        <div className="breadcrumbs">
            <a href="/admin/">Home </a>
            
            {values.map((value,index)=>{

                return(

            <span>
                {/* {index !== values.length-1? `&rsaquo;`} */}
            <a href="/admin/auth/"> {model.app_name} </a>
            &rsaquo; {model.verbose_name}</span>)})}
        </div>


    )
}
export const SiteContent = ({addButton=true,children, headerText}) => {
    return (
        <div id="content" className="flex" >
            <h1>{headerText}</h1>
            {addButton?
            <ul className="object-tools">
                <li>
                    <a href="/admin/auth/user/add/" className="addlink">
                        Add user </a>
                </li>
            </ul>:null}
            <div className="module filtered" id="changelist">
                    {children}
            </div>
        </div>
    )
}
export const Page = ({children, model, className})=>{
return (
        <div className={className}>
            <div id="container">
                <Header />
                <BreadCrumb model={model} />
                {children}
                <div id="footer"></div>
            </div>
        </div>)
}