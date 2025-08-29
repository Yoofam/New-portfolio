import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <img
        src={avatar}
        alt="My Avatar"
        className="w-32 h-32 rounded-full shadow-lg"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "1.875rem", fontWeight: "bold" }}
      >
        Hi, I'm Victor 👋
      </motion.h1>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "1.125rem", color: "#4B5563" }}
        className="text-lg text-gray-600 dark:text-gray-300"
      >
        <span className="animate-pulse">Code, coffee & creativity ☕💻</span>
      </motion.p>

      <div className="space-y-2">
        <p><strong>Email:</strong> victoradeleke55@yahoo.com</p>
        <p><strong>Phone:</strong> +2349132891389</p>
        <p><strong>Location:</strong> Lagos, Nigeria</p>
      </div>
    </div>
  );
}
