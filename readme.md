# Simple claudia chat bot

Set up and install claudia before using this, you may also have to mess with npm, but not sure. 

All the logic is in bot.js. If you want to change what's on the lambda server, make desired changes to bot.js, then run 

$ claudia update 

inside this directory.  


Current state of the API is send a string to this URL as an example for "your question here": 
https://7epc2bh3fg.execute-api.us-west-1.amazonaws.com/latest/faq?question=your+question+here

and it will return you the answer for the question that has the most matching keywords. Look at the faq object inside bot.js for the list of question, keyword and answer objects. 


Also, there is a test URL for hello world: 
https://7epc2bh3fg.execute-api.us-west-1.amazonaws.com/latest/hello



Facebook message me if you have any questions! 
