import { motion } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-gradient-to-r from-pink-200 via-sky-200 to-lime-200 
                 animate-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        {/* Elegant Spinner */}
        <motion.div
          className="relative w-20 h-20 mx-auto mb-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/50" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-400 drop-shadow-lg" />
        </motion.div>

        {/* Animated text */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 
                       bg-clip-text text-transparent drop-shadow-md"
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Jamil Ur Rahman
          </motion.h2>
          <motion.p
            className="text-base text-gray-700"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading portfolio...
          </motion.p>
        </motion.div>

        {/* Pulsing pastel dots */}
        <motion.div
          className="flex justify-center space-x-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {["bg-pink-400", "bg-sky-400", "bg-purple-400", "bg-lime-400"].map(
            (color, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full ${color} shadow-md`}
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              />
            )
          )}
        </motion.div>
      </div>

      {/* Light background gradient animation */}
      <style jsx>{`
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientShift 16s ease infinite;
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
