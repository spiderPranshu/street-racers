class Form{
    constructor() {
         this.title = createElement('h2'),
         this.input = createInput("name");
        this. button = createButton('Play');
        this.greeting =createElement('h2');
    }

display(){
    
this.title.html("Street Racers");
this.title.position(130,0);




this.input.position(130,160);
this.button.position(250,200);
this.button.mousePressed(function(){
    this.input.hide();
    this.button.hide();
    var name = this.input.value();
      
playerCount+=1;
player.update(name);
player.updateCount(playerCount);
this.greeting.html("hello"+name);
this.greeting.position(130,160);

});
}
}