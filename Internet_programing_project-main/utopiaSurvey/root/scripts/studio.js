    const workSpace = document.getElementById("workSpace");
    var viewTogglerVar = 1
    var counter = 1;
    function showMenu() {
      sideBar.style.display = "flex";

    }
    sideBarWindow.onclick = function(e) {
      e.stopPropagation()
    }
    function viewToggler(view) {
      if(viewTogglerVar == 1) {
        view.style.display='flex'
      }else {
        view.style.display='none'
      }
      viewTogglerVar *=-1      
    }


    function addElement(val) {
      switch(val) {
        case 0:          
          var el = document.createElement("input");
          el.setAttribute("type", "text")
          el.setAttribute("placeholder", shortPlace.value)
          if(shortLabel.value != ""){
            var label = document.createElement("label");
            label.innerHTML = counter + ". " + shortLabel.value;
            workSpace.appendChild(label)
          }
          shortLabel.value = "";
          shortPlace.value = "";
          workSpace.appendChild(el)
          workSpace.appendChild(document.createElement("br"))       
          break;
        case 1:                      
          var el = document.createElement("textarea");
          el.setAttribute("placeholder", longPlace.value)
          if(longLabel.value != ""){
            var label = document.createElement("label");
            label.innerHTML = counter + ". " + longLabel.value;
            workSpace.appendChild(label)
            workSpace.appendChild(document.createElement("br"))     
          }
          longLabel.value = "";
          longPlace.value = "";
          workSpace.appendChild(el)
          workSpace.appendChild(document.createElement("br"))     
          break;
        case 2:
          var el = document.createElement("input");
          el.setAttribute("type", "number")
          el.setAttribute("placeholder", numberLabel.value)
          if(numberLabel.value != ""){
            var label = document.createElement("label");
            label.innerHTML = counter + ". " + numberLabel.value;
            workSpace.appendChild(label)
          }
          numberLabel.value = "";
          numberPlace.value = "";
          workSpace.appendChild(el)
          workSpace.appendChild(document.createElement("br"))     
          break;
        case 3:
          var label = document.createElement("label");
          label.innerHTML = counter + ". " + "Email";
          workSpace.appendChild(label)
          var el = document.createElement("input");
          el.setAttribute("type", "email")
          el.setAttribute("placeholder", "Enter your email")          
          workSpace.appendChild(el)
          workSpace.appendChild(document.createElement("br"))
          break;
        case 4:
          var label = document.createElement("label");
          label.innerHTML = counter + ". " + "Phone";
          workSpace.appendChild(label)
          var el = document.createElement("input");
          el.setAttribute("type", "tel")
          el.setAttribute("placeholder", "Enter your phone")          
          workSpace.appendChild(el)
          workSpace.appendChild(document.createElement("br"))
          break;
        case 5:
          var label = document.createElement("label");
          label.innerHTML = counter + ". " + "Address";
          workSpace.appendChild(label)
          var el = document.createElement("input");
          el.setAttribute("type", "text")
          el.setAttribute("placeholder", "Enter your address")          
          workSpace.appendChild(el)
          workSpace.appendChild(document.createElement("br"))
          break;
        case 6:          
          var el = document.createElement("input");
          el.setAttribute("type", "date")
          if(dateLabel.value != ""){
            var label = document.createElement("label");
            label.innerHTML = counter + ". " + dateLabel.value;
            workSpace.appendChild(label)
          }
          dateLabel.value = "";
          workSpace.appendChild(el)
          workSpace.appendChild(document.createElement("br"))   
          break;
        case 7:
          if(singleQuestion.value != "") {
            var label = document.createElement("label");
            label.innerHTML = counter + ". " + singleQuestion.value;
            workSpace.appendChild(label)
            workSpace.appendChild(document.createElement("br"))
            if(singleOpt1.value != "") {
              var label = document.createElement("label");
              label.innerHTML = singleOpt1.value;
              workSpace.appendChild(label)
              var el = document.createElement("input");
              el.setAttribute("type", "radio");
              el.setAttribute("name", counter+"radio")
              workSpace.appendChild(el);
              workSpace.appendChild(document.createElement("br"))
            }


            if(singleOpt3.value != "") {
              var label = document.createElement("label");
              label.innerHTML = singleOpt3.value;
              workSpace.appendChild(label)
              var el = document.createElement("input");
              el.setAttribute("type", "radio");
              el.setAttribute("name", counter+"radio")
              workSpace.appendChild(el);
              workSpace.appendChild(document.createElement("br"))
            }
            if(singleOpt4.value != "") {
              var label = document.createElement("label");
              label.innerHTML = singleOpt4.value;
              workSpace.appendChild(label)
              var el = document.createElement("input");
              el.setAttribute("type", "radio");
              el.setAttribute("name", counter+"radio")
              workSpace.appendChild(el);
              workSpace.appendChild(document.createElement("br"))
            }
            if(singleOpt2.value != "") {
              var label = document.createElement("label");
              label.innerHTML = singleOpt2.value;
              workSpace.appendChild(label)
              var el = document.createElement("input");
              el.setAttribute("type", "radio");
              el.setAttribute("name", counter+"radio")
              workSpace.appendChild(el);
              workSpace.appendChild(document.createElement("br"))
            }
            singleQuestion.value = "";
            singleOpt1.value = "";
            singleOpt2.value = "";
            singleOpt3.value = "";
            singleOpt4.value = "";
          }
          break;
                  default:
          alert("default invoked");
          break;
      }
      counter++
      sideBar.style.display = "none";
    }
