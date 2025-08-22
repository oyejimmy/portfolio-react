import { motion } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-gradient-to-r from-indigo-700 via-cyan-600 to-emerald-600 
                 animate-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        {/* Spinner with glow */}
        <motion.div
          className="relative w-24 h-24 mx-auto mb-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/30" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white drop-shadow-xl" />
        </motion.div>

        {/* Animated text */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-extrabold 
                       bg-gradient-to-r from-yellow-300 via-cyan-300 to-purple-400 
                       bg-clip-text text-transparent drop-shadow-lg"
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Jamil Ur Rahman
          </motion.h2>
          <motion.p
            className="text-lg text-white/90"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading portfolio...
          </motion.p>
        </motion.div>

        {/* Pulsing dots */}
        <motion.div
          className="flex justify-center space-x-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-white shadow-lg"
              animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Animated background gradient */}
      <style jsx>{`
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientShift 14s ease infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
}
