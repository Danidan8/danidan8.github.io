function generateRandomNum() {
  var firstDgit = Math.floor(Math.random() * 9) 
  var secondDgit = Math.floor(Math.random() * 9) 
  var thirdDgit = Math.floor(Math.random() * 9) 
  var fourthDgit = Math.floor(Math.random() * 9) 
  generateNum(firstDgit, secondDgit,thirdDgit,fourthDgit);
  $('#NumInput').val("" + firstDgit + secondDgit + thirdDgit + fourthDgit); 
}

function generateNum(thousands, hundreds, tens, ones) {
  clear();
    
  
  var xPos = 250;
  var yPos = 250;

  stroke(0);
  strokeWeight(10);
  line(xPos, yPos - 150, xPos, yPos + 150);
  
  switch(ones) {
  default:
  case 0:
    break;
  case 1:
    line(xPos, yPos - 150, xPos + 100, yPos - 150);
    break;
  case 2:
    line(xPos, yPos - 50, xPos + 100, yPos - 50);
    break;
  case 3:
    line(xPos, yPos - 150, xPos + 100, yPos - 50);
    break;
  case 4:
    line(xPos, yPos - 50, xPos + 100, yPos - 150);
    break;
  case 5:
    line(xPos, yPos - 150, xPos + 100, yPos - 150);
    line(xPos, yPos - 50, xPos + 100, yPos - 150);
    break;
  case 6:
    line(xPos + 100, yPos - 150, xPos + 100, yPos - 50);
    break;
  case 7:
    line(xPos, yPos - 150, xPos + 100, yPos - 150);
    line(xPos + 100, yPos - 150, xPos + 100, yPos - 50);
    break;
  case 8:
    line(xPos + 100, yPos - 150, xPos + 100, yPos - 50);
    line(xPos, yPos - 50, xPos + 100, yPos - 50);
    break;
  case 9:
    line(xPos, yPos - 150, xPos + 100, yPos - 150);
    line(xPos + 100, yPos - 150, xPos + 100, yPos - 50);
    line(xPos, yPos - 50, xPos + 100, yPos - 50);
    break;
  }

  switch(tens) {
  default:
  case 0:
    break;
  case 1:
    line(xPos, yPos - 150, xPos - 100, yPos - 150);
    break;
  case 2:
    line(xPos, yPos - 50, xPos - 100, yPos - 50);
    break;
  case 3:
    line(xPos, yPos - 150, xPos - 100, yPos - 50);
    break;
  case 4:
    line(xPos, yPos - 50, xPos - 100, yPos - 150);
    break;
  case 5:
    line(xPos, yPos - 150, xPos - 100, yPos - 150);
    line(xPos, yPos - 50, xPos - 100, yPos - 150);
    break;
  case 6:
    line(xPos - 100, yPos - 150, xPos - 100, yPos - 50);
    break;
  case 7:
    line(xPos, yPos - 150, xPos - 100, yPos - 150);
    line(xPos - 100, yPos - 150, xPos - 100, yPos - 50);
    break;
  case 8:
    line(xPos, yPos - 50, xPos - 100, yPos - 50);
    line(xPos - 100, yPos - 150, xPos - 100, yPos - 50);
    break;
  case 9:
    line(xPos, yPos - 150, xPos - 100, yPos - 150);
    line(xPos, yPos - 50, xPos - 100, yPos - 50);
    line(xPos - 100, yPos - 150, xPos - 100, yPos - 50);
    break;
  }

  switch(hundreds) {
  default:
  case 0:
    break;
  case 1:
    line(xPos, yPos + 150, xPos + 100, yPos + 150 );
    break;
  case 2:
    line(xPos, yPos + 50, xPos + 100, yPos + 50 );
    break;
  case 3:
    line(xPos, yPos + 150, xPos + 100, yPos + 50 );
    break;
  case 4:
    line(xPos, yPos + 50, xPos + 100, yPos + 150 );
    break;
  case 5:
    line(xPos, yPos + 150, xPos + 100, yPos + 150 );
    line(xPos, yPos + 50, xPos + 100, yPos + 150 );
    break;
  case 6:
    line(xPos + 100, yPos + 150, xPos + 100, yPos + 50 );
    break;
  case 7:
    line(xPos, yPos + 150, xPos + 100, yPos + 150 );
    line(xPos + 100, yPos + 150, xPos + 100, yPos + 50 );
    break;
  case 8:
    line(xPos + 100, yPos + 150, xPos + 100, yPos + 50 );
    line(xPos, yPos + 50, xPos + 100, yPos + 50 );
    break;
  case 9:
    line(xPos, yPos + 150, xPos + 100, yPos + 150 );
    line(xPos + 100, yPos + 150, xPos + 100, yPos + 50 );
    line(xPos, yPos + 50, xPos + 100, yPos + 50 );
    break;
  }

  switch(thousands) {
  default:
  case 0:
    break;
  case 1:
    line(xPos, yPos + 150, xPos - 100, yPos + 150 );
    break;
  case 2:
    line(xPos, yPos + 50, xPos - 100, yPos + 50 );
    break;
  case 3:
    line(xPos, yPos + 150, xPos - 100, yPos + 50 );
    break;
  case 4:
    line(xPos, yPos + 50, xPos - 100, yPos + 150 );
    break;
  case 5:
    line(xPos, yPos + 150, xPos - 100, yPos + 150 );
    line(xPos, yPos + 50, xPos - 100, yPos + 150 );
    break;
  case 6:
    line(xPos - 100, yPos + 50, xPos - 100, yPos + 150 );
    break;
  case 7:
    line(xPos, yPos + 150, xPos - 100, yPos + 150 );
    line(xPos - 100, yPos + 50, xPos - 100, yPos + 150 );
    break;
  case 8:
    line(xPos, yPos + 50, xPos - 100, yPos + 50 );
    line(xPos - 100, yPos + 50, xPos - 100, yPos + 150 );
    break;
  case 9:
    line(xPos, yPos + 50, xPos - 100, yPos + 50 );
    line(xPos, yPos + 150, xPos - 100, yPos + 150 );
    line(xPos - 100, yPos + 50, xPos - 100, yPos + 150 );
    break;
  }
  }