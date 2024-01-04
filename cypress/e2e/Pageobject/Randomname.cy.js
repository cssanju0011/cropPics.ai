 


 export function random_name() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    //text =  text;
    console.log(text)
    return text;
  }

