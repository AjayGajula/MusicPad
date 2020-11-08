
function playSound(sampleName, button) {
    button.style.boxShadow = '0px 3px 10px 5px yellow';
    setTimeout(function() {
      button.style.boxShadow = 'none';
    }, 100)
    
    var sample = document.getElementById(sampleName);
    sample.play();
  }
  
  document.addEventListener('keydown', function (event) {
      var k= event.keyCode;
   
      if(k===65){
        var button = document.getElementById('1')
        playSound('A', button);
        }else if(k===83) {
          var button = document.getElementById('2')
          playSound('S', button);
            } else if(k===68){
              var button = document.getElementById('3')
              playSound('D', button);
          
                } else if(k===70) {
                  
                  var button = document.getElementById('4')
                  playSound('F', button);
                     playSound('F'); 
                    }else if(k===71) {
                    var button = document.getElementById('5')
                    playSound('G', button);
                        }else if(k===72) {
                      var button = document.getElementById('6')
                      playSound('H', button);
                            }else if(k===74) {
                         var button = document.getElementById('7')
                          playSound('J', button);
                                }else if(k===75) {
                            var button = document.getElementById('8')
                                playSound('K', button);
                                    }else if(k===76) {
                                var button = document.getElementById('9')
                                  playSound('L', button);
                                   }

  })
