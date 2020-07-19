import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Spinner} from '@vkontakte/vkui';

const Lim = props => (
  <Panel id={props.id}>
    <PanelHeader>
      загрузка
    </PanelHeader>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}/>
      <Spinner size="large" style={{ marginTop: 20 }} />
  </Panel>
);

Lim.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Lim;