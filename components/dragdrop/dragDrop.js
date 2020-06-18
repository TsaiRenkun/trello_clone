function dragDrop() {
const draggables = document.querySelectorAll('.draggable')
console.log("called")
console.log(draggables)
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    console.log("dragging")
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

}
