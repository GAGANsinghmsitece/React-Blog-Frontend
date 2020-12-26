# React Blog Frontend
This repository contains front-end code of Django-powered projects.

The code is organised in `src` directory which has following components:-

1)`App.js`:-This file contains all the `Route` defined using `ReactRouter`. Sadly, `github-pages` do not support `BrowserRouter`, thus, we're using `HashRouter`.

2)`/pages`:-This directory contains main pages of blog. Every page consists of several components.

3)`/components`:- This directory contains different components which are used to create this blog.

4)`/assets/css`:- Instead of using JSX syntax for css, stylesheets are used and each stylesheet is only used by a single components. For example, `Header.css` is used by `Header.js` and so on.

This project is live at [React Blog Frontend](https://gagansinghmsitece.github.io/React-Blog-Frontend/#/).
