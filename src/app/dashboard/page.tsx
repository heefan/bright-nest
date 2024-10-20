'use client'

import { useEffect, useRef } from "react"
import { WavRecorder, WavStreamPlayer } from "../lib/wavtools/index.js"
import { WavRenderer } from "../utils/wav_renderer"

export default function Page() {


    const clientCanvasRef = useRef<HTMLCanvasElement>(null)
    const serverCanvasRef = useRef<HTMLCanvasElement>(null)

    const wavRecorderRef = useRef<WavRecorder>(
        new WavRecorder({ sampleRate: 24000 })
    )

    const wavStreamPlayerRef = useRef<WavStreamPlayer>(
        new WavStreamPlayer({ sampleRate: 24000 })
    )

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


    return (
        <div><canvas ref={clientCanvasRef}></canvas></div>


    )
}