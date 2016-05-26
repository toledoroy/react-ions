import React from 'react'
import Dropzone from 'react-dropzone'
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
    multiple: false
  }

  static propTypes = {
    /**
     * Whether the component is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text shown above the component.
     */
    label: React.PropTypes.string,
    /**
     * Value of the component.
     */
    value: React.PropTypes.string,
    /**
     * Name of the component.
     */
    name: React.PropTypes.string,
    /**
     * Whether the component allow multiple files to be uploaded.
     */
    multiple: React.PropTypes.bool,
    /**
     * Whether to show the preview under the component.
     */
    showPreview: React.PropTypes.bool,
    /**
     * Optional styles to add to the component.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the component changes.
     */
    changeCallback: React.PropTypes.func
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleUpload = (files) => {
    console.log(files);
    this.setState({files: files});
    // this.setState({value: event.target.value}, function() {
    //   if (typeof this.props.changeCallback === 'function') {
    //     this.props.changeCallback(event);
    //   }
    // });
  }

  getPreview = () => {
    return this.state.files.map((file, index) =>
      <div className={style.preview}><img src={file.preview} /></div>
    )
  }

  render() {
    const {
      label,
      value,
      optClass,
      ...other
    } = this.props;

    const cx = classNames.bind(style);
    const disabledClass = this.props.disabled ? style['dropzone-disabled'] : '';
    const fileUploadClass = cx(style['file-upload-component'], this.props.optClass, disabledClass);

    return (
      <div className={fileUploadClass}>
        { label ? <label>{label}</label> : null }
        <Dropzone onDrop={this.handleUpload} ref={(c) => this._dropzone = c} multiple={this.props.multiple} className={style.dropzone} activeClassName={style.active}>
          <div>Drag and drop here to upload files or click to browse</div>
        </Dropzone>
        { this.props.showPreview ? this.getPreview() : null }
      </div>
    )
  }
}

export default FileUpload
