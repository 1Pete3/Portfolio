import "./styles.css";
import { motion } from "framer-motion";

export default function Animation() {
  return (
    <motion.div 
      className="NotFoundbox border border-primary"
      animate={{
        scale: [1, 2, 5, 2, 2],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
        <p className='notFoundText'>Page Not Found</p>
    </motion.div>
  );
}