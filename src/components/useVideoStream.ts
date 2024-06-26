import React, { useEffect } from 'react'

export const useVideoStream = (videoRef: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    let stream: MediaStream

    const startVideo = async (): Promise<void> => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error('Error accessing camera:', err)
      }
    }

    if (navigator.mediaDevices != null && navigator.mediaDevices.getUserMedia != null) {
      void startVideo()
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [videoRef])
}
