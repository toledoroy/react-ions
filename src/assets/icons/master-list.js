var path = require('path');
var materialPath = path.join('node_modules', 'material-design-icons');
var mbsyPath = path.normalize('src/assets/icons/svg');

var list = {
  material: [
    materialPath + '/navigation/svg/production/ic_check_24px.svg#md-check',
    materialPath + '/action/svg/production/ic_info_24px.svg#md-info',
    materialPath + '/action/svg/production/ic_info_outline_24px.svg#md-info-outline',
    materialPath + '/action/svg/production/ic_highlight_off_24px.svg#md-remove',
    materialPath + '/navigation/svg/production/ic_chevron_right_24px.svg#md-chevron-right',
    materialPath + '/action/svg/production/ic_assignment_24px.svg#md-assignment',
    materialPath + '/navigation/svg/production/ic_close_24px.svg#md-close',
    materialPath + '/content/svg/production/ic_remove_24px.svg#md-minus',
    materialPath + '/navigation/svg/production/ic_arrow_drop_down_24px.svg#md-arrow-drop-down'
  ],
  mbsy: [
    mbsyPath + '/slack.svg#mbsy-slack'
  ]
}

module.exports = {
  list: list
}