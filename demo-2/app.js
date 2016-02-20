var stdin = process.stdin;
var stdout = process.stdout;

stdout.write('Enter your name: ');
stdin.resume();
stdin.once('data', function (data) {
  stdout.write('\nHi ' + data);

  stdout.write('Enter your age: ');
  stdin.resume();
  stdin.once('data', function (data) {
    stdout.write('\nYou are just ' + data);
  });
});