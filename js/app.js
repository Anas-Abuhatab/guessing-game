'use strict';

let a,b,c,d,e,f,g,h,i,j,w,filtered,s,l,score ,correct,q1,q2,q3,q4,q5,q0 ,gnumperQ1,gnumperQ2,strongest,x;
correct=0;
keys();
key1();
key2();
function keys() {
  x = confirm('Please answer YES or NO at the 5 next questions and the 2 Guessing-game questions =)');}
function key1() {
  if (x === false){ x = confirm('Please press OK to answer the question');}}
function key2() {
  if (x === true){
    q0 =prompt('What is your name?');
    alert('Wellcome to my site '+q0);
    q1 = prompt('Q1: Did yoy know my name?').toLocaleUpperCase();
    q2 = prompt('Q2: What about my age ?').toLocaleUpperCase();
    q3 = prompt('Q3: Do you know wich month i was born ?').toLocaleUpperCase();
    q4 = prompt('Q4: Do you know what is my favourite animal ? ').toLocaleUpperCase();
    q5 = prompt('Q5: Do you know what animal i raised in my house ?').toLocaleUpperCase();
    for( l=4; l >= 1 ; l--)
    {

      gnumperQ1 = Number(prompt('Guessing the noumber of KG that Gorilla can hold '));
      if (gnumperQ1 > 2000) {alert('too high *hint : its between 1500 & 2100');}
      else if(gnumperQ1 < 2000){alert('too low *hint : its between 1500 & 2100');}
      else if(gnumperQ1 === 2000){alert('Welldone thats Right');correct =correct +1;break;}
      if(l === 1){alert('You have finish your opportunities the correct answer is :2000 ');}
    }
    for(s=6 ;s>0;s--){
      gnumperQ2 = ['Lion' ,'Tiger' ,'Gorilla' ,'Ant'];
      strongest = prompt('who is the strongest Animal please choose (Lion ,Tiger ,Gorilla ,Ant) ');
      if (strongest === gnumperQ2[0]){alert('Welldone thats Right');correct =correct +1;break;}
      else if(strongest !== gnumperQ2[0]){alert('Please try again');}
    }}
  else {alert('Buy');}}
function relay() {

  switch(q1){
  case 'N':
  case 'NO': a=' I am Anas ';
    break;
  case 'Y':
  case 'YES':b=' Anas Abuhatab ';correct =correct +1;
    break;
  }
  switch(q2){
  case 'N':
  case 'NO': c='I have 24 year ';
    break;
  case 'Y':
  case 'YES':d=' born in 1996 ';correct =correct +1 ;
    break;
  }
  switch(q3){
  case 'N':
  case 'NO': e=' it is 8  ';
    break;
  case 'Y':
  case 'YES':f=' yes Augest ';correct =correct +1;
    break;
  }
  switch(q4){
  case 'N':
  case 'NO': g=' ^_^ I love the lion  ';
    break;
  case 'Y':
  case 'YES':h=' ^_^ How did you know i love the lion   ';correct =correct +1;
    break;
  }
  switch(q5){
  case 'NO' :
  case 'N': i=' Lion , Tiger ,Gorilla ,Ant ';
    break;
  case 'Y':
  case 'YES':j=' Their is the strongest animal ';correct =correct +1;
    break;
  }}
relay();
final();
function final() {
  score =correct +l+s;
  w = [a,b,c,d,e,f,g,h,i,j];
  filtered=w.filter(function (el) {
    return el !== null;
  });
  console.log(score);
  alert(filtered);
  alert('You have answered ' + correct + ' correct question out of 7' );
  alert('Your score is ' + score +'/17') ;
  alert('Thanks '+q0+' for your participate');}

