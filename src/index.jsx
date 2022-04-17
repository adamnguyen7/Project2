import React from 'react';
import ReactDOM from 'react-dom';
import cycles from '../Motion Models/js_versions/Motion_Model_Bicycle';
import RRT from '../Path Finding/RRT';

class App extends React.Component {
  /*TO SUMMARIZE, THE APP CLASS MANAGES ALL STATE CHANGES AND ACTS ALMOST LIKE A PARENT CLASS. THE TERM 'CLASS' AND 'COMPONENT' ARE USED
  INTERCHANGEABLY. ALL STATE CHANGES ARE MADE, HOWEVER, BY "CHILD" CLASSES VIA EVENT HANDLERS. THINK ENCAPSULATION FROM COMP401.
  Also, the constructor(props) {super(props)} syntax is not just a formality. You cannot use this keyword methods without calling the parent
  constructor, which in this case is the React.Component class. */
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      steeringAngle: 0,
      angularVelocity: 0,
      distBetweenWheels: 0,
      leftAngularVelocity: 0,
      rightAngularVelocity: 0,
      leftWheelRadius: 0,
      rightWheelRadius: 0,
      frontWheelRadius: 0,
      distFrontToBack: 0,
      distBackTwoWheels: 0,
    };

    //Handling changes in page or parameter UI state
    this.togglePage = this.togglePage.bind(this);
    this.toggleResetParameters = this.toggleResetParameters.bind(this);
    //Handling changes in Bicycle/Tricycle Parameters
    this.handleSteeringAngleChange = this.handleSteeringAngleChange.bind(this); //steering angle
    this.handleDistFrontToBackChange = this.handleDistFrontToBackChange.bind(this); //distance front to back
    this.handleAngularVelocityChange = this.handleAngularVelocityChange.bind(this); //angular velocity
    this.handleFrontWheelRadiusChange = this.handleFrontWheelRadiusChange.bind(this); //front wheel radius
    this.handleDistBackTwoWheelsChange = this.handleDistBackTwoWheelsChange.bind(this); //back two wheels distance apart
    //Handling changes in differential drive parameters
    this.handleDistBetweenWheelsChange = this.handleDistBetweenWheelsChange.bind(this);
    this.handleLeftAngularVelocityChange = this.handleLeftAngularVelocityChange.bind(this);
    this.handleRightAngularVelocityChange = this.handleRightAngularVelocityChange.bind(this);
    this.handleLeftWheelRadiusChange = this.handleLeftWheelRadiusChange.bind(this);
    this.handleRightWheelRadiusChange = this.handleRightWheelRadiusChange.bind(this);
  }

  toggleResetParameters = () => {
    this.setState({
      steeringAngle: 0,
      angularVelocity: 0,
      distBetweenWheels: 0,
      leftAngularVelocity: 0,
      rightAngularVelocity: 0,
      leftWheelRadius: 0,
      rightWheelRadius: 0,
      frontWheelRadius: 0,
      distFrontToBack: 0,
    }, () => {
      console.log('');
    });
  }

  togglePage = (num) => {
    this.setState({ page: num }, () => {
      console.log('');
    });
  };

  handleSteeringAngleChange = (num) => {
    this.setState({ steeringAngle: num }, () => {
      console.log('');
    });
  }

  handleDistBetweenWheelsChange = (num) => {
    this.setState({ distBetweenWheels: num }, () => {
      console.log('');
    });
  }

  handleLeftAngularVelocityChange = (num) => {
    this.setState({ leftAngularVelocity: num }, () => {
      console.log('');
    });
  }

  handleRightAngularVelocityChange = (num) => {
    this.setState({ rightAngularVelocity: num }, () => {
      console.log('');
    });
  }

  handleLeftWheelRadiusChange = (num) => {
    this.setState({ leftWheelRadius: num }, () => {
      console.log('');
    });
  }

  handleRightWheelRadiusChange = (num) => {
    this.setState({ rightWheelRadius: num }, () => {
      console.log('');
    });
  }

  handleDistFrontToBackChange = (num) => {
    this.setState({ distFrontToBack: num }, () => {
      console.log('');
    });
  }

  handleAngularVelocityChange = (num) => {
    this.setState({ angularVelocity: num }, () => {
      console.log('');
    });
  }

  handleDistBackTwoWheelsChange = (num) => {
    this.setState({ distBackTwoWheels: num }, () => {
      console.log('');
    });
  }

  handleFrontWheelRadiusChange = (num) => {
    this.setState({ frontWheelRadius: num }, () => {
      console.log('');
    });
  }

  //rendering components conditionally based on what tab you clicked on: (this.state.page). 
  render() {
    switch (this.state.page) {
      case 'RET':
        return (<><Navbar togglePage={this.togglePage} /><Canvas jQuery={this.state.page} /><RightDrawingUI /><LowerControlUI jQuery={this.state.page} /></>)
        break;
      case 'Diff. Drive':
        return (<><Navbar togglePage={this.togglePage} /><Canvas jQuery={this.state.page} /><RightParameterUI onLeftAngularVelocityChange={this.handleLeftAngularVelocityChange}
          onRightAngularVelocityChange={this.handleRightAngularVelocityChange}
          onLeftWheelRadiusChange={this.handleLeftWheelRadiusChange}
          onRightWheelRadiusChange={this.handleRightWheelRadiusChange}
          onDistBetweenWheelsChange={this.handleDistBetweenWheelsChange}
          jQuery={this.state.page} /><LowerControlUI jQuery={this.state.page} toggleResetParameters={this.toggleResetParameters} /></>)
        break;
      case 'Bicycle':
        return (<><Navbar togglePage={this.togglePage} /><Canvas jQuery={this.state.page}
          steeringAngle={this.state.steeringAngle}
          angularVelocity={this.state.angularVelocity}
          distFrontToBack={this.state.distFrontToBack}
          frontWheelRadius={this.state.frontWheelRadius}
        /><RightParameterUI
            onAngularVelocityChange={this.handleAngularVelocityChange}
            onSteeringAngleChange={this.handleSteeringAngleChange}
            onFrontWheelRadiusChange={this.handleFrontWheelRadiusChange}
            onDistFrontToBackChange={this.handleDistFrontToBackChange}
            jQuery={this.state.page} /><LowerControlUI jQuery={this.state.page} toggleResetParameters={this.toggleResetParameters} /></>)
        break;
      case 'Tricycle':
        return (<><Navbar togglePage={this.togglePage} /><Canvas jQuery={this.state.page} />
          <RightParameterUI onAngularVelocityChange={this.handleAngularVelocityChange}
            onSteeringAngleChange={this.handleSteeringAngleChange}
            onDistBackTwoWheelsChange={this.handleDistBackTwoWheelsChange}
            onFrontWheelRadiusChange={this.handleFrontWheelRadiusChange}
            onDistFrontToBackChange={this.handleDistFrontToBackChange}
            jQuery={this.state.page} /><LowerControlUI jQuery={this.state.page} toggleResetParameters={this.toggleResetParameters} /></>)
        break;
      default:
        return (<><Navbar togglePage={this.togglePage} /><HomePage /></>)
    }
  }
}

