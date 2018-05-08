$(document).ready(function () {
  let takeshi = {};
  takeshi.haunter = {};
  takeshi.groudon = {};
  takeshi.absol = {};
  // GET THE API FROM POKEMON 
  $.get("https://pokeapi.co/api/v2/pokemon/093", function (haunterStats) {
    console.log(haunterStats);
    let haunterHp = $(".hp1");
    let haunterAtk = $(".atk1");
    let haunterDef = $(".def1");
    let haunterAttacks = $(".special1");

    haunterHp.text("HP:" + haunterStats.stats[5].base_stat);
    haunterAtk.text("ATK:" + haunterStats.stats[4].base_stat);
    haunterDef.text("DEF:" + haunterStats.stats[3].base_stat);
    haunterAttacks.text("Attacks:" + haunterStats.moves[0].move.name + ", " + haunterStats.moves[1].move.name + ", " + haunterStats.moves[2].move.name);
    takeshi.haunter = (haunterStats);


  });
  $.get("https://pokeapi.co/api/v2/pokemon/383", function (groudonStats) {
    console.log(groudonStats);
    let groudonHp = $(".hp2");
    let groudonAtk = $(".atk2");
    let groudonDef = $(".def2");

    let groudonAttacks = $(".special2")

    groudonHp.text("HP: " + groudonStats.stats[5].base_stat);
    groudonAtk.text("ATK: " + groudonStats.stats[4].base_stat);
    groudonDef.text("DEF: " + groudonStats.stats[3].base_stat);
    groudonAttacks.text("Attacks: " + groudonStats.moves[0].move.name + ", " + groudonStats.moves[1].move.name + ", " + groudonStats.moves[2].move.name)
    takeshi.groudon = groudonStats;

  });
  $.get("https://pokeapi.co/api/v2/pokemon/359", function (absolStats) {
    console.log(absolStats);
    let absolHp = $(".hp3");
    let absolAtk = $(".atk3");
    let absolDef = $(".def3");
    let absolAttacks = $(".special3")

    absolHp.text("HP:" + absolStats.stats[5].base_stat);
    absolAtk.text("ATK:" + absolStats.stats[4].base_stat);
    absolDef.text("DEF:" + absolStats.stats[3].base_stat);
    absolAttacks.text("Attacks: " + absolStats.moves[0].move.name + ", " + absolStats.moves[1].move.name + ", " + absolStats.moves[2].move.name)
    takeshi.absol = (absolStats)

  });
  let pokemonButton = $("#pokemonWay")
  let manButton = $("#manWay")
  let harmonyButton = $("#harmonyWay")
  let dominanceButton = $("#dominanceWayButton")
  let textBox = $("#philosophyText")


  //   POKEMON WAY BUTTONS
  $("#pokemonWay").click(function () {
    $("#grH4").text("The Way of Pokémon")
    $("#grH5").text("The Pokémon essence is Order yet it's Nature brings Chaos")
    $('#grP').text("All Pokémon exist with a natural order unseen elsewhere in nautre, yet their untamed power fosters a life of chaos")

    console.log("clcked")

  })

  $("#manWay").click(function () {
    $("#grH4").text("The Way of Man")
    $("#grH5").text("Man's Essence is Chaos though his Nature brings Order")
    $('#grP').text("Mans natural state is chaos and change, yet his mind seeks to bring order to all around him.")
    console.log("clcked")
  })

  $("#harmonyWay").click(function () {
    $("#grH4").text("The Way of Harmony")
    $("#grH5").text("Pokémon and Man are One")
    $('#grP').text("The Pokémon seeks the order of man to fulfill its greatest potential, just as Man seeks purpose to acheive his. In Harmony with one another they acheive balance.")
    console.log("clcked")
  })

  $("#dominanceWay").click(function () {
    $("#grH4").text("The Way of Dominance")
    $("#grH5").text("Strength Through Suffering")
    $('#grP').text("As steel from flame, the greatest Pokémon come from the Harshest trainers.  Gyojin Ryu Pokémon suffer greatly but acheive greatness.")
    console.log("clcked")
  })



})

$("#attackButton").click(function () {
  $(".offenseStat").toggleClass("hiddenStat");

})
$("#defenseButton").click(function () {
  $(".defenseStat").toggleClass("hiddenStat")
});