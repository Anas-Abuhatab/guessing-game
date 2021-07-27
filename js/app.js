'use strict';
let a,b,c,d,e,f,g,h,i,j,w,filtered,s,l,score ,correct ;
correct=0;
let x = confirm('Please answer YES or NO at the 5 next questions and the 2 Guessing-game questions =)');

if (x === false){ x = confirm('Please press OK to answer the question');
}
if (x === true){

  let name =prompt('What is your name?');
  alert('Wellcome to my site '+name);
  let q1 = prompt('Q1: Do you like wild?').toLocaleUpperCase();
  let q2 = prompt('Q2: What about lions love it ?').toLocaleUpperCase();
  let q3 = prompt('Q3: Do you know the maximum running speed fo it ?').toLocaleUpperCase();
  let q4 = prompt('Q4: lions prefers eat crocodile ? ').toLocaleUpperCase();
  let q5 = prompt('Q5: Do you like another animal ?').toLocaleUpperCase();
  for( l=4; l >= 1 ; l--)
  { let gnumperQ1 = Number(prompt('Guessing the noumber of KG that Gorilla can hold '));
    if (gnumperQ1 > 2000) {alert('too high *hint : its between 1500 & 2100');}
    else if(gnumperQ1 < 2000){alert('too low *hint : its between 1500 & 2100');}
    else if(gnumperQ1 === 2000){alert('Welldone thats Right');correct =correct +1;break;}
    if(l === 1){alert('You have finish your opportunities the correct answer is :2000 ');}}
  for(s=6 ;s>0;s--){
    let gnumperQ2 = ['Lion' ,'Tiger' ,'Gorilla' ,'Ant'];
    let strongest = prompt('who is the strongest Animal please choose (Lion ,Tiger ,Gorilla ,Ant) ');
    if (strongest === gnumperQ2[0]){alert('Welldone thats Right');correct =correct +1;break;}
    else if(strongest !== gnumperQ2[0]){alert('Please try again');}
  }
  switch(q1){
  case 'N':
  case 'NO': a='If you dont like wild this is your decision ';
    break;
  case 'Y':
  case 'YES':b=' Also me like wild so much ';correct =correct +1;
    break;
  }
  switch(q2){
  case 'N':
  case 'NO': c='why you dont love lione it the king ';
    break;
  case 'Y':
  case 'YES':d=' sure we all love lion ';correct =correct +1 ;
    break;
  }
  switch(q3){
  case 'N':
  case 'NO': e=' it is 80 km/h ';
    break;
  case 'Y':
  case 'YES':f=' yes it is 80 km/h ';correct =correct +1;
    break;
  }
  switch(q4){
  case 'N':
  case 'NO': g=' ^_^ He does not like the taste of a crocodile but eats anything when he is hungry  ';correct =correct +1;
    break;
  case 'Y':
  case 'YES':h=' ^_^ He does not like the taste of a crocodile but eats anything when he is hungry  ';
    break;
  }
  switch(q5){
  case 'NO' :
  case 'N': i=' Tiger is beautiful also ';
    break;
  case 'Y':
  case 'YES':j=' Tiger is beautiful also ';correct =correct +1;
    break;
  }
  score =correct +l+s;
  w = [a,b,c,d,e,f,g,h,i,j];
  filtered=w.filter(function (el) {
    return el !== null;
  });
  console.log(score);
  alert(filtered);
  alert('You have answered ' + correct + ' correct question out of 7' );
  alert('Your score is ' + score +'/17') ;
  alert('Thanks '+name+' for your participate');
}
else {alert('Buy');}
