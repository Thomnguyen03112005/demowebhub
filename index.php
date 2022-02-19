<!Doctype>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="loading1.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <title>Thowm Sever Website</title>
         <link rel="shortcut icon" href="./iconn.jpg" type="image/x-icon">  
        </head>
    <body>
        <div class="navbar">
            <a href="#home">Home</a>
            <div class="subnav">
              <button class="subnavbtn">Liên Hệ <i class="fa fa-caret-down"></i></button>
              <div class="subnav-content">
                <a href="https://www.facebook.com/Thowmm03112005/"><img  class="icon" src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png">Facebook</a>
                <a href="https://discord.gg/bvUJ8VdAwF"><img class="iconn"src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-flat-style-available-svg-png-eps-10.png">Discord</a>
                <a href="https://github.com/Thomnguyen03112005"><img class="iconnn" src="https://pngimg.com/uploads/github/github_PNG40.png"> Github</a>
              </div>
            </div>
            <div class="subnav">
              <button class="subnavbtn">Docs code<i class="fa fa-caret-down"></i></button>
              <div class="subnav-content">
                <a href="https://www.w3schools.com/"><img class="docs" src="./th.jpg">Docs 1</a>
                <a href="https://fullstack.edu.vn/"><img class="doscc" src="https://fullstack.edu.vn/assets/icon/f8_icon.png">Docs 2</a>
                <a href="https://stackoverflow.com/"><img class="docsccc" src="./R.jpg"> Docs 3</a>
              </div>
            </div>
            <div class="subnav">
              <button class="subnavbtn">Server<i class="fa fa-caret-down"></i></button>
              <div class="subnav-content">
                <a href="../sever1.php">Server 1</a>
                <a href="../sever2/sever2.php">Server 2</a>
                <a href="#link3">Đang cập nhật</a>
                <a href="#link4">Đang cập nhật</a>
              </div>
            </div>

          </div>
          
          <div class="background">        
             <div class="wrapper">
              <div class="display">
                 <div id="time"></div>
              </div>
              <span></span>
              <span></span>
           </div>
           <div class="loader">
            <div></div>
        </div>
        <div class="content">
          </div>
        </form>
    </body>
    <script>
      $(window).on('load',function(){
      $(".loader").fadeOut(6000);
      $(".content").fadeIn(5000);
        });
      var iso = new Audio();
      iso.src = "./abcd.mp3";

      setInterval(()=>{
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
  });
  
    </script>
</html>
