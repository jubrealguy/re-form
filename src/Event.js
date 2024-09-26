import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import reform_img from './img/reform_img.png'
import conference_img from './img/conference_img.png'
import kids_img from './img/kids_image.png'

const Event = () => {
    return (
        <div className="events">
            <h2 className="header__primary">REFORM TEACHERS CONFERENCE</h2>

            <div class="event__info">
                <p className="event__info--head">Upcoming Event</p>
                <div className='event__info--body'>
                    <div className='event__img-box'>
                        <img src={reform_img} alt='' className='event__img' />
                    </div>
                    <div className="event__details">
                        <h4 className="event__details--head">Re-form Teacher Conference</h4>
                        <p className="event__details--body">Re-form Conference is an annual gathering of passionate edcators dedicated to advancing the future of teaching and learning,our conference brings together teachers, administrators, and education leaders from around the world to explore innovative strategies, share best practices,</p>
                        <div className="event__details--register">
                            <a href="##" className="register__link">Register here</a>
                            <p className="register__date">Date: 03 oct 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            <form className="event__form">
                <h3 className='event__form--head'>REGISTATION FORM</h3>
                <p className='event__form--steps'>Steps</p>
                <p className='event__form--guide'>Fill in the registration data to secure  a sit for the Teacher’s conference.</p>
                <div className='form__box'>
                    <label htmlFor='first' className='form__label'>First Name</label>
                    <div className='input-box'>
                        <input type='text' id='first' placeholder='John' className='form__input' />
                        <FontAwesomeIcon icon={faPencilAlt} className='form__edit' />
                    </div>
                </div>
                <div className='form__box'>
                    <label htmlFor='last' className='form__label'>Last Name</label>
                    <div className='input-box'>
                        <input type='text' id='last' placeholder='Doe' className='form__input' />
                        <FontAwesomeIcon icon={faPencilAlt} className='form__edit' />
                    </div>
                </div>
                <div className='form__box'>
                    <label htmlFor='email' className='form__label'>Email</label>
                    <div className='input-box'>
                        <input type='email' id='email' placeholder='abc@mail.xyz' className='form__input' />
                        <FontAwesomeIcon icon={faPencilAlt} className='form__edit' />
                    </div>
                </div>
                <div className='form__box'>
                    <label htmlFor='phone' className='form__label'>Phone Number</label>
                    <div className='input-box'>
                        <input type='number' id='phone' placeholder='+234' className='form__input' />
                        <FontAwesomeIcon icon={faPencilAlt} className='form__edit' />
                    </div>
                </div>
                <button className='form__button'>Submit</button>
            </form>

            <div className='event__conference'>
                <div className='event__conference--details'>
                    <h4 className='conference__head'>Teachers Conference</h4>
                    <p className='conference__date'>3rd of October 2024 | On site</p>
                    <p className='conference__body'>Invite Fellow teachers, Childcare practitioners, school administrators, parents e.t.c</p>
                    <a href='##' className='conference__share'><FontAwesomeIcon icon={faShareNodes} className='sharenodes' /><span>Share</span></a>
                </div>
                <img src={conference_img} alt='' className='event__conference--img' />
            </div>

            <div className='event__past'>
                <h3>Past Events</h3>
                <table className='event__table'>
                    <thead className='table__head'>
                        <tr className='tablerow'>
                            <th>Past Events <span>are listed in chronological order by date.</span></th>
                            <th><FontAwesomeIcon icon={faFilter} /><span>Filter:</span></th>
                            <th>Event location</th>
                        </tr>
                    </thead>
                    <tbody className='table__body'>
                        <tr className='tablerow'>
                            <td>2nd October, 2023</td>
                            <td>Ogun state, Nigeria.</td>
                        </tr>
                        <tr className='tablerow'>
                            <td>2nd October, 2023</td>
                            <td>Ogun state, Nigeria.</td>
                        </tr>
                        <tr className='tablerow'>
                            <td>2nd October, 2023</td>
                            <td>Ogun state, Nigeria.</td>
                        </tr>
                        <tr className='tablerow'>
                            <td>2nd October, 2023</td>
                            <td>Ogun state, Nigeria.</td>
                        </tr>
                        <tr className='tablerow'>
                            <td>2nd October, 2023</td>
                            <td>Ogun state, Nigeria.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='event__sponsor'>
                <h3>Meet Our Sponsors</h3>
                <img src={kids_img} alt='' />
                <a href='##'>Become a Sponsor</a>
            </div>
        </div>
    )
}

export default Event