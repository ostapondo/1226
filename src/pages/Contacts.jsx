import React from 'react';
import Slider from '../components/Slider';

const Contacts = () => {
    return (
        <>
            <div className="container-sm mt-3">
                <h3 className="text-center">Контакти</h3>

                <h1 className="text-center"><strong>Приєднуйся до команди кращих!</strong></h1>
            </div>

            <div className="container-sm mt-5 mb-5">
                <hr />
            </div>

            <div className="container-sm mt-5 mb-5">
                <form>
                    <div className="row mb-3">
                        <label for="inputName" className="col-sm-3 col-form-label">
                            Ім’я</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="inputName" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPhone" className="col-sm-3 col-form-label">Телефон</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="inputPhone" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-3 col-form-label">Електронна пошта (не обов'язково)</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark">Надіслати форму</button>
                </form>
            </div>
        </>
    )
}

export default Contacts;