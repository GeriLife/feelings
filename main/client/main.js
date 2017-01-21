Template.body.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Create reactive variable to toggle view results mode
  instance.viewResults = new ReactiveVar(false);
});

Template.body.events({
  'click #view-results' (event, templateInstance) {
    // Set view results mode to true
    templateInstance.viewResults.set(true);
  },
  'click #view-emotion-select' (event, templateInstance) {
    // Set view results mode to true
    templateInstance.viewResults.set(false);
  },
});

Template.body.helpers({
  viewResults () {
    // Get reference to template instance
    const templateInstance = Template.instance();

    // Return value of view results reactive variable
    return templateInstance.viewResults.get();
  }
})
