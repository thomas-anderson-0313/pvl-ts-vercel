import './about.scss'

import PVL_brand from '../../assets/PVL.png'

export default function About() {
    return(
        <div className="about">
            <div className='about-title'>About Us</div>
            <div className='about-par1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non lacinia lacus. Donec magna diam, eleifend ac lorem id, pretium tristique enim. Etiam varius, sem sit amet sollicitudin posuere, orci turpis porta nulla, ut pharetra dui sapien eget est. Praesent sit amet magna finibus, semper nunc accumsan, vulputate justo. Suspendisse ultricies pulvinar enim.</div>
            <div className='about-par2'>
                <div className='about-par2-left'>
                    <img className='about-pvl-logo' src = {PVL_brand} alt = "pvl" />
                </div>
                <div className='about-par2-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non lacinia lacus. Donec magna diam, eleifend ac lorem id, pretium tristique enim.</div>                
            </div>
            <div className='about-par3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non lacinia lacus. Donec magna diam, eleifend ac lorem id, pretium tristique enim. Etiam varius, sem sit amet sollicitudin posuere, orci turpis porta nulla, ut pharetra dui sapien eget est. Praesent sit amet magna finibus, semper nunc accumsan, vulputate justo. Suspendisse ultricies pulvinar enim.</div>
        </div>
    )
}