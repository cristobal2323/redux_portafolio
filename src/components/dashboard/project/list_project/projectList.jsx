import React, { Component, PropTypes } from 'react';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

const ProjectList = ({
  loading,
  projects,
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
          projects.map((itemProjects,i) => (
            <tr key={i}>
              <td>
                <select onChange={handleRedirect}>
                  <option value="">Seleccione</option>
                  <option value={`/dashboard/updateProject/${itemProjects._id}`}>Descripción</option>
                </select>
              </td>
              <td>{itemProjects.name}</td>
              <td>{itemProjects.description}</td>
              <td className={DashBoardStyle.module_table_center}><a data-num={i} onClick={handleDelete} name={itemProjects._id} ><i className={`${DashBoardStyle.fa} ${DashBoardStyle["fa-trash"]}`} aria-hidden="true"></i></a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

ProjectList.propTypes = {
  loading: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRedirect: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ProjectList;
