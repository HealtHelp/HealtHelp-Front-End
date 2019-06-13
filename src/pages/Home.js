
import React , {Component} from 'react';
import Header from '../modules/header/components/header.component';
import Home from '../modules/home/components/home.component';
import Footer from '../modules/footer/components/footer.component';

export default class HomePage extends Component {
    render() {
        return (
          <div>
           <Home></Home>
          </div>  
        );
    }
}