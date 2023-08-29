function newImage(url, left, bottom) { //was able to figure out this part
    let Object = document.createElement('img')
    Object.src = url
    Object.style.position = 'fixed'
    Object.style.left = left + 'px'
    Object.style.bottom = bottom + 'px'
    document.body.append(Object)
    return Object
}

newImage('assets/green-character.gif', 100, 100) //was able to figure out this part
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 100, 400)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
