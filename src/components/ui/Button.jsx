import { motion } from 'framer-motion'
export default function Button({ label, label2, textColor, label2Color, bgColor, hoverBgColor }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: 'easeOut' } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.05, ease: 'easeOut' } }}
      className={`text-preset5 cursor-pointer rounded-4xl px-10 py-4 text-center ${bgColor} ${textColor} ${hoverBgColor} transition`}
    >
      {label} <span className={`${label2Color}`}>{label2}</span>
    </motion.button>
  )
}
