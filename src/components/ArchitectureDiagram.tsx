'use client';

import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

/** Renders an ordered pipeline of components as a technical flow diagram */
const ArchitectureDiagram = ({ nodes }: { nodes: string[] }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="flex flex-wrap items-center gap-y-3"
        >
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                    }}
                    className="flex items-center"
                >
                    <span className="relative border border-white/[0.14] bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-ink whitespace-nowrap">
                        {node}
                        {/* corner accent */}
                        <span className="absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-acid/70" />
                        <span className="absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-acid/70" />
                    </span>
                    {i < nodes.length - 1 && (
                        <MoveRight size={16} className="text-acid mx-2 shrink-0" />
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ArchitectureDiagram;
