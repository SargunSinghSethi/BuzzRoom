import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType ="createServer";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data: any;
  onOpen: (type: ModalType, data?: any) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data) => set({ type, isOpen: true, data }),
  onClose: () => set({ type: null, isOpen: false, data: {} }),
}));
