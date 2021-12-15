class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    

    //question
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);

    
    //options
    this.option1.html("1: Everyone " );
    this.option1.position(225, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(225, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(225, 140);
    this.option4.html("4: Example" );
    this.option4.position(225, 160);

    //inputs
    this.input1.position(150, 230);
    this.input2.position(350, 230);


    //button
    this.button.position(290, 300);


    //if mouse pressed on the button
    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted.");
      this.message.position(350, 300);
      this.message1.html("The Correct Answer Is Envelope.")
      this.message1.position(350,350);


    });
  }
}