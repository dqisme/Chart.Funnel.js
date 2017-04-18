'use strict';

module.exports = function(Chart) {

  Chart.Funnel = function(context, config) {
    config.type = 'funnel';

    return new Chart(context, config);
  };

};
