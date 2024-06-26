import React, { useRef } from 'react'
import { useVideoStream } from './useVideoStream'
import { useFrameAnalyzer } from './useFrameAnalyzer'

interface IMirrorProps {
  setLighting: (isLight: boolean) => void
}

const Mirror: React.FC<IMirrorProps> = ({ setLighting }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useVideoStream(videoRef)
  useFrameAnalyzer(videoRef, canvasRef, setLighting)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <canvas ref={canvasRef} width='640' height='480' style={{ display: 'none' }}></canvas>
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(-1,1)',
        }}
        muted
        autoPlay
      />
    </div>
  )
}

export default Mirror
