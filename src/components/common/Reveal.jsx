
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.7,
    className = "",
}) {
    const shouldReduceMotion = useReducedMotion();

    const directions = {
        up: { y: 35, x: 0 },
        down: { y: -35, x: 0 },
        left: { x: 35, y: 0 },
        right: { x: -35, y: 0 },
    };

    return (
        <motion.div
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, ...directions[direction] }
            }
            whileInView={
                shouldReduceMotion
                    ? undefined
                    : { opacity: 1, x: 0, y: 0 }
            }
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: shouldReduceMotion ? 0 : duration,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
