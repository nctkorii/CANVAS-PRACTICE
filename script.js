        const myCanvas = document.getElementById("myDrawing");
        const myContext = myCanvas.getContext("2d");


        //head//
        myContext.fillStyle = "white";
        myContext.beginPath();
        myContext.arc(100*2.4, 90, 27, 0, Math.PI*2, true);
        myContext.fill();

        //mouth//

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(250, 100, 2, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(254, 97, 2, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(246, 103, 2, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(242, 104, 2, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(238, 104, 2, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(234, 104, 2, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(230, 100, 2, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(226, 97, 2, 0, Math.PI*2, true);
        myContext.fill();

        //torso//
        myContext.fillStyle = "white";
        myContext.beginPath();
        myContext.arc(100*2.4, 2*70, 35, 0 , Math.PI*2,true);
        myContext.fill();

        //lower body//
        myContext.fillStyle = "white";
        myContext.beginPath();
        myContext.arc(100*2.4, 2*92, 43, 0, Math.PI*2, true);
        myContext.fill();

        //eyes//
        myContext.fillStyle = "black";
        myContext.beginPath()
        myContext. arc(230, 80, 4, 0, Math.PI*2, true);
        myContext.fill();

        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(250, 80, 4, 0, Math.PI*2, true);
        myContext.fill();

        //nose//

        myContext.fillStyle = "orange";
        myContext.beginPath();
        myContext.moveTo(150*2, 90);
        myContext.lineTo(120*2, 90);
        myContext.lineTo(120*2, 80);
        myContext.fill();

        // hat // 
        
        myContext.fillStyle = "wheat";
        myContext.beginPath();
        myContext.rect(215, 15, 50, 50);
        myContext.fill();

        myContext.fillStyle = "red";
        myContext.beginPath();
        myContext.rect(190, 58, 100, 10);
        myContext.fill();



        