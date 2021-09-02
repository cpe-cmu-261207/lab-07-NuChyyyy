import { clearCanvas, randomCanvasColor } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={() => clearCanvas()}>Clear</button>
      <button className="w-36" onClick={() => randomCanvasColor()}>Random color</button>
    </div>
  )
}

export default Utility