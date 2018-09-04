// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'jquery';
import 'bootstrap';
import Link from '../_modules/link/link';

(function ($) {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
})(jQuery);
