import React from "react";
import ResizableRect from "react-resizable-rotatable-draggable";

interface IState {
  width: number;
  height: number;
  top: number;
  left: number;
  rotateAngle?: number;
}
interface IResizableBlock {
  children: React.ReactNode;
}

const ResizableBlock: React.FC<IResizableBlock> = ({ children }) => {
  const [state, setState] = React.useState<IState>({
    width: 100,
    height: 100,
    top: 100,
    left: 100,
    rotateAngle: 0,
  });

  const handleResize = (style: IState) => {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { top, left, width, height } = style;
    top = Math.round(top);
    left = Math.round(left);
    width = Math.round(width);
    height = Math.round(height);
    setState({
      top,
      left,
      width,
      height,
    });
  };

  const handleRotate = (rotateAngle: number) => {
    setState({
      ...state,
      rotateAngle,
    });
  };

  const handleDrag = (deltaX: number, deltaY: number) => {
    setState({
      ...state,
      left: state.left + deltaX,
      top: state.top + deltaY,
    });
  };
  return (
    <ResizableRect
      left={state.left}
      top={state.top}
      width={state.width}
      height={state.height}
      rotateAngle={state.rotateAngle}
      // aspectRatio={false}
      // minWidth={10}
      // minHeight={10}
      zoomable="n, w, s, e, nw, ne, se, sw"
      // rotatable={true}
      // onRotateStart={this.handleRotateStart}
      onRotate={handleRotate}
      // onRotateEnd={this.handleRotateEnd}
      // onResizeStart={this.handleResizeStart}
      onResize={handleResize}
      // onResizeEnd={this.handleUp}
      // onDragStart={this.handleDragStart}
      onDrag={handleDrag}
      // onDragEnd={this.handleDragEnd}
    >
      {children}
    </ResizableRect>
  );
};

export default ResizableBlock;
