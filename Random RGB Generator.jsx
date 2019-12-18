function generateRandomRGB(normal) {
    // normal = [0-255]
    if(normal) {
        return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        } else {
    // not normal = [0.0-1.0]        
        return [Math.random(), Math.random(), Math.random()];
            }
    }

alert(generateRandomRGB(false));