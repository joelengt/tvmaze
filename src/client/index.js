/**
 * Module Dependencies
 */

import $ from 'jquery'
import page from 'page'
import { getShows, searchShows } from './tvmaze-api-client'
import { renderShows, renderChat, renderSearch } from './render'
import $tvShowsContainer from './tv-shows-container'
import './search-form'
import qs from 'qs'

page('/', function (ctx, next) {
  var $loader = $('<div class="loader">')
  $loader.appendTo($tvShowsContainer)
  $tvShowsContainer.find('.chat-container').remove()
  $tvShowsContainer.find('.tv-show').remove()

  getShows(function (shows) {
    $tvShowsContainer.find('.loader').remove()
    renderShows(shows)

    })

})

page('/search', function (ctx, next) {
  $tvShowsContainer.find('.tv-show').remove()
  var $loader = $('<div class="loader">')
  $loader.appendTo($tvShowsContainer)
  const busqueda = qs.parse(ctx.querystring)
  searchShows(busqueda, function (shows) {
    $loader.remove()
    renderSearch(shows)
  })
})

page('/chat/:showId', function (ctx, next) {
  $tvShowsContainer.find('.chat-container').remove()
  $tvShowsContainer.find('.tv-show').remove()
  $tvShowsContainer.find('.loader').remove()
  renderChat(ctx.params.showId)
})

var productionEnv = !!~window.location.host.indexOf('github.io')

if (productionEnv) {
  page.base('/tvify')
}

page()
