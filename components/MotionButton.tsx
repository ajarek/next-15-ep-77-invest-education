import * as motion from 'motion/react-client'

import { Button } from '@/components/ui/button'
import { TrendingUp } from 'lucide-react'
type PropsButton = {
  label: string
  typeButton: 'button' | 'submit' | 'reset' | undefined
}

const MotionButton = ({ label, typeButton }: PropsButton) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        type={typeButton}
        aria-label={label}
      >
        {label} <TrendingUp size={32} />
      </Button>
    </motion.div>
  )
}
export default MotionButton
