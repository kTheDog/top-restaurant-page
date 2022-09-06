const classicBurger = import ('./classic-burger.png')


const contentDiv = document.querySelector('div#content')



const addMenuItem = (title, image) => {
  let menuItem = document.createElement('div')
  let itemName = document.createElement('span')
  let itemImage = new Image()
  itemImage.src = image
  menuItem.appendChild(itemImage)
  contentDiv.appendChild(menuItem)
}




const buildTab = () => {
  console.log("haha")
  addMenuItem('burger', classicBurger.src)
}



export {
  buildTab
}
