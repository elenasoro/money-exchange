// PLEASE DON'T change function name
// module.exports =


var errorMessage =  {error: "You are rich, my friend! We don't have so much coins for exchange"};
var empty = {};
var halfDollars = 0;
var result = {};
var rest;
//
module.exports = function makeExchange(cents) {
    if (cents>10000) {
      return errorMessage
    }
    else if (cents <= 0) {
      return empty;
    }

    else {

      if (cents%50 == 0) {

        result["H"] = cents/50;
        return result;
      }
      else {

          if (Math.floor(cents/50) > 0){
            result["H"] = Math.floor(cents/50);

          }


          if ((cents%50)%25  == 0){
            result["Q"] = (cents%50)/25;
            return result;
          }

          else{

              if(Math.floor((cents%50)/25) > 0){
                result["Q"] = Math.floor((cents%50)/25);
                rest = ((cents%50)%25);
              }


              if (((cents%50)%25)%10 == 0){
                result["D"] = ((cents%50)%25)/10;
                return result;
              }
              else {

                  if(Math.floor(((cents%50)%25)/10)>0){
                    result["D"] = Math.floor(((cents%50)%25)/10);
                    rest = (((cents%50)%25)%10);
                  }


                  if((((cents%50)%25)%10)%5 == 0){
                    result["N"] = (((cents%50)%25)%10)/5;
                    return result;
                  }

                  else{
                    if(Math.floor((((cents%50)%25)%10)/5)>0){
                      result["N"] = Math.floor(((cents%50)%25)%10/5);
                      rest = ((((cents%50)%25)%10)%5);
                  }

                  result["P"] = (((cents%50)%25)%10)%5;
                  return result;

                }
              }
            }
          }
        }
      }

// console.log(makeExchange(7898));
