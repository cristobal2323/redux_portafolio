import React, { Component, PropTypes } from 'react';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

const PersonList = ({
  loading,
  people,
  handleRedirect,
  handleDelete,
}) => (
  <div className={DashBoardStyle.module_table_new}>
    { loading && <span>Cargando Datos ...</span> }
    <table className={DashBoardStyle.table_normal}>
      <thead>
        <tr>
          <th>Acciones</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Eliminar</th>
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
              <td className={DashBoardStyle.module_table_center}><a data-num={i} onClick={handleDelete} name={itemPeople._id} ><i className={`${DashBoardStyle.fa} ${DashBoardStyle["fa-trash"]}`} aria-hidden="true"></i></a></td>
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
  handleDelete: PropTypes.func.isRequired,
};

export default PersonList;
