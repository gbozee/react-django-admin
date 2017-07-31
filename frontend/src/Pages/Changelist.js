import React from 'react';
import './styles/css/changelists.css';
import {Page, SiteContent} from './utils'

const SearchForm = () => {
    return (
        <div id="toolbar">
                
        <form id="changelist-search" method="get">
            <div>
                <label for="searchbar"><img src="/styles/img/search.svg" alt="Search" /></label>
                <input type="text" size="40" name="q" value="" id="searchbar" autoFocus />
                <input type="submit" value="Search" />
            </div>
        </form>
        </div>
    )
}
const ChangeListFilter = () => {
    const filters = [
        {
            name: "By staff status", options: [
                { path: "", name: "All" },
                { path: "is_staff__exact=1", name: "Yes" },
                { path: "is_staff__exact=0", name: "No" }
            ]
        },
        {
            name: "By superuser status", options: [
                { path: "", name: "All" },
                { path: "is_superuser__exact=1", name: "Yes" },
                { path: "is_superuser__exact=0", name: "No" }
            ]
        },
        {
            name: "By active", options: [
                { path: "", name: "All" },
                { path: "is_active__exact=1", name: "Yes" },
                { path: "is_active__exact=0", name: "No" }
            ]
        },

    ]
    return (
        <div id="changelist-filter">
            <h2>Filter</h2>
            {filters.map((filt, index) =>
                <div key={index}>
                    <h3> {filt.name} </h3>
                    <ul>
                        {filt.options.map((opt, new_index) =>
                            <li key={new_index} className={new_index === 0 ? "selected" : ""}>
                                <a href={`?${opt.path}`}>{opt.name}</a></li>
                        )}
                    </ul>
                </div>)}
        </div>

    )
}
const ActionForm = () => {
    return (
        <div className="actions">
            <label>Action:
                <select name="action" required>
                    <option value="" selected="selected">---------</option>
                    <option value="delete_selected">Delete selected users</option>
                </select>
            </label>
            <input className="select-across" name="select_across" type="hidden" value="0" />
            <button type="submit" className="button" title="Run the selected action" name="index" value="0">Go</button>
            <span className="action-counter" data-actions-icnt="1" style={{ display: "inline" }}>0 of 1 selected</span>
        </div>
    )
}
const ChangeListResult = () => {
    return (
        <div className="results">
            <table id="result_list">
                <thead>
                    <tr>
                        <th scope="col" className="action-checkbox-column">

                            <div className="text"><span><input type="checkbox" id="action-toggle" /></span></div>
                            <div className="clear"></div>
                        </th>
                        <th scope="col" className="sortable column-username sorted ascending">
                            <div className="sortoptions">
                                <a className="sortremove" href="?o=" title="Remove from sorting"></a>
                                <a href="?o=-1" className="toggle ascending" title="Toggle sorting"></a>
                            </div>
                            <div className="text"><a href="?o=-1">Username</a></div>
                            <div className="clear"></div>
                        </th>
                        <th scope="col" className="sortable column-email">
                            <div className="text"><a href="?o=2.1">Email address</a></div>
                            <div className="clear"></div>
                        </th>
                        <th scope="col" className="sortable column-first_name">
                            <div className="text"><a href="?o=3.1">First name</a></div>
                            <div className="clear"></div>
                        </th>
                        <th scope="col" className="sortable column-last_name">
                            <div className="text"><a href="?o=4.1">Last name</a></div>
                            <div className="clear"></div>
                        </th>
                        <th scope="col" className="sortable column-is_staff">
                            <div className="text"><a href="?o=5.1">Staff status</a></div>
                            <div className="clear"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row1">
                        <td className="action-checkbox"><input className="action-select" name="_selected_action" type="checkbox" value="1" /></td>
                        <th className="field-username"><a href="/admin/auth/user/1/change/">biola</a></th>
                        <td className="field-email">gbozee@example.com</td>
                        <td className="field-first_name">&nbsp;</td>
                        <td className="field-last_name">&nbsp;</td>
                        <td className="field-is_staff"><img src="/static/admin/img/icon-yes.svg" alt="True" /></td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}
const ChangeListView = () => {
    return (
        <form id="changelist-form" method="post" noValidate>
            <ActionForm />
            <ChangeListResult />
            <p class="paginator"> 1 user </p>

        </form>
    )
}


const Changelist = () => {
    const model={
    app_name:"Authentication and Authorization",
    verbose_name: "Users"
}
    return (
        <Page className="app-auth model-user change-list"
            model={model}>
            <SiteContent headerText="Select user to change">
                <SearchForm />
                <ChangeListFilter />
                <ChangeListView />
            </SiteContent>
        </Page>
    )
}

export default Changelist