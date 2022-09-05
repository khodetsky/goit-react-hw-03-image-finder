import { Component } from 'react';

import { GlobalStyle } from './GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { getUser } from './Api';
import {ImageGallery} from './ImageGallery/ImageGallery'


export class App extends Component {
  state = {
    page: 1,
    searchValue: "",
    images: [],
  }


  onFormSubmit = (value, { resetForm }) => {
    this.setState(value);
    getUser(value.searchValue, this.state.page).then(r => {this.setState({images: r.data.hits})})
    resetForm();
  }

  render() {
    return (
    <>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery images={this.state.images} />
      <GlobalStyle/>
    </>
  );
  }
};
