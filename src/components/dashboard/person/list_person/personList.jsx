import React, { Component, PropTypes } from 'react';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

const PersonList = ({
  loading,
  people,
  handleRedirect,
}) => (
  <div className={DashBoardStyle.module_table_new}>
    { loading && <span>Cargando Datos ...</span> }
    <table className={DashBoardStyle.table_normal}>
      <thead>
        <tr>
          <th>Acciones</th>
          <th>Cliente</th>
          <th>Empresa</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        {
          people.map((itemPeople,i) => (
            <tr key={i}>
              <td>
                <select onChange={handleRedirect}>
                  <option value="">Seleccione</option>
                  <option value={`/dashboard/updatePerson/${itemPeople._id}`}>Descripción</option>
                </select>
              </td>
              <td>{itemPeople.name}</td>
              <td>{itemPeople.last_name}</td>
              <td>{itemPeople.mail}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

PersonList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};

export default PersonList;
