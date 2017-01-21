Router.route('/', function () {
  this.layout("layout")
  this.render('feelings');
}, {
  name: 'feelings'
});

Router.route('/results', function () {
  this.layout("layout")
  this.render('results');
}, {
  name: 'results'
});
