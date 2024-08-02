import React from 'react';

const VacancyData = ({ title, duties, requirements, conditions }) => {
    return (
        <React.Fragment>
            <div className="container-sm mt-3">
                <h2 className="text-center">Вакансія</h2>
                <h1 className="text-center"><strong>{title}</strong></h1>
            </div>
            <div className="container-sm mt-5 mb-5">
                <hr />
            </div>
            <div className="container-sm pb-5">
                <div className="row g-5">
                    {[{ title: `ОБОВ'ЯЗКИ`, list: duties }, { title: `ВИМОГИ`, list: requirements }, { title: `УМОВИ`, list: conditions }].map(({ title, list }, index) => (<div className="col-sm-12 col-lg-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title text-center">{title}</h4>
                                <ul>
                                    {list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <div />
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default VacancyData;