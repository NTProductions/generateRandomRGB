function generateRandomRGB(normal) {
        if(normal) {
            return [Math.floor((Math.random() * 255) + 0), Math.floor((Math.random() * 255) + 0), Math.floor((Math.random() * 255) + 0)];
            } else {
            return [(Math.random() * 1) + 0, (Math.random() * 1) + 0, (Math.random() * 1) + 0]; 
                }
    }
alert(generateRandomRGB(false));