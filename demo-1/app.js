var stdin = process.stdin;
var stdout = process.stdout;

stdout.write('Enter your name: ');
stdin.resume();
stdin.once('data', function (data) {
  stdout.write('\nHi ' + data);
});