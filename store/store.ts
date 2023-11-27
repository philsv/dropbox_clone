import { create } from 'zustand';

interface AppState {
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (isDeleteModalOpen: boolean) => void;

    isRenameModalOpen: boolean;
    setIsRenameModalOpen: (isRenameModalOpen: boolean) => void;

    fileId: string | null;
    setFileId: (fileId: string) => void;

    filename: string;
    setFilename: (filename: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isDeleteModalOpen: false,
    setIsDeleteModalOpen: (isDeleteModalOpen) => set({ isDeleteModalOpen }),

    isRenameModalOpen: false,
    setIsRenameModalOpen: (isRenameModalOpen) => set({ isRenameModalOpen }),

    fileId: null,
    setFileId: (fileId) => set({ fileId }),

    filename: '',
    setFilename: (filename) => set({ filename }),
}));