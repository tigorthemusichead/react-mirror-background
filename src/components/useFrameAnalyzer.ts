import React, { useEffect, useCallback } from 'react'

export const useFrameAnalyzer = (
  videoRef: React.RefObject<HTMLVideoElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  setLighting: (isLight: boolean) => void,
) => {
  const analyzeFrame = useCallback(() => {
    const context = canvasRef.current?.getContext('2d')

    if (
      videoRef.current &&
      context &&
      videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA &&
      canvasRef?.current != null
    ) {
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
      const frame = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
      const data = frame.data
      const length = data.length
      let r = 0,
        g = 0,
        b = 0

      for (let i = 0; i < length; i += 4) {
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
      }

      const pixelCount = length / 4
      r = Math.floor(r / pixelCount)
      g = Math.floor(g / pixelCount)
      b = Math.floor(b / pixelCount)

      const brightness = r * 0.299 + g * 0.587 + b * 0.114
      const isLight = brightness > 128

      // console.log(`Most used color is ${isLight ? 'light' : 'dark'}`);
      setLighting(isLight)

      setTimeout(() => {
        requestAnimationFrame(analyzeFrame)
      }, 1000)
    } else {
      setTimeout(() => {
        requestAnimationFrame(analyzeFrame)
      }, 1000)
    }
  }, [videoRef, canvasRef, setLighting])

  useEffect(() => {
    analyzeFrame()
  }, [analyzeFrame])
}
