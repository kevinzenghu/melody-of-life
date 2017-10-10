import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
	        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
	          Test 1
	        </Link>
	        <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} >
	          Test 2
	        </Link>
	        <Link activeClass="active" to="test3" spy={true} smooth={true} offset={50} duration={500} >
	          Test 3
	        </Link> 
	        <Link activeClass="active" to="part1Chapter2" spy={true} smooth={true} offset={50} duration={500} >
	          Part 1 Chapter 2
	        </Link>
	        <Link activeClass="active" to="part1Chapter3" spy={true} smooth={true} offset={50} duration={500} >
	          Part 1 Chapter 3
	        </Link>        
	      </div>
	      <div className="read-content">    
	        <Element name="test1" className="element">
	       	  <ReactMarkdown source={ prefaceAboutTheAuthor } />
	        </Element>
	        <Element name="test2" className="element">
	       	  <ReactMarkdown source={ prefaceChapter1 } />  
	       	</Element>
	       	<Element name="test3" className="element">
	        	<ReactMarkdown source={ prefaceChapter2 } />  
	        </Element>
	        <Element name="part1Chapter2" className="element">
	       	  <ReactMarkdown source={ part1Chapter2 } />
	        </Element>
	        <Element name="part1Chapter3" className="element">
	       	  <ReactMarkdown source={ part1Chapter3 } />  
	       	</Element>
	       </div> 
			</div>
		)
	}
}