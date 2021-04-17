class Food {
    constructor(){
    this.foodStock=0;
    this.image=loadImage('Milk.png');
    }
  
   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }
  
   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }
  
    getFoodStock(){
      return this.foodStock;
    }
  
    display(){
      var x=50,y=100;
  
      imageMode(CENTER);
  
  
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%9==0){
            x=50;
            y=y+100;
          }
          image(this.image,x,y,100,100);
          x=x+50;
        }
      }
    }
  } 