class HomePage extends React.Component {
  render() {
    return (<div class="center">
      <img src="https://media.istockphoto.com/photos/cute-blue-robot-giving-thumbs-up-3d-picture-id1350820098?b=1&k=20&m=1350820098&s=170667a&w=0&h=8gO4GcPH-wsEZS6PYn2WXbQN3ZPPv98vE6mBl-Ckwr8=" />
    </div>)
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.togglePage = this.togglePage.bind(this)
  }
  togglePage(e) {
    this.props.togglePage(e.target.name)
  }

  render() {
    return (<div id="naving">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Interactive Robotics Education Tool</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Path Algorithm
                <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#Algorithm_1" onClick={this.togglePage} name="RET">Rapidly Exploring Random Trees</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Motion Models
                <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#Model_1" onClick={this.togglePage} name="Diff. Drive">Differential Drive</a></li>
                <li><a href="#Model_2" onClick={this.togglePage} name="Bicycle">Bicycle</a></li>
                <li><a href="#Model_3" onClick={this.togglePage} name="Tricycle">Tricycle</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>)
  }
}

class Canvas extends React.Component {
  constructor(props) {
    super(props);

  }
  //THIS IS WHERE YOU PUT YOUR JAVASCRIPT/JQUERY CODE FOR MOTION MODELS/PATHFINDING ALGORITHMS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  jQueryCodeRET = () => {
    //Does: Creates canvas based off screen size
    function establishCanvas() {
      var div = document.getElementById("canvasSpace");
      $("canvas").remove();
      div.innerHTML += '<canvas id="canvas"' + 'width="640"' + 'height="260"></canvas>';
    }

