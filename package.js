Package.describe({
  name: 'telescope-bootstrap-wysiwyg',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Change the post editor to bootstrap-wysiwyg',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use(['less', 'templating'], 'client');

  api.use(['telescope-base', 'aldeed:autoform', 'djedi:sanitize-html'], 'client');

  api.addFiles('bootstrap/bootstrap.min.js', 'client', {bare: true});
  api.addFiles('bootstrap/bootstrap.less', 'client');

  api.addFiles('wysiwyg/bootstrap-wysiwyg.js', 'client', {bare: true});
  api.addFiles('wysiwyg/style.less', 'client');

  api.addFiles([
    'client/views/forms/bootstrap-wysiwyg.html',
    'client/views/forms/bootstrap-wysiwyg.js',
    'client/views/posts/post_form.html',
    'client/views/posts/post_edit.html',
    'client/views/posts/post_submit.html',
  ], 'client');

  api.addFiles('index.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('telescope-bootstrap-wysiwyg');
});
