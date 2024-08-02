import React from 'react';
import { Link } from 'react-router-dom';
import { vacanciesList } from '../constants/vacancies';

const Vacancies = () => {
    return (
        <React.Fragment>
            <div className="container-sm mt-3">
                <h1 className="text-center"><strong>Вакансії з перспективою кар'єрного зростання</strong></h1>
            </div>
            <div className="container-sm mt-5 mb-5">
                <hr />
            </div>
            <div className="container-sm pb-5">
                <div className="row g-5">
                    {vacanciesList.map((vacancy, index) => (
                        <div className="col-sm-12 col-lg-4" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h4 className="card-title text-center">{vacancy.title}</h4>
                                    <ul>
                                        {vacancy.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="w-100 text-center">
                                        <Link to={vacancy.href} className="btn btn-dark card-link">Дізнатись більше</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Vacancies;