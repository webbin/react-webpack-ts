import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = RouteComponentProps<{}>;
type States = { result: string };

export default class UriEncodePage extends Component<Props, States> {
  text = '';

  constructor(props: Props) {
    super(props);

    this.text = '';

    this.state = {
      result: '',
    };
  }

  onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log('on text change ', event.target.value);
    this.text = event.target.value;
  };

  onEncode = () => {
    this.setState({ result: encodeURIComponent(this.text) });
  };

  onDecode = () => {
    this.setState({ result: decodeURIComponent(this.text) });
  };

  render() {
    const { result } = this.state;
    return (
      <div>
        <textarea onChange={this.onTextChange} />

        <button type="button" onClick={this.onEncode}>
          Encode
        </button>
        <button type="button" onClick={this.onDecode}>
          Decode
        </button>

        <div>{result}</div>
      </div>
    );
  }
}
