var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

var faq = [
  {
    "question": "Do you offer free shipping?",
    "keywords": ["free", "shipping"],  
    "answer": "Yes, you can get free shipping on orders over $35 (with a few exceptions). Visit our Free Shipping page for information on how it works." 
  }, 
  {
    "question": "What are the different ways you ship to me?",
    "keywords": ["ship", "methods", "shipping", "offer"],
    "answer": "To offer you the best possible service, during the checkout process we'll show you the most economical and efficient shipping options available. Simply select the level of service you prefer while you're checking out."
  }
]

module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});


api.get('/faq', function (request) { 
  var question = request.queryString.question; 
  var words = question.split(' '); 
  var uniqueWords = Array.from(new Set(words));
  
  var matches = numMatches(["foo", "bar", "abc"], words);  

  //var faqJson = JSON.parse(faq); 
  var answer = findAnswer(words, faq); 
  return answer; 
   
});  

var faqOptions = {
  host: 'www.bestbuy.ca', 
  path: '/en-CA/reward-zone/faq.aspx'
}


function findAnswer(question, faq) { 
  var ans = "Answer not found";
  var maxMatches = 0;  
  faq.forEach(function(obj) {
    matches = numMatches(obj.keywords, question);  
    if (matches > maxMatches) { 
      ans = obj.answer;
      maxMatches = matches; 
    }
  });
  return ans; 
}

function numMatches(list1, list2) { 
  var ans = 0; 
  set1 = Array.from(new Set(list1)); 
  set2 = Array.from(new Set(list2)); 
  set1.forEach(function(word1) { 
    set2.forEach(function(word2) { 
      if (word1 == word2) {
        ans++; 
      }
    });
  }); 
  return ans; 
}



