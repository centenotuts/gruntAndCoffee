'use strict'
  
responsiveNav = (el, options) ->
  computed = !!window.getComputedStyle

  if !computed
    window.getComputedStyle = (el) ->
      @el = el
      @getPropertyValue = (prop) ->
        re = /(\-([a-z]){1})/g
        if prop == 'float'
          prop = 'styleFloat'
        if re.test(prop)
          prop = prop.replace(re, ->
            arguments[2].toUpperCase()
          )
          if el.currentStyle[prop] then el.currentStyle[prop] else null
      @

  addEvent = (el, evt, fn, bubble) ->
    if 'addEventListener' of el
      try
        el.addEventListener(evt, fn, bubble)
      catch error
        if typof fn == 'object' && fn.handleEvent
          el.addEventListener(evt, (e) ->
            fn.handleEvent.call(fn, e)
          , bubble)
        else
          throw error
    else if 'attachEvent' of el
      if typeof fn == 'object' && fn.handleEvent
        el.attachEvent('on' + evt, ->
          fn.handleEvent.call(fn)
        )
      else
        el.attachEvent('on' + evt, fn)

  ResponsiveNav = (el, options) ->
    @options =
      animate: true
      transition: 250

    for i of options
      @options[i] = options[i]

    addClass(document.documentElement, @options.jsClass)

    @wrapperEl = el.replace '#', ''
    if document.getElementById @wrapperEl
      @wrapper = document.getElementById @wrapperEl
    else if document.querySelector this.wrapperEl
      @wrapper = document.querySelector this.wrapperEl
    else
      throw new Error 'The Nav element does not exists'

    @wrapper.inner = getChildren @wrapper

    opts = @options
    nav = @wrapper

    @_init(this)

  ResponsiveNav:: =
    destroy: ->
      @_removeStyles
      removeClass nav, 'closed'
      removeClass nav, 'open'
      removeClass nav, opts.navClass
      nav.removeAttribute 'style'
      nav.removeAttribute 'aria-hidden'

      removeEvent window, 'resize', @, false
      removeEvent document.body, 'touchmove', @, false

      unless opts.customToggle
        navToggle.parentNode.removeChild navToggle
      else
        navToggle.removeAttribute 'aria-hidden'

    toggle: ->
      if hasAnimFinished is true
        unless navOpen
          removeClass nav, 'closed'
          addClass nav, 'opened'
          nav.style.position = opts.openPos
          setAttributes nav, {'aria-hidden': 'false'}

          navOpen = true
          opts.open()
        else
          removeClass nav, 'opened'
          addClass nav, 'closed'
          setAttributes nav, {'aria-hidden': 'true'}

          if opts.animate
            hasAnimFinished = false
            setTimeout (->
              nav.style.position = 'absolute'
              hasAnimFinished = true
            ), opts.transistion + 10
          else
            nav.style.position = 'absolute'

          navOpen = false
          opts.close()


  new ResponsiveNav(el, options)



