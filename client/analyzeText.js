const createElement = function(text, elementsCreated) {
  console.log(text)
	if(text.indexOf('div') >= 0) {
  var div = document.createElement('div');
  var className = Math.random() * 1000000;
  div.className = className.toString();
  createElement()
  var textInput = document.createTextNode(text);
  div.appendChild(textInput);
  document.getElementById('sandBox').appendChild(div);
  elementsCreated.push({element: 'div', text: text, class: className.toString()})	
} else if(text.indexOf('button') >= 0) {
	var button = document.createElement('button');
	var className = Math.random() * 1000000;
	button.className = className.toString();
	var textInput = document.createTextNode(text);
	button.appendChild(textInput);
	document.getElementById('sandBox').appendChild(button);
	elementsCreated.push({element: 'button', text: text, class: className.toString()})	
} else if(text.indexOf('span') >= 0) {
	var span = document.createElement('span');
	var className = Math.random() * 1000000;
  span.className = className.toString();
	var textInput = document.createTextNode(text);
	span.appendChild(textInput);
	document.getElementById('sandBox').appendChild(span);
	elementsCreated.push({element: 'span', text: text, class: className.toString()});	
} else if(text.indexOf('paragraph') >= 0) {
	var para = document.createElement('p');
	var className = Math.random() * 1000000;
  para.className = className.toString();
	var textInput = document.createTextNode(text);
	para.appendChild(textInput);
	document.getElementById('sandBox').appendChild(para);
	elementsCreated.push({element: 'paragraph', text: text, class: className.toString()});	
} else if(text.indexOf('header') >= 0) {
	var header = document.createElement('h1');
	var className = Math.random() * 1000000;
  header.className = className.toString();
	var textInput = document.createTextNode(text);
	header.appendChild(textInput);
	document.getElementById('sandBox').appendChild(header);
	elementsCreated.push({element: 'header', text: text, class: className.toString()});	
}
}

const styleElement = function(text, styleElement, elementsCreated) {
  if(text.indexOf('color') >= 0) {
    styleElement.forEach(function(element) {
      document.getElementsByClassName(element)[0].style.color = text.slice(6, text.length);
    })
  } else if(text.indexOf('change text') === 0) {
    styleElement.forEach(function(element) {
      elementsCreated.forEach(function(elements) {
        if(elements.class === element) {
          elements.text = text.slice(12, text.length);
        }
      })
      document.getElementsByClassName(element)[0].innerText = text.slice(12, text.length);
    })
  } else if(text.indexOf('center') || text.indexOf('right') || text.indexOf('left') >= 0) {
    styleElement.forEach(function(element) {
      document.getElementsByClassName(element)[0].style.textAlign = text;
    })
  } else if(text.indexOf('size') >= 0) {
    styleElement.forEach(function(element) {
      document.getElementsByClassName(element)[0].style.fontSize = text.slice(5, text.length);
    })
  }
}


module.exports = {
  analyze: function(text) {
    if(text.indexOf('create') >= 0) {
      createElement(text, this.elementsCreated)
    } else if(text.indexOf('delete') >= 0) {
      this.elementsSelected.forEach(function(element) {
        console.log(this)
        this.elementsCreated.forEach(function(elements, i) {
          if(elements.class === element) {
            this.elementsCreated.splice(i, 1)
          }
        }.bind(this))
        var elem = document.getElementsByClassName(element)[0]; 
        elem.parentNode.removeChild(elem);
      }.bind(this))
    } else {
      styleElement(text, this.elementsSelected, this.elementsCreated)
    }
  },
  elementsCreated: [],
  elementsSelected: []
}