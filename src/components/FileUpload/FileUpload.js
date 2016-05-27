import React from 'react'
import Dropzone from 'react-dropzone'
import Icon from 'react-conventions/lib/Icon'
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
    multiple: false,
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
     * Value of the FileUpload.
     */
    value: React.PropTypes.string,
    /**
     * Name of the FileUpload.
     */
    name: React.PropTypes.string,
    /**
     * Whether the FileUpload allow multiple files to be uploaded.
     */
    multiple: React.PropTypes.bool,
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

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
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
      if (this.props.multiple) {
        let savedFiles = this.state.files;
        let newFiles = savedFiles.concat(files);
        this.setState({ files: newFiles }, function() {
          this.handleChange();
        });
      }
      else {
        this.setState({ files: files }, function() {
          this.handleChange();
        });
      }
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
        <Dropzone onDrop={this.handleUpload} ref={(c) => this._dropzone = c} className={style.dropzone} activeClassName={style.active} disableClick={this.props.disabled} {...other}>
          <div>Drag and drop here to upload files or click to browse</div>
        </Dropzone>
        { showPreview ? <div className={style.preview}>{this.getPreview()}</div> : null }
      </div>
    )
  }
}

export default FileUpload