    establishCanvas()
    var canvas = document.getElementById("canvas");
    document.getElementById("canvas").style.backgroundColor = "#258588";
    var context = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    var offsetX, offsetY;
    //Does: Setups canvas so you can draw even after scrolling
    function reOffset() {
      var BB = canvas.getBoundingClientRect();
      offsetX = BB.left;
      offsetY = BB.top;
    }
    reOffset();
    window.onscroll = function (e) {
      reOffset();
    }
    //Does: Initalizes obstacles
    var coordinates = [];
    var isDone = 0;
    var innerArray = [];
    coordinates.push(innerArray);

    //Does: next mouse sets goal or start
    var setGoal = false;
    var goalCoord;
    var setStart = false;
    var startCoord;

    //set values for playing
    var play = false;
    let tree = null;

    //Does: deletes all obstacles
    $('#clear').click(function () {
      //context.clearRect(0, 0, cw, ch);
      var node = tree.randomCheck();

      var blocked = detectLineOfPixels(node.prev.x, node.prev.y, node.x, node.y);
      // console.log(node.prev.x, node.prev.y, node.x, node.y);
      drawNodesAndLine(node.prev.x, node.prev.y, node.x, node.y, blocked);
      if (blocked == false) {
        alert("blocked");
        tree.collide(node);

      } else {
        //alert("moving");
        //console.log("moving")
        tree.move(node);

      }
    });

    //Does: Delete all of canvas and objects
    $('#delete').click(function () {
      context.clearRect(0, 0, cw, ch);
      isDone = 0;
      coordinates = [];
      innerArray = [];
      coordinates.push(innerArray);
    });
    //Does: sets up buttons for start and goal for robot 
    //Does: setup initalize robot pos/ goal position 
    //Does: setup collision detection when initalizing robot and obstacles 
    $('#goal').click(function () {
      setGoal = true;
      setStart = false;
    });

    $('#start').click(function () {
      setStart = true;
      setGoal = false;
    });
    //Does: handles when cavas is clicked
    //Do: make conditions for goal and start
    $("#canvas").mousedown(function (e) {
      if (setStart) {
        placeStart(e);
      } else if (setGoal) {
        placeGoal(e);
      } else {
        drawObstacle(e);
      }
    });
    function placeStart(e) {
      //Do: edgecase for pre drawn obstacles
      e.preventDefault();
      e.stopPropagation();
      var mouseX = parseInt(e.clientX - offsetX);
      var mouseY = parseInt(e.clientY - offsetY);

      //Edge case that "erases previous drawn circle"
      if (startCoord != null) {
        context.beginPath();
        context.arc(startCoord.x, startCoord.y, 31, 0, 2 * Math.PI);
        context.fillStyle = `rgb(233, 221, 221)`;
        context.fill()
      }

      context.beginPath();
      context.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
      context.fillStyle = 'blue';
      context.fill()
      startCoord = { x: mouseX, y: mouseY };
      setStart = false;
    };

