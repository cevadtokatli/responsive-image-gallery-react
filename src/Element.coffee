import React from 'react'
import PropTypes from 'prop-types'

export default class Element extends React.Component
    componentDidMount: ->
        #@props.add @props.index, @el, @props.category

    componentWillUnmount: ->
        @props.remove @props.index

    render: ->
        <div style={{position:'absolute'}} category={@props.category} ref={(node) => @el = node}>
            {@props.children}
        </div>

Element.propTypes =
    category: PropTypes.string.isRequired
    index: PropTypes.number
    add: PropTypes.func
    remove: PropTypes.func