import { useDispatch, useSelector } from "react-redux";
import { depositar, retirar } from "./features/operacionMonto";

const MontoUI=()=>{

    const monto =useSelector(state=>state.monto)
    const dispatch=useDispatch();
    
    return(
        <div className="container">
            <div className="row">
                <div className="col col-5 border border-3 m-2 p-2 alert alert-info">
                <p className="lead fs-2 text-primary">Depositar y Retirar Monto:{monto.value} </p>

                    <label className="fs-2 bold text-primary">Depositar</label>
                    <hr/>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={()=>dispatch(depositar(10))}>10</button>
                        <button type="button" className="btn btn-primary" onClick={()=>dispatch(depositar(30))}>30</button>
                        <button type="button" className="btn btn-primary" onClick={()=>dispatch(depositar(50))}>50</button>
                    </div>

                    <hr/>

                    <label className="fs-2 bold text-danger">Retirar</label>
                     <hr/>

                     <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={()=>dispatch(retirar(10))}>10</button>
                        <button type="button" className="btn btn-danger" onClick={()=>dispatch(retirar(30))}>30</button>
                        <button type="button" className="btn btn-danger" onClick={()=>dispatch(retirar(50))}>50</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MontoUI;