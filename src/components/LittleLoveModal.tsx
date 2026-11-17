import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, X } from 'lucide-react';
import { HeartSticker } from './Stickers';

interface LittleLoveModalProps {
  message: string | null;
  onClose: () => void;
  onAnother: () => void;
}

export const LittleLoveModal: React.FC<LittleLoveModalProps> = ({
  message,
  onClose,
  onAnother,
}) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-live="polite"
          className="love-note-toast fixed right-4 bottom-20 z-40 w-[calc(100vw-2rem)] max-w-xs rounded-[20px] border border-[#EAD0DA] bg-[#FFFEFC]/95 p-4 shadow-[0_14px_34px_rgba(164,114,134,0.2)] backdrop-blur-md sm:right-6 sm:bottom-6"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <HeartSticker className="h-5 w-5 shrink-0" />
              <span className="text-xs font-semibold text-[#C95B7F]">
                A Little Note For Roshni
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close love note"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#7D616E] hover:bg-[#F8DCE5]/50"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="font-nepali mt-2 text-base font-medium leading-relaxed text-[#4A343E]">
            {message}
          </p>

          <button
            type="button"
            onClick={onAnother}
            className="mt-3 inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-[#C95B7F] hover:underline"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Read another sweet note
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
