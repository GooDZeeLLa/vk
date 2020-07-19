import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Button2 from '@vkontakte/vkui/dist/components/Button/Button';
import Button3 from '@vkontakte/vkui/dist/components/Button/Button';
import Button4 from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import './Home.css';
const Home = ({ id, go,false1, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Тест по ЗОЖ</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
			             Что является обязательным компонентом ЗОЖ?
				<Button size="xl" level="2" onClick={false1} data-to="home14">
					Чтение книг
				</Button>

				<Button2 size="xl" level="2" onClick={go} data-to="home14">
					Занятия спортом
				</Button2>
				<Button3 size="xl" level="2" onClick={false1} data-to="home14">
					Посещение лекций
				</Button3>
				<Button4 size="xl" level="2" onClick={false1} data-to="home14">
					Употребление в пищу овощей
				</Button4>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	false1: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
			num:PropTypes.number,
		}),
	}),
};

export default Home;
