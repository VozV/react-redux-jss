import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

const FILTERS_BTN = [
  {
    text: 'По убыванию',
    id: 'asc',
  },
  {
    text: 'По возрастанию',
    id: 'desk',
  }
];


const Footer = ({ activeFilter, changeFilter }) => (
  <div className="footer">
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => {changeFilter(id)}}
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
}

Footer.defaultProps = {
  changeFilter: () => {},
  amount: 0,
  activeFilter: 'all',
}

export default Footer;
