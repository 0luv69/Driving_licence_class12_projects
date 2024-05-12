var score =0;
var w = 0; // wrong
_answer=0
var currentQuestionIndex = 0;
const error_box= document.getElementById("error-box")
const error_message= document.getElementById("error-message")
const radioButtons = document.querySelectorAll(".radio_btn");

// INside selected Value we will get the option that is selected
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", function () {
      selectedValue = this.id;
    });
  });
  
const containersData = [
    {question: '1) जेब्रा क्रसिङ केका लागि प्रयोग गरिन्छ ?',
      options: ['क) उभिन',
        'ख) पैदल यात्रीले बाटो काट्न',
        'ग) गाडी रोक्न',
        'घ) गाडी कुदाउँन'],
      answer:"b"},

    {question: '2) मोटरसाइकलमा सबैभन्दा महंगो पार्टस् कुन हो ?',
      options: [
        'क) इन्जिन',
        'ख) डिस्क प्याड',
        'ग) चेनस्पोर्केट',
        'घ) क्लचप्लेट'],
      answer:"a"},

    {question: '3) मोटरसाइकलमा हरेक पटक गियर परिवर्तन गर्दा के थिच्नु पर्छ ?',
      options: [
        'क) फुटब्रेक',
        'ख) हेडलाइट',
        'ग) क्लच',
        'घ) माथिका सवै'],
      answer:"c"},
    
      {
        question: "4) ओभरटेक गर्दा कुन् साइडबाट गर्नुपर्छ ",
        options: ["(क) बायाँ साइडबाट","(ख) दायाँ साइडबाट","(ग) दुबै साइडबाट" ,"(घ) मातिका सबै" ],
        answer:"b"
      }
  ];

// Error Msg when to show and hide in what time.
function hide_error_msg(){
    error_box.style.animation = 'error_delete_animate 1s';
    setTimeout(function () {
      error_box.style.display = "none";
      error_box.style.animation ='error_call_animate 1s';
    }, 900);
  } 
function show_error_msg(message){
      error_message.textContent = message;
      error_box.style.display ="block";
      setTimeout(hide_error_msg,3000);
  }

// to display the question
function displayQuestion(index) {
    const container_data = containersData[index];
    const { question, options,answer } = container_data;
    _answer=answer;
    const question__=document.getElementsByClassName("bold_text")[0];
    const labelA = document.getElementById("a1");
    const labelB = document.getElementById("b1");
    const labelC = document.getElementById("c1");
    const labelD = document.getElementById("d1");

    question__.innerHTML=question;
    labelA.textContent = options[0];
    labelB.textContent = options[1];
    labelC.textContent = options[2];
    labelD.textContent = options[3];
  };


// calling the display question to display question   
displayQuestion(currentQuestionIndex);  


function checkAnswer(){
    try{  
      if (selectedValue == _answer){
        score++;
        document.getElementsByClassName('next_display')[0].style.display = "block";
        document.getElementsByClassName('check_btn')[0].style.display = "none";
        document.getElementById('correct').innerHTML=score;
        document.getElementById('wrong_right').innerHTML="Correct";
        document.getElementById('wrong_right').style.display = "block";
        document.getElementById('wrong_right').style.backgroundColor= "rgb(21, 255, 0)";
        document.getElementById('wrong_right').style.color="black";
        currentQuestionIndex++;
      }
      else if (['a', 'b', 'c', 'd'].includes(selectedValue)){
        w=w+1;
        document.getElementsByClassName('next_display')[0].style.display = "block";
        document.getElementsByClassName('check_btn')[0].style.display = "none";
        document.getElementById('wrong').innerHTML=w;
        document.getElementById('wrong_right').innerHTML="Wrong";
        document.getElementById('wrong_right').style.display = "block";
        currentQuestionIndex++;
      }
        
      else{
        show_error_msg("Plz, Select your answer")
      }
      
    }
    catch{
      show_error_msg("Plz, Select your answer")
    }  
}

function next(){
  document.getElementById('wrong_right').style.backgroundColor= "red"
  document.getElementsByClassName('next_display')[0].style.display = "none";
  document.getElementsByClassName('check_btn')[0].style.display = "block";
  document.getElementById('wrong_right').style.display = "none";
  document.getElementById('que').innerHTML=currentQuestionIndex+1;

  //  radio buttons and uncheck them
   const radioButtons = document.querySelectorAll('input[type="radio"][name="btn"]');
   radioButtons.forEach(function (radio) {
     radio.checked = false;
   });
   selectedValue= null

   if (currentQuestionIndex < containersData.length){
    displayQuestion(currentQuestionIndex)}

   else{end_function()}
}

function reload_(){
  location.reload();
}

function end_function(){
  document.getElementById('que').innerHTML=currentQuestionIndex;
  btn=document.getElementsByClassName('check_btn')[0];
  btn.onclick = null;
  btn.style.backgroundColor="red"
  btn.textContent="Reload";
  btn.addEventListener("click",reload_);
  alert("SO, Here's the End, Good, check Your results");  
}