    function placeGoal(e) {
      //Do: edgecase for predrawn obstacles
      e.preventDefault();
      e.stopPropagation();
      var mouseX = parseInt(e.clientX - offsetX);
      var mouseY = parseInt(e.clientY - offsetY);

      //Edge case that "erases previous drawn circle"
      if (goalCoord != null) {
        context.beginPath();
        context.arc(goalCoord.x, goalCoord.y, 31, 0, 2 * Math.PI);
        context.fillStyle = `rgb(233, 221, 221)`;
        context.fill()
      }
      context.beginPath();
      context.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
      context.fillStyle = 'yellow';
      context.fill()
      goalCoord = { x: mouseX, y: mouseY };
      setGoal = false;
    };
    function drawObstacle(e) {
      //Does: Stops when there is 5 shapes or there the current point has 10 coords.
      //Does: prevents too many objects
      if (isDone > 5) {
        alert("too much arrays")
        return;
      }
      //Does: prevents too many points to an object
      if (coordinates[isDone].length > 10) {
        alert("too many points")
        return;
      }
      // Does: tell the browser we're handling this event
      e.preventDefault();
      e.stopPropagation();
      var mouseX = parseInt(e.clientX - offsetX);
      var mouseY = parseInt(e.clientY - offsetY);
      coordinates[isDone].push({ x: mouseX, y: mouseY });
      if (coordinates[isDone].length == 1) {
        context.beginPath();
        context.moveTo(mouseX, mouseY);
      } else {
        //Check distance and snap if close enough to start
        var a = coordinates[isDone][0].x - mouseX;
        var b = coordinates[isDone][0].y - mouseY;
        var c = Math.sqrt(a * a + b * b);
        if (c < 20) {
          context.lineWidth = 2;
          context.strokeStyle = 'red';
          context.lineTo(mouseX, mouseY);
          context.stroke();
          fill();
        } else {
          context.lineWidth = 2;
          context.strokeStyle = 'red';
          context.lineTo(mouseX, mouseY);
          context.stroke();
        }
      }
      //drawPolygon();
    }
    function fill() {
      context.fillStyle = 'red';
      context.fill();
      isDone = isDone + 1;
      var innerArray = [];
      coordinates.push(innerArray);
    }
    //Does: Draws all stored obstacles 
    function drawPolygons() {
      //Does: setup drawing
      context.lineWidth = 2;
      context.strokeStyle = 'red';
      for (var obstacle = 0; obstacle < coordinates.length - 1; obstacle++) {
        context.beginPath();

        context.moveTo(coordinates[obstacle][0].x, coordinates[obstacle][0].y);
        for (var index = 1; index < coordinates[obstacle].length; index++) {
          context.lineTo(coordinates[obstacle][index].x, coordinates[obstacle][index].y);
        }
        context.closePath();
        //Colors/Fills Shapes
        context.fillStyle = 'red';
        context.fill();
      }
      context.stroke();
    }
    //Does: Plays algo
    $('#play').click(function () {

      startCoord = [133, 133];
      goalCoord = [400, 300];

      context.beginPath();
      context.arc(400, 300, 3, 0, 2 * Math.PI);
      context.stroke();

      context.beginPath();
      context.arc(133, 133, 3, 0, 2 * Math.PI);
      context.stroke();
      var go = 'again';

      tree = new RRT(startCoord, goalCoord, 5, 0, .9, .9, [cw, ch]);
      //constructor (start, goal, step_size, collision_resolution, goal_resolution, goal_biasing, environment_boundaries)
      while (typeof (go) == 'string') {
        go = 1;

      }
      if (startCoord != undefined && goalCoord != undefined) {

      }


    });
    //Does:  
    $('#reset').click(function () {



      if (startCoord != undefined) {
        //branch(startCoord.x, startCoord.y);
      }
    });

    //Does: Detects red pixel and returns true if it is not red 
    function isOpenPixel(x, y) {
      var p = context.getImageData(x, y, 1, 1).data;
      if (p[0] == 255 && p[1] == 0 && p[2] == 0) {
        return false;
      } else {
        return true;
      }
    }
    //returns false if their is an obstacle between 
    function detectLineOfPixels(sx, sy, ex, ey) {
      //calculate slope maybe shouldnt madder but make spos smaller
      var spos = [sx, sy];
      var epos = [ex, ey];

      //spos must always be smaller
      var a1 = 0 - spos[0];
      var b1 = 0 - spos[1];
      var c1 = Math.sqrt(a1 * a1 + b1 * b1);
      var a2 = 0 - epos[0];
      var b2 = 0 - epos[1];
      var c2 = Math.sqrt(a2 * a2 + b2 * b2);
      //if spos is bigger swap
      if (c1 > c2) {
        var temp = epos;
        epos = spos;
        spos = temp
      }

      // context.strokeStyle = "blue";
      // context.beginPath();
      // context.arc(epos[0], epos[1], 5, 0, 2 * Math.PI);
      // context.stroke()
      // context.beginPath();
      // context.arc(spos[0], spos[1], 5, 0, 2 * Math.PI);
      // context.stroke();
      var slope = (spos[1] - epos[1]) / (spos[0] - epos[0]);
      //console.log(slope);
      //calc b 
      var yintercept = spos[1] - slope * spos[0];
      //console.log(yintercept);
      //distance formula to determine scalar
      var scalar = 1;
      var c = 9999;
      //scaler should get distance every 8 distance 
      while (c > 8) {
        //distance from firstposition to new scaled one
        var newx = epos[0] * scalar + spos[0];
        var newy = (slope * newx) + yintercept;
        // console.log(newx, newy);
        // context.strokeStyle = 'red';
        // context.beginPath();
        // context.arc(newx, newy, 3, 0, 2 * Math.PI);
        // context.stroke();
        var a = spos[0] - newx;
        var b = spos[1] - newy;
        //reduce scalar
        scalar = scalar / 2;
        //check if the the distance is actually increasing
        if (c < Math.sqrt(a * a + b * b)) {
          alert("wrong way");
          break;
        }
        c = Math.sqrt(a * a + b * b);
        //console.log(c + " " + scalar)
      }
      //figure out what points to search 
      var secondScaler = 0;
      var tempx = spos[0];
      while (tempx < epos[0]) {
        tempx = epos[0] * scalar + secondScaler + spos[0];
        var tempy = (slope * tempx) + yintercept;

        //if not open pixel return false meaning collision
        if (!isOpenPixel(tempx, tempy)) {
          return false;
        }
        // context.strokeStyle = 'green';
        // context.beginPath();
        // context.arc(tempx, tempy, 2, 0, 2 * Math.PI);
        // context.stroke();
        secondScaler += 5;
      }
      return true;
    }

