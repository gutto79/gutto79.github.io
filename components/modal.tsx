import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div className="z-30">
      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed left-1/2 top-1/2 flex h-[85%] max-h-[90%] min-h-[85%] w-[80%] max-w-5xl -translate-x-1/2 -translate-y-1/2 transform items-center justify-center gap-10 rounded-lg shadow-xl transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {/* ポップアップパネル */}
        <div
          className={`h-[100%] flex-1 rounded-lg bg-white shadow-xl transition-all duration-300`}
        >
          <div className="flex h-[100%] flex-col">
            {/* ヘッダー */}
            <div className="flex justify-end px-2 pt-2">
              <button
                onClick={onClose}
                className="text-2xl font-bold text-gray-400 transition-colors hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* コンテンツエリア */}
            <div className="flex min-h-0 flex-1 flex-col px-6 pb-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
