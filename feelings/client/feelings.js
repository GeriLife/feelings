Template.feelings.onCreated(function () {
  // Get reference to template instance
  const templateInstance = this;

  // Set static variable for countdown throttle length, in seconds
  templateInstance.countdownLength = 10;

  // Set reactive variable to countdown from throttle length variable
  // Default to zero (which is falsy)
  templateInstance.countdown = new ReactiveVar(0);
});

Template.feelings.events({
  'click .feeling' (event, templateInstance) {
    // Get countdown length
    let timer = templateInstance.countdownLength;

    // Set countdown reactive variable to countdown throttle length
    templateInstance.countdown.set(timer);

    // Count down from countdown lengh to zero
    // Each second ...
    let countdown = setInterval(function () {
      if (timer > 0) {
        // Decrement the timer
        timer--;

        // Set the countdown reactive variable
        templateInstance.countdown.set(timer);
      }
    }, 1000);
  }
});

Template.feelings.helpers({
  countdown () {
    // Get reference to template instance
    const templateInstance = Template.instance();

    // Return countdown reactive variable
    return templateInstance.countdown.get();
  }
});
