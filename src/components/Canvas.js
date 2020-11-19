import React, {useRef, useEffect} from 'react';
// import '../styles/jquery/jquery.min.js';
// import '../styles/bootstrap/js/bootstrap.bundle.min.js'

const Canvas = props => {

    // var canvas = document.getElementById("myCanvas"),
    // ctx = canvas.getContext("2d"),
    // particles = [],
    // patriclesNum = 200,
    // w = 400,
    // h = 400,
    // colors = ["#ea414b", "#28a678", "#df902a", "#c1a4d6", "#ffffff"];
  
    // canvas.width = 400;
    // canvas.height = 400;
    //  canvas.style.left = (window.innerWidth - 500) / 2 + "px";
    
    // if (window.innerHeight > 500)
    //   canvas.style.top = (window.innerHeight - 500) / 2 + "px";
    
    // function Factory() {
    //   this.x = Math.round(Math.random() * w);
    //   this.y = Math.round(Math.random() * h);
    //   this.rad = Math.round(Math.random() * 1) + 1;
    //   this.rgba = colors[Math.round(Math.random() * 3)];
    //   this.vx = Math.round(Math.random() * 3) - 1.5;
    //   this.vy = Math.round(Math.random() * 3) - 1.5;
    // }
  
    // function draw() {
    //   ctx.clearRect(0, 0, w, h);
    //   ctx.globalCompositeOperation = "lighter";
    //   for (var i = 0; i < patriclesNum; i++) {
    //     var temp = particles[i];
    //     var factor = 1;
        
    //     for (var j = 0; j < patriclesNum; j++) {
    //       var temp2 = particles[j];
    //       ctx.linewidth = 0.5;
        
    //       if (temp.rgba == temp2.rgba && findDistance(temp, temp2) < 50) {
    //         ctx.strokeStyle = temp.rgba;
    //         ctx.beginPath();
    //         ctx.moveTo(temp.x, temp.y);
    //         ctx.lineTo(temp2.x, temp2.y);
    //         ctx.stroke();
    //         factor++;
    //       }
    //     }
  
    //       ctx.fillStyle = temp.rgba;
    //       ctx.strokeStyle = temp.rgba;
        
    //       ctx.beginPath();
    //       ctx.arc(temp.x, temp.y, temp.rad * factor, 0, Math.PI * 2, true);
    //       ctx.fill();
    //       ctx.closePath();
        
    //       ctx.beginPath();
    //       ctx.arc(temp.x, temp.y, (temp.rad + 5) * factor, 0, Math.PI * 2, true);
    //       ctx.stroke();
    //       ctx.closePath();
        
    //       temp.x += temp.vx;
    //       temp.y += temp.vy;
        
    //       if (temp.x > w) temp.x = 0;
    //       if (temp.x < 0) temp.x = w;
    //       if (temp.y > h) temp.y = 0;
    //       if (temp.y < 0) temp.y = h;
    //     }
    // }
  
    // function findDistance(p1, p2) {
    //   return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    // }
  
    // window.requestAnimFrame = (function() {
    //   return (
    //     window.requestAnimationFrame ||
    //     window.webkitRequestAnimationFrame ||
    //     window.mozRequestAnimationFrame ||
    //     function(callback) {
    //       window.setTimeout(callback, 1000 / 60);
    //     }
    //   );
    // })();

    // (function init() {
    //   for (var i = 0; i < patriclesNum; i++) {
    //     particles.push(new Factory());
    //   }
    // })();

    // (function loop() {
    //   draw();
    //   requestAnimationFrame(loop);
    // })();

    // $(document).ready(function() {
    //   // Add smooth scrolling to all links in navbar + footer link
    //   $(".navbar a, footer a[href='#myPage']").on("click", function(event) {
    //     // Make sure this.hash has a value before overriding default behavior
    //     if (this.hash !== "") {
    //       // Prevent default anchor click behavior
    //       event.preventDefault();
        
    //       // Store hash
    //       var hash = this.hash;
        
    //       // Using jQuery's animate() method to add smooth page scroll
    //       // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    //       $("html, body").animate(
    //         {
    //           scrollTop: $(hash).offset().top
    //         },
    //         900,
    //         function() {
    //           // Add hash (#) to URL when done scrolling (default click behavior)
    //           window.location.hash = hash;
    //         }
    //       );
    //     } // End if
    //   });
    
    //   $(window).scroll(function() {
    //     $(".slideanim").each(function() {
    //       var pos = $(this).offset().top;
        
    //       var winTop = $(window).scrollTop();
    //       if (pos < winTop + 600) {
    //         $(this).addClass("slide");
    //       }
    //     });
    //   });
    // });

    const canvasRef = useRef(null);

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }, [draw])

    return (
        <canvas ref={canvasRef} {...props} />
        // <>
        //     <canvas id= "myCanvas" style="margin-top: 45px"></canvas>
        // </>
    )
}

export default Canvas;