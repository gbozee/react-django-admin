import React from "react";
import { Page, SiteContent } from "./utils";
import "./styles/css/forms.css";
const urls = [
  {
    url: "/auth/",
    text: "Authentication And Authorization"
  },
  { url: "", text: "Users" }
];

const ChangeForm = () =>
  <Page className="app-auth model-user change-form" urls={urls}>
    <SiteContent addButton headerText="Change User">
      <div id="content-main">
        <ul className="object-tools">
          <li>
            <a href="/auth/user/1/history/" className="historylink">
              History
            </a>
          </li>
        </ul>
        <form
          enctype="multipart/form-data"
          action=""
          method="post"
          id="user_form"
          novalidate=""
        >
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="4WIz9vJctmVVMKTNvK89P3pXe2j8KgoRt9MT113DeztIC9Ywv0dcvznLaQquj9o2"
          />
          <div>
            <fieldset className="module aligned ">
              <div className="form-row field-username">
                <div>
                  <label className="required" for="id_username">
                    Username:
                  </label>

                  <input
                    type="text"
                    name="username"
                    value="demo"
                    className="vTextField"
                    maxlength="150"
                    required=""
                    id="id_username"
                  />

                  <div className="help">
                    Required. 150 characters or fewer. Letters, digits and
                    @/./+/-/_ only.
                  </div>
                </div>
              </div>

              <div className="form-row field-password">
                <div>
                  <label for="id_password">Password:</label>

                  <div id="id_password">
                    <strong>algorithm</strong>: pbkdf2_sha256
                    <strong>iterations</strong>: 36000
                    <strong>salt</strong>: mav7II******
                    <strong>hash</strong>:
                    XuPrG7**************************************
                  </div>

                  <div className="help">
                    Raw passwords are not stored, so there is no way to see this
                    user's password, but you can change the password using{" "}
                    <a href="../password/">this form</a>.
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="module aligned ">
              <h2>Personal info</h2>

              <div className="form-row field-first_name">
                <div>
                  <label for="id_first_name">First name:</label>

                  <input
                    type="text"
                    name="first_name"
                    className="vTextField"
                    maxlength="30"
                    id="id_first_name"
                  />
                </div>
              </div>

              <div className="form-row field-last_name">
                <div>
                  <label for="id_last_name">Last name:</label>

                  <input
                    type="text"
                    name="last_name"
                    className="vTextField"
                    maxlength="30"
                    id="id_last_name"
                  />
                </div>
              </div>

              <div className="form-row field-email">
                <div>
                  <label for="id_email">Email address:</label>

                  <input
                    type="email"
                    name="email"
                    value="demo@example.com"
                    className="vTextField"
                    maxlength="254"
                    id="id_email"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className="module aligned ">
              <h2>Permissions</h2>

              <div className="form-row field-is_active">
                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    name="is_active"
                    id="id_is_active"
                    checked=""
                  />
                  <label className="vCheckboxLabel" for="id_is_active">
                    Active
                  </label>

                  <div className="help">
                    Designates whether this user should be treated as active.
                    Unselect this instead of deleting accounts.
                  </div>
                </div>
              </div>

              <div className="form-row field-is_staff">
                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    name="is_staff"
                    id="id_is_staff"
                    checked=""
                  />
                  <label className="vCheckboxLabel" for="id_is_staff">
                    Staff status
                  </label>

                  <div className="help">
                    Designates whether the user can log into this admin site.
                  </div>
                </div>
              </div>

              <div className="form-row field-is_superuser">
                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    name="is_superuser"
                    id="id_is_superuser"
                    checked=""
                  />
                  <label className="vCheckboxLabel" for="id_is_superuser">
                    Superuser status
                  </label>

                  <div className="help">
                    Designates that this user has all permissions without
                    explicitly assigning them.
                  </div>
                </div>
              </div>

              <div className="form-row field-groups">
                <div>
                  <label for="id_groups">Groups:</label>

                  <div className="related-widget-wrapper">
                    <a
                      className="related-widget-wrapper-link add-related"
                      id="add_id_groups"
                      href="/auth/group/add/?_to_field=id&amp;_popup=1"
                      title="Add another group"
                    >
                      <img src="/static/admin/img/icon-addlink.svg" alt="Add" />
                    </a>

                    <div className="selector">
                      <div className="selector-available">
                        <h2>
                          Available groups
                          <span
                            className="help help-tooltip help-icon"
                            title="This is the list of available groups. You may choose some by selecting them in the box below and then clicking the &quot;Choose&quot; arrow between the two boxes."
                          />
                        </h2>
                        <p id="id_groups_filter" className="selector-filter">
                          <label for="id_groups_input">
                            <span
                              className="help-tooltip search-label-icon"
                              title="Type into this box to filter down the list of available groups."
                            />
                          </label>{" "}
                          <input
                            type="text"
                            placeholder="Filter"
                            id="id_groups_input"
                          />
                        </p>
                        <select
                          name="groups_old"
                          id="id_groups_from"
                          multiple="multiple"
                          className="filtered"
                          data-field-name="groups"
                          data-is-stacked="0"
                        />
                        <a
                          title="Click to choose all groups at once."
                          href="#"
                          id="id_groups_add_all_link"
                          className="selector-chooseall"
                        >
                          Choose all
                        </a>
                      </div>
                      <ul className="selector-chooser">
                        <li>
                          <a
                            title="Choose"
                            href="#"
                            id="id_groups_add_link"
                            className="selector-add"
                          >
                            Choose
                          </a>
                        </li>
                        <li>
                          <a
                            title="Remove"
                            href="#"
                            id="id_groups_remove_link"
                            className="selector-remove"
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                      <div className="selector-chosen">
                        <h2>
                          Chosen groups{" "}
                          <span
                            className="help help-tooltip help-icon"
                            title="This is the list of chosen groups. You may remove some by selecting them in the box below and then clicking the &quot;Remove&quot; arrow between the two boxes."
                          />
                        </h2>
                        <select
                          id="id_groups_to"
                          multiple="multiple"
                          size="0"
                          name="groups"
                          className="filtered"
                        />
                        <a
                          title="Click to remove all chosen groups at once."
                          href="#"
                          id="id_groups_remove_all_link"
                          className="selector-clearall"
                        >
                          Remove all
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="help">
                    The groups this user belongs to. A user will get all
                    permissions granted to each of their groups. Hold down
                    "Control", or "Command" on a Mac, to select more than one.
                  </div>
                </div>
              </div>

              <div className="form-row field-user_permissions">
                <div>
                  <label for="id_user_permissions">User permissions:</label>

                  <div className="related-widget-wrapper">
                    <div className="selector">
                      <div className="selector-available">
                        <h2>
                          Available user permissions
                          <span
                            className="help help-tooltip help-icon"
                            title="This is the list of available user permissions. You may choose some by selecting them in the box below and then clicking the &quot;Choose&quot; arrow between the two boxes."
                          />
                        </h2>
                        <p
                          id="id_user_permissions_filter"
                          className="selector-filter"
                        >
                          <label for="id_user_permissions_input">
                            <span
                              className="help-tooltip search-label-icon"
                              title="Type into this box to filter down the list of available user permissions."
                            />
                          </label>
                          <input
                            type="text"
                            placeholder="Filter"
                            id="id_user_permissions_input"
                          />
                        </p>
                        <select
                          name="user_permissions_old"
                          id="id_user_permissions_from"
                          multiple="multiple"
                          className="filtered"
                          data-field-name="user permissions"
                          data-is-stacked="0"
                        >
                          <option
                            value="1"
                            title="admin | log entry | Can add log entry"
                          >
                            admin | log entry | Can add log entry
                          </option>
                          <option
                            value="2"
                            title="admin | log entry | Can change log entry"
                          >
                            admin | log entry | Can change log entry
                          </option>
                          <option
                            value="3"
                            title="admin | log entry | Can delete log entry"
                          >
                            admin | log entry | Can delete log entry
                          </option>
                          <option
                            value="7"
                            title="auth | group | Can add group"
                          >
                            auth | group | Can add group
                          </option>
                          <option
                            value="8"
                            title="auth | group | Can change group"
                          >
                            auth | group | Can change group
                          </option>
                          <option
                            value="9"
                            title="auth | group | Can delete group"
                          >
                            auth | group | Can delete group
                          </option>
                          <option
                            value="4"
                            title="auth | permission | Can add permission"
                          >
                            auth | permission | Can add permission
                          </option>
                          <option
                            value="5"
                            title="auth | permission | Can change permission"
                          >
                            auth | permission | Can change permission
                          </option>
                          <option
                            value="6"
                            title="auth | permission | Can delete permission"
                          >
                            auth | permission | Can delete permission
                          </option>
                          <option value="10" title="auth | user | Can add user">
                            auth | user | Can add user
                          </option>
                          <option
                            value="11"
                            title="auth | user | Can change user"
                          >
                            auth | user | Can change user
                          </option>
                          <option
                            value="12"
                            title="auth | user | Can delete user"
                          >
                            auth | user | Can delete user
                          </option>
                          <option
                            value="13"
                            title="contenttypes | content type | Can add content type"
                          >
                            contenttypes | content type | Can add content type
                          </option>
                          <option
                            value="14"
                            title="contenttypes | content type | Can change content type"
                          >
                            contenttypes | content type | Can change content
                            type
                          </option>
                          <option
                            value="15"
                            title="contenttypes | content type | Can delete content type"
                          >
                            contenttypes | content type | Can delete content
                            type
                          </option>
                          <option
                            value="16"
                            title="sessions | session | Can add session"
                          >
                            sessions | session | Can add session
                          </option>
                          <option
                            value="17"
                            title="sessions | session | Can change session"
                          >
                            sessions | session | Can change session
                          </option>
                          <option
                            value="18"
                            title="sessions | session | Can delete session"
                          >
                            sessions | session | Can delete session
                          </option>
                          <option
                            value="19"
                            title="todos | todo | Can add todo"
                          >
                            todos | todo | Can add todo
                          </option>
                          <option
                            value="20"
                            title="todos | todo | Can change todo"
                          >
                            todos | todo | Can change todo
                          </option>
                          <option
                            value="21"
                            title="todos | todo | Can delete todo"
                          >
                            todos | todo | Can delete todo
                          </option>
                        </select>
                        <a
                          title="Click to choose all user permissions at once."
                          href="#"
                          id="id_user_permissions_add_all_link"
                          className="selector-chooseall active"
                        >
                          Choose all
                        </a>
                      </div>
                      <ul className="selector-chooser">
                        <li>
                          <a
                            title="Choose"
                            href="#"
                            id="id_user_permissions_add_link"
                            className="selector-add"
                          >
                            Choose
                          </a>
                        </li>
                        <li>
                          <a
                            title="Remove"
                            href="#"
                            id="id_user_permissions_remove_link"
                            className="selector-remove"
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                      <div className="selector-chosen">
                        <h2>
                          Chosen user permissions
                          <span
                            className="help help-tooltip help-icon"
                            title="This is the list of chosen user permissions. You may remove some by selecting them in the box below and then clicking the &quot;Remove&quot; arrow between the two boxes."
                          />
                        </h2>

                        <select
                          id="id_user_permissions_to"
                          multiple="multiple"
                          size="0"
                          name="user_permissions"
                          className="filtered"
                        >
                          {" "}
                        </select>

                        <a
                          title="Click to remove all chosen user permissions at once."
                          href="#"
                          id="id_user_permissions_remove_all_link"
                          className="selector-clearall"
                        >
                          Remove all
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="help">
                    Specific permissions for this user. Hold down "Control", or
                    "Command" on a Mac, to select more than one.
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="module aligned ">
              <h2>Important dates</h2>

              <div className="form-row field-last_login">
                <div>
                  <label for="id_last_login_0">Last login:</label>

                  <p className="datetime">
                    Date:
                    <input
                      type="text"
                      name="last_login_0"
                      value="2017-08-14"
                      className="vDateField"
                      size="10"
                      id="id_last_login_0"
                    />
                    <span className="datetimeshortcuts">
                      &nbsp;<a href="#">Today</a>&nbsp;|&nbsp;<a
                        href="#"
                        id="calendarlink0"
                      >
                        <span className="date-icon" title="Choose a Date" />
                      </a>
                    </span>
                    <br />
                    Time:{" "}
                    <input
                      type="text"
                      name="last_login_1"
                      value="17:53:08"
                      className="vTimeField"
                      size="8"
                      id="id_last_login_1"
                    />
                    <span className="datetimeshortcuts">
                      &nbsp;<a href="#">Now</a>&nbsp;|&nbsp;<a
                        href="#"
                        id="clocklink0"
                      >
                        <span className="clock-icon" title="Choose a Time" />
                      </a>
                    </span>
                    <br />
                    <span className="timezonewarning">
                      Note: You are 1 hour ahead of server time.
                    </span>
                  </p>
                </div>
              </div>

              <div className="form-row field-date_joined">
                <div>
                  <label className="required" for="id_date_joined_0">
                    Date joined:
                  </label>

                  <p className="datetime">
                    Date:{" "}
                    <input
                      type="text"
                      name="date_joined_0"
                      value="2017-07-31"
                      className="vDateField"
                      size="10"
                      required=""
                      id="id_date_joined_0"
                    />
                    <span className="datetimeshortcuts">
                      &nbsp;<a href="#">Today</a>&nbsp;|&nbsp;<a
                        href="#"
                        id="calendarlink1"
                      >
                        <span className="date-icon" title="Choose a Date" />
                      </a>
                    </span>
                    <br />
                    Time:{" "}
                    <input
                      type="text"
                      name="date_joined_1"
                      value="18:48:07"
                      className="vTimeField"
                      size="8"
                      required=""
                      id="id_date_joined_1"
                    />
                    <span className="datetimeshortcuts">
                      &nbsp;<a href="#">Now</a>&nbsp;|&nbsp;<a
                        href="#"
                        id="clocklink1"
                      >
                        <span className="clock-icon" title="Choose a Time" />
                      </a>
                    </span>
                    <br />
                    <span className="timezonewarning">
                      Note: You are 1 hour ahead of server time.
                    </span>
                  </p>
                  <input
                    type="hidden"
                    name="initial-date_joined_0"
                    value="2017-07-31"
                    id="initial-id_date_joined_0"
                  />

                  <input
                    type="hidden"
                    name="initial-date_joined_1"
                    value="18:48:07"
                    id="initial-id_date_joined_1"
                  />
                </div>
              </div>
            </fieldset>

            <div className="submit-row">
              <input
                type="submit"
                value="Save"
                className="default"
                name="_save"
              />

              <p className="deletelink-box">
                <a href="/auth/user/1/delete/" className="deletelink">
                  Delete
                </a>
              </p>

              <input
                type="submit"
                value="Save and add another"
                name="_addanother"
              />
              <input
                type="submit"
                value="Save and continue editing"
                name="_continue"
              />
            </div>
          </div>
        </form>
      </div>
    </SiteContent>
  </Page>;

export default ChangeForm;