    function oneStep() {
      //tre = new RRT(startCoord, goalCoord, step_size, collision_resolution, goal_resolution, goal_biasing, obstacles, environment_boundaries);
      //play = true;
      // if (tree == null) {
      // }
    }

    function drawNodesAndLine(x, y, x1, y1, isBlocked) {
      x = parseInt(x);
      y = parseInt(y);
      x1 = parseInt(x1);
      y1 = parseInt(y1);
      context.strokeStyle = "#" + Math.floor(Math.random() * 16777215).toString(16)
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x1, y1);
      context.stroke();

    }
  }

  jQueryCodeDiffDrive = () => {
    function establishCanvas() {
      var div = document.getElementById("canvasSpace");
      $("canvas").remove();
      div.innerHTML += '<canvas id="canvas"' + 'width="640"' + 'height="260"></canvas>';
      div.innerHTML += '<canvas id="canvas2"' + 'width="640"' + 'height="260"></canvas>';
    }

    establishCanvas()
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var ctx = canvas.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    var offsetX, offsetY;
    function reOffset() {
      var BB = canvas.getBoundingClientRect();
      offsetX = BB.left;
      offsetY = BB.top;
    }
    reOffset();
    window.onscroll = function (e) { reOffset(); }


    function bodyCenter(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = 'black';
      ctx.fill();
    }

    function wheelCenter(x, y, length) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(x, y);
      ctx.rotate(theta);
      ctx.arc(0, 0 + length / 2, 3, 0, 2 * Math.PI)
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.restore();
    }
  }

  jQueryCodeBicycle = () => {
    function establishCanvas() {
      var div = document.getElementById("canvasSpace");
      $("canvas").remove();
      div.innerHTML += '<canvas id="canvas"' + 'width="640"' + 'height="260"></canvas>';
      div.innerHTML += '<canvas id="canvas2"' + 'width="640"' + 'height="260"></canvas>';

    }
    establishCanvas()
    var canvas = document.getElementById("canvas");
    var canvas2 = document.getElementById("canvas2");
    var ctx = canvas.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var proceed = true;
    //Do: Establish vehicle frame and and wheel off of a single X and Y coordinate ("concept" function below)
    //Do: Use current JS code (other folder) to change poistion and redraw below 
    //first take the remainder out of 360
    var steeringAngle = (this.props.steeringAngle % 360)
    var distFrontToBack = this.props.distFrontToBack;
    var frontWheelRadius = this.props.frontWheelRadius;
    var angularVelocity = this.props.angularVelocity;
    var radians = 0;
    // convert to neg when greater than 180
    if (steeringAngle > 180) {
      steeringAngle = steeringAngle - 360;
    }
    radians = steeringAngle * Math.PI / 180;

    var startX = canvas.width / 2;
    var startY = canvas.height / 4;
    var bikeBodyAngle = 0;
    var notUsedForBikeVariable = 0;

    $('#play').click(function () {
      proceed = true;
    })
    $('#pause').click(function () {
      proceed = false;
    })
    const bike = new cycles(frontWheelRadius, distFrontToBack, angularVelocity, radians, startX, startY, bikeBodyAngle, notUsedForBikeVariable);
    //Does: Flips canvas to correct orientation
    ctx.transform(1, 0, 0, -1, 0, canvas.height);
    ctx2.transform(1, 0, 0, -1, 0, canvas.height);
    function concept() {
      //Does: Sets Focul point to center of canvas

      //Pause when off screen
      if (startX > canvas.width) {
        proceed = false;
      }
      if (0 > startX) {
        proceed = false;
      }
      if (startY > canvas.height) {
        proceed = false;
      }
      if (0 > startY) {
        proceed = false;
      }
      //Pause when stop is false
      if (proceed) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw a rotated rect
        var cPos = bike.main();
        startX = cPos[0];
        startY = cPos[1];
        var theta = cPos[2] - Math.PI / 2;
        drawWheel(startX, startY, frontWheelRadius * 2, distFrontToBack / 4, steeringAngle, theta, distFrontToBack);
        drawBody(startX, startY, distFrontToBack, distFrontToBack / 4, theta);
        drawTrail(startX, startY);

      }
      //check rotation
      //bodyCenter(startX, startY);
      //wheelCenter(startX, startY, DistFrontToBack);
      function drawTrail(x, y) {

        ctx2.beginPath()
        ctx2.rect(x, y, 3, 5)
        ctx2.fillStyle = "lime"
        ctx2.fill()
        ctx2.stroke();

      }

      function drawBody(x, y, height, width, theta) {
        var bodyX = -width / 2;
        var bodyY = -height / 2;
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.rotate(theta);
        ctx.rect(bodyX, bodyY, width, height);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.restore();
      }

      function drawWheel(x, y, height, width, steeringAngles, theta, offset) {
        // first save the untranslated/unrotated context
        ctx.save();
        ctx.beginPath();
        // move the rotation point to the center of the body
        ctx.translate(x, y);
        ctx.rotate(theta);
        //Center is now  0, 0 + offset / 2, now offset for size of box 
        ctx.translate(0, 0 + offset / 2);
        ctx.rotate(steeringAngles * Math.PI / 180);
        // Note: after transforming [0,0] is visually [x,y] so the rect needs to be offset accordingly when drawn
        ctx.rect(-width / 2, -height / 2, width, height);
        ctx.fillStyle = "red";
        ctx.fill();
        // restore the context to its untranslated/unrotated state
        ctx.restore();
      }

      setTimeout(() => { window.requestAnimationFrame(concept); }, 1000 / 65);
    }

    window.requestAnimationFrame(concept);
  }

  jQueryCodeTricycle = () => {
    function establishCanvas() {
      var div = document.getElementById("canvasSpace");
      $("canvas").remove();
      div.innerHTML += '<canvas id="canvas"' + 'width="640"' + 'height="260"></canvas>';
      div.innerHTML += '<canvas id="canvas2"' + 'width="640"' + 'height="260"></canvas>';
    }

    establishCanvas()
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    var offsetX, offsetY;
    function reOffset() {
      var BB = canvas.getBoundingClientRect();
      offsetX = BB.left;
      offsetY = BB.top;
    }
    reOffset();
    window.onscroll = function (e) { reOffset(); }
  }

  //rendering jQuery code when you first render the Canvas Component
  componentDidMount() {
    switch (this.props.jQuery) {
      case "RET":
        this.jQueryCodeRET();
        break;
      case "Diff. Drive":
        this.jQueryCodeDiffDrive();
        break;
      case "Bicycle":
        this.jQueryCodeBicycle();
        break;
      case "Tricycle":
        this.jQueryCodeTricycle();
        break;
    }
  }
  //using JQuery code when you re-render (update) the Canvas Component
  componentDidUpdate() {
    switch (this.props.jQuery) {
      case "RET":
        this.jQueryCodeRET();
        break;
      case "Diff. Drive":
        this.jQueryCodeDiffDrive();
        break;
      case "Bicycle":
        this.jQueryCodeBicycle();
        break;
      case "Tricycle":
        this.jQueryCodeTricycle();
        break;
    }
  }

  render() {
    return (<div id="canvasSpace">
      <canvas id="canvas" width={900} height={300}></canvas>
    </div>)
  }
}

