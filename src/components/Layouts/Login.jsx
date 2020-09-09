import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => (
    <div className="">
        <div className=""></div>
        <div className="">
            <form>
                <div className="form__item">
                    <label htmlFor="email">
                        Correo Electronico
                        <input type="text" id="email" placeholder="Ingrese su e-mail" />
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="email">
                        Contraseña
                        <input type="password" id="email" placeholder="Ingrese su contraseña" />
                    </label>
                </div>
                <div className="form_item">
                    <input type="submit" className="button full" value="Iniciar Sesión" />
                </div>
            </form>
        </div>  
    </div>
)

export default Login
