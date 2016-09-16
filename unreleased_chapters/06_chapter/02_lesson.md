**WDI Fundamentals Chapter 6**

---

##Objects

In the last lesson, we looked at Arrays.  

```js
var basicArray = new Array();
basicArray[0] = "Portland";
basicArray[1] = "Beaverton";
basicArray[2] = "Lake Oswego";
console.log(basicArray.length);
// --> Outputs 3, as expected

var object = new Array();
object['city'] = "Portland";
object['state'] = "Oregon";
object['country'] = "United States";
console.log(object.length);
// --> Outputs 0 in Chrome, what the heck?

// we can also access values through .property notation ?!
console.log("City is: " + object['city']);
console.log("City is: " + object.city); 

// outputs
// --> City is: Portland
// --> City is: Portland
```





