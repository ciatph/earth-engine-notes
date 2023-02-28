// Common earth engine javascript objects

var serverNumber = ee.Number(Math.E)
var log = serverNumber.log()
// print(log)

// Arrays
var eeListChar = ee.List(['a','b','c'])
var eeList = ee.List.sequence(1, 5)
// print(eeListChar)
// print('numbers', eeList)

// Casting
var value = 5
var sum = ee.Number(value).add(3)
// print(sum)

// Objects
var User = ee.Dictionary({
  name: 'default',
  server: 'Bahr',
  class: 'wizard'
})

// print(User.get('server'))

// Dates
var date = ee.Date('2023-02-28')
var now = Date.now()
var eeNow = ee.Date(now)
var aDate = ee.Date.fromYMD(2017, 1, 13)
print('date', date)
print('now date', eeNow)
print ('test date', aDate)

// server-side mapping
var serverList = ee.List.sequence(0, 7)
serverList = serverList.map(function(n) {
  // serverList is an ee object (operates on the server-side)
  // so use ee methods to process it inside the map() function
  return ee.Number(n).add(1)

  // this won't work
  // return (n + 1)
})

print(serverList)