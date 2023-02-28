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
