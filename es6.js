
    // *********************************Assignment************************************

const arr =[
    {
        "id": 4,
        "title": "newTitle",
        "price": 205,
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smartfunctionality",
        "image_url": "./image.avif"
        },
        {
            "id": 7,
            "title": "Ergonomic Wooden Tuna",
            "price": 743,
            "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
            "image_url": "https://i.imgur.com/mp3rUty.jpeg"
            },
            {
                "id": 9,
                "title": "Electronic Bronze Chips",
                "price": 808,
                "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and fourwheel drive",
                "image_url": "https://i.imgur.com/R3iobJA.jpeg"
                },
                {
                    "id": 11,
                    "title": "Awesome Bronze Car",
                    "price": 382,
                    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                    "image_url": "https://i.imgur.com/cBuLvBi.jpeg"
                    },
                    {
                        "id": 12,
                        "title": "Recycled Rubber Cheese",
                        "price": 30,
                        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                        "image_url": "https://i.imgur.com/KeqG6r4.jpeg"
                        }
]

for(i=0;i<=arr.length;i++){
    // console.log(arr[i]);
    // console.log(i);

    const  {id,title,price,description,image_url} = arr[i];
//   console.log(i)
// console.log(id)
    if(i<=0){
        const titlezero = document.getElementById("titlezero");
        const parazero = document.getElementById("parazero");
        const image0 = document.getElementById("image0");
        const prize0 = document.getElementById("prize0");
        const id0 = document.getElementById("id0");

        titlezero.innerHTML = `${title}`
        parazero.innerHTML = `${description}`
        image0.innerHTML = `${image_url}`
        prize0.innerHTML = `${price}`
        id0.innerHTML = `${id}`
    }else if(i<=1){
        const titleone = document.getElementById("titleone");
        const paraone = document.getElementById("paraone");
        const imageone = document.getElementById("imageone");
        const prize1 = document.getElementById("prize1");
        const id1 = document.getElementById("id1");
        titleone.innerHTML = `${title}`
        paraone.innerHTML = `${description}`
        imageone.innerHTML = `${image_url}`
        prize1.innerHTML = `${price}`
        id1.innerHTML = `${id}`
    }
    else if(i<=2){
        const titletwo = document.getElementById("titletwo");
        const paratwo = document.getElementById("paratwo");
        const imagetwo = document.getElementById("imagetwo");
        const prize2 = document.getElementById("prize2");
        const id2 = document.getElementById("id2");
        titletwo.innerHTML = `${title}`
        paratwo.innerHTML = `${description}`
        imagetwo.innerHTML = `${image_url}`
        prize2.innerHTML = `${price}`
        id2.innerHTML = `${id}`
    }
    else if(i<=3){
        const titlethree = document.getElementById("titlethree");
        const para3 = document.getElementById("para3");
        const imagethree = document.getElementById("imagethree");
        const prize3 = document.getElementById("prize3");
        const id3 = document.getElementById("id3");
        titlethree.innerHTML = `${title}`
        para3.innerHTML = `${description}`
        imagethree.innerHTML = `${image_url}`
        prize3.innerHTML = `${price}`
        id3.innerHTML = `${id}`
    } 
    
    else if(i<=4){
        const titlefour = document.getElementById("titlefour");
        const para4 = document.getElementById("para4");
        const imagefour = document.getElementById("imagefour");
        const prize4 = document.getElementById("prize4");
        const id4 = document.getElementById("id4");
        titlefour.innerHTML = `${title}`
        para4.innerHTML = `${description}`
        imagefour.innerHTML = `${image_url}`
        prize4.innerHTML = `${price}`
        id4.innerHTML = `${id}`
    } 

}
    
// ***********************************End******************************************************* 