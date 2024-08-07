"use client";

import { useEffect, useState } from "react";
import { LiveKitRoom, VideoConference } from "@livekit/components-react"
import "@livekit/components-styles";
import { useParams, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

interface MediaRoomProps {
    chatId: string;
    video: boolean;
    audio: boolean;
    serverId?: string;
};

export const MediaRoom = ({
    chatId,
    video,
    audio,
    serverId
}: MediaRoomProps) => {
    const {user} = useUser();
    const [token, setToken] = useState("");
    const router = useRouter();

    useEffect(() => {
        if(!user?.firstName || !user?.lastName) return;

        const name = `${user.firstName} ${user.lastName}`;

        (async () => {
            try {
                const res = await fetch(`/api/livekit?room=${chatId}&username=${name}`);
                const data = await res.json();
                setToken(data.token);
            } catch (error) {
                console.log(error);
            }
        })()
    },[user?.firstName, user?.lastName, chatId])

    const handleDisconnect = async () => {
        router.push(`/servers/${serverId}/`); 
    };

    if(token === "") {
        return (
            <div className="flex flex-col flex-1 items-center justify-center">
                <Loader2 
                className="h-7 w-7 text-zinc-500 animate-spin my-4"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <LiveKitRoom
        data-lk-theme="default"
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        token={token}
        connect={true}
        video={video}
        audio={audio}
        onDisconnected={handleDisconnect}
        >
            <VideoConference />
        </LiveKitRoom>
    )
}