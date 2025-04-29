"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GenerateForm } from "@/domains/generate/features/generate-form";
import { create } from "zustand";

type GenerateFromVideoDialogStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};

export const useGenerateFromVideoDialog = create<GenerateFromVideoDialogStore>(
  (set, get) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggle: () => set({ isOpen: !get().isOpen }),
  }),
);

export const GenerateFromVideoDialog = () => {
  const { isOpen, onClose } = useGenerateFromVideoDialog();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-fit max-w-none">
        <DialogHeader>
          <DialogTitle>Generate from video</DialogTitle>
          <DialogDescription>
            Generate a post using a youtube video URL
          </DialogDescription>
        </DialogHeader>
        <GenerateForm />
      </DialogContent>
    </Dialog>
  );
};
