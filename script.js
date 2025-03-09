function upDate(previewPic) {
    console.log("Mouseover event triggered"); // Check if event is triggered
    console.log("Source: " + previewPic.src); // Log the src of the image
    console.log("Alt text: " + previewPic.alt); // Log the alt text of the image
    
    // Change the background image and text of the element with id "image"
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Mouseout event triggered"); // Check if event is triggered
    
    // Reset to original state
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
