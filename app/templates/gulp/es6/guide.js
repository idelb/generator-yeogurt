'use strict';

import path from 'path';
import pug from 'pug';
import {
  stripIndent
} from 'common-tags';
import dirTree from 'directory-tree';


export default function (gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget) + '/styleguide/';
  let output = [];

  const tree = dirTree('./src/_modules');
  buble(tree.children);

  function buble(children) {
    for (let i in children) {
      let page = children[i].path.replace(/\\/g, '/').replace(/^(\.\/)?src/, '').replace(/^\//, '');
      let urlPathArr = page.split(/\/|\\/);
      urlPathArr.pop();
      if (children[i].extension === '.pug' || children[i].extension === '.jade') {
        output.push({
          path: urlPathArr.join('/'),
          name: urlPathArr.pop()
        });
      }
      if (children[i].children && children[i].name !== 'assets' && children[i].name.search(/^\_/) !== 0) {
        buble(children[i].children);
      }
    }
  }
  let template = stripIndent `
  extends /_layouts/common

  block config
    - baseUrl= '../'

  block common
    .container
      #banner.page-header
        .row
          .col-lg-8.col-md-7.col-sm-6
            h1 Guía de estilos
      //-
        Navbar
        ==================================================
      .bs-docs-section.clearfix
        .row
          .col-lg-12
            .page-header
              h1#navbars Navbars
            .bs-component
              nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
                a.navbar-brand(href='#') Navbar
                button.navbar-toggler(data-target='#navbarColor01', data-toggle='collapse', type='button', aria-controls='navbarColor01', aria-expanded='false', aria-label='Toggle navigation')
                  span.navbar-toggler-icon
                #navbarColor01.collapse.navbar-collapse
                  ul.navbar-nav.mr-auto
                    li.nav-item.active
                      a.nav-link(href='#')
                        | Home 
                        span.sr-only (current)
                    li.nav-item
                      a.nav-link(href='#') Features
                    li.nav-item
                      a.nav-link(href='#') Pricing
                    li.nav-item
                      a.nav-link(href='#') About
                  form.form-inline.my-2.my-lg-0
                    input.form-control.mr-sm-2(type='text', placeholder='Search')
                    button.btn.btn-secondary.my-2.my-sm-0(type='submit') Search
            .bs-component
              nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
                a.navbar-brand(href='#') Navbar
                button.navbar-toggler(data-target='#navbarColor02', data-toggle='collapse', type='button', aria-controls='navbarColor02', aria-expanded='false', aria-label='Toggle navigation')
                  span.navbar-toggler-icon
                #navbarColor02.collapse.navbar-collapse
                  ul.navbar-nav.mr-auto
                    li.nav-item.active
                      a.nav-link(href='#')
                        | Home 
                        span.sr-only (current)
                    li.nav-item
                      a.nav-link(href='#') Features
                    li.nav-item
                      a.nav-link(href='#') Pricing
                    li.nav-item
                      a.nav-link(href='#') About
                  form.form-inline.my-2.my-lg-0
                    input.form-control.mr-sm-2(type='text', placeholder='Search')
                    button.btn.btn-secondary.my-2.my-sm-0(type='submit') Search
            .bs-component
              nav.navbar.navbar-expand-lg.navbar-light.bg-light
                a.navbar-brand(href='#') Navbar
                button.navbar-toggler(data-target='#navbarColor03', data-toggle='collapse', type='button', aria-controls='navbarColor03', aria-expanded='false', aria-label='Toggle navigation')
                  span.navbar-toggler-icon
                #navbarColor03.collapse.navbar-collapse
                  ul.navbar-nav.mr-auto
                    li.nav-item.active
                      a.nav-link(href='#')
                        | Home 
                        span.sr-only (current)
                    li.nav-item
                      a.nav-link(href='#') Features
                    li.nav-item
                      a.nav-link(href='#') Pricing
                    li.nav-item
                      a.nav-link(href='#') About
                  form.form-inline.my-2.my-lg-0
                    input.form-control.mr-sm-2(type='text', placeholder='Search')
                    button.btn.btn-secondary.my-2.my-sm-0(type='submit') Search
      //
        Buttons
        ==================================================
      .bs-docs-section
        .page-header
          .row
            .col-lg-12
              h1#buttons Buttons
        .row
          .col-lg-7
            p.bs-component
              button.btn.btn-primary(type='button') Primary
              button.btn.btn-secondary(type='button') Secondary
              button.btn.btn-success(type='button') Success
              button.btn.btn-info(type='button') Info
              button.btn.btn-warning(type='button') Warning
              button.btn.btn-danger(type='button') Danger
              button.btn.btn-link(type='button') Link
            p.bs-component
              button.btn.btn-primary.disabled(type='button') Primary
              button.btn.btn-secondary.disabled(type='button') Secondary
              button.btn.btn-success.disabled(type='button') Success
              button.btn.btn-info.disabled(type='button') Info
              button.btn.btn-warning.disabled(type='button') Warning
              button.btn.btn-danger.disabled(type='button') Danger
              button.btn.btn-link.disabled(type='button') Link
            p.bs-component
              button.btn.btn-outline-primary(type='button') Primary
              button.btn.btn-outline-secondary(type='button') Secondary
              button.btn.btn-outline-success(type='button') Success
              button.btn.btn-outline-info(type='button') Info
              button.btn.btn-outline-warning(type='button') Warning
              button.btn.btn-outline-danger(type='button') Danger
            .bs-component
              .btn-group(role='group', aria-label='Button group with nested dropdown')
                button.btn.btn-primary(type='button') Primary
                .btn-group(role='group')
                  button#btnGroupDrop1.btn.btn-primary.dropdown-toggle(data-toggle='dropdown', type='button', aria-expanded='false', aria-haspopup='true')
                  .dropdown-menu(aria-labelledby='btnGroupDrop1')
                    a.dropdown-item(href='#') Dropdown link
                    a.dropdown-item(href='#') Dropdown link
              .btn-group(role='group', aria-label='Button group with nested dropdown')
                button.btn.btn-success(type='button') Success
                .btn-group(role='group')
                  button#btnGroupDrop2.btn.btn-success.dropdown-toggle(data-toggle='dropdown', type='button', aria-expanded='false', aria-haspopup='true')
                  .dropdown-menu(aria-labelledby='btnGroupDrop2')
                    a.dropdown-item(href='#') Dropdown link
                    a.dropdown-item(href='#') Dropdown link
              .btn-group(role='group', aria-label='Button group with nested dropdown')
                button.btn.btn-info(type='button') Info
                .btn-group(role='group')
                  button#btnGroupDrop3.btn.btn-info.dropdown-toggle(data-toggle='dropdown', type='button', aria-expanded='false', aria-haspopup='true')
                  .dropdown-menu(aria-labelledby='btnGroupDrop3')
                    a.dropdown-item(href='#') Dropdown link
                    a.dropdown-item(href='#') Dropdown link
              .btn-group(role='group', aria-label='Button group with nested dropdown')
                button.btn.btn-danger(type='button') Danger
                .btn-group(role='group')
                  button#btnGroupDrop4.btn.btn-danger.dropdown-toggle(data-toggle='dropdown', type='button', aria-expanded='false', aria-haspopup='true')
                  .dropdown-menu(aria-labelledby='btnGroupDrop4')
                    a.dropdown-item(href='#') Dropdown link
                    a.dropdown-item(href='#') Dropdown link
            .bs-component
              button.btn.btn-primary.btn-lg(type='button') Large button
              button.btn.btn-primary(type='button') Default button
              button.btn.btn-primary.btn-sm(type='button') Small button
          .col-lg-5
            p.bs-component
              button.btn.btn-primary.btn-lg.btn-block(type='button') Block level button
            .bs-component(style='margin-bottom: 15px')
              .btn-group(data-toggle='buttons')
                label.btn.btn-primary.active
                  input(type='checkbox', checked='')
                  |  Checkbox 1
                label.btn.btn-primary
                  input(type='checkbox')
                  |  Checkbox 2
                label.btn.btn-primary
                  input(type='checkbox')
                  |  Checkbox 3
            .bs-component(style='margin-bottom: 15px')
              .btn-group(data-toggle='buttons')
                label.btn.btn-primary.active
                  input#option1(name='options', type='radio', checked='')
                  |  Radio 1
                label.btn.btn-primary
                  input#option2(name='options', type='radio')
                  |  Radio 2
                label.btn.btn-primary
                  input#option3(name='options', type='radio')
                  |  Radio 3
            .bs-component
              .btn-group-vertical(data-toggle='buttons')
                button.btn.btn-primary(type='button') Button
                button.btn.btn-primary(type='button') Button
                button.btn.btn-primary(type='button') Button
                button.btn.btn-primary(type='button') Button
                button.btn.btn-primary(type='button') Button
                button.btn.btn-primary(type='button') Button
            .bs-component(style='margin-bottom: 15px')
              .btn-group(role='group', aria-label='Basic example')
                button.btn.btn-secondary(type='button') Left
                button.btn.btn-secondary(type='button') Middle
                button.btn.btn-secondary(type='button') Right
            .bs-component(style='margin-bottom: 15px')
              .btn-toolbar(role='toolbar', aria-label='Toolbar with button groups')
                .btn-group.mr-2(role='group', aria-label='First group')
                  button.btn.btn-secondary(type='button') 1
                  button.btn.btn-secondary(type='button') 2
                  button.btn.btn-secondary(type='button') 3
                  button.btn.btn-secondary(type='button') 4
                .btn-group.mr-2(role='group', aria-label='Second group')
                  button.btn.btn-secondary(type='button') 5
                  button.btn.btn-secondary(type='button') 6
                  button.btn.btn-secondary(type='button') 7
                .btn-group(role='group', aria-label='Third group')
                  button.btn.btn-secondary(type='button') 8
      //
        Typography
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#typography Typography
        // Headings
        .row
          .col-lg-4
            .bs-component
              h1 Heading 1
              h2 Heading 2
              h3 Heading 3
              h4 Heading 4
              h5 Heading 5
              h6 Heading 6
              h3
                | Heading
                small.text-muted with muted text
              p.lead Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          .col-lg-4
            .bs-component
              h2 Example body text
              p
                | Nullam quis risus eget 
                a(href='#') urna mollis ornare
                |  vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
              p
                small This line of text is meant to be treated as fine print.
              p
                | The following is 
                strong rendered as bold text
                | .
              p
                | The following is 
                em rendered as italicized text
                | .
              p
                | An abbreviation of the word attribute is 
                abbr(title='attribute') attr
                | .
          .col-lg-4
            .bs-component
              h2 Emphasis classes
              p.text-muted Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
              p.text-primary Nullam id dolor id nibh ultricies vehicula ut id elit.
              p.text-warning Etiam porta sem malesuada magna mollis euismod.
              p.text-danger Donec ullamcorper nulla non metus auctor fringilla.
              p.text-success Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              p.text-info Maecenas sed diam eget risus varius blandit sit amet non magna.
        // Blockquotes
        .row
          .col-lg-12
            h2#type-blockquotes Blockquotes
        .row
          .col-lg-4
            .bs-component
              blockquote.blockquote
                p.mb-0
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                footer.blockquote-footer
                  | Someone famous in 
                  cite(title='Source Title') Source Title
          .col-lg-4
            .bs-component
              blockquote.blockquote.text-center
                p.mb-0
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                footer.blockquote-footer
                  | Someone famous in 
                  cite(title='Source Title') Source Title
          .col-lg-4
            .bs-component
              blockquote.blockquote.text-right
                p.mb-0
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                footer.blockquote-footer
                  | Someone famous in 
                  cite(title='Source Title') Source Title
      //
        Tables
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#tables Tables
            .bs-component
              table.table.table-hover
                thead
                  tr
                    th(scope='col') Type
                    th(scope='col') Column heading
                    th(scope='col') Column heading
                    th(scope='col') Column heading
                tbody
                  tr.table-active
                    th(scope='row') Active
                    td Column content
                    td Column content
                    td Column content
                  tr
                    th(scope='row') Default
                    td Column content
                    td Column content
                    td Column content
                  tr.table-primary
                    th(scope='row') Primary
                    td Column content
                    td Column content
                    td Column content
                  tr.table-secondary
                    th(scope='row') Secondary
                    td Column content
                    td Column content
                    td Column content
                  tr.table-success
                    th(scope='row') Success
                    td Column content
                    td Column content
                    td Column content
                  tr.table-danger
                    th(scope='row') Danger
                    td Column content
                    td Column content
                    td Column content
                  tr.table-warning
                    th(scope='row') Warning
                    td Column content
                    td Column content
                    td Column content
                  tr.table-info
                    th(scope='row') Info
                    td Column content
                    td Column content
                    td Column content
                  tr.table-light
                    th(scope='row') Light
                    td Column content
                    td Column content
                    td Column content
                  tr.table-dark
                    th(scope='row') Dark
                    td Column content
                    td Column content
                    td Column content
            // /example
      //
        Forms
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#forms Forms
        .row
          .col-lg-6
            .bs-component
              form
                fieldset
                  legend Legend
                  .form-group.row
                    label.col-sm-2.col-form-label(for='staticEmail') Email
                    .col-sm-10
                      input#staticEmail.form-control-plaintext(type='text', readonly='', value='email@example.com')
                  .form-group
                    label(for='exampleInputEmail1') Email address
                    input#exampleInputEmail1.form-control(type='email', aria-describedby='emailHelp', placeholder='Enter email')
                    small#emailHelp.form-text.text-muted We'll never share your email with anyone else.
                  .form-group
                    label(for='exampleInputPassword1') Password
                    input#exampleInputPassword1.form-control(type='password', placeholder='Password')
                  .form-group
                    label(for='exampleSelect1') Example select
                    select#exampleSelect1.form-control
                      option 1
                      option 2
                      option 3
                      option 4
                      option 5
                  .form-group
                    label(for='exampleSelect2') Example multiple select
                    select#exampleSelect2.form-control(multiple='')
                      option 1
                      option 2
                      option 3
                      option 4
                      option 5
                  .form-group
                    label(for='exampleTextarea') Example textarea
                    textarea#exampleTextarea.form-control(rows='3')
                  .form-group
                    label(for='exampleInputFile') File input
                    input#exampleInputFile.form-control-file(type='file', aria-describedby='fileHelp')
                    small#fileHelp.form-text.text-muted
                      | This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                  fieldset.form-group
                    legend Radio buttons
                    .form-check
                      label.form-check-label
                        input#optionsRadios1.form-check-input(name='optionsRadios', type='radio', value='option1', checked='')
                        |                         Option one is this and that—be sure to include why it's great
                    .form-check
                      label.form-check-label
                        input#optionsRadios2.form-check-input(name='optionsRadios', type='radio', value='option2')
                        |                         Option two can be something else and selecting it will deselect option one
                    .form-check.disabled
                      label.form-check-label
                        input#optionsRadios3.form-check-input(name='optionsRadios', type='radio', value='option3', disabled='')
                        |                         Option three is disabled
                  fieldset.form-group
                    legend Checkboxes
                    .form-check
                      label.form-check-label
                        input.form-check-input(type='checkbox', value='', checked='')
                        |                         Option one is this and that—be sure to include why it's great
                    .form-check.disabled
                      label.form-check-label
                        input.form-check-input(type='checkbox', value='', disabled='')
                        |                         Option two is disabled
                  button.btn.btn-primary(type='submit') Submit
          .col-lg-4.offset-lg-1
            form.bs-component
              .form-group
                fieldset(disabled='')
                  label.control-label(for='disabledInput') Disabled input
                  input#disabledInput.form-control(type='text', placeholder='Disabled input here...', disabled='')
              .form-group
                fieldset
                  label.control-label(for='readOnlyInput') Readonly input
                  input#readOnlyInput.form-control(type='text', placeholder='Readonly input here…', readonly='')
              .form-group.has-success
                label.form-control-label(for='inputSuccess1') Valid input
                input#inputValid.form-control.is-valid(type='text', value='correct value')
                .valid-feedback Success! You've done it.
              .form-group.has-danger
                label.form-control-label(for='inputDanger1') Invalid input
                input#inputInvalid.form-control.is-invalid(type='text', value='wrong value')
                .invalid-feedback Sorry, that username's taken. Try another?
              .form-group
                label.col-form-label.col-form-label-lg(for='inputLarge') Large input
                input#inputLarge.form-control.form-control-lg(type='text', placeholder='.form-control-lg')
              .form-group
                label.col-form-label(for='inputDefault') Default input
                input#inputDefault.form-control(type='text', placeholder='Default input')
              .form-group
                label.col-form-label.col-form-label-sm(for='inputSmall') Small input
                input#inputSmall.form-control.form-control-sm(type='text', placeholder='.form-control-sm')
              .form-group
                label.control-label Input addons
                .form-group
                  .input-group.mb-3
                    .input-group-prepend
                      span.input-group-text $
                    input.form-control(type='text', aria-label='Amount (to the nearest dollar)')
                    .input-group-append
                      span.input-group-text .00
            .bs-component
              fieldset
                legend Custom forms
                .form-group
                  .custom-control.custom-radio
                    input#customRadio1.custom-control-input(name='customRadio', type='radio', checked='')
                    label.custom-control-label(for='customRadio1') Toggle this custom radio
                  .custom-control.custom-radio
                    input#customRadio2.custom-control-input(name='customRadio', type='radio')
                    label.custom-control-label(for='customRadio2') Or toggle this other custom radio
                  .custom-control.custom-radio
                    input#customRadio3.custom-control-input(name='customRadio', type='radio', disabled='')
                    label.custom-control-label(for='customRadio3') Disabled custom radio
                .form-group
                  .custom-control.custom-checkbox
                    input#customCheck1.custom-control-input(type='checkbox', checked='')
                    label.custom-control-label(for='customCheck1') Check this custom checkbox
                  .custom-control.custom-checkbox
                    input#customCheck2.custom-control-input(type='checkbox', disabled='')
                    label.custom-control-label(for='customCheck2') Disabled custom checkbox
                .form-group
                  select.custom-select
                    option(selected='') Open this select menu
                    option(value='1') One
                    option(value='2') Two
                    option(value='3') Three
                .form-group
                  label.custom-file
                    input#file2.custom-file-input(type='file')
                    span.custom-file-control
      //
        Navs
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#navs Navs
        .row(style='margin-bottom: 2rem')
          .col-lg-6
            h2#nav-tabs Tabs
            .bs-component
              ul.nav.nav-tabs
                li.nav-item
                  a.nav-link.active(data-toggle='tab', href='#home') Home
                li.nav-item
                  a.nav-link(data-toggle='tab', href='#profile') Profile
                li.nav-item
                  a.nav-link.disabled(href='#') Disabled
                li.nav-item.dropdown
                  a.nav-link.dropdown-toggle(data-toggle='dropdown', href='#', role='button', aria-expanded='false', aria-haspopup='true') Dropdown
                  .dropdown-menu
                    a.dropdown-item(href='#') Action
                    a.dropdown-item(href='#') Another action
                    a.dropdown-item(href='#') Something else here
                    .dropdown-divider
                    a.dropdown-item(href='#') Separated link
              #myTabContent.tab-content
                #home.tab-pane.fade.show.active
                  p
                    | Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                #profile.tab-pane.fade
                  p
                    | Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.
                #dropdown1.tab-pane.fade
                  p
                    | Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                #dropdown2.tab-pane.fade
                  p
                    | Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.
          .col-lg-6
            h2#nav-pills Pills
            .bs-component
              ul.nav.nav-pills
                li.nav-item
                  a.nav-link.active(href='#') Active
                li.nav-item.dropdown
                  a.nav-link.dropdown-toggle(data-toggle='dropdown', href='#', role='button', aria-expanded='false', aria-haspopup='true') Dropdown
                  .dropdown-menu
                    a.dropdown-item(href='#') Action
                    a.dropdown-item(href='#') Another action
                    a.dropdown-item(href='#') Something else here
                    .dropdown-divider
                    a.dropdown-item(href='#') Separated link
                li.nav-item
                  a.nav-link(href='#') Link
                li.nav-item
                  a.nav-link.disabled(href='#') Disabled
            br
            .bs-component
              ul.nav.nav-pills.flex-column
                li.nav-item
                  a.nav-link.active(href='#') Active
                li.nav-item.dropdown
                  a.nav-link.dropdown-toggle(data-toggle='dropdown', href='#', role='button', aria-expanded='false', aria-haspopup='true') Dropdown
                  .dropdown-menu
                    a.dropdown-item(href='#') Action
                    a.dropdown-item(href='#') Another action
                    a.dropdown-item(href='#') Something else here
                    .dropdown-divider
                    a.dropdown-item(href='#') Separated link
                li.nav-item
                  a.nav-link(href='#') Link
                li.nav-item
                  a.nav-link.disabled(href='#') Disabled
        .row
          .col-lg-6
            h2#nav-breadcrumbs Breadcrumbs
            .bs-component
              ol.breadcrumb
                li.breadcrumb-item.active Home
              ol.breadcrumb
                li.breadcrumb-item
                  a(href='#') Home
                li.breadcrumb-item.active Library
              ol.breadcrumb
                li.breadcrumb-item
                  a(href='#') Home
                li.breadcrumb-item
                  a(href='#') Library
                li.breadcrumb-item.active Data
          .col-lg-6
            h2#pagination Pagination
            .bs-component
              div
                ul.pagination
                  li.page-item.disabled
                    a.page-link(href='#') «
                  li.page-item.active
                    a.page-link(href='#') 1
                  li.page-item
                    a.page-link(href='#') 2
                  li.page-item
                    a.page-link(href='#') 3
                  li.page-item
                    a.page-link(href='#') 4
                  li.page-item
                    a.page-link(href='#') 5
                  li.page-item
                    a.page-link(href='#') »
              div
                ul.pagination.pagination-lg
                  li.page-item.disabled
                    a.page-link(href='#') «
                  li.page-item.active
                    a.page-link(href='#') 1
                  li.page-item
                    a.page-link(href='#') 2
                  li.page-item
                    a.page-link(href='#') 3
                  li.page-item
                    a.page-link(href='#') 4
                  li.page-item
                    a.page-link(href='#') 5
                  li.page-item
                    a.page-link(href='#') »
              div
                ul.pagination.pagination-sm
                  li.page-item.disabled
                    a.page-link(href='#') «
                  li.page-item.active
                    a.page-link(href='#') 1
                  li.page-item
                    a.page-link(href='#') 2
                  li.page-item
                    a.page-link(href='#') 3
                  li.page-item
                    a.page-link(href='#') 4
                  li.page-item
                    a.page-link(href='#') 5
                  li.page-item
                    a.page-link(href='#') »
      //
        Indicators
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#indicators Indicators
        .row
          .col-lg-12
            h2 Alerts
            .bs-component
              .alert.alert-dismissible.alert-warning
                button.close(data-dismiss='alert', type='button') ×
                h4.alert-heading Warning!
                p.mb-0
                  | Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, 
                  a.alert-link(href='#') vel scelerisque nisl consectetur et
                  | .
        .row
          .col-lg-4
            .bs-component
              .alert.alert-dismissible.alert-danger
                button.close(data-dismiss='alert', type='button') ×
                strong Oh snap!
                a.alert-link(href='#') Change a few things up
                |  and try submitting again.
          .col-lg-4
            .bs-component
              .alert.alert-dismissible.alert-success
                button.close(data-dismiss='alert', type='button') ×
                strong Well done!
                |  You successfully read 
                a.alert-link(href='#') this important alert message
                | .
          .col-lg-4
            .bs-component
              .alert.alert-dismissible.alert-info
                button.close(data-dismiss='alert', type='button') ×
                strong Heads up!
                |  This 
                a.alert-link(href='#') alert needs your attention
                | , but it's not super important.
        div
          h2 Badges
          .bs-component(style='margin-bottom: 40px')
            span.badge.badge-primary Primary
            span.badge.badge-secondary Secondary
            span.badge.badge-success Success
            span.badge.badge-danger Danger
            span.badge.badge-warning Warning
            span.badge.badge-info Info
            span.badge.badge-light Light
            span.badge.badge-dark Dark
          .bs-component
            span.badge.badge-pill.badge-primary Primary
            span.badge.badge-pill.badge-secondary Secondary
            span.badge.badge-pill.badge-success Success
            span.badge.badge-pill.badge-danger Danger
            span.badge.badge-pill.badge-warning Warning
            span.badge.badge-pill.badge-info Info
            span.badge.badge-pill.badge-light Light
            span.badge.badge-pill.badge-dark Dark
      //
        Progress
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#progress Progress
            h3#progress-basic Basic
            .bs-component
              .progress
                .progress-bar(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='25', style='width: 25%')
            h3#progress-alternatives Contextual alternatives
            .bs-component
              .progress
                .progress-bar.bg-success(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='25', style='width: 25%')
              .progress
                .progress-bar.bg-info(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='50', style='width: 50%')
              .progress
                .progress-bar.bg-warning(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='75', style='width: 75%')
              .progress
                .progress-bar.bg-danger(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='100', style='width: 100%')
            h3#progress-multiple Multiple bars
            .bs-component
              .progress
                .progress-bar(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='15', style='width: 15%')
                .progress-bar.bg-success(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='30', style='width: 30%')
                .progress-bar.bg-info(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='20', style='width: 20%')
            h3#progress-striped Striped
            .bs-component
              .progress
                .progress-bar.progress-bar-striped(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='10', style='width: 10%')
              .progress
                .progress-bar.progress-bar-striped.bg-success(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='25', style='width: 25%')
              .progress
                .progress-bar.progress-bar-striped.bg-info(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='50', style='width: 50%')
              .progress
                .progress-bar.progress-bar-striped.bg-warning(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='75', style='width: 75%')
              .progress
                .progress-bar.progress-bar-striped.bg-danger(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='100', style='width: 100%')
            h3#progress-animated Animated
            .bs-component
              .progress
                .progress-bar.progress-bar-striped.progress-bar-animated(role='progressbar', aria-valuemax='100', aria-valuemin='0', aria-valuenow='75', style='width: 75%')
      //
        Containers
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#containers Containers
            .bs-component
              .jumbotron
                h1.display-3 Hello, world!
                p.lead
                  | This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                hr.my-4
                p
                  | It uses utility classes for typography and spacing to space content out within the larger container.
                p.lead
                  a.btn.btn-primary.btn-lg(href='#', role='button') Learn more
        .row
          .col-lg-12
            h2 List groups
        .row
          .col-lg-4
            .bs-component
              ul.list-group
                li.list-group-item.d-flex.justify-content-between.align-items-center
                  | Cras justo odio
                  span.badge.badge-primary.badge-pill 14
                li.list-group-item.d-flex.justify-content-between.align-items-center
                  | Dapibus ac facilisis in
                  span.badge.badge-primary.badge-pill 2
                li.list-group-item.d-flex.justify-content-between.align-items-center
                  | Morbi leo risus
                  span.badge.badge-primary.badge-pill 1
          .col-lg-4
            .bs-component
              .list-group
                a.list-group-item.list-group-item-action.active(href='#')
                  | Cras justo odio
                a.list-group-item.list-group-item-action(href='#')
                  | Dapibus ac facilisis in
                a.list-group-item.list-group-item-action.disabled(href='#')
                  | Morbi leo risus
          .col-lg-4
            .bs-component
              .list-group
                a.list-group-item.list-group-item-action.flex-column.align-items-start.active(href='#')
                  .d-flex.w-100.justify-content-between
                    h5.mb-1 List group item heading
                    small 3 days ago
                  p.mb-1
                    | Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  small Donec id elit non mi porta.
                a.list-group-item.list-group-item-action.flex-column.align-items-start(href='#')
                  .d-flex.w-100.justify-content-between
                    h5.mb-1 List group item heading
                    small.text-muted 3 days ago
                  p.mb-1
                    | Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  small.text-muted Donec id elit non mi porta.
        .row
          .col-lg-12
            h2 Cards
        .row
          .col-lg-4
            .bs-component
              .card.text-white.bg-primary.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Primary card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.text-white.bg-secondary.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Secondary card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.text-white.bg-success.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Success card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.text-white.bg-danger.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Danger card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.text-white.bg-warning.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Warning card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.text-white.bg-info.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Info card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.bg-light.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Light card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.text-white.bg-dark.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Dark card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
          .col-lg-4
            .bs-component
              .card.border-primary.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body.text-primary
                  h4.card-title Primary card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.border-secondary.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body.text-secondary
                  h4.card-title Secondary card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.border-success.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body.text-success
                  h4.card-title Success card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.border-danger.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body.text-danger
                  h4.card-title Danger card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.border-warning.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body.text-warning
                  h4.card-title Warning card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.border-info.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body.text-info
                  h4.card-title Info card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.border-light.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body
                  h4.card-title Light card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
              .card.border-dark.mb-3(style='max-width: 20rem')
                .card-header Header
                .card-body.text-dark
                  h4.card-title Dark card title
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
          .col-lg-4
            .bs-component
              .card.mb-3
                h3.card-header Card header
                .card-body
                  h5.card-title Special title treatment
                  h6.card-subtitle.text-muted Support card subtitle
                img(src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E', alt='Card image', style='height: 200px; width: 100%; display: block;')
                .card-body
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
                ul.list-group.list-group-flush
                  li.list-group-item Cras justo odio
                  li.list-group-item Dapibus ac facilisis in
                  li.list-group-item Vestibulum at eros
                .card-body
                  a.card-link(href='#') Card link
                  a.card-link(href='#') Another link
                .card-footer.text-muted
                  | 2 days ago
              .card
                .card-body
                  h4.card-title Card title
                  h6.card-subtitle.mb-2.text-muted Card subtitle
                  p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
                  a.card-link(href='#') Card link
                  a.card-link(href='#') Another link
      //
        Dialogs
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#dialogs Dialogs
        .row
          .col-lg-6
            h2 Modals
            .bs-component
              .modal
                .modal-dialog(role='document')
                  .modal-content
                    .modal-header
                      h5.modal-title Modal title
                      button.close(data-dismiss='modal', type='button', aria-label='Close')
                        span(aria-hidden='true') ×
                    .modal-body
                      p Modal body text goes here.
                    .modal-footer
                      button.btn.btn-primary(type='button') Save changes
                      button.btn.btn-secondary(data-dismiss='modal', type='button') Close
          .col-lg-6
            h2 Popovers
            .bs-component(style='margin-bottom: 3em')
              button.btn.btn-secondary(data-container='body', data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', data-placement='left', data-toggle='popover', type='button', title='Popover Title') Left
              button.btn.btn-secondary(data-container='body', data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', data-placement='top', data-toggle='popover', type='button', title='Popover Title') Top
              button.btn.btn-secondary(data-container='body', data-content='Vivamus\
              sagittis lacus vel augue laoreet rutrum faucibus.', data-placement='bottom', data-toggle='popover', type='button', title='Popover Title') Bottom
              button.btn.btn-secondary(data-container='body', data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', data-placement='right', data-toggle='popover', type='button', title='Popover Title') Right
            h2 Tooltips
            .bs-component
              button.btn.btn-secondary(data-placement='left', data-toggle='tooltip', type='button', title='Tooltip on left') Left
              button.btn.btn-secondary(data-placement='top', data-toggle='tooltip', type='button', title='Tooltip on top') Top
              button.btn.btn-secondary(data-placement='bottom', data-toggle='tooltip', type='button', title='Tooltip on bottom') Bottom
              button.btn.btn-secondary(data-placement='right', data-toggle='tooltip', type='button', title='Tooltip on right') Right
      #source-modal.modal.fade
        .modal-dialog.modal-lg
          .modal-content
            .modal-header
              h4.modal-title Source Code
              button.close(data-dismiss='modal', type='button', aria-hidden='true') ×
            .modal-body
              pre.
      ${output.map(e=>{
        function comTempFunc(conf){
          return `
          
          +${e.name}(${JSON.stringify(conf)})
          <br>
          
          `;
        }
        let confCom = config.guideComponents? config.guideComponents[e.name]: undefined;
        let templateCom = '';
        if (Array.isArray(confCom)){
          let templateComAux = '';
          for (const i in confCom) {
            templateComAux += comTempFunc(confCom[i]) + '\r\n';
          }
          templateCom=templateComAux;
        }else {
          templateCom = comTempFunc(confCom);
        }
        return `
      //
        ${e.name}
        ==================================================
      .bs-docs-section
        .row
          .col-lg-12
            .page-header
              h1#${e.name} ${e.name}
        include /${e.path}/${e.name}
        .bs-component
          // ${e.name}
          ${templateCom}
          // end ${e.name}
        hr`;
      }).join('\r\n')}
    br
    br
    br
    br
  `;
  gulp.task('guide', () => {
    if (!args.production) {
      return plugins
        .file('index.pug', template, {
          src: true
        })
        .pipe(plugins.pug({
          pug: pug,
          pretty: true,
          basedir: 'src',
          locals: {
            require: require,
            config: config
          }
        }))
        .pipe(gulp.dest(dest));
    }
  });
}
