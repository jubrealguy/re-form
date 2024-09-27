import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import reform_img from './img/reform_img.png'
import conference_img from './img/conference_img.png'
import kids_img from './img/kids_image.png'
import DropdownWithCheckboxes from './dropdown';

const Event = () => {
    const [form, setForm] = useState({
        first: "",
        last: "",
        email: "",
        tel: "",
        attendingAs: "",
    })

    const [isValid, setIsValid] = useState(false)
    const [errors, setErrors] = useState({})

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const telRef = useRef(null);

    const onChange = (e) => {
        const {value, name} = e.target
        setForm((state) => ({
          ...state,
          [name]: value
        }))
      }

      const handleDropdownChange = (selectedItem) => {
        setForm((prevForm) => ({
          ...prevForm,
          attendingAs: selectedItem,
        }));
      };

      const handleFocus = (ref) => ref.current.focus();
    
      const submit = (e) => {
        e.preventDefault()
        const newErrors = {};
        if (!form.first) newErrors.first = "First Name is required";
        if (!form.last) newErrors.last = "Last Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.tel) newErrors.tel = "Phone Number is required";
        if (!form.attendingAs) newErrors.attendingAs = "Please select how you are attending";
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Set errors if validation fails
            setIsValid(false);
            return;
        }
        setIsValid(true);
        console.log(form);

        setForm({
            first: "",
            last: "",
            email: "",
            tel: "",
            attendingAs: "",
        });
        setErrors({});
      }

      const cancel = () => {
        setIsValid(false)
    }


      const valid = () => {return (
      <div className='valid'>
        <span>&#10003;</span>
        <p>Application Submited</p>
        <span onClick={cancel}>&times;</span>
    </div>
    )}

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
                <div className='event__form--figure'><span></span><span></span><span></span><span></span><span></span></div>
                <p className='event__form--steps'>Steps</p>
                <p className='event__form--guide'>Fill in the registration data to secure  a sit for the Teacher’s conference.</p>
                <div className='form__box'>
                    <label htmlFor='first' className='form__label'>First Name</label>
                    <div className='input-box'>
                        <input type='text' name='first' id='first' value={form.first} onChange={onChange} placeholder='John' ref={firstNameRef} className='form__input' required />
                        <FontAwesomeIcon icon={faPencilAlt} onClick={() => handleFocus(firstNameRef)} className='form__edit' />
                    </div>
                </div>
                {errors.first && <span className='error-message'>{errors.first}!!!</span>}
                <div className='form__box'>
                    <label htmlFor='last' className='form__label'>Last Name</label>
                    <div className='input-box'>
                        <input type='text' name='last' id='last' value={form.last} onChange={onChange} placeholder='Doe' ref={lastNameRef} className='form__input' required />
                        <FontAwesomeIcon icon={faPencilAlt} onClick={() => handleFocus(lastNameRef)} className='form__edit' />
                    </div>
                </div>
                {errors.last && <span className='error-message'>{errors.last} ! ! !</span>}
                <div className='form__box'>
                    <label htmlFor='email' className='form__label'>Email</label>
                    <div className='input-box'>
                        <input type='email' name='email' value={form.email} onChange={onChange} id='email' placeholder='abc@mail.xyz' ref={emailRef} className='form__input' required />
                        <FontAwesomeIcon icon={faPencilAlt} onClick={() => handleFocus(emailRef)} className='form__edit' />
                    </div>
                </div>
                {errors.email && <span className='error-message'>{errors.email} ! ! !</span>}
                <div className='form__box'>
                    <label htmlFor='tel' className='form__label'>Phone Number</label>
                    <div className='input-box'>
                        <input type='tel' name='tel' value={form.tel} onChange={onChange} id='tel' placeholder='+234' ref={telRef} className='form__input' required />
                        <FontAwesomeIcon icon={faPencilAlt} onClick={() => handleFocus(telRef)} className='form__edit' />
                    </div>
                </div>
                {errors.tel && <span className='error-message'>{errors.tel} ! ! !</span>}

                <DropdownWithCheckboxes handleDropdownChange={handleDropdownChange} />
                {errors.attendingAs && <span className='error-message'>{errors.attendingAs} ! ! !</span>}

                <button className='form__button' onClick={submit}>Submit</button>
                {isValid && valid()}
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