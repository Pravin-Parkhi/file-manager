import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeView from './app/home/home.component'
import BaseLayout from './common/base-layout/base-layout.component'
import FolderContent from './app/folder-content/folder-content.component'

import './App.css'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <BaseLayout>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/folders/:folderId/content' component={FolderContent} />
        </BaseLayout>
      </Switch>
    </BrowserRouter>
  )
}

