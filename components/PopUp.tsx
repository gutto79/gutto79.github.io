"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PopUpProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const PopUp = ({ isOpen, onClose, children }: PopUpProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="relative z-[100]">
      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <div
        className={`fixed left-1/2 top-1/2 flex h-[90%] max-h-[95vh] w-[95%] md:h-[80%] md:w-[80%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center gap-10 rounded-lg shadow-xl transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* ポップアップパネル */}
        <div className="h-full w-full flex-1 rounded-lg bg-gray-900 shadow-xl transition-all duration-300">
          <div className="flex h-full flex-col">
            {/* ヘッダー */}
            <div className="flex justify-end px-4 pt-4">
              <button
                onClick={onClose}
                className="text-2xl font-bold text-gray-400 transition-colors hover:text-white"
                aria-label="Close popup"
              >
                ×
              </button>
            </div>

            {/* コンテンツエリア */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
              <div className="min-h-0">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
