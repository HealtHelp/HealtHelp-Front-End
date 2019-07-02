import React from 'react';

class Footer extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div className="footer">
          <footer>
            <a href="https://github.com/HealtHelp/" target="_blank"><p>&copy; 2019 HealtHelp Organization</p></a>                                                                                  
          </footer>
        </div>
      );

    }
}

export default Footer;
