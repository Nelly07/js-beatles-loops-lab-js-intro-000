function theBeatlesPlay(musicians, instruments){
  var allmusic=[];
  for (var i = 0; i < musicians.length; i++){
    allmusic.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return allmusic;
}
function johnLennonFacts(facts){
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var newfacts=[];
var i=0;
while (i<facts.length){
  newfacts.push(facts[i]+'!!!');
  i++
}
return newfacts;
}
