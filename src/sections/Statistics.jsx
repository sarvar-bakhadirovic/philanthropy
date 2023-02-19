import './Statistics.css'

function Statistics() {
    return(
        <div className="statistics">
            <div className="statistics__content">
                <ul className="statistics__list">
                    <li className="statistics__item">
                        <h3 className='statistics__number'>
                            <span>200</span>m
                        </h3>
                        <p className="statistics__desc">Humans impacted</p>
                    </li>
                    <li className="statistics__item">
                        <h3 className='statistics__number'>
                            <span>50</span>k
                        </h3>
                        <p className="statistics__desc">Collaborators</p>
                    </li>
                    <li className="statistics__item">
                        <h3 className='statistics__number'>
                            <span>370</span>k
                        </h3>
                        <p className="statistics__desc">Donations</p>
                    </li>
                    <li className="statistics__item">
                        <h3 className='statistics__number'>
                            <span>100</span>+
                        </h3>
                        <p className="statistics__desc">Assisted communities</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Statistics