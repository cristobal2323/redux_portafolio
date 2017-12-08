import React, { Component, PropTypes } from 'react';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

const TimeList = ({
  loading,
  times,
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
          <th>Descripción</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {
          times.map((itemTimes,i) => (
            <tr key={i}>
              <td>
                <select onChange={handleRedirect}>
                  <option value="">Seleccione</option>
                  <option value={`/dashboard/updateTimeLine/${itemTimes._id}`}>Descripción</option>
                </select>
              </td>
              <td>{itemTimes.name}</td>
              <td>{itemTimes.description}</td>
              <td className={DashBoardStyle.module_table_center}><a data-num={i} onClick={handleDelete} name={itemTimes._id} ><i className={`${DashBoardStyle.fa} ${DashBoardStyle["fa-trash"]}`} aria-hidden="true"></i></a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

TimeList.propTypes = {
  loading: PropTypes.bool.isRequired,
  times: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRedirect: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TimeList;
