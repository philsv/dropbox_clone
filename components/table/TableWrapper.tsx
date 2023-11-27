"use client";

import { db } from '@/firebase';
import { FileType } from '@/typings';
import { useUser } from '@clerk/nextjs';
import { collection, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Button } from '../ui/button';
import { DataTable } from './Table';
import { columns } from './columns';
import { Skeleton } from '@/components//ui/skeleton';

function TableWrapper(
    { skeletonFiles }: Readonly<{ skeletonFiles: FileType[] }>) {
    const { user } = useUser();
    const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
    const [sort, setSort] = useState<"asc" | "desc">("desc");

    const [docs] = useCollection(
        user &&
        query(
            collection(db, "users", user.id, "files"),
            orderBy("timestamp", sort)
        )
    );

    useEffect(() => {
        if (!docs) return;

        const files: FileType[] = docs.docs.map(doc => ({
            id: doc.id,
            filename: doc.data().fileName || doc.id,
            timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
            fullName: doc.data().fullName,
            downloadURL: doc.data().downloadURL,
            type: doc.data().type,
            size: doc.data().size,
        }));

        setInitialFiles(files);
    }, [docs]);

    if (docs?.docs.length === undefined) return (
        <div className='flex flex-col'>
            <Button
                className="ml-auto w-36 h-10 mb-5"
                variant={"outline"}>
                <Skeleton className="h-5 w-full" />
            </Button>

            <div className="border rounded-lg">
                <div className="border-b h-12" />
                {skeletonFiles.map((file) => (
                    <div
                        key={file.id}
                        className="flex item-center space-x-4 p-5 w-full"
                    >
                        <Skeleton className="h-12 w-12" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                ))}

                {skeletonFiles.length === 0 && (
                    <div className="flex item-center space-x-4 p-5 w-full">
                        <Skeleton className="h-12 w-12" />
                        <Skeleton className="h-12 w-full" />
                    </div>

                )}
            </div>
        </div>
    );

    return (
        <div className="flex flex-col space-y-5 pb-10">
            <Button
                className="ml-auto w-fit"
                variant={"outline"}
                onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
            >
                Sort By {sort === "desc" ? "Newest" : "Oldest"}
            </Button>

            <DataTable columns={columns} data={skeletonFiles} />
        </div>
    );
}

export default TableWrapper