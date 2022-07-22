import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import * as cocoSSD from "@tensorflow-models/coco-ssd"
import * as tf from "@tensorflow/tfjs"
import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import Webcam from "react-webcam"
import "@tensorflow/tfjs-backend-cpu"

const Home: NextPage = () => {
  let video: any = null

  /*
VIEJO
if (typeof window !== "undefined") {
    video = document.getElementById("vid")
  }

  const webcam_init = () => {
    if (typeof navigator !== "undefined" && typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: { facingMode: "use" },
        })
        .then((stream) => {
          if (video !== null) {
            video.srcObject = stream
            video.onloadedmetadata = () => {
              video.play()
            }
          }
        })
    }
  }

  const predictWithCocoModel = async () => {
    const model = await cocoSSD.load()
    detectFrame(video, model)
  }

  const detectFrame = (video: any, model: any) => {
    model.detect(video).then((predictions: any) => {
      renderPredictions(() => {
        detectFrame(video, model)
      })
    })
  }

  const renderPredictions = (predictions: any) => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement

    const ctx = canvas.getContext("2d")
    canvas.width = 300
    canvas.height = 300
    ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    //fonts
    const font = "16px sans-serif"
    if (ctx !== null) {
      ctx.font = font
      ctx.textBaseline = "top"
      ctx.drawImage(video, 0, 0, 300, 300)
    }

    predictions.forEach((prediction: any) => {
      //bounding boxes coordinates and sizes
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]
      const width = prediction.bbox[2]
      const height = prediction.bbox[3]

      if (ctx !== null) {
        //bounding box style
        ctx.strokeStyle = "#00FFFF"
        ctx.lineWidth = 2

        //draw bounding boxes
        ctx.strokeRect(x, y, width, height)

        //label background
        ctx.fillStyle = "#00FFFF"
        const textWidth = ctx.measureText(prediction.class).width
        const textHeight = parseInt(font, 10)
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
      }
    })

    predictions.forEach((prediction: any) => {
      //write prediction class names
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]

      if (ctx !== null) {
        ctx.fillStyle = "#000000"
        ctx.fillText(prediction.class, x, y)
      }
    })
  }

  const ng0Init = () => {
    webcam_init()
    predictWithCocoModel()
  }

  ng0Init()
  */

  /*

  const [model, setModel] = useState<any>()

  const loadModel = async () => {
    try {
      const model = await cocoSSD.load()
      setModel(model)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    tf.ready().then(() => {
      loadModel()
    })
  }, [])

  //webcam
  const webcamRef = useRef(null)
  const [videoWidth, setVideoWidth] = useState(300)
  const [videoHeight, setVideoHeight] = useState(300)

  const videoConstraints = {
    height: 400,
    width: 400,
    facingMode: "environment",
  }

  const prefictionFunction = async () => {
    const predictions = await model.detect(webcamRef.current)
    console.log(predictions)
  }

  if (typeof window !== "undefined") {
    video = document.getElementById("vid")
  }

  const webcam_init = () => {
    if (typeof navigator !== "undefined" && typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: { facingMode: "use" },
        })
        .then((stream) => {
          if (video !== null) {
            video.srcObject = stream
            video.onloadedmetadata = () => {
              video.play()
            }
          }
        })
    }
  }

  const predictWithCocoModel = async () => {
    const model = await cocoSSD.load()
    detectFrame(video, model)
  }

  const detectFrame = (video: any, model: any) => {
    model.detect(video).then((predictions: any) => {
      renderPredictions(() => {
        detectFrame(video, model)
      })
    })
  }

  const renderPredictions = (predictions: any) => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement

    const ctx = canvas.getContext("2d")
    canvas.width = 300
    canvas.height = 300
    ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    //fonts
    const font = "16px sans-serif"
    if (ctx !== null) {
      ctx.font = font
      ctx.textBaseline = "top"
      ctx.drawImage(video, 0, 0, 300, 300)
    }

    predictions.forEach((prediction: any) => {
      //bounding boxes coordinates and sizes
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]
      const width = prediction.bbox[2]
      const height = prediction.bbox[3]

      if (ctx !== null) {
        //bounding box style
        ctx.strokeStyle = "#00FFFF"
        ctx.lineWidth = 2

        //draw bounding boxes
        ctx.strokeRect(x, y, width, height)

        //label background
        ctx.fillStyle = "#00FFFF"
        const textWidth = ctx.measureText(prediction.class).width
        const textHeight = parseInt(font, 10)
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
      }
    })

    predictions.forEach((prediction: any) => {
      //write prediction class names
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]

      if (ctx !== null) {
        ctx.fillStyle = "#000000"
        ctx.fillText(prediction.class, x, y)
      }
    })
  }

  const ng0Init = () => {
    webcam_init()
    predictWithCocoModel()
  }

  ng0Init()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose"></Script>

      <main className={styles.main}>
        <h1>PRUEBA TENSOR FLOW</h1>
        <video hidden id="vid" width="300" height="300"></video>
        <canvas id="canvas"></canvas>
      </main>
    </div>
  )

  */

  const videoRef =
    useRef<HTMLVideoElement>() as React.MutableRefObject<HTMLVideoElement>
  const canvasRef =
    useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>

  const webcam_init = () => {
    if (typeof navigator !== "undefined" && typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: { facingMode: "user" },
        })
        .then((stream) => {
          if (videoRef !== undefined && videoRef.current !== undefined) {
            videoRef.current.srcObject = stream
            videoRef.current.onloadeddata = () => {
              videoRef.current.play()
            }
            /*
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play()
              console.log("PLay?")
            }*/
          }
        })
    }
  }

  const predictWithCocoModel = async () => {
    if (videoRef !== undefined) {
      const model = await cocoSSD.load()
      detectFrame(videoRef.current, model)
    }
  }

  const detectFrame = (
    video: HTMLVideoElement,
    model: cocoSSD.ObjectDetection
  ) => {
    if (video && model) {
      model.detect(video).then((predictions) => {
        renderPredictions(predictions)
        requestAnimationFrame(() => detectFrame(video, model))
      })
    } else console.log("NO ES UN HTMLVIDEO ")
  }

  const renderPredictions = (predictions: any) => {
    if (canvasRef !== null && canvasRef.current !== undefined) {
      const ctx = canvasRef.current.getContext("2d")
      if (ctx !== null) {
        canvasRef.current.width = 300
        canvasRef.current.height = 300
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        //fonts
        const font = "16px sans-serif"
        ctx.font = font
        ctx.textBaseline = "top"
        ctx.drawImage(videoRef.current, 0, 0, 300, 300)

        predictions.forEach((prediction: any) => {
          //bounding boxes coordinates and sizes
          const x = prediction.bbox[0]
          const y = prediction.bbox[1]
          const width = prediction.bbox[2]
          const height = prediction.bbox[3]

          //bounding box style
          ctx.strokeStyle = "#00FFFF"
          ctx.lineWidth = 2

          //draw bounding boxes
          ctx.strokeRect(x, y, width, height)

          //label background
          ctx.fillStyle = "#00FFFF"
          const textWidth = ctx.measureText(prediction.class).width
          const textHeight = parseInt(font, 10)
          ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
        })

        predictions.forEach((prediction: any) => {
          //write prediction class names
          const x = prediction.bbox[0]
          const y = prediction.bbox[1]

          ctx.fillStyle = "#000000"
          ctx.fillText(prediction.class, x, y)
        })
      }
    }
  }

  const ng0Init = () => {
    if (
      typeof navigator !== "undefined" &&
      typeof window !== "undefined" &&
      videoRef !== undefined &&
      canvasRef !== undefined
    ) {
      webcam_init()
      predictWithCocoModel()
    }
  }

  ng0Init()

  return (
    <div className="App">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose"></Script>
      <main>
        <h1>PRUEBA TENSOR FLOW</h1>
        <video ref={videoRef} hidden width="300" height="300"></video>
        <canvas ref={canvasRef}></canvas>
      </main>
    </div>
  )
}

export default Home
