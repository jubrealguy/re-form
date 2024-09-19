import reform_img from './img/reform_img.png'

const Event = () => {
    return (
        <div className="font-sans text-custom-gray">
            <h2 className="text-4xl font-bold leading-[55.2px] text-center">REFORM TEACHERS CONFERENCE</h2>

            <p className="text-[40px] font-bold leading-[46px] text-left">Upcoming Event</p>

            <div class="flex gap-[115px] items-center">
                <img src={reform_img} alt='' className="w-[426px] h-[424px]" />
                <div className='flex flex-col gap-[27px]'>
                    <h4 class="text-[55px] font-normal leading-[63.24px] text-custom-blue">Re-form Teacher Conference</h4>
                    <p class="text-[18px] font-normal leading-[26.4px] text-custom-blue-light">Re-form Conference is an annual gathering of passionate edcators dedicated to advancing the future of teaching and learning,our conference brings together teachers, administrators, and education leaders from around the world to explore innovative strategies, share best practices,</p>
                    <div className='flex justify-between'>
                        <a href="##" class="text-[16px] font-bold leading-[20.16px] tracking-[0.02em] px-[16px] py-[8px] gap-[10px] rounded-[8px] bg-custom-link-background text-link-custom-text">Register here</a>
                        <p>Date: 03 oct 2024</p>
                    </div>
                </div>
            </div>

            <div className='px-[17px] py-0 shadow-custom-shadow'>
                <h3>REGISTATION FORM</h3>
            </div>
        </div>
    )
}

export default Event