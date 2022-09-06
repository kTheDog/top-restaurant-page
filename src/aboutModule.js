const contentDiv = document.querySelector('div#content')



const addMainHeader = () => {
  let headerElement = document.createElement('h2')
  headerElement.textContent = 'Fabrizio\'s Restaurant Bar'
  contentDiv.appendChild(headerElement)
}

const addAboutSection = () => {
  let aboutElement = document.createElement('div.about')
  aboutElement.innerHTML =
    `
      <div class="about">
        <h4>About</h3>
        Fabrizio's has some of the greatest drinks and meals in town!
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et pharetra eros.
        Morbi scelerisque nisi eget nulla tempus, quis viverra nibh convallis.
        Nam quis lectus quis libero semper accumsan. Duis et hendrerit orci, nec consequat ex.
        Aliquam interdum viverra ligula, sit amet sodales augue sagittis fringilla.
        Cras elementum turpis in semper vulputate. Etiam dictum lectus lectus, ut viverra lorem mattis sed. Sed bibendum sit amet nisl in ultrices.
        Aliquam ut convallis sapien. Cras et tellus maximus dolor gravida tincidunt.
        Fusce at vulputate ante. Pellentesque suscipit metus turpis
      </div>
    `
  contentDiv.appendChild(aboutElement)
}

const addHoursSection = () => {
  let hoursElement = document.createElement('div.hours')
  console.log(hoursElement)
  hoursElement.innerHTML =
    `
      <h2>Hours</h2>
      MONDAY - FRIDAY
      11:45AM - 10:30PM
      SATURDAY
      5:00PM - 10:30PM
      SUNDAY
      5:00PM - 9:30PM

      We are open every day of the year, except christmas!
    `
  contentDiv.appendChild(hoursElement)
}



const buildTab = () => {
  console.log('doing stuff')
  addMainHeader()
  addAboutSection()
  addHoursSection()
  console.log('doing stuff')
}

export {
  buildTab
}
