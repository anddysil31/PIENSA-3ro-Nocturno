// import React, {useRef, useEffect} from 'react';

import React, {useRef, useEffect } from "react"

// const canvasHome = props => {
//     const [canvasContext, setCanvasContext] = useState(null);
//     const canvasRef = useRef(null)
//     const getRail = () =>{
//         for(let i = 1; i<=canvas.width/100; i++){
//             let x = [i]*95;
//             position.push(x);
//         }
//     }

//     const draw = (ctx,x,y,h,dy) =>{
//         ctx.beginPath();
//         ctx.fillRect(this.x, this.y, this.h, this.k)
//         ctx.stroke();
//     }
//     useEffect(()=>{
    
//     const canvas = canvasRef.current;
// 	const ctx = canvas.getContext("2d");
//     setCanvasContext(ctx)
//     }, [canvasRef]);

//     return <canvas ref={canvasRef}{...props}/>
// }
// export default canvasHome 

// class Rail extends React.Component{

//     constructor(props){
//         super(props);
//         this.width = this.props.width;
//     }
//     getRail(){
        
//     }

// }
// <Rail />

function resizeCanvasToDisplaySize(canvas){
  const {width, height} = canvas.getBoundingClientRect()

  if(canvas.width !== width || canvas.height !== height){
    canvas.width = width
    canvas.height = height
    return true
  }

  return false
}

 




const Canvas = props =>{
    const canvasRef = useRef(null)
    // let position = [10,40,70,100,130,160,190,210,240,270]
    // let velocity = [0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75]
    const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.fillRect(10,2*frameCount,2,10)}

    const draw1 = (ctx, frameCount) => {
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.fillRect(40,0.5*frameCount,2,10)}
        
      
   
    useEffect(()=>{
        const canvas = canvasRef.current;
        if(!canvas){
          return ;
        }

        resizeCanvasToDisplaySize(canvas)
    
        const ctx = canvas.getContext('2d');
        if(!ctx){
          return;
        }

       
          
        let frameCount = 0
            let animationFrameId
            
            //Our draw came here
            const render = () => {
              frameCount++
              draw(ctx, frameCount)
              draw1(ctx,frameCount)
             
              animationFrameId = window.requestAnimationFrame(render)
            }
            render()
            
            return () => {
              window.cancelAnimationFrame(animationFrameId)
            }
          }, [draw])
          

    return <canvas ref={canvasRef} {...props}/>
    
} 
export default Canvas;

