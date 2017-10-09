import React from 'react';
import ReactDOM from 'react-dom';
import { 
	HashRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom';

const Header = () => (
  <header>
	<Link to='/'>
  		<img class="mol-chinese-title" src={ require('./MOL_Chinese_title.png') } />
  	</Link>
    <nav>
      <ul>
        <li><Link to='/read'>阅读</Link></li>
        <li><Link to='/reviews'>评论</Link></li>
        <li><Link to='/poetry'>诗歌</Link></li>
        <li><Link to='/letters'>书简</Link></li>               
        <li><Link to='/contact'>联系</Link></li> 
      </ul>
    </nav>
  </header>
)

const Main = () => (
	<main>
    <Switch>
      <Route exact path='/' component={ Home }/>
    </Switch>
	</main>
)

const Home = () => (
	<div>
		<div class="book-covers">
			  <img class="front-cover" src={ require('./front-cover.jpg') } />
			  <img class="back-cover" src={ require('./back-cover.jpg') } />    
		</div>
		<a href='https://smile.amazon.com/dp/1940742129/ref=cm_sw_r_cp_dp_T1_wKUlzbFSQ9ZJ8' target='_blank'><img src={ require('./buy-from-amazon.gif') } /></a>
		<img class="separator" src={ require('./separator.png') } /> 
		<div class="content centered">
			<p>《岁月如歌》一书的倡导者暨主要作者--曾平女士，是许多生活在北美的华人熟知的朋友。她不幸于2015年11月被确诊为晚期胰腺癌。病重期间，她坚持不懈，奋勇顽强，乐观积极地与病魔抗争。在她生命的最后时刻，与家人和她的新世纪合唱团歌友们完成了一部凝聚着她一生的诸多精彩和深刻感悟的书, 在她六十岁生日由纽约易文出版社出版。《岁月如歌》一书，采用自叙和他叙的方式，通过一个个令人难忘的感人故事，将曾平的一生活灵活现地展现在读者面前。篇篇短文，展现了这个优秀华人家庭的事业有成、阖家幸福以及教子有方，相互支持与病魔抗争的感人故事。</p>
			<p>Ping Zeng Hu was a hard-driving program manager on weekdays and a choir singer on the weekend. When she was diagnosed with Stage IV pancreatic cancer at age 58, she and choir friends began writing down her life's stories and advice. Their writings transformed into a multi-faceted celebration of family and friendship.</p>
			<p>Melody of Life chronicles Ping's journey finding love, traveling to the United States, developing her career and raising family, and fighting pancreatic cancer. The book also provides a unique glimpse into the lives of Ping and her friends through WeChat exchanges, guest essays, and 20 full color pictures. Ping surpassed all expectations and lived to see her memoir published on her 60th birthday.</p>
		</div>
	</div>
)

const App = () => (
	<div>
		<Header />
		<Main />
	</div>
)
ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.getElementById('content'))