'use strict'

window.test =
  teacher: ->
    return 'hello world'
  foo: 'hello'

$ = jQuery

$ ->
  clickme = $ '#test'
  clickyou = $ '#hello'
  bar1 = $ '#bar1'
  clickme.click ->
    bar1.animate {width: 150}, 2000
    bar1.fadeIn 'fast'
  $('.man').click ->
    $('.human').hide