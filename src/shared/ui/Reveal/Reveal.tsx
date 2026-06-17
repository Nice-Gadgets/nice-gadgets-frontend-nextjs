'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

// Налаштування плавного випливання знизу догори
const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40, // початкова позиція трохи нижче
  },
  visible: {
    opacity: 1,
    y: 0, // кінцева позиція на своєму місці
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // красива плавна крива швидкості (cubic-bezier)
    },
  },
};

export const Reveal = ({ children, delay = 0 }: RevealProps) => {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      // once: true означає, що анімація спрацює один раз при першому скролі
      // amount: 0.15 — анімація почнеться, коли 15% блоку з'явиться на екрані
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
