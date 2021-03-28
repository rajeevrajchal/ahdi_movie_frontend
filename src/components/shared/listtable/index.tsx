import React, { FC, useEffect, useState } from 'react';
import './table.scss';
import { $FIXME } from '../../../constants';

export type ColumnType = {
  name: string;
  align: string;
  label: string;
  field: string;
  flexVal: number;
  headerClasses: string;
  sortable: boolean;
};

interface ListTableInterface {
  columns: ColumnType[];
  rows: $FIXME;
  paginate: number;
  editAction?: (obj: $FIXME) => void;
  deleteAction?: (obj: $FIXME) => void;
}

const ListTable: FC<ListTableInterface> = (props) => {
  const { columns, rows, paginate, editAction, deleteAction } = props;
  const hasActions = () => {
    return editAction || deleteAction;
  };
  const [startingVal, setStartingVal] = useState(0);
  const [endingVal, setEndingVal] = useState(
    paginate ? paginate : rows.length - 1
  );
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const paginateRows = (rows: $FIXME) => {
    return rows.slice(startingVal, endingVal);
  };

  useEffect(() => {
    let totalPages = 0;
    if (rows) {
      totalPages = parseInt(Math.ceil(rows.length / props.paginate).toFixed(0));
    }
    setTotalPages(totalPages);
  }, [props.paginate, rows]);

  const paginateData = (val: number) => {
    if (val === 1) {
      if (endingVal > rows.length - 1) {
        return;
      } else {
        setStartingVal(startingVal + paginate);
        setEndingVal(endingVal + paginate);
      }
    } else {
      if (startingVal < 1) {
        return;
      } else {
        setStartingVal(startingVal - paginate);
        setEndingVal(endingVal - paginate);
      }
    }
    if (pageNumber !== startingVal && pageNumber !== endingVal) {
      setPageNumber(pageNumber + val);
    }
  };

  return (
    <div className="list-table">
      <div className="table-headers">
        {columns.map((header: ColumnType, key: number) => (
          <div
            className={`table-header-items ${header.headerClasses} flex-${header.flexVal} text-${header.align}`}
            key={key}
          >
            <h2>{header.label}</h2>
          </div>
        ))}
        {hasActions() && (
          <div className={`table-header-items actions flex-2 text-center`}>
            <h2>Actions</h2>
          </div>
        )}
      </div>
      {rows && rows.length !== 0 ? (
        <div className="table-body">
          {paginateRows(rows).map((rowData: $FIXME, key: number) => (
            <div className="table-row" key={key}>
              {columns.map((columnHeader: ColumnType, key: number) => (
                <div
                  className={`table-body-items ${columnHeader.headerClasses} flex-${columnHeader.flexVal} text-${columnHeader.align}`}
                  key={key}
                >
                  <h3>{rowData[columnHeader.field]}</h3>
                </div>
              ))}
              {hasActions() && (
                <div className="table-body-items text-left flex-2 flex justify-center align-center items-center">
                  {props.editAction && (
                    <div className="text-left pointer">
                      <i
                        className="material-icons text-left text-primary"
                        onClick={() => editAction?.(rowData)}
                      >
                        edit
                      </i>
                    </div>
                  )}
                  {props.deleteAction && (
                    <div className="text-left pointer">
                      <i
                        className="material-icons text-left  text-danger"
                        onClick={() => deleteAction?.(rowData)}
                      >
                        delete
                      </i>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data flex-centered">No Items Found.</div>
      )}

      {/*pagination*/}
      {paginate ? (
        <div className={'pagination-area pt-md flex items-center justify-end'}>
          <label>
            Page {pageNumber} of {totalPages}
          </label>
          <div className="button-area flex items-center">
            <i className="material-icons" onClick={() => paginateData(-1)}>
              chevron_left
            </i>
            <i className="material-icons" onClick={() => paginateData(1)}>
              chevron_right
            </i>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default ListTable;

/*
 * uses
 * <ListTable columns={columns} rows={data} paginate={10} />
 * */