class LowerControlUI extends React.Component {
  constructor(props) {
    super(props);

    this.toggleResetParameters = this.toggleResetParameters.bind(this);
  }
  //resets parameters in parameter UI based on clicking "Reset" button
  toggleResetParameters() {
    this.props.toggleResetParameters()
    switch (this.props.jQuery) {
      case 'Diff. Drive':
        document.getElementById('leftWheelRadius').value = '';
        document.getElementById('rightWheelRadius').value = '';
        document.getElementById('distBetweenBackWheels').value = '';
        document.getElementById('leftAngularVelocity').value = '';
        document.getElementById('rightAngularVelocity').value = '';
        break;
      case 'Bicycle':
        document.getElementById('frontWheelRadius').value = '';
        document.getElementById('distFrontToBack').value = '';
        document.getElementById('steeringAngle').value = '';
        document.getElementById('angularVelocity').value = '';
        break;
      case 'Tricycle':
        document.getElementById('frontWheelRadius').value = '';
        document.getElementById('distFrontToBack').value = '';
        document.getElementById('steeringAngle').value = '';
        document.getElementById('angularVelocity').value = '';
        document.getElementById('distBetweenBackWheels').value = '';
        break;
    }
  }

  render() {
    if (this.props.jQuery === 'RET') {
      return (
        <div id="lowerControlUI">
          Simulation Control
          <div>
            <button id="playRET"><img width="25" height="25" src="https://media.istockphoto.com/vectors/vector-play-button-icon-vector-id1066846868?k=20&m=1066846868&s=612x612&w=0&h=BikDjIPuOmb08aDFeDiEwDiKosX7EgnvtdQyLUvb3eA="></img></button>
            <button id="pauseRET"><img width="40" height="25" src="data:image/png;base64,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"></img></button>
            <button id="step">1 Step</button>
            <button id="line"> Even Smaller Step</button>
            <button id="reset" onClick={this.toggleResetParameters}>Reset</button>
          </div>
        </div>)
    } else {
      return (
        <div id="lowerControlUI">
          Simulation Control
          <div>
            <button id="play"><img width="25" height="25" src="https://media.istockphoto.com/vectors/vector-play-button-icon-vector-id1066846868?k=20&m=1066846868&s=612x612&w=0&h=BikDjIPuOmb08aDFeDiEwDiKosX7EgnvtdQyLUvb3eA="></img></button>
            <button id="pause"><img width="40" height="25" src="data:image/png;base64,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"></img></button>
            <button id="reset" onClick={this.toggleResetParameters}>Reset</button>
          </div>
        </div>)
    }
  }
}

