import React from 'react';
import './PageSize.scss'
const PageSize = () => {
    return (
        <div className='pageSize'>
        <h1>Как выбрать размер?</h1>
        <div className="pageSize__tables">
            <div className="pageSize__table">
                <h3>Вещь садет идеально на параметры:</h3>
                <div className="pageSize__line"></div>
                <div className="pageSize__info">
                    <h3>Размер</h3>
                    <h3>Бюст <br /> (см)</h3>
                    <h3>Талия <br /> (см)</h3>
                    <h3>Бедра <br /> (см)</h3>
                    <h3>Рост <br /> (см)</h3>
                </div>
                <div className="pageSize__line"></div>
                <div className="pageSize__form">
                    {['XS', 'S', 'M', 'L'].map(size => (
                        <div className="pageSize__format" key={size}>
                            <h2>{size}</h2>
                            <p>{size === 'XS' ? '80-82' : size === 'S' ? '83-85' : size === 'M' ? '86-88' : '89-92'}</p>
                            <p>{size === 'XS' ? '58-60' : size === 'S' ? '61-63' : size === 'M' ? '64-67' : '68-72'}</p>
                            <p>{size === 'XS' ? '84-86' : size === 'S' ? '87-91' : size === 'M' ? '91-96' : '97-102'}</p>
                            <p>160-177</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pageSize__table">
                <h3>Размеры вещи:</h3>
                <div className="pageSize__line"></div>
                <div className="pageSize__info">
                    <h3>Размер</h3>
                    <h3>Бюст <br /> (см)</h3>
                    <h3>Талия <br /> (см)</h3>
                    <h3>Бедра <br /> (см)</h3>
                    <h3>Рост <br /> (см)</h3>
                    <h3>Длина <br /> рукава</h3>
                </div>
                <div className="pageSize__line"></div>
                <div className="pageSize__form">
                    {['XS', 'S', 'M', 'L'].map(size => (
                        <div className="pageSize__format" key={size}>
                            <h2>{size}</h2>
                            <p>{size === 'XS' ? '107' : size === 'S' ? '112' : size === 'M' ? '115' : '118'}</p>
                            <p>{size === 'XS' ? '114' : size === 'S' ? '120' : size === 'M' ? '124' : '128'}</p>
                            <p>{size === 'XS' ? '112' : size === 'S' ? '116' : size === 'M' ? '122' : '126'}</p>
                            <p>{size === 'XS' ? '116' : size === 'S' ? '122' : size === 'M' ? '126' : '130'}</p>
                            <p>{size === 'XS' || size === 'S' ? '61' : '63'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    );
};

export default PageSize;