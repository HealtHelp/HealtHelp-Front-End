import React,{Component} from 'react';
import Search from '../components/search.component';
import TablePatient from '../components/table.component';


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
    <div>
     <Search handleSearch={this.handleSearch}></Search>
     <TablePatient></TablePatient>
    </div>
    
  );
}
}

export default Patient;