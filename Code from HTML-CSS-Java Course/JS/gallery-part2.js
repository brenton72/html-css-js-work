
function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text of the div with the id = "image" 
    to the alt text of the preview image 
    */
     box = document.getElementById('image');
     box.style.backgroundImage = "url(" + previewPic.src + ")"
     box.innerHTML = previewPic.alt;
	}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	box = document.getElementById('image');
    box.style.backgroundImage = "url()";
    box.innerHTML = 'Hover over an image below to display here.';

	}


function upDateWithTab() {
    var images = document.querySelectorAll(".preview");
    for (var i = 0; i < images.length; i++) {
        console.log("Image " + i);
        images[i].setAttribute('tabindex', '0');
        if (i === images.length - 1){
            images[i].addEventListener('blur', function(){
            unDo();
            return false;
        })
    };
    }
}
