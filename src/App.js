import React, {Component} from 'react';
import Cargas from './components/Cargas'


class App extends Component{ 

   constructor(props){
       super(props);
       this.state={
        };
   }    

   

    render(){
        return(
            <div>
                <div>
                    <h1>Dados da Carga</h1>
                </div>
                    <Cargas/>
                <hr/>    
                

            </div>
           
        );
    }
}

export default App;