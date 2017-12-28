var SVGSpriter = require('svg-sprite');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
var cwd = path.join(__dirname, '/../node_modules', 'material-design-icons');
var dest = path.normalize(path.join(__dirname, '/../lib/assets/icons'));

var iconList = [
  'content/svg/production/ic_add_24px.svg#add-1-1',
  'alert/svg/production/ic_error_outline_24px.svg#alert-1',
  'navigation/svg/production/ic_expand_less_24px.svg#arrow-66',
  'navigation/svg/production/ic_chevron_left_24px.svg#arrow-67',
  'navigation/svg/production/ic_chevron_right_24px.svg#arrow-68',
  'navigation/svg/production/ic_check_24px.svg#check-2-1',
  'navigation/svg/production/ic_check_24px.svg#check-circle-2-1',
  'content/svg/production/ic_content_paste_24px.svg#clipboard-1',
  'navigation/svg/production/ic_close_24px.svg#delete-1',
  'navigation/svg/production/ic_close_24px.svg#delete-1-1',
  'navigation/svg/production/ic_cancel_24px.svg#delete-3',
  'navigation/svg/production/ic_arrow_drop_down_24px.svg#caret',
  'navigation/svg/production/ic_check_24px.svg#check-1-1',
  'action/svg/production/ic_info_outline_24px.svg#information'
]

var spriter = new SVGSpriter({
	dest: dest,
	log: 'debug',
	shape: {
		id: {
			generator: function(name) {
        return name.split('#')[1]
			}
		}
	}
});

/**
 * Add a bunch of SVG files
 *
 * @param {SVGSpriter} spriter        Spriter instance
 * @param {Array} files               SVG files
 * @return {SVGSpriter}               Spriter instance
 */
function addFixtureFiles(spriter, iconList) {
	iconList.forEach(function (file) {
		spriter.add(
			path.resolve(path.join(cwd, file)),
			file,
			fs.readFileSync(path.join(cwd, file.split('#')[0]), { encoding: 'utf-8' })
		);
	})
	return spriter;
}

addFixtureFiles(spriter, iconList).compile({
	symbol: {
		sprite: 'sprite.svg'
	}
}, function (error, result) {
	for (var type in result.symbol) {
		mkdirp.sync(path.dirname(result.symbol[type].path));
		fs.writeFileSync(result.symbol[type].path, result.symbol[type].contents);
	}
})

