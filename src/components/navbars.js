import React ,{Component} from 'react';
import './../index.css';

class NavBars extends Component{
    constructor() {
        super();
    }
        render() {
            return(
                <div className="navegacion">
                    <nav class="nav nav-pills nav-fill navegacion">
                    <a class="nav-item nav-link navegacionText activ" href="#">
                    <i class="material-icons fontNav">
                    home
                    </i>
                    <br/>
                    Home</a>
                    <a class="nav-item nav-link navegacionText" href="#">
                    <i class="material-icons fontNav">
                    message
                    </i>
                    <br/>
                    Messages</a>
                    <a class="nav-item nav-link navegacionText" href="#">
                    <i class="material-icons fontNav">
                    star
                    </i>
                    <br/>
                    Wishlist</a>
                    <a class="nav-item nav-link navegacionText" href="#">
                    <i class="material-icons fontNav">
                    settings
                    </i>
                    <br/>
                    Setting</a>
                    <a class="nav-item nav-link navegacionText" href="#">
                    <i class="material-icons fontNav">
                    people
                    </i>
                    <br/>
                    My Account</a>
                    </nav>     
                </div>
            )
        }

}
export default NavBars;