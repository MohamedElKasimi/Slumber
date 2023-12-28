import { motion } from "framer-motion";

const OC_background = ({children, onClick}) =>{

return(
    <motion.div
    className="oc_background"
    onClick={onClick}
    initial={{opacity : 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        {children}
    </motion.div>
);
    
}


export default OC_background;