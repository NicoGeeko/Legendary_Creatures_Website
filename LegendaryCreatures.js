  // Rotation Vinyle Metallica 

let angle = 0;
            const vinyle = document.getElementById("rotatingSkeud");
    
            function rotateImage() {
                angle += 1; // Incrémente l'angle de rotation
                vinyle.style.transform = `rotate(${angle}deg)`; // Applique la rotation
                requestAnimationFrame(rotateImage); // Continue l'animation
            }
    
            // Démarre la rotation
            rotateImage();