import React, {Component} from 'react';
import {usersWithAddress} from "./database/usersWithAddress";
import UsersComponent from "./component/UsersComponent";

class App extends Component {
    render() {
        return (
            <div>
              {usersWithAddress.map((user, index)=>{
                  let klasX= index%2? "odd":"even";
                  return <UsersComponent item={user} klas={klasX} key={index}/>
                  })
                 }
            </div>
        );
    }
}

export default App;