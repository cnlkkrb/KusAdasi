import create from 'zustand';

interface ToastStore {
  isToastVisible: boolean;
  showToast: () => void;
  hideToast: () => void;
}

const useToastStore = create<ToastStore>((set: (arg0: { isToastVisible: boolean; }) => any) => ({
  isToastVisible: false,
  showToast: () => set({ isToastVisible: true }),
  hideToast: () => set({ isToastVisible: false }),
}));

export default useToastStore;
