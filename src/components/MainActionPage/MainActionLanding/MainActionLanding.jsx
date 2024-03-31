import { LinearGradient as Lg } from 'react-text-gradients'
import { useModelContext } from '../../../context/ModelContext'
import { auth } from '../../../config/firebase'

function MainActionLanding() {
    return (
        <div className="w-full flex flex-col items-start justify-center px-[20px] md:px-[100px] pt-5">
            <div className='md:flex items-center justify-center'>
                <p className="text-[#555555] font-bold font-roboto-serif text-[70px] md:text-[100px]">Hello,&nbsp;</p>
                <p className='font-bold font-roboto-serif text-[70px] md:text-[100px] leading-5'><Lg gradient={['to right', '#c2e59c, #be5869']}>{auth?.currentUser?.displayName}</Lg></p>
            </div>
        </div>
    )
}

export default MainActionLanding