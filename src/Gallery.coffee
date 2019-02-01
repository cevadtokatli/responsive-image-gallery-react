import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveImageGallery from 'responsive-image-gallery';

export default class Gallery extends React.Component
    constructor: (props) ->
        super props
        @add = @add.bind @
        @remove = @remove.bind @

    componentDidMount: ->
        @gallery = new ResponsiveImageGallery
            el: @el
            bar: @props.bar
            active: @props.active
            timing: @props.timing
            duration: @props.duration
            minWidth: @props.minWidth
            maxWidth: @props.maxWidth
            height: @props.height
            horizontalSpace: @props.horizontalSpace
            verticalSpace: @props.horizontalSpace
            overflow: @props.overflow
            grid: @props.grid

    componentWillReceiveProps: (np) ->
        @setTiming(np.timing) unless np.timing == @props.timing
        @setDuration(np.duration) unless np.duration == @props.duration
        
    add: (index, el, category) ->
        if @gallery
            @gallery.elements.splice index, 0, {el,category,active:true}
            @gallery.resize()

    remove: (index) ->
        @gallery.elements.splice index, 1
        @gallery.resize()

    # RIG methods
    get: ->
        @gallery.get()

    set: (category, animate) ->
        @gallery.set category, animate

    getTiming: ->
        @gallery.getTiming()

    setTiming: (timing) ->
        @gallery.setTiming timing

    getDuration: ->
        @gallery.getDuration()

    setDuration: (duration) ->
        @gallery.setDuration duration

    destroy: ->
        @gallery.destroy()

    render: ->
        <div ref={(node) => @el = node}>
           { React.Children.map(@props.children, (child, index) => (
                React.cloneElement(child, {
                    index,
                    add: @add,
                    remove: @remove
                })
            ))}
        </div>

Gallery.propTypes =
    bar: PropTypes.oneOfType([
        PropTypes.instanceOf(Element) unless typeof window == 'undefined'
        PropTypes.string
    ]).isRequired
    active: PropTypes.string
    timing: PropTypes.string
    duration: PropTypes.number
    minWidth: PropTypes.number
    maxWidth: PropTypes.number
    height: PropTypes.number
    horizontalSpace: PropTypes.number
    verticalSpace: PropTypes.number
    overflow: PropTypes.bool
    grid: PropTypes.bool

Gallery.defaultProps =
    active: '*'
    timing: 'ease'
    duration: 500
    minWidth: 250
    maxWidth: 500
    height: 80
    horizontalSpace: 10
    verticalSpace: 10
    overflow: false
    grid: true