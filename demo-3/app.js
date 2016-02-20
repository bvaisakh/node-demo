var stdin = process.stdin;
var stdout = process.stdout;

var qName = 'Enter your name: ';
var name;
var qAge = 'Enter your age: ';
var age;

var ask = function (question, callback) {
  stdout.write(question);
  stdin.resume();
  stdin.once('data', function (data) {
    reply = data.toString().trim();
    callback(reply);
  });
};

var cbAskAge = function (reply) {
  age = reply;
  stdout.write('\nHi ' + name);
  stdout.write(',\nYou are just ' + age);
};

var cbAskName = function (reply) {
  name = reply;
  ask(qAge, cbAskAge);
};

ask(qName, cbAskName);