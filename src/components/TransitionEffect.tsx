import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  fadeIn: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
  fadeOut: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const TransitionEffect: React.FC = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div css={{ overflow: "hidden", flex: 1, display: "flex", flexDirection: "column" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          css={{ flex: 1, display: "flex", flexDirection: "column" }}
          key={asPath}
          variants={variants}
          initial="fadeIn"
          animate="inactive"
          exit="fadeOut">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TransitionEffect;
