## React Django Admin

Demo: [https://react-django-admin-lqzrcspcxz.now.sh/](https://react-django-admin-lqzrcspcxz.now.sh/)


This project aims to implement the django-admin on the client using [ReactJS](https://facebook.github.io/react/). The frontend can be implemented in any frontend framework since the designs of [Django Web Framework](https://www.djangoproject.com/) Admin is used

The anatomy of this project can be bSroken down into 3 
1. The frontend application (Implement in [ReactJS](https://facebook.github.io/react/))
2. A graphql proxy (implemented with [Flask](http://flask.pocoo.org/)) that would be used to flesh out the api endpoints that would be required for whatever backend framework we plan to support
3. A resusable/installable app that helps in generating the required endpoints that would be required by the proxy

### Getting Started

**NB: Ensure you are on the `develop` branch to view the latest code.**

To begin work on the frontend, carry out the following steps.
Ensure you have [NodeJS](https://nodejs.org/en/) installed. (v6 and above) 

*if you are developing with Windows and you want to follow the steps, it would be advisable to use the Bash Shell in [Git Bash](https://git-scm.com/downloads)*

    $ cd frontend
    $ npm install
    $ npm start

Since the first phase of this project is to flesh out the UI, Access to the django server would be needed. The following steps is required to setup the [Django] server.
Ensure you have [Python 3](https://www.python.org/downloads/) installed and [Virtualenv](https://virtualenv.pypa.io/en/stable/)

    # From the root folder in a new Terminal
    $ virtualenv venv
    $ pip install -r server/requirements.txt
    $ python server/src/manage.py runserver

The default username/password for the admin is `demo/demo`

## How to Contribute
### Frontend Developers
The frontend project makes use of [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy) for handling routes 

The following routes would be implemented from the django admin.

`/` (The default Django Admin Dashboard Page )

`/password_change` (Changing password page in django)

`/<app>` (An app page) # An app is a collectin of models

`/<app>/<model>` (The model changelist page)

`/<app>/<model>/add/` (Adding a new Item to the changelist)

`/logout/` (The logout intermidiate page)

`/login/` (The login page)

To fetch the actual html to be converted to [JSX Components](https://facebook.github.io/react/docs/jsx-in-depth.html) , We would visit the actual django page.

so for example to implement the Dashboard, We would create a `Dashboard` folder in the `src` folder of the `frontend` folder.

Getting the details of the HTML is highlighted as follows

![The HTML for the django dashboard page](/docs/dashboard.PNG)

This HTML can then be broken down into components which can be composed. 

A sample currently exists in the repo.

**NB**
This is a new project and is highly experimental. Chances are it won't be easily customizable and would take the default look of django admin.

**Contributors are welcome.**

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/gbozee/react-django-admin/issues) or [contribute some!](https://github.com/gbozee/react-django-admin/blob/master/README.md)
