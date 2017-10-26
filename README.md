# usaCitiesJSON

## So this repo turns the usa115475_cities.txt /portions of that file into a JSON that you can use for whatever you want.

### You may need to change your routes in usaCitiesJSON.js
#### Line 3's readfile is the file that you want to be copying
#### Line 23's writefile is the output JSON file name that you want to make
#### Make sure that there is an empty line at the end of the readfile otherwise you get an empty array at the end of the JSON

run `node usaCitiesJSON.js`
#### after you run the file, you have to go into your file and manually define it and put array brackets on both sides. cityimporter.js will hopefully do this automatically.

##### .data/cityObj.js is the JSON of the entire file
##### .data/smallcityObj.js is a subset of cityObj.js and array-ified
##### .data/testObj.js is a subset of cityObj.js
##### for better readability, you can rename the output write file with no '.js' extension to get a more human readable file. You can still have a `const cities = [objects]` and `module.exports= {cities}` in the no extension file and everything should still run okay.
##### cityimporter.js is empty, I wanted to make a file that would automatically turn the JSON into an array of objects. To be done later.
