import React, {Component} from 'react';
import './style.css';


class ListaCargas extends Component{ 

    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div> 
                <table className='tab'>
                <tr><th>Carga</th>
                    <th>Potencia Unit </th>
                    <th>Quantidade</th>
                    <th>Potencia Total</th>
                    <th>Tipo </th>
                </tr>
                { this.props.lista.map((item)=>{
                        return(
                            <tr>
                                <td>{item.carga} </td>
                                <td>{item.potencia} </td>
                                <td>{item.quantidade} </td>
                                <td>{item.soma} </td>
                                <td>{item.tipo} </td>
                            </tr>
                        );
                    })} 
                </table>
            </div>
        );
    }
}

export default ListaCargas;