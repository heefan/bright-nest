'use client'

import { Button } from "@/components/ui/button"
import { RealtimeClient } from "@openai/realtime-api-beta"
import { ItemType } from "@openai/realtime-api-beta/dist/lib/client.js"
import { X, Zap } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { WavRecorder, WavStreamPlayer } from "../lib/wavtools/index.js"
import { WavRenderer } from "../utils/wav_renderer"
import { RealtimeEvent } from "./type.js"

export default function Page() {

    //render when user's voice 
    const clientCanvasRef = useRef<HTMLCanvasElement>(null)
    //render when system's voice 
    const serverCanvasRef = useRef<HTMLCanvasElement>(null)

    const apiKey: string = process.env.NEXT_PUBLIC_OPENAI_API_KEY || ''
    const clientRef = useRef<RealtimeClient>(
        new RealtimeClient(
            {
                apiKey: apiKey,
                dangerouslyAllowAPIKeyInBrowser: true
            }
        )
    )

    const startTimeRef = useRef<string>(new Date().toISOString())

    const wavRecorderRef = useRef<WavRecorder>(
        new WavRecorder({ sampleRate: 24000 })
    )

    const wavStreamPlayerRef = useRef<WavStreamPlayer>(
        new WavStreamPlayer({ sampleRate: 24000 })
    )

    const [isConnected, setIsConnected] = useState(false)
    const [items, setItems] = useState<ItemType[]>([])
    const [realtimeEvents, setRealtimeEvents] = useState<RealtimeEvent[]>([])

    useEffect(() => {
        const clientCanvas = clientCanvasRef.current
        const serverCanvas = serverCanvasRef.current
        const wavRecorder = wavRecorderRef.current
        const WavStreamPlayer = wavStreamPlayerRef.current

        let clientCtx: CanvasRenderingContext2D | null = null

        if (clientCanvas) {
            if (!clientCanvas.width || !clientCanvas.height) {
                clientCanvas.width = clientCanvas.offsetHeight
                clientCanvas.height = clientCanvas.offsetHeight
            }

            clientCtx = clientCtx || clientCanvas.getContext('2d')
            if (clientCtx) {
                clientCtx.clearRect(0, 0, clientCanvas.width, clientCanvas.height)
                const result = wavRecorder.recording
                    ? wavRecorder.getFrequencies('voice')
                    : { values: new Float32Array([0]) }

                WavRenderer.drawBars(clientCanvas, clientCtx, result.values, '#0099ff', 10, 0, 8)
            }
        }
    }, [])


    const connectConversation = useCallback(async () => {

        const client = clientRef.current
        const wavRecorder = wavRecorderRef.current
        const wavStreamPlayer = wavStreamPlayerRef.current

        // set state variables
        startTimeRef.current = new Date().toISOString()
        setIsConnected(true)
        setRealtimeEvents([])
        setItems(client.conversation.getItems())

        // connect to microphone
        await wavRecorder.begin()

        // connect to audio output 
        await wavStreamPlayer.connect()

        // connect to realtime Api
        await client.connect()

        client.sendUserMessageContent(
            [{
                type: `input_text`,
                text: `hello!`
            }]
        )

        if (client.getTurnDetectionType() === 'server_vad') {
            await wavRecorder.record((data) => client.appendInputAudio(data.mono))
        }

    }, [])


    const disconnectConversation = useCallback(async () => {
        setIsConnected(false)
        setRealtimeEvents([])
        setItems([])

        const client = clientRef.current
        client.disconnect()

        const wavRecorder = wavRecorderRef.current
        await wavRecorder.end()

        const wavStreamPlayer = wavStreamPlayerRef.current
        await wavStreamPlayer.interrupt()
    }, [])

    return (
        <div>
            <canvas ref={clientCanvasRef}></canvas>
            <Button

                variant={isConnected ? 'destructive' : 'default'}
                onClick={isConnected ? disconnectConversation : connectConversation}>
                {isConnected ? (
                    <>
                        disconnect
                        <X className="ml-2 h-4 w-4" />
                    </>
                ) : (
                    <>
                        <Zap className="mr-2 h-4 w-4" />
                        connect
                    </>
                )}

            </Button>
        </div>
    )
}