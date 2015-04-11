if (Meteor.isClient) {
  templates["post_submit"] = "custom_post_submit";
  templates["post_edit"] = "custom_post_edit";
}

Meteor.startup(function () {
  sanitize = function (s) {
    // console.log('// before sanitization:')
    // console.log(s)
    if(Meteor.isServer){
      var s = sanitizeHtml(s, {
        allowedTags: [
          'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
          'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike',
          'code', 'hr', 'br', 'div', 'table', 'thead', 'caption',
          'tbody', 'tr', 'th', 'td', 'u', 'pre', 'img', 'font', 'span'
        ],
        allowedAttributes: {
          a: [ 'href', 'name', 'target' ],
          font: ['size', 'face'],
          div: ['style'],
          span: ['style'],
          img: ['src']
        },
        allowedSchemes: [ 'http', 'https', 'ftp', 'mailto', 'data' ]
      });
      // console.log('// after sanitization:')
      // console.log(s)
    }
    return s;
  };

  Posts.before.insert(function (userId, doc) {
    if(!!doc.body)
      // doc.htmlBody = sanitize(marked(doc.body));
      doc.htmlBody = sanitize(doc.body);
  });

  Posts.before.update(function (userId, doc, fieldNames, modifier, options) {
    // if body is being modified, update htmlBody too
    if (Meteor.isServer && modifier.$set && modifier.$set.body) {
      modifier.$set.htmlBody = sanitize(modifier.$set.body);
    }
  });
});
