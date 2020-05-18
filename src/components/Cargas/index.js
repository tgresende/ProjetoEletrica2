import React, {Component} from 'react';
import ListaCargas from '../ListaCargas';

class Cargas extends Component{ 

    constructor(props){
        super(props);
        this.state={
            form:{
                carga:'',
                potencia:0,
                quantidade:0,
                tipo:'b1', 
                id:0
            },
            items:[]
        }
        
        this.additem = this.additem.bind(this);
        this.inseredados = this.inseredados.bind(this);
    }

    inseredados(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form:form});
    }

    additem(e){
        let items = this.state.items;

        let newitem = {
            carga: this.state.form.carga,
            potencia: this.state.form.potencia,
            quantidade:this.state.form.quantidade,
            tipo: this.state.form.tipo,
            soma: this.state.form.quantidade*this.state.form.potencia,
            id: Date.now()
        };
        

        this.setState({items:[...items, newitem]});

        e.preventDefault();
    }

    render(){
        return(
            <div> 
                <form onSubmit={this.additem}>
                    <label>Carga </label>
                    <input type="text" placeholder="Nome da Carga" name="carga"
                            value={this.state.form.carga}
                            onChange = {this.inseredados}/>
                    <br/>
                    <label>Potência Unit. (w)</label>
                    <input type="number" name="potencia"
                            value={this.state.form.potencia}
                            onChange = {this.inseredados}/>
                    <br/>
                    <label>Quantidade</label>
                    <input type="number" name="quantidade"
                            value={this.state.form.quantidade}
                            onChange = {this.inseredados}/>
                    <br/>
                    <label>Tipo da Carga</label>
                    <select name="tipo" value={this.state.form.tipo}
                            onChange = {this.inseredados}>
                            <option value = "A">Tomadas e Lâmpadas</option>
                            <option value = "B1">Fornos, grill</option>
                            <option value = "B2">Ar condicionado</option>
                            <option value = "D">Motores</option>
                    </select>
                    <br/>
                    <button type="submit">Inserir</button>
                 </form>
                 
                 <div>
                     
                    <ListaCargas lista = {this.state.items}/>
                </div>

                         
            </div>
        );
    }
}

export default Cargas;