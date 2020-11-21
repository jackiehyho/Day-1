let box = document.getElementById("box")

let i = 0;

const color = ['red', 'orange','yellow', 'green', 'blue', 'teal', 'purple']


box.addEventListener('click', function(){
    box.style.backgroundColor = color[i]; i++;
    if(i === color.length){ i = 0;}
}
);
