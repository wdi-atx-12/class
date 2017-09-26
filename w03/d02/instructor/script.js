var newData = {
  firstName: "Britney Jo",
  lastName: "Ludkowski"
}

$.ajax({
  // what kind of request
  method: 'GET',
  // the url for the request
  url: 'http://api.icndb.com/jokes/random/',
  // they type of data we want back
  dataType: 'json',
  data: newData,
  // code to run if the request succeeds
  success: onSuccess
})

// $.ajax({
//   // what kind of request
//   method: 'GET',
//   // the url for the request
//   url: 'http://api.icndb.com/jokes/random/',
//   // they type of data we want back
//   dataType: 'json',
//   // code to run if the request succeeds
//   success: onSuccess
// })

function onSuccess(responseData){
  // console.log(responseData.value.joke);
  console.log("success!!");
  $('p').text(responseData.value.joke);
}
