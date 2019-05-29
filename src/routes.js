import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Student from './components/Student/Student';
import ClassList from './components/ClassList/ClassList';

export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component= { About } />
        <Route path='/classList/:class' component= { ClassList } />
    </Switch>);