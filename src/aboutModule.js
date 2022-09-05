const contentDiv = document.querySelector('div#content')


function addMainHeader () {
  let header = document.createElement('h2')
  header.textContent = 'Fabrizio\'s Restaurant Bar'
  console.log(document)
  console.log(contentDiv)
  contentDiv.appendChild(header)
}







function createTab () {
  console.log("g")
  addMainHeader()
}


export {
  createTab
}
