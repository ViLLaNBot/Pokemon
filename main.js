$(document).ready(function (){

  let haunter = {};
  let groudon = {};
  let absol = {};
  $.get("https://pokeapi.co/api/v2/pokemon/093", function(haunterStats) {
    console.log(haunterStats);
    let haunterHp = $(".hp1");
    let haunterAtk = $(".atk1");
    let haunterDef=$(".def1");
    
    haunterHp.text("HP:"+ haunterStats.stats[5].base_stat);
    haunterDef.text("ATK:"+ haunterStats.stats[4].base_stat);
    haunterAtk.text("DEF:"+ haunterStats.stats[3].base_stat);
    haunter = (haunterStats);
    

  });
  $.get("https://pokeapi.co/api/v2/pokemon/383", function(groudonStats) {
    console.log(groudonStats);
    let groudonHp = $(".hp2");
    let groudonAtk = $(".atk2");
    let groudonDef=$(".def2");
    
    groudonHp.text("HP:"+ groudonStats.stats[5].base_stat);
    groudonDef.text("ATK:"+ groudonStats.stats[4].base_stat);
    groudonAtk.text("DEF:"+ groudonStats.stats[3].base_stat);
    groudon = groudonStats;
 
 });
 $.get("https://pokeapi.co/api/v2/pokemon/359", function(absolStats) {
    console.log(absolStats);
    let absolHp = $(".hp3");
    let absolAtk = $(".atk3");
    let absolDef=$(".def3");
    
    absolHp.text("HP:"+ absolStats.stats[5].base_stat);
    absolDef.text("ATK:"+ absolStats.stats[4].base_stat);
    absolAtk.text("DEF:"+ absolStats.stats[3].base_stat);
    absol = (absolStats)
 
 });



});