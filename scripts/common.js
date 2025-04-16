// LIGHT AND DARK MODE TOGGLE

function themeToggle()
{
  document.body.classList.toggle("dark-mode");
}

// GET THE CURRENT TIME AND DISPLAY IT ON THE WEBSITE
function getTimeAMPM()
    {
      var date = new Date();
      var hr = date.getHours();
      var min = date.getMinutes();
      // CONVERT 24-hr CLOCK INTO 12-hr CLOCK
      var ampm = hr >= 12 ? 'PM' : 'AM';
      hr %= 12;
      hr = hr ? hr : 12;

      // MINUTE HANDLER - if getMinutes is less than 10, than add a 0 in the beginning
      if (min < 10) min = '0'+ min;
      
      var time = hr + ":" + min + " " + ampm;
      document.getElementById("currTime").innerHTML = time;
      setTimeout(getTimeAMPM, 1000);
    }

// FUNCTION FOR GETTING THE AMOUNT OF VIDEOS FOR EACH CATEGORY
function getVidCount() 
{
    var c = document.getElementsByClassName("vod").length;
    var str = "Videos (" + c + ")";
    document.getElementById("vidCount").innerHTML = str;
}

// TEST //

// function myFunction() {
//   let element = document.body;
// }