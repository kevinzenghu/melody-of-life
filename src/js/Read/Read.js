import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ScrollableAnchor from 'react-scrollable-anchor';

import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import ReactMarkdown from 'react-markdown';

import prefaceAboutTheAuthor from './preface/about-the-author.md';
import prefaceChapter1 from './preface/chapter-1.md';
import prefaceChapter2 from './preface/chapter-2.md';

import part1Introduction from './part-1/introduction.md';
import part1Chapter1 from './part-1/chapter-1.md';
import part1Chapter2 from './part-1/chapter-2.md';
import part1Chapter3 from './part-1/chapter-3.md';
import part1Chapter4 from './part-1/chapter-4.md';
import part1Chapter5 from './part-1/chapter-5.md';
import part1Chapter6 from './part-1/chapter-6.md';
import part1Chapter6_1 from './part-1/chapter-6-1.md';
import part1Chapter7 from './part-1/chapter-7.md';
import part1Chapter7_1 from './part-1/chapter-7-1.md';
import part1Chapter7_2 from './part-1/chapter-7-2.md';
import part1Chapter7_3 from './part-1/chapter-7-3.md';
import part1Chapter7_4 from './part-1/chapter-7-4.md';
import part1Chapter7_5 from './part-1/chapter-7-5.md';
import part1Chapter7_6 from './part-1/chapter-7-6.md';
import part1Chapter7_7 from './part-1/chapter-7-7.md';
import part1Chapter7_8 from './part-1/chapter-7-8.md';
import part1Chapter7_9 from './part-1/chapter-7-9.md';
import part1Chapter8 from './part-1/chapter-8.md';
import part1Chapter9 from './part-1/chapter-9.md';
import part1Chapter10 from './part-1/chapter-10.md';
import part1Chapter10_1 from './part-1/chapter-10-1.md';
import part1Chapter10_2 from './part-1/chapter-10-2.md';

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

  bookStructure = [
  	{
  		name: 'Preface',
  		children: [
  			{
  				name: 'About The Author'
  			},
  			{
  				name: 'Chapter 1'
  			},
  			{
  				name: 'Chapter 2'
  			}
  		]
  	},
  	{
  		name: 'Part 1'
  	},
  	{
  		name: 'Part 2'
  	}
  ]

	render() {
		return (
			<div className="read-page">
				<div className="sidebar">
					<div class="part">
						<span className="part-title">Preface</span>
		        <a href='#prefaceAboutTheAuthor'>About The Author</a>
		        <a href='#prefaceChapter1'>Chapter 1</a>
		        <a href='#prefaceChapter2'>Chapter 2</a>
		      </div>
	        <div class="part">
	 					<span className="part-title">Part 1</span>
		        <a href='#part1Introduction'>Introduction</a>	        
		        <a href='#part1Chapter1'>Chapter 1</a>
		        <a href='#part1Chapter2'>Chapter 2</a>
		        <a href='#part1Chapter3'>Chapter 3</a>	        
		        <a href='#part1Chapter4'>Chapter 4</a>
		        <a href='#part1Chapter5'>Chapter 5</a>
		        <a href='#part1Chapter6'>Chapter 6</a>
		        <a href='#part1Chapter6_1'>Chapter 6 1</a>	        
		        <a href='#part1Chapter7'>Chapter 7</a>
		        <a href='#part1Chapter7_1'>Chapter 7 1</a>      	          
		        <a href='#part1Chapter8'>Chapter 8</a>	        
		        <a href='#part1Chapter9'>Chapter 9</a>
		        <a href='#part1Chapter10'>Chapter 10</a>	
	        </div>
	        <div class="part">
	       	 <span className="part-title">Part 2</span>
	        </div>        
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
	        <ScrollableAnchor id={ 'part1Introduction' }>
	       	  <ReactMarkdown source={ part1Introduction } />
	        </ScrollableAnchor>	        
	        <ScrollableAnchor id={ 'part1Chapter1' }>
	       	  <ReactMarkdown source={ part1Chapter1 } />
	        </ScrollableAnchor>	        
	        <ScrollableAnchor id={ 'part1Chapter2' }>
	       	  <ReactMarkdown source={ part1Chapter2 } />
	        </ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter3' }>
	       	  <ReactMarkdown source={ part1Chapter3 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter1' }>
	       	  <ReactMarkdown source={ part1Chapter1 } />
	        </ScrollableAnchor>	        
	        <ScrollableAnchor id={ 'part1Chapter2' }>
	       	  <ReactMarkdown source={ part1Chapter2 } />
	        </ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter3' }>
	       	  <ReactMarkdown source={ part1Chapter3 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter4' }>
	       	  <ReactMarkdown source={ part1Chapter4 } />
	        </ScrollableAnchor>	        
	        <ScrollableAnchor id={ 'part1Chapter5' }>
	       	  <ReactMarkdown source={ part1Chapter5 } />
	        </ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter6' }>
	       	  <ReactMarkdown source={ part1Chapter6 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter6_1' }>
	       	  <ReactMarkdown source={ part1Chapter6_1 } />
	        </ScrollableAnchor>	        
	        <ScrollableAnchor id={ 'part1Chapter7' }>
	       	  <ReactMarkdown source={ part1Chapter7 } />
	        </ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter7_2' }>
	       	  <ReactMarkdown source={ part1Chapter7_2 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter7_3' }>
	       	  <ReactMarkdown source={ part1Chapter7_3 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter7_4' }>
	       	  <ReactMarkdown source={ part1Chapter7_4 } />  
	       	</ScrollableAnchor>	
	        <ScrollableAnchor id={ 'part1Chapter7_5' }>
	       	  <ReactMarkdown source={ part1Chapter7_5 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter7_6' }>
	       	  <ReactMarkdown source={ part1Chapter7_6 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter7_7' }>
	       	  <ReactMarkdown source={ part1Chapter7_7 } />  
	       	</ScrollableAnchor>	
	        <ScrollableAnchor id={ 'part1Chapter7_8' }>
	       	  <ReactMarkdown source={ part1Chapter7_8 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter7_9' }>
	       	  <ReactMarkdown source={ part1Chapter7_9 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter8' }>
	       	  <ReactMarkdown source={ part1Chapter8 } />  
	       	</ScrollableAnchor>	
	        <ScrollableAnchor id={ 'part1Chapter9' }>
	       	  <ReactMarkdown source={ part1Chapter9 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter10' }>
	       	  <ReactMarkdown source={ part1Chapter10 } />  
	       	</ScrollableAnchor>
	        <ScrollableAnchor id={ 'part1Chapter10_1' }>
	       	  <ReactMarkdown source={ part1Chapter10_1 } />
	        </ScrollableAnchor>	        
	        <ScrollableAnchor id={ 'part1Chapter10_2' }>
	       	  <ReactMarkdown source={ part1Chapter10_2 } />
	        </ScrollableAnchor>   		       		       		       	
	       </div> 
			</div>
		)
	}
}