class RightParameterUI extends React.Component {
  constructor(props) {
    super(props);

    this.handleSteeringAngleChange = this.handleSteeringAngleChange.bind(this);
    this.handleAngularVelocityChange = this.handleAngularVelocityChange.bind(this);
    this.handleFrontWheelRadiusChange = this.handleFrontWheelRadiusChange.bind(this);
    this.handleDistFrontToBackChange = this.handleDistFrontToBackChange.bind(this);
    this.handleDistBackTwoWheelsChange = this.handleDistBackTwoWheelsChange.bind(this);
    this.handleDistBetweenWheelsChange = this.handleDistBetweenWheelsChange.bind(this);
    this.handleLeftWheelRadiusChange = this.handleLeftWheelRadiusChange.bind(this);
    this.handleRightWheelRadiusChange = this.handleRightWheelRadiusChange.bind(this);
    this.handleLeftAngularVelocityChange = this.handleLeftAngularVelocityChange.bind(this);
    this.handleRightAngularVelocityChange = this.handleRightAngularVelocityChange.bind(this);
  }
  //handling limits on parameters inputted by the user
  handleDistBackTwoWheelsChange(e) {
    if (e.target.value <= 10 || e.target.value > 50) {
    } else {
      this.props.onDistBackTwoWheelsChange(e.target.value);
    }
  };

  handleDistFrontToBackChange(e) {
    if (e.target.value <= 10 || e.target.value > 100) {
    } else {
      this.props.onDistFrontToBackChange(e.target.value);
    }
  };

  handleDistBetweenWheelsChange(e) {
    if (e.target.value <= 0 || e.target.value > 10) {
    } else {
      this.props.onDistBetweenWheelsChange(e.target.value);
    }
  };
  //this can be any real number, so checking user inputs isn't required
  handleSteeringAngleChange(e) {
    this.props.onSteeringAngleChange(e.target.value);
  };

  handleAngularVelocityChange(e) {
    if (e.target.value < 0 || e.target.value > 10) {
    } else {
      this.props.onAngularVelocityChange(e.target.value);
    }
  };

  handleLeftAngularVelocityChange(e) {
    if (e.target.value < 0 || e.target.value > 10) {
    } else {
      this.props.onLeftAngularVelocityChange(e.target.value);
    }
  };

  handleRightAngularVelocityChange(e) {
    if (e.target.value < 0 || e.target.value > 10) {
    } else {
      this.props.onRightAngularVelocityChange(e.target.value);
    }
  };

  handleFrontWheelRadiusChange(e) {
    if (e.target.value <= 0 || e.target.value > 50) {
    } else {
      this.props.onFrontWheelRadiusChange(e.target.value);
    }
  };

  handleLeftWheelRadiusChange(e) {
    if (e.target.value <= 0 || e.target.value > 10) {
    } else {
      this.props.onLeftWheelRadiusChange(e.target.value);
    }
  };

  handleRightWheelRadiusChange(e) {
    if (e.target.value <= 0 || e.target.value > 10) {
    } else {
      this.props.onRightWheelRadiusChange(e.target.value);
    }
  };

