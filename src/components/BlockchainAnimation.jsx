import React from 'react';
import { motion } from 'framer-motion';
import { shield } from '../assets';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const lineVariants = {
  initial: { opacity: 0.3 },
  animate: {
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const shieldVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const nodeGroupVariants = {
  initial: { scale: 1 },
  animate: (i) => ({
    rotate: 360,
    scale: [1, 1.15, 1],
    transition: {
      rotate: {
        duration: 25 + i * 8,
        ease: 'linear',
        repeat: Infinity,
      },
      scale: {
        duration: 3 + i * 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  }),
};

const Cube = ({ size }) => {
  const s = size / 2;
  // Paths for the 3 faces of an isometric cube
  const topFace = `M 0 -${s} L ${s} -${s / 2} L 0 0 L -${s} -${s / 2} Z`;
  const leftFace = `M -${s} -${s / 2} L 0 0 L 0 ${s} L -${s} ${s / 2} Z`;
  const rightFace = `M ${s} -${s / 2} L 0 0 L 0 ${s} L ${s} ${s / 2} Z`;

  return (
    <g>
      <motion.path
        d={topFace}
        fill="#81E6D9"
        stroke="#B2F5EA"
        strokeWidth="1.5"
      />
      <motion.path
        d={leftFace}
        fill="#285E61"
        stroke="#B2F5EA"
        strokeWidth="1.5"
      />
      <motion.path
        d={rightFace}
        fill="#319795"
        stroke="#B2F5EA"
        strokeWidth="1.5"
      />
    </g>
  );
};

const HeroAnimation = () => {
  const numNodes = 6;
  const radiusX = 160;
  const radiusY = 120;
  const center = { x: 200, y: 200 };

  const nodes = Array.from({ length: numNodes }).map((_, i) => {
    const angle = (i / numNodes) * 2 * Math.PI;
    return {
      x: center.x + radiusX * Math.cos(angle),
      y: center.y + radiusY * Math.sin(angle),
    };
  });

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      {/* Lines connecting nodes to the center */}
      {nodes.map((node, i) => (
        <motion.line
          key={`line-${i}`}
          x1={center.x}
          y1={center.y}
          x2={node.x}
          y2={node.y}
          stroke="rgba(178, 245, 234, 0.2)"
          strokeWidth="1.5"
          variants={lineVariants}
        />
      ))}

      {/* Central Shield Icon */}
      <motion.image
        href={shield}
        x={center.x - 35}
        y={center.y - 35}
        height="70"
        width="70"
        variants={shieldVariants}
        whileHover={{ scale: 1.1 }}
      />

      {/* Decentralized Nodes (3D Blocks) */}
      {nodes.map((node, i) => (
        <motion.g
          key={`node-${i}`}
          initial={{ x: node.x, y: node.y }}
          variants={nodeGroupVariants}
          custom={i}
          style={{ transformOrigin: 'center' }}
          whileHover={{ scale: 1.3, zIndex: 10 }}
        >
          <Cube size={40} />
        </motion.g>
      ))}
    </motion.svg>
  );
};

export default HeroAnimation; 