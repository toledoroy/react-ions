var SVGSpriter = require('svg-sprite');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
var cwd = path.join(__dirname, '/../');
var dest = path.normalize(path.join(__dirname, '/../lib/assets/icons'));

var materialDesignIconsPath = path.join('node_modules', 'material-design-icons');
var customIconsPath = path.normalize('src/assets/icons/svg');

var iconList = [
  materialDesignIconsPath + '/content/svg/production/ic_add_24px.svg#icon-add-1-1',
  materialDesignIconsPath + '/alert/svg/production/ic_error_outline_24px.svg#icon-alert-1',
  materialDesignIconsPath + '/navigation/svg/production/ic_expand_less_24px.svg#icon-arrow-66',
  materialDesignIconsPath + '/navigation/svg/production/ic_chevron_left_24px.svg#icon-arrow-67',
  materialDesignIconsPath + '/navigation/svg/production/ic_chevron_right_24px.svg#icon-arrow-68',
  materialDesignIconsPath + '/navigation/svg/production/ic_check_24px.svg#icon-check-2-1',
  materialDesignIconsPath + '/content/svg/production/ic_clear_24px.svg#icon-check-circle-2-1',
  materialDesignIconsPath + '/content/svg/production/ic_content_paste_24px.svg#icon-clipboard-1',
  materialDesignIconsPath + '/navigation/svg/production/ic_close_24px.svg#icon-delete-1',
  materialDesignIconsPath + '/navigation/svg/production/ic_close_24px.svg#icon-delete-1-1',
  materialDesignIconsPath + '/navigation/svg/production/ic_cancel_24px.svg#icon-delete-3',
  materialDesignIconsPath + '/navigation/svg/production/ic_check_24px.svg#icon-check-1-1',
	materialDesignIconsPath + '/action/svg/production/ic_info_outline_24px.svg#icon-information',
	materialDesignIconsPath + '/communication/svg/production/ic_mail_outline_24px.svg#icon-mail-1',
	customIconsPath + '/icon-caret-bottom.svg#icon-caret'
]

console.log(iconList)

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

