import { motion } from "framer-motion";

const SectionWrapper = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-28"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
