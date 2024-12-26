import { motion } from 'framer-motion'

interface IAnimatedRouteProps {
	children: React.ReactNode
}

const AnimatedRoute: React.FC<IAnimatedRouteProps> = ({ children }) => (
<motion.div
  initial={{ x: '-100%', scaleX: 0.8, opacity: 0 }}  
  animate={{ x: 0, scaleX: 1, opacity: 1 }}         
  exit={{ x: '100%', scaleX: 1.2, opacity: 0 }}     
  transition={{ duration: 0.7, ease: 'easeInOut' }}
  style={{ visibility: 'visible', }}
>
  {children}
</motion.div>


)

export default AnimatedRoute