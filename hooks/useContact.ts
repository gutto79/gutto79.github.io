import { useState } from "react";

interface UseContactReturn {
  copied: boolean;
  handleCopyEmail: (email: string) => Promise<void>;
}

export const useContact = (): UseContactReturn => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return {
    copied,
    handleCopyEmail,
  };
};
