import React ,{Component} from 'react';
import './../index.css';
import Send from './../components/send';


class Home extends Component{
    constructor() {
        super();
    }
        render() {

            return(
                <div>
                    <div className="row mt-4">
                        <div className="col-md-7">  
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox"></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                    </div>
                    <Send/>
                    <div className="row">
                        <div className="col-md-10 offset-2">
                            <div class="boton"><h1>+</h1></div>                    
                        </div>
                    </div>
                </div>
            )
        }

}
export default Home;