import React ,{Component} from 'react';
import './../index.css';
import {datos} from './../datos.json';

class Send extends Component{
    constructor() {
        super();
        this.state = {
            datos
        }
    }
        render() {
            const datos = this.state.datos.map((datos, i) =>{
                return (
                    <div>
                        <div className="row mr-1 mt-3">
                            <div className="col-md-2">
                                <div className="container">
                                    <div className="round">
                                        <input type="checkbox" id="checkbox" />
                                        <label for="checkbox"></label>
                                    </div>
                                </div>
                            </div>
                        <div className="card col-md-10">
                            <div className="row">
                                <div className=" col-md-2">
                                    <a>
                                    {datos.datetime}
                                    </a>
                                </div>
                                <div className=" col-md-4">
                                    <a>
                                    {datos.envio}
                                    </a>
                                    <br/>
                                    <i class="material-icons">
                                    keyboard_arrow_down
                                    </i>
                                    <br/>
                                    <a>
                                    {datos.recibido}
                                    </a>
                                </div>
                                <div className=" col-md-1">
                                    <i class="material-icons font">
                                    local_shipping
                                    </i>                        
                                </div>
                                <div className=" col-md-3 mt-3">
                                    <h3>${datos.value*datos.cantidad}.00</h3>                     
                                </div>
                                <div className=" col-md-1 mt-3">
                                    <button type="button" class="btn btn-danger">{datos.cantidad}</button>                                                 
                                </div>
                                <div className=" font2 col-md-1 mt-3">
                                    <i class="material-icons">
                                    more_vert
                                    </i>
                                </div>
                                </div>                             
                            </div>
                        </div>
                    </div>
                )
            })
            return(
                <div>
                    {datos}
                </div>
            )
        }

}
export default Send;