import React, { Component, PropTypes } from 'react';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

const StackList = ({
  loading,
  stacks,
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
          <th>Valor</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {
          stacks.map((itemStacks,i) => (
            <tr key={i}>
              <td>
                <select onChange={handleRedirect}>
                  <option value="">Seleccione</option>
                  <option value={`/dashboard/updateStack/${itemStacks._id}`}>Descripción</option>
                </select>
              </td>
              <td>{itemStacks.name}</td>
              <td>{itemStacks.value}</td>
              <td className={DashBoardStyle.module_table_center}><a data-num={i} onClick={handleDelete} name={itemStacks._id} ><i className={`${DashBoardStyle.fa} ${DashBoardStyle["fa-trash"]}`} aria-hidden="true"></i></a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

StackList.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  handleRedirect: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default StackList;
