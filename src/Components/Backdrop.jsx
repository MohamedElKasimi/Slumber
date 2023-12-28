import {motion} from 'framer-motion';
import Moon from './Moon';
import Star from './Stars';
import Cloud from './Cloud';

const Backdrop = ()=>{
    return (
        <div className='Backdrop'><Moon></Moon>{Array(35).fill(<Star/>)}<Cloud></Cloud></div>
    );

}

export default Backdrop;