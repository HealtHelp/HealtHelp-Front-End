import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = {
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 50,
    flex: 1,
  },
  
};



class Search extends React.Component {

    handleSearch = () => {
        const search = document.getElementById("search").value;
        this.props.handleSearch(search);
      }
  
  render(){
    const classes = useStyles;
    return (
        <div className="iconSearchPatient">
           <Paper className={classes.root}>
          <InputBase 
            id="search" 
            className={classes.input}
            placeholder="Search Patient by name"
          />
          <IconButton  aria-label="Search">
            <SearchIcon onClick={this.handleSearch} />
          </IconButton>
        </Paper>   
        </div>    
      );
  } 
}

export default Search;