function Player(value){
  this.choice = value;
  this.wins = 0;
  this.losses = 0;

};

function Computer(){
  var selections = ['Rock', 'Paper', 'Scissors']
  this.choice = function(){
    return selections[Math.floor((Math.random()* 3))]
  }
  this.losses = 0;
  this.wins = 0;
};

function Controller(){
//there's a problem in this function, Draw isn't showing up!
  this.computer = new Computer;



  this.play = function(value){
    var player = new Player(value);
    var computerChoice = this.computer.choice();
    var results = "Draw";

    if (player.choice == ""){
      results = "No choice selected"
      return results
    };
    if (player.choice == computerChoice){
      results = "Draw";
      return "Draw";
    };
    if (player.choice == "Rock" && computerChoice == "Scissors"){
      results = "You Win";
      return results;
    }
    else if(player.choice == "Scissors" && computerChoice == "Rock"){
      results = "Computer Wins";
      return results;
    }
    else if (player.choice == "Paper" && computerChoice == "Rock"){
      results = "You Win";
      return results;
    }
    else if(player.choice == "Rock" && computerChoice == "Paper"){
      results = "Computer Wins";
      return results;
    }
    else if(player.choice == "Scissors" && computerChoice == "Paper"){
      results = "You Win";
      return results;
    }
    else if(player.choice == "Paper" && compuerChouce == "Scissors" ){
      results = "You Win";
      return results;
    }
  }
}



