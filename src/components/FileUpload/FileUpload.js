import React from 'react'
import Dropzone from 'react-dropzone'
import Icon from '../Icon'
import classNames from 'classnames/bind'
import style from './style.scss'

/**
 * The FileUpload component.
 */
class FileUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: this.props.value,
    files: []
  }

  static defaultProps = {
    disabled: false,
    value: '',
    showPreview: false,
    previewSize: 200
  }

  static propTypes = {
    /**
     * Whether the FileUpload is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text shown above the FileUpload.
     */
    label: React.PropTypes.string,
    /**
     * Value of the FileUpload (can be path string or an array of file objects).
     */
    value: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ]),
    /**
     * Name of the FileUpload.
     */
    name: React.PropTypes.string,
    /**
     * Whether to show the preview under the FileUpload.
     */
    showPreview: React.PropTypes.bool,
    /**
     * The preview size (maximum width and height).
     */
    previewSize: React.PropTypes.number,
    /**
     * Optional styles to add to the FileUpload.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the FileUpload changes.
     */
    changeCallback: React.PropTypes.func
  };

  _normalizeValue = (value) => {
    if (typeof value === 'object') {
      return value
    }
    else {
      return [{ preview: value }]
    }
  }

  componentWillMount = () => {
    if (this.props.value && this.props.value !== '' && this.props.showPreview) {
      this.setState({ files: this._normalizeValue(this.props.value) });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value && nextProps.value !== '' && nextProps.value !== this.props.value) {
      this.setState({ files: this._normalizeValue(nextProps.value) });
    }
  }

  handleChange = () => {
    if (typeof this.props.changeCallback === 'function') {
      this.props.changeCallback({
        target: {
          name: this.props.name,
          value: this.state.files
        }
      });
    }
  }

  handleUpload = (files) => {
    if (!this.props.disabled) {
      this.setState({ files: files }, function() {
        this.handleChange();
      });
    }
  }

  handleRemove = (index) => {
    let savedFiles = this.state.files;
    savedFiles.splice(index, 1);
    this.setState({ files: savedFiles }, function() {
      this.handleChange();
    });
  }

  getPreview = () => {
    const imgStyle = {
      maxWidth: this.props.previewSize + 'px',
      maxHeight: this.props.previewSize + 'px'
    }
    return this.state.files.map((file, index) =>
      <div key={index} className={style.image}>
        <img style={imgStyle} src={file.preview} />
        <Icon name='icon-delete-1' height='16' width='16' fill='#233040' onClick={this.handleRemove.bind(this, index)} />
      </div>
    )
  }

  render() {
    const {
      label,
      value,
      optClass,
      showPreview,
      previewSize,
      changeCallback,
      ...other
    } = this.props;

    const cx = classNames.bind(style);
    const disabledClass = this.props.disabled ? style['disabled'] : '';
    const fileUploadClass = cx(style['file-upload-component'], optClass, disabledClass);

    return (
      <div className={fileUploadClass}>
        { label ? <label>{label}</label> : null }
        <Dropzone onDrop={this.handleUpload} className={style.dropzone} activeClassName={style.active} disableClick={this.props.disabled} multiple={false} {...other}>
          <div>Drag and drop here to upload files or click to browse</div>
        </Dropzone>
        { showPreview ? <div className={style.preview}>{this.getPreview()}</div> : null }
      </div>
    )
  }
}

export default FileUpload
