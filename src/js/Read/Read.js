import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ScrollableAnchor from 'react-scrollable-anchor';

import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import ReactMarkdown from 'react-markdown';

import prefaceAboutTheAuthor from './preface/about-the-author.md';
import prefaceChapter1 from './preface/chapter-1.md';
import prefaceChapter2 from './preface/chapter-2.md';

import part1Chapter2 from './part-1/chapter-2.md';
import part1Chapter3 from './part-1/chapter-3.md';

let { Link, Element, Events, scroll, scrollSpy } = Scroll;

export default class Read extends Component {

  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop = () => (
    scroll.scrollToTop()
  )
  scrollToBottom = () => (
    scroll.scrollToBottom()
  )

  scrollTo = () => (
    scroll.scrollTo(100)
  )

  scrollMore = () => (
    scroll.scrollMore(100)
  )

  handleSetActive = (to) => (
    console.log(to)
  )

	render() {
		return (
			<div className="read-page">
				<div className="sidebar">
	        <a href='#prefaceAboutTheAuthor'>About The Author</a>
	        <a href='#prefaceChapter1'>Chapter 1</a>
	        <a href='#prefaceChapter2'>Chapter 2</a>
	        <a href='#part1Chapter2'>Chapter 2</a>
	        <a href='#part1Chapter3'>Chapter 3</a>
	      </div>
	      <div className="read-content">    
	        <ScrollableAnchor id={ 'prefaceAboutTheAuthor' }>
	       	  <ReactMarkdown source={ prefaceAboutTheAuthor } />
	        </ScrollableAnchor>
	        <ScrollableAnchor id={ 'prefaceChapter1' }>
	       	  <ReactMarkdown source={ prefaceChapter1 } />  
	       	</ScrollableAnchor>
	       	<ScrollableAnchor id={ 'prefaceChapter2' }>
	        	<ReactMarkdown source={ prefaceChapter2 } />  
	        </ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter2' }>
	       	  <ReactMarkdown source={ part1Chapter2 } />
	        </ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter3' }>
	       	  <ReactMarkdown source={ part1Chapter3 } />  
	       	</ScrollableAnchor>
	       </div> 
			</div>
		)
	}
}