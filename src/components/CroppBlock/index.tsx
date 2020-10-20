import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// Increase pixel density for crop preview quality on retina screens.
const pixelRatio = window.devicePixelRatio || 1;

// We resize the canvas down when saving on retina devices otherwise the image
// will be double or triple the preview size.
function getResizedCanvas(canvas: any, newWidth: any, newHeight: any) {
  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx = tmpCanvas.getContext("2d");
  ctx &&
    ctx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      newWidth,
      newHeight
    );

  return tmpCanvas;
}

function generateDownload(previewCanvas: any, crop: any) {
  if (!crop || !previewCanvas) {
    return;
  }

  const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);

  canvas.toBlob(
    (blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.download = "cropPreview.png";
      anchor.href = URL.createObjectURL(blob);
      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    "image/png",
    1
  );
}

export default function CroppBlock() {
  const [upImg, setUpImg] = useState<string>("");
  const imgRef = useRef(null);
  const [onCompletedEdit, setOnCompletedEdit] = useState(null);
  const [onCompleted, setOnCompleted] = useState(false);

  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState<object>({
    unit: "px",
    width: 200,
    height: 200,
    aspect: 1 / 1,
  });
  const [completedCrop, setCompletedCrop] = useState<any>(null);

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader: any = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    const image: any = imgRef.current;
    const canvas: any = document.createElement('canvas');
    const crop: any = completedCrop;
    console.log(image);
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const onCloseEdit = (): void => {
    setOnCompleted(true);
    setOnCompletedEdit(imgRef.current);
  };

  return (
    <div className="CroppBlock">
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      {!onCompleted ? (
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
        />
      ) : (
        <div>
          <canvas
            ref={previewCanvasRef}
            // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
            style={{
              width: 800,
              height: 800,
            }}
          />
        </div>
      )}
      <button
        type="button"
        disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={onCloseEdit}
      >
        Download cropped image
      </button>
    </div>
  );
}
