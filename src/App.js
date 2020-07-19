import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View'; 
import Snackbar from '@vkontakte/vkui/dist/components/Snackbar/Snackbar';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Home1 from './panels/Home1';
import Home2 from './panels/Home2';
import Home3 from './panels/Home3';
import Home4 from './panels/Home4';
import Home5 from './panels/Home5';
import Home6 from './panels/Home6';
import Home7 from './panels/Home7';
import Home8 from './panels/Home8';
import Home9 from './panels/Home9';
import Home10 from './panels/Home10';
import Home11 from './panels/Home11';
import Home12 from './panels/Home12';
import Home13 from './panels/Home13';
import Home14 from './panels/Home14';
import Persik from './panels/Persik';
import Lim from './panels/Lim';

const App = () => {
	var [num, setNum]=useState(0);
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		num++;
		setNum(num);
		setActivePanel(e.currentTarget.dataset.to);
	}
	const false1 = (e) => {
   setActivePanel(e.currentTarget.dataset.to);
		}
	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home1 id='home1' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home2 id='home2' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home3 id='home3' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home4 id='home4' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home5 id='home5' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home6 id='home6' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home7 id='home7' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home8 id='home8' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home9 id='home9' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home10 id='home10' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home11 id='home11' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home12 id='home12' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home13 id='home13' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Home14 id='home14' fetchedUser={fetchedUser} go={go} false1={false1} num={num} />
			<Persik id='persik' go={go} false1={false1} num={num}/>
			<Lim id="lim" />
		</View>
	);
		}
export default App;

