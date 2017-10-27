# usaCitiesJSON

## So this repo turns the usa115475_cities.txt /portions of that file into a JSON that you can use for whatever you want.

### You may need to change your routes in usaCitiesJSON.js
#### Line 3's readfile is the file that you want to be copying
#### Line 23's writefile is the output JSON file name that you want to make
#### Make sure that there is an empty line at the end of the readfile otherwise you get an empty array at the end of the JSON

1. run `node usaCitiesJSON.js`
for Mac users run `node usaCitiesJSONmacOS.js` courtesy of @mixelpixel.
2. `node usaCitiesJSON.js`
can optionally take 2 extra arguments in the command line. 
3. `node usaCitiesJSON.js readfile writefile`
You will take readfile and then turn it into writefile. 
4. `node usaCitiesJSON.js readfile`
This will take readfile and then write it in './data/testObj'. 
5. Default readfile is './data/usaCitiesSmall.txt' and writefile is './data/testObj' respectively.

#### after you run the file, you have to go into your file and manually define it and put array brackets on both sides. cityimporter.js will hopefully do this automatically.

##### for better readability, you can rename the output write file with no '.js' extension to get a more human readable file. You can still have a `const cities = [objects]` and `module.exports= {cities}` in the no extension file and everything should still run okay.
##### .data/cityObj is the JSON of the entire file
##### .data/smallcityObj is a subset of cityObj.js and array-ified
##### .data/testObj is a subset of cityObj.js
##### ./usaCitiesDump.js courtery of @WizrdJim does everything for you without making any output file. So you can theoretically import from this file and get it to work. I have not tested but @WizrdJim says it works.
##### cityimporter.js is empty, I wanted to make a file that would automatically turn the JSON into an array of objects. To be done later.