  render() {
    switch (this.props.jQuery) {
      case 'Diff. Drive':
        return (<div id="rightParameterUI">
          <h4>Parameters</h4>
          <h5>Robot Properties</h5>
          <label for="leftWheelRadius">Left Wheel Radius (0 &#60; x &#8804; 10)</label>
          <br></br>
          <input type="number" id="leftWheelRadius" placeholder='0' onChange={this.handleLeftWheelRadiusChange}></input>
          <br></br>

          <label for="rightWheelRadius">Right Wheel Radius (0 &#60; x &#8804; 10)</label>
          <br></br>
          <input type="number" id="rightWheelRadius" placeholder='0' onChange={this.handleRightWheelRadiusChange}></input>
          <br></br>

          <label for="distBetweenWheels">Distance Between Wheels (0 &#60; x &#8804; 10)</label>
          <br></br>
          <input type="number" id="distBetweenWheels" placeholder='0' onChange={this.handleDistBetweenWheelsChange}></input>
          <br></br>

          <h5>Control Inputs</h5>
          <label for="leftAngularVelocity">Left Angular Velocity (0 &#8804; x &#8804; 10)</label>
          <br></br>
          <input type="number" id="leftAngularVelocity" placeholder='0' onChange={this.handleLeftAngularVelocityChange}></input>
          <br></br>

          <label for="rightAngularVelocity">Right Angular Velocity (0 &#8804; x &#8804; 10)</label>
          <br></br>
          <input type="number" id="rightAngularVelocity" placeholder='0' onChange={this.handleRightAngularVelocityChange}></input>
        </div>)

      case 'Bicycle':
        return (<div id="rightParameterUI">
          <h4>Parameters</h4>
          <h5>Robot Properties</h5>
          <label for="frontWheelRadius">Front Wheel Radius (0 &#60; x &#8804; 50)</label>
          <br></br>
          <input type="number" id="frontWheelRadius" placeholder='0' onChange={this.handleFrontWheelRadiusChange}></input>
          <br></br>

          <label for="distFrontToBack">Distance front to back (10 &#60; x &#8804; 100)</label>
          <br></br>
          <input type="number" id="distFrontToBack" placeholder='0' onChange={this.handleDistFrontToBackChange}></input>
          <br></br>

          <h5>Control Inputs</h5>
          <label for="steeringAngle">Steering Angle(&#8477;)</label>
          <br></br>
          <input type="number" id="steeringAngle" placeholder='0' onChange={this.handleSteeringAngleChange}></input>
          <br></br>

          <label for="angularVelocity">Angular Velocity (0 &#8804; x &#8804; 10)</label>
          <br></br>
          <input type="number" id="angularVelocity" placeholder='0' onChange={this.handleAngularVelocityChange}></input>
        </div>)

      case 'Tricycle':
        return (<div id="rightParameterUI">
          <h4>Parameters</h4>
          <h5>Robot Properties</h5>
          <label for="frontWheelRadius">Front Wheel Radius (0 &#60; x &#8804; 50)</label>
          <br></br>
          <input type="number" id="frontWheelRadius" placeholder='0' onChange={this.handleFrontWheelRadiusChange}></input>
          <br></br>

          <label for="distFrontToBack">Distance front to back (10 &#60; x &#8804; 100)</label>
          <br></br>
          <input type="number" id="distFrontToBack" placeholder='0' onChange={this.handleDistFrontToBackChange}></input>
          <br></br>

          <label for="distBetweenBackWheels">Distance Between Back Wheels (10 &#60; x &#8804; 50)</label>
          <br></br>
          <input type="number" id="distBetweenBackWheels" placeholder='0' onChange={this.handleDistBackTwoWheelsChange}></input>
          <br></br>

          <h5>Control Inputs</h5>
          <label for="angularVelocity">Angular Velocity (0 &#8804; x &#8804; 10)</label>
          <br></br>
          <input type="number" id="angularVelocity" placeholder='0' onChange={this.handleAngularVelocityChange}></input>
          <br></br>

          <label for="steeringAngle">Steering Angle (&#8477;)</label>
          <br></br>
          <input type="number" id="steeringAngle" placeholder='0' onChange={this.handleSteeringAngleChange}></input>
          <br></br>
        </div>)
    }
  }
}

class RightDrawingUI extends React.Component {
  render() {
    return (<div id="rightDrawingUI">
      Drawing UI
      <div>
        <button id="clear">Click to clear all obstacles</button>
        <br></br>
        <button id="goal">Click to set goal</button>
        <br></br>
        <button id="start">Click to set start</button>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));