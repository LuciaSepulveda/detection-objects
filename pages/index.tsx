import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import * as cocoSSD from "@tensorflow-models/coco-ssd"
import * as tf from "@tensorflow/tfjs"
import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import Webcam from "react-webcam"
import "@tensorflow/tfjs-backend-cpu"
//new
import "@mediapipe/face_detection"
import "@tensorflow/tfjs-core"
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl"
import * as faceDetection from "@tensorflow-models/face-detection"

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

  const imageRef = useRef<HTMLImageElement>() as React.MutableRefObject<HTMLImageElement>

  const webcam_init = () => {
    if (typeof navigator !== "undefined" && typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: { facingMode: "user" },
        })
        .then((stream) => {
          if (
            videoRef !== null &&
            videoRef !== undefined &&
            videoRef.current !== undefined
          ) {
            videoRef.current.srcObject = stream
            videoRef.current.addEventListener("loadeddata", (e) => {
              console.log("Loaded")
              predictWithCocoModel()
              videoRef.current.play()
            })
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
    if (videoRef !== null && videoRef !== undefined) {
      const model = await cocoSSD.load()
      const newModel = await faceDetection.SupportedModels.MediaPipeFaceDetector
      /*
      setInterval(() => {
        detectFrame(videoRef.current, model)
      }, 500)
*/
      const detector = await faceDetection.createDetector(
        newModel,
        { runtime: "tfjs"}
      )
      setInterval(() => {
        newDetect(videoRef.current, detector)
      }, 500)
    }
  }

  let counter = 0
  const newDetect = (video: any, model: any) => {
    if (video && model) {
      model.estimateFaces(video).then((predictions: any) => {
        newRender(predictions)
        requestAnimationFrame(() => newDetect(video, model))
      })
    } else console.log("NO ES UN HTMLVIDEO ")
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

  const newRender = (predictions: any) => {
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
          const x = prediction.box.xMin
          const y = prediction.box.yMin
          const width = prediction.box.width
          const height = prediction.box.height

          //bounding box style
          ctx.strokeStyle = "#00FFFF"
          ctx.lineWidth = 2

          //draw bounding boxes
          ctx.strokeRect(x, y, width, height)

          //label background
        })

        predictions.forEach((prediction: any) => {
          //write prediction class names
          const x = prediction.keypoints[0].x
          const y = prediction.keypoints[0].y

          ctx.drawImage(imageRef.current, x, y, 30, 30)

          ctx.fillStyle = "#000000"
          //ctx.fillText(prediction.keypoints[0].name, x, y)
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
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ margin: "auto", marginBottom: "20px", marginTop: "20px" }}>
          PRUEBA TENSOR FLOW
        </h1>
        <img id="image" ref={imageRef} style={{ display: "none" }} src="/diamante.png" />
        <div
          style={{
            width: "300px",
            height: "300px",
            margin: "auto",
          }}
        >
          <video
            autoPlay
            ref={videoRef}
            hidden
            width="300"
            height="300"
          ></video>
          <canvas ref={canvasRef}></canvas>
        </div>
      </main>
    </div>
  )
}

export default Home
