var request = new XMLHttpRequest()

request.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1acdf986a5284750b14e0372e27bb29f', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((title) => {
      console.log(description)
    })
  } else {
    console.log('error')
  }
}

request.send()
