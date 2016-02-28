import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
import NewUser from './components/NewUser.jsx';
import Login from './components/Login.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
}
