const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')


function log(message){
    console.log('>' + message)
}


function DragStart(){
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging')

}

function Drag(){
}

function DragRnd(){
   dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
   this.classList.remove('is-dragging')
}

cards.forEach(card => {
    card.addEventListener('dragstart', DragStart)
    card.addEventListener('drag', Drag)
    card.addEventListener('dragend', DragRnd)
})

//* DropZone
function DragEnter(){
}

function DragOver(){
    this.classList.add('over')

    const cardBeginDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeginDragged)
}

function DragLeave(){
    this.classList.remove('over')
}

function Drop(){
}

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', DragEnter)
    dropzone.addEventListener('dragover', DragOver)
    dropzone.addEventListener('dragleave', DragLeave)
    dropzone.addEventListener('drop', Drop)
})

