import React ,{Component} from 'react';
import imagen from './../imagenes/imagen.png';
import './../index.css';
class Menu extends Component{
    constructor() {
        super();
    }
        render() {
            return(
            <div className="claro ml-3">
                <img src={imagen} className="App-logo" alt="logo" />
                <p>Smart Filters</p>
                <hr/>
                <div className="row">
                    <div className="col">
                        <i class="material-icons font">
                        new_releases
                        </i>
                    </div>
                    <div className="col mt-2">
                        <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <i class="material-icons font">
                        calendar_today
                        </i>
                    </div>
                    <div className="col mt-2">
                        <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <i class="material-icons font">
                        favorite_border
                        </i>
                    </div>
                    <div className="col mt-2">
                        <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <hr/>
                <p>Status</p>
                <input class="form-control mr-10" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn-block mt-3 " type="submit">Search</button>
            </div>
            )
        }

}
export default Menu;