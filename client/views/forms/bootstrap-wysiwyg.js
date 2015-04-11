AutoForm.addInputType("bootstrap-wysiwyg", {
  template: "afBootstrap-wysiwyg",
  valueOut: function () {
    return this.cleanHtml();
  }
});

Template["afBootstrap-wysiwyg"].onRendered(function () {
  var inst = this;
  inst.$('#bootstrap-wysiwyg').wysiwyg();
  inst.$('#bootstrap-wysiwyg').html(inst.data.value);
  inst.$('[data-role=magic-overlay]').each(function () { 
    var overlay = $(this), target = $(overlay.data('target')); 
    overlay.css('opacity', 0).css('position', 'absolute')
    .offset(target.offset()).width(target.outerWidth())
    .height(target.outerHeight());
  });
});

Template["afBootstrap-wysiwyg"].events({
  'click .dropdown-menu': function (e) {
    e.stopPropagation();
  }
});
