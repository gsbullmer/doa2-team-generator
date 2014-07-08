require.config({
  paths: {
    'almond'     : '../../bower_components/almond/almond',
    'lodash'     : '../../bower_components/lodash/dist/lodash',
    'underscore' : '../../bower_components/underscore/underscore',
    'jquery'     : '../../bower_components/jquery/dist/jquery',
    'Backbone'   : '../../bower_components/backbone/backbone'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'lodash': {
      deps: ['underscore.string']
    },
    'Backbone': {
      deps: ['jquery', 'lodash'],
      exports: 'Backbone'
    }
  }
});