import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {PostList} from './components/PostList';
import {PostDetails} from './components/PostDetails';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/postlist' components={{body: PostList}} />
    <Route path='/postdetails/:postid' components={{body: PostDetails}} />
</Route>;
