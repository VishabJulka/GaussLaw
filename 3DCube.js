window.onload=function(){
    //access canvas and its context
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // var redoo = document.getElementById("redoo");
    var changefield =0;
    
    var valueofcharge = 1.0;
    var chargevalue = document.getElementById("chargevalue");
    var slider = document.getElementById("sphereRadius");
    var slider1 = document.getElementById("charge1");
    var check = 0;
    var check1 = 0;
    var a = 'red';
    var distance = 75;
    var intialchange = 0;
    var step=Math.PI/4320;
    
    
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.strokeStyle = 'rgba(0,153,255,1)';
    
    
    //set initial angles for cubes position
    var Qx=Math.PI/4;
    var Qy=Math.PI/3;
    var Qz=Math.PI/4;
    var dx=0;
    var dy=0;
    var dz=0;
    
    //length of the cube edges
    var SIZE=90;
    //array that will hold all the cube vertices
    var vertices=[];
    
    //utility function
    function addPoint(x,y,z) {
        return [x,y,z]
    }
    
    //create the vertices of the cube and put them in their array
    vertices.push(addPoint(SIZE,SIZE,SIZE));  //1
    vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2
    vertices.push(addPoint(-SIZE,-SIZE,SIZE)); //3
    vertices.push(addPoint(SIZE,-SIZE,SIZE));  //4
    
    vertices.push(addPoint(SIZE,SIZE,SIZE)); //5 && //1
    vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6
    vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7 
    vertices.push(addPoint(-SIZE,-SIZE,-SIZE)); //8
   

    vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9
    vertices.push(addPoint(SIZE,SIZE,-SIZE)); //10 && //6
    vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //11 && //9
    vertices.push(addPoint(SIZE,-SIZE,SIZE)); //12 && //4
    
    vertices.push(addPoint(-SIZE,-SIZE,SIZE)); //13 && //3
    vertices.push(addPoint(-SIZE,-SIZE,-SIZE)); //14 && //8
    vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //15  && //7
    vertices.push(addPoint(-SIZE,SIZE,SIZE)); //16 && //2


    //Trying the center
    vertices.push(addPoint(0,0,0)); //center point  //17

    //For arrow 1
    vertices.push(addPoint(SIZE,0,0)); //center of side 1,6,9,4   //18
    //arrow of this point
    vertices.push(addPoint(80,0,5)); //19
    vertices.push(addPoint(80,0,-5)); //20

    //For arrow 2
    vertices.push(addPoint(0,0,SIZE));  //center of side 1,2,3,4  //21
    //arrow of this point 
    vertices.push(addPoint(5,0,80)); //22
    vertices.push(addPoint(-5,0,80)); //23

    //For arrow 3
    vertices.push(addPoint(-SIZE,0,0)); //center of side 7,8,3,2  //24
    //arrow of this point 
    vertices.push(addPoint(-80,0,5)); //25
    vertices.push(addPoint(-80,0,-5)); //26

    //For arrow 4
    vertices.push(addPoint(0,0,-SIZE)); //center of side 8,7,6,9 //27
    //arrow of this point 
    vertices.push(addPoint(5,0,-80)); //28
    vertices.push(addPoint(-5,0,-80)); //29

    //Since there are 7 arrows max in each quadrant lets start 
    //1st quadrant
    



    //Right partition of 1st quadrant
    //center line
    //1st line of 1st quadrant
    vertices.push(addPoint(SIZE,0,SIZE)); //center of line 1 &4   //30
    //arrow of this point
    vertices.push(addPoint(85,0,80)); //31
    vertices.push(addPoint(80,0,85)); //32

    //2nd line of 1st quadrant
    vertices.push(addPoint(SIZE,0,68)); //33
    //arrow of this point
    vertices.push(addPoint(85,0,58)); //34
    vertices.push(addPoint(80,0,67)); //35

    //3rd line of 1st quadrant
    vertices.push(addPoint(SIZE,0,46)); //36
    //arrow of this point
    vertices.push(addPoint(85,0,36)); //37
    vertices.push(addPoint(80,0,47)); //38

    //4th line of the 1st quadrant
    vertices.push(addPoint(SIZE,0,24)); //39
    //arrow of this point 
    vertices.push(addPoint(85,0,16)); //40
    vertices.push(addPoint(80,0,27)); //41

    //Left Partition of 1st quadrant
    //5th line of 1st quadrant
    vertices.push(addPoint(68,0,SIZE)); //42
    //arrow of this point 
    vertices.push(addPoint(58,0,85)); //43
    vertices.push(addPoint(67,0,80)); //44

    //6th line of 1st quadrant
    vertices.push(addPoint(46,0,SIZE)); //45
    //arrow of this point 
    vertices.push(addPoint(36,0,85)); //46
    vertices.push(addPoint(47,0,80)); //47

    //7th line of 1st quadrant
    vertices.push(addPoint(24,0,SIZE)); //48
    //arrow of this point 
    vertices.push(addPoint(16,0,85)); //49
    vertices.push(addPoint(27,0,80)); //50






    //2nd quadrant
    //center line
    //1st line of 2nd quadrant
    vertices.push(addPoint(-SIZE,0,SIZE)); //center of line 2 & 3     //51
    //arrow of this point 
    vertices.push(addPoint(-85,0,80)); //52
    vertices.push(addPoint(-80,0,85)); //53

    //2nd line of 2nd quadrant
    vertices.push(addPoint(-SIZE,0,68)); //54
    //arrow of this point
    vertices.push(addPoint(-85,0,58)); //55
    vertices.push(addPoint(-80,0,67)); //56

    //3rd line of 2nd quadrant
    vertices.push(addPoint(-SIZE,0,46)); //57
    //arrow of this point
    vertices.push(addPoint(-85,0,36)); //58
    vertices.push(addPoint(-80,0,47)); //59

    //4th line of the 2nd quadrant
    vertices.push(addPoint(-SIZE,0,24)); //60
    //arrow of this point 
    vertices.push(addPoint(-85,0,16)); //61
    vertices.push(addPoint(-80,0,27)); //62

    //Left Partition of 2nd quadrant
    //5th line of 2nd quadrant
    vertices.push(addPoint(-68,0,SIZE)); //63
    //arrow of this point 
    vertices.push(addPoint(-58,0,85)); //64
    vertices.push(addPoint(-67,0,80)); //65

    //6th line of 2nd quadrant
    vertices.push(addPoint(-46,0,SIZE)); //66
    //arrow of this point 
    vertices.push(addPoint(-36,0,85)); //67
    vertices.push(addPoint(-47,0,80)); //68

    //7th line of 2nd quadrant
    vertices.push(addPoint(-24,0,SIZE)); //69
    //arrow of this point 
    vertices.push(addPoint(-16,0,85)); //70
    vertices.push(addPoint(-27,0,80)); //71



    //3rd quadrant
    //center line
    //1st line of 3rd quadrant
    vertices.push(addPoint(-SIZE,0,-SIZE)); //center line of 7 & 8  //72
    //arrow of this point 
    vertices.push(addPoint(-85,0,-80)); //73
    vertices.push(addPoint(-80,0,-85)); //74

    //2nd line of 3rd quadrant
    vertices.push(addPoint(-SIZE,0,-68)); //75
    //arrow of this point
    vertices.push(addPoint(-85,0,-58)); //76
    vertices.push(addPoint(-80,0,-67)); //77

    //3rd line of 3rd quadrant
    vertices.push(addPoint(-SIZE,0,-46)); //78
    //arrow of this point
    vertices.push(addPoint(-85,0,-36)); //79
    vertices.push(addPoint(-80,0,-47)); //80

    //4th line of the 3rd quadrant
    vertices.push(addPoint(-SIZE,0,-24)); //81
    //arrow of this point 
    vertices.push(addPoint(-85,0,-16)); //82
    vertices.push(addPoint(-80,0,-27)); //83

    //Left Partition of 3rd quadrant
    //5th line of 3rd quadrant
    vertices.push(addPoint(-68,0,-SIZE)); //84
    //arrow of this point 
    vertices.push(addPoint(-58,0,-85)); //85
    vertices.push(addPoint(-67,0,-80)); //86

    //6th line of 3rd quadrant
    vertices.push(addPoint(-46,0,-SIZE)); //87
    //arrow of this point 
    vertices.push(addPoint(-36,0,-85)); //88
    vertices.push(addPoint(-47,0,-80)); //89

    //7th line of 3rd quadrant
    vertices.push(addPoint(-24,0,-SIZE)); //90
    //arrow of this point 
    vertices.push(addPoint(-16,0,-85)); //91
    vertices.push(addPoint(-27,0,-80)); //92


    //4th quadrant
    //center line
    //1st line of 4th quadrant  
    vertices.push(addPoint(SIZE,0,-SIZE)); //93
    //arrow of this point
    vertices.push(addPoint(85,0,-80)); //94
    vertices.push(addPoint(80,0,-85)); //95

    //2nd line of 4th quadrant
    vertices.push(addPoint(SIZE,0,-68)); //96
    //arrow of this point
    vertices.push(addPoint(85,0,-58)); //97
    vertices.push(addPoint(80,0,-67)); //98

    //3rd line of 4th quadrant
    vertices.push(addPoint(SIZE,0,-46)); //99
    //arrow of this point
    vertices.push(addPoint(85,0,-36)); //100
    vertices.push(addPoint(80,0,-47)); //101

    //4th line of the 4th quadrant
    vertices.push(addPoint(SIZE,0,-24)); //102
    //arrow of this point 
    vertices.push(addPoint(85,0,-16)); //103
    vertices.push(addPoint(80,0,-27)); //104

    //Left Partition of 4th quadrant
    //5th line of 4th quadrant
    vertices.push(addPoint(68,0,-SIZE)); //105
    //arrow of this point 
    vertices.push(addPoint(58,0,-85)); //106
    vertices.push(addPoint(67,0,-80)); //107

    //6th line of 4th quadrant
    vertices.push(addPoint(46,0,-SIZE)); //108
    //arrow of this point 
    vertices.push(addPoint(36,0,-85)); //109
    vertices.push(addPoint(47,0,-80)); //110

    //7th line of 4th quadrant
    vertices.push(addPoint(24,0,-SIZE)); //111
    //arrow of this point 
    vertices.push(addPoint(16,0,-85)); //112
    vertices.push(addPoint(27,0,-80)); //113

    
    drawCube();
    
    //event listener on the keyboard
    window.addEventListener("keydown", checkIfKeyPressed, false);
    // redoo.addEventListener("click",drawCube);
    // charge.addEventListener("click",chargeIncrease);

    // function chargeIncrease()
    // {
    //     changefield = changefield +1;
    //     valueofcharge = valueofcharge + 0.1;
    //     chargevalue.innerHTML = valueofcharge.toFixed(1);
    //     updateCube();
    // }
    
    
    //check if up down right left a z keys have been pressed
    //increment or decrement the respective x,y,z rotational parameters
    function checkIfKeyPressed(e) {
        var step=Math.PI/4320;
        
        if (e.keyCode == "39") {//right key
            // dy=dy+step;
            // rotation.y = rotation.y + step;
            
        }
        else if(e.keyCode == "37") {//left key
                // dy=dy-step;
                // rotation.y = rotation.y - step;
                
        }
        else if (e.keyCode == "40") {//up key
                // dx=dx+step;
                // rotation.x = rotation.x + step;
                
        }
        else if(e.keyCode == "38") {//down key
                // dx=dx-step;
                // rotation.x = rotation.x - step;
                
        }
        else if (e.keyCode=="65") {//a key
                // dz=dz+step;
                // rotation.z = rotation.z + step;
                
        }
        else if (e.keyCode=="90") {//z key
                // dz=dz-step;
                // rotation.z = rotation.z - step;
                
        };
        
        e.preventDefault();//in case up down accidentally interpreted for scrolling
        updateCube();
        
        
    
    }
    
    //function that updates the cube 
    function updateCube(){
        var rate=0.999;//this parameter is responsible for the slow dying off effect of rotations
        
        dx=t=rate*dx;
        // rotation.x = rate*rotation.x;
        Qx=Qx+dx;
        dy=rate*dy;
        // rotation.y = rate*rotation.y;
        Qy=Qy+dy;
        dz=rate*dz;
        // rotation.z = rate*rotation.z;
        Qz=Qz+dz;
        drawCube();
            
        //console.log("Qx,Qy,Qz",Qx,Qy,Qz)
        //console.log("dx,dy,dz",dx,dy,dz)
        
        //key operation to create an animation.  This is what gives the sustaining movement.
        window.requestAnimationFrame(updateCube)
        
    }
    
    //this is the function that projects 3D coordinates to the 2D canvas
    //it took me a whole summer some years ago to figure these transformations
    function project3D(x,y,z) {
        var xRotQz=x*Math.cos(Qz)+y*Math.sin(Qz);
        var yRotQz=y*Math.cos(Qz)-x*Math.sin(Qz);
        var zRotQz=z;
        var xRotQzQx=xRotQz;
        var yRotQzQx=yRotQz*Math.cos(Qx)+zRotQz*Math.sin(Qx);
        var zRotQzQx=zRotQz*Math.cos(Qx)-yRotQz*Math.sin(Qx);
        var xRotQzQxQy=xRotQzQx*Math.cos(Qy)+zRotQzQx*Math.sin(Qy);
        var yRotQzQxQy=yRotQzQx;
        //var zRotQzQxQy=zRotQzQx*Math.cos(Qy)-xRotQzQx*Math.sin(Qy);
        return [xRotQzQxQy,yRotQzQxQy]
    }

    function drawCircle()
    {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(650/2,400/2,distance/6.2,0,2*Math.PI);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    }

    
    //function that draws the cube
    function drawCube(){
        //console.log("drawCube");
        
        //these clear the canvas of previous traces
        ctx.clearRect(0,0,650,400);
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillRect(0,0,650,400)
        
        var verticesPixLoc=[];
        //vertex coordinates in 3D are first projected to 2D and then transformed into pixel location
        //this latter is needed as (0,0) of canvas is not at the center of the canvas but at upper left
        





        for(var i=0;i<16;i++)
        {
            var xyLoc=project3D(vertices[i][0],vertices[i][1],vertices[i][2]);
            var pixLoc=transformXYtoPixels(xyLoc[0],xyLoc[1]);
            verticesPixLoc.push(pixLoc);
            
            //give vertices a bit of a circular shape
            // ctx.beginPath();
            // ctx.arc(pixLoc[0],pixLoc[1],4,0,2*Math.PI);
            // ctx.stroke();
            // ctx.fillStyle = "yellow";
            // ctx.fill();
        }
        for(var i=16;i<17;i++)
        {
            var xyLoc=project3D(vertices[i][0],vertices[i][1],vertices[i][2]);
            var pixLoc=transformXYtoPixels(xyLoc[0],xyLoc[1]);
            verticesPixLoc.push(pixLoc);
            
            //give vertices a bit of a circular shape
            // ctx.beginPath();
            // ctx.arc(pixLoc[0],pixLoc[1],14,0,2*Math.PI);
            // ctx.stroke();
            // ctx.fillStyle = "yellow";
            // ctx.fill();
        }
        for(var i=17;i<113;i++)
        {
        var xyLoc=project3D(vertices[i][0],vertices[i][1],vertices[i][2]);
        var pixLoc=transformXYtoPixels(xyLoc[0],xyLoc[1]);
        verticesPixLoc.push(pixLoc);
        }

        //draw the cube edges
        // for(var i=0;i<15;i++){
        //     ctx.beginPath();
        //     ctx.moveTo(verticesPixLoc[i][0],verticesPixLoc[i][1]);
        //     ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
        //     ctx.strokeStyle = '#87CEFA'; //light blue
        //     ctx.stroke();
        // }

        
        //arrows
        for(var i=16;i<17;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[i][0],verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        
        }//1
        if(changefield == 0 || changefield ==1  || changefield ==2 || changefield == 11 || changefield == 12 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 50 || changefield == 51 || changefield == 52 || changefield == 60 || changefield == 61 || changefield == 62 || changefield >= 68) //2
        for(var i=19;i<20;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }//2
        if(changefield == 0 || changefield ==1 || changefield ==2 || changefield ==5 || changefield ==6 || changefield ==7 || changefield == 11 || changefield == 12 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 26 || changefield == 27 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 36 || changefield == 37 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 50 || changefield == 51 || changefield == 52 || changefield == 55 || changefield == 56 || changefield == 57 || changefield == 60 || changefield == 61 || changefield == 62 || changefield == 65 || changefield == 66 || changefield == 67 || changefield >= 68) //3
        for(var i=22;i<23;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }//3
        if(changefield == 0 || changefield ==1 || changefield ==2 || changefield == 11 || changefield == 12 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 50 || changefield == 51 || changefield == 52 || changefield == 60 || changefield == 61 || changefield == 62 || changefield >= 68) //4
        for(var i=25;i<26;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }//4
        if(changefield == 5 || changefield ==6 || changefield ==7 || changefield == 11 || changefield == 12 || changefield == 28 || changefield == 29 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield == 63 || changefield == 64 || changefield == 65 || changefield == 66 || changefield == 67 || changefield >= 68 ) //5
        for(var i=28;i<29;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //5
        if(changefield == 8 || changefield ==9 || changefield ==10 || changefield == 13 || changefield == 14 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 18 || changefield == 19 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //6
        for(var i=31;i<32;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //6
        if(changefield == 20 || changefield == 21 || changefield == 22 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 28 || changefield == 29 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 38 || changefield == 39 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //7
        for(var i=34;i<35;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //7
        if(changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 40 || changefield == 41 || changefield == 42 || changefield >= 53) //8
        for(var i=37;i<38;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //8
        if(changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //9
        for(var i=40;i<41;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //9
        if(changefield == 3 || changefield ==4 || changefield == 18 || changefield == 19 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 28 || changefield == 29 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 38 || changefield == 39 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //10
        for(var i=43;i<44;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //10
        if(changefield == 13 || changefield == 14 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield >= 53) //11
        for(var i=46;i<47;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //11
        if(changefield == 5 || changefield ==6 || changefield ==7 || changefield == 11 || changefield == 12 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 50 || changefield == 51 || changefield == 52 || changefield == 58 || changefield == 59 || changefield == 63 || changefield == 64 || changefield == 65 || changefield == 66 || changefield == 67 || changefield >= 68) //12
        for(var i=49;i<50;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //12
        if(changefield == 8 || changefield ==9 || changefield ==10 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //13
        for(var i=52;i<53;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        } //13
        if(changefield == 3 || changefield ==4 || changefield == 13 || changefield == 14 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //14
        for(var i=55;i<56;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //14
        if(changefield == 18 || changefield == 19 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 48 || changefield == 49 || changefield >= 53) //15
        for(var i=58;i<59;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //15
        if(changefield == 18 || changefield == 19 || changefield == 26 || changefield == 27 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //16
        for(var i=61;i<62;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //16
        if(changefield == 13 || changefield == 14 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 38 || changefield == 39 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53)//17
        for(var i=64;i<65;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //17
        if(changefield == 8 || changefield ==9 || changefield ==10 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 18 || changefield == 19 || changefield == 26 || changefield == 27 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield >= 53)//18
        for(var i=67;i<68;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //18
        if(changefield == 5 || changefield ==6 || changefield ==7 || changefield == 11 || changefield == 12 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 50 || changefield == 51 || changefield == 52 || changefield == 58 || changefield == 59 || changefield == 63 || changefield == 64 || changefield == 65 || changefield == 66 || changefield == 67 || changefield >= 68) //19
        for(var i=70;i<71;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //19
        if(changefield == 8 || changefield ==9 || changefield ==10 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //20
        for(var i=73;i<74;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //20
        if(changefield == 3 || changefield ==4 || changefield == 13 || changefield == 14 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 26 || changefield == 27 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //21
        for(var i=76;i<77;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //21
        if(changefield == 18 || changefield == 19 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 48 || changefield == 49 || changefield >= 53 ) //22
        for(var i=79;i<80;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //22
        if(changefield == 18 || changefield == 19 || changefield == 26 || changefield == 27 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53)//23
        for(var i=82;i<83;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //23
        if(changefield == 13 || changefield == 14 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 38 || changefield == 39 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53)//24
        for(var i=85;i<86;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //24
        if(changefield == 8 || changefield ==9 || changefield ==10 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 18 || changefield == 19 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 28 || changefield == 29 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield >= 53) //25
        for(var i=88;i<89;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //25
        if(changefield == 5 || changefield ==6 || changefield ==7 || changefield == 11 || changefield == 12 || changefield == 28 || changefield == 29 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield == 63 || changefield == 64 || changefield == 65 || changefield == 66 || changefield == 67 || changefield >= 68)//26
        for(var i=91;i<92;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //26
        if(changefield == 8 || changefield ==9 || changefield ==10 || changefield == 13 || changefield == 14 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 18 || changefield == 19 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53)//27
        for(var i=94;i<95;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //27
        if(changefield == 20 || changefield == 21 || changefield == 22 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 28 || changefield == 29 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 38 || changefield == 39 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //28
        for(var i=97;i<98;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //28
        if(changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 40 || changefield == 41 || changefield == 42 || changefield >= 53) //29
        for(var i=100;i<101;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //29
        if(changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 38 || changefield == 39 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //30
        for(var i=103;i<104;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        } //30 
        if(changefield == 3 || changefield ==4 || changefield == 18 || changefield == 19 || changefield == 20 || changefield == 21 || changefield == 22 || changefield == 28 || changefield == 29 || changefield == 30 || changefield ==31 || changefield == 32 || changefield == 38 || changefield == 39 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield == 48 || changefield == 49 || changefield == 50 || changefield == 51 || changefield == 52 || changefield >= 53) //31
        for(var i=106;i<107;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        } //31
        if(changefield == 13 || changefield == 14 || changefield == 15 || changefield == 16 || changefield == 17 || changefield == 23 || changefield == 24 || changefield == 25 || changefield == 26 || changefield == 27 || changefield == 33 || changefield == 34 || changefield == 35 || changefield == 36 || changefield == 37 || changefield == 40 || changefield == 41 || changefield == 42 || changefield == 43 || changefield == 44 || changefield == 45 || changefield == 46 || changefield == 47 || changefield >= 53) //32
        for(var i=109;i<110;i++)
        {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(verticesPixLoc[16][0],verticesPixLoc[16][1]);
            ctx.lineTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.strokeStyle = 'red'; 
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+2][0],verticesPixLoc[i+2][1]);
            ctx.stroke();
            ctx.moveTo(verticesPixLoc[i+1][0],verticesPixLoc[i+1][1]);
            ctx.lineTo(verticesPixLoc[i+3][0],verticesPixLoc[i+3][1]);
            ctx.stroke();
            ctx.lineWidth = 1;
        }  //32

        // if(intialchange == 0)
        // {
        //     intialchange = 1;
        //     var step=Math.PI/4320;
        //     dx=dx-step;
        //     Qx=Qx+dx;
        //     updateCube();
        //     dx=dx-step;
        //     Qx=Qx+dx;
        //     updateCube();
        // }
    
       
        drawCircle();
        
    }
    
    //this function transforms (x,y) of cartesian plane to proper pixel location of canvas with (0,0)
    //at the upper left
    function transformXYtoPixels(x,y) {
            return [x+650/2,-y+400/2]
    }

    
    slider.oninput = function () {
        
        distance = this.value;
        displayvalue = 1;
        counter = parseInt(distance);
        drawChart();
        drawCube();
    }

    slider1.oninput = function () {
        changefield = this.value;
        v3 = parseInt(changefield) * 0.035;
        changeEF = parseInt(counter);
        console.log(v3);
        // check = (this.value/10).toFixed(0);
        
        // valueofcharge = 1.0 + parseFloat(check);

        // check1 = this.value % 10;
        // check1 = check1/10;
        // valueofcharge = parseFloat(valueofcharge) + parseFloat(check1);
        
        
        // if(check > this.value )
        // {
        //     valueofcharge = valueofcharge - 0.1;
        // }
        // else
        // {
        //     valueofcharge = valueofcharge + 0.1;
        // }
        
        
            // chargevalue.innerHTML = valueofcharge;
        
        
        // check = this.value;
        drawChart();
        updateCube();
    }

}

