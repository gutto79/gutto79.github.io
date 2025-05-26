import { useState } from "react";
import { useModal } from "./useModal";

export const useWorks = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return {
    selectedProject,
    isOpen,
    handleProjectClick,
    handleCloseModal,
  };
};
