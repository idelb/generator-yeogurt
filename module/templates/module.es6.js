'use strict';

export default class <%= _.classify(name.toLowerCase()) %> {
  constructor(query, options) {
    this.name = '<%= name %>';
    console.log('%s module', this.name.toLowerCase());
  }
}
