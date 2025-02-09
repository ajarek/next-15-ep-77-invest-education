import { TrendingUp } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

const MotionLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        className={`${buttonVariants({
          variant: 'default',
        })}  shadow-xl  text-xl flex items-center gap-2 hover:bg-red-200 `}
        aria-label={label}
      >
        {label} <TrendingUp size={32} />
      </Link>
    </motion.div>
  )
}
export default MotionLink
