import React from 'react';
import { Link } from 'react-router-dom';
import { vacanciesList } from '../constants/vacancies';

const Home = () => {
    return (
        <>
            <div className="container-sm mt-5">
                <h1>Про нас</h1>
                <p>57-мий окремий батальйон 104-тої окремої бригади Сил територіальної оборони – військове формування Сил
                територіальної оборони Збройних сил України у Рівненській області. Розгортання підрозділу відбулось із початку
                повномасштабного вторгнення, підрозділи бригади виконують бойові завдання з захисту територіальної цілісності
                України.</p>
            </div>

            <div className="container-sm mt-5 mb-5">
                <hr />
            </div>

            <div className="container-sm pb-5">
                <div className="row g-5">
                    {[vacanciesList[0], vacanciesList[1], vacanciesList[2]].map((vacancy, index) => (
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
        </>
    )
}

export default Home;