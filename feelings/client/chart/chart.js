import { Feelings } from '/feelings/collection';
import d3 from 'd3';

Template.feelingsChart.onRendered(function () {
  // Get reference to template instance
  const instance = this;

  instance.autorun(function () {
    // Get all feelings
    const feelings = Feelings.find().fetch();

    // Group feelings by type and count total for each feeling
    const feelingsCounts = d3.nest()
      .key(function (datum) { return datum.feeling })
      .rollup(function (values) { return values.length })
      .entries(feelings);

    // Make sure feeling counts are available
    if (feelingsCounts) {
      // clear any previous chart
      instance.$('#feelingsChart').empty();

      // Render chart with current feeling counts
      MG.data_graphic({
        title: 'Emotions',
        data: feelingsCounts,
        chart_type: 'bar',
        x_accessor: 'value',
        y_accessor: 'key',
        height:600,
        width:400,
        target: '#feelingsChart',
      });
    }
  });
})
