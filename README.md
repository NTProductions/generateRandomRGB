# generateRandomRGB
 generate a random rgb array in 0-255 or 0.0-1.0 format

the only argument required is a "normalisation bool"
if true, it will generate the r, g, and b values between 0-255
if false, it will generate them between 0.0-1.0 (values are float)

example function calls:
generateRandomRGB(true);
returns: [172,121,53]

generateRandomRGB(false);
returns: [0.32087707519531,0.42100524902344,0.62715148925781]