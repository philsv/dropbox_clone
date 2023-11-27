"use client"

import { useAppStore } from '@/store/store';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import toast from 'react-hot-toast';


function RenameModal() {
    const { user } = useUser();
    const [input, setInput] = useState("");

    const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
        useAppStore((state) => [
            state.isRenameModalOpen,
            state.setIsRenameModalOpen,
            state.fileId,
            state.setFileId,
        ]);

    const renameFile = async () => {
        if (!user || !fileId) return;

        const toastId = toast.loading("Renaming file...");

        try {
            await updateDoc(doc(db, "users", user.id, "files", fileId), {
            filename: input,
        });

        toast.success("File renamed!", { id: toastId });
        } catch (error) {
            console.log("Error renaming document: ", error);
            toast.error("Error renaming file!", { id: toastId });
        }

        setInput("");
        setIsRenameModalOpen(false);
    };

    return (
        <Dialog
            open={isRenameModalOpen}
            onOpenChange={(open) => {
                setIsRenameModalOpen(open);
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="pb-2">Rename the File</DialogTitle>

                    <Input
                        id="link"
                        //@ts-ignore
                        defaultValue={filename}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDownCapture={(e) => {
                            if (e.key === "Enter") {
                                renameFile();
                            }
                        }}
                    />

                    <div className='flex justify-end space-x-2 py-3'>
                        <Button
                            size="sm"
                            className="px-3"
                            variant={"ghost"}
                            onClick={() => setIsRenameModalOpen(false)}
                        >
                            <span className="sr-only">Cancel</span>
                            <span>Cancel</span>
                        </Button>

                        <Button
                            type="submit"
                            size="sm"
                            className="px-3"
                            onClick={() => renameFile()}
                        >
                            <span className="sr-only">Rename</span>
                            <span>Rename</span>
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default RenameModal