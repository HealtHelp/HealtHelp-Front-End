import React,{Component} from 'react';
import Search from '../components/search.component';

class Patient extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  };

  handleSearch = (search) => {
    console.log(search);
  }




render(){
  return(
    <Search handleSearch={this.handleSearch}></Search>
  );
}
}

export default Patient;