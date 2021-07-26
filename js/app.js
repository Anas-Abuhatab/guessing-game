'use strict';
let a,b,c,d,e,f,g,h,i,j,w,filtered;
let x = confirm('Please answer YES or NO at the 5 next question');
   
if (x == false){ x = confirm('Please press OK to answer the question');
}
 if (x == true){

let name =prompt('What is your name?')
alert('Wellcome to my site '+name)     ;
let q1 = prompt('Do you like wild?').toLocaleUpperCase();
let q2 = prompt('What about lions love it ?').toLocaleUpperCase();
let q3 = prompt('Do you know the maximum running speed fo it ?').toLocaleUpperCase();
let q4 = prompt('lions prefers eat crocodile ? ').toLocaleUpperCase();
let q5 = prompt('Do you like another animal ?').toLocaleUpperCase();
switch(q1){
    case 'NO': a='If you dont like wild this is your decision ';
    break;
    case 'YES':b=' Also me like wild so much ';
    break;
    }
        switch(q2){
            case 'NO': c='why you dont love lione it the king ';
            break;
            case 'YES':d=' sure we all love lion ';
            break;
            }
            switch(q3){
                case 'NO': e=' it is 80 km/h ';
                break;
                case 'YES':f=' yes it is 80 km/h ';
                break;
                }
                switch(q4){
                    case 'NO': g=' ^_^ He does not like the taste of a crocodile but eats anything when he is hungry  ';
                    break;
                    case 'YES':h=' ^_^ He does not like the taste of a crocodile but eats anything when he is hungry  ';
                    break;
                    }
                    switch(q5){
                        case 'NO': i=' Tiger is beautiful also ';
                        break;
                        case 'YES':j=' Tiger is beautiful also ';
                        break;
                        }
 w = [a,b,c,d,e,f,g,h,i,j];

 filtered=w.filter(function (el) {
    return el != null;
  });
  alert(filtered);
  alert('Thanks '+name+' for your participate');
}
else {alert('Buy');}


