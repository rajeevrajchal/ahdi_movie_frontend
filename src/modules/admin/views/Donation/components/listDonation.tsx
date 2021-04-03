import React, { useEffect, useState } from 'react';
import ListTable, {
  ColumnType,
} from '../../../../../components/shared/listtable';
import { $FIXME } from '../../../../../constants';
import axios from 'axios';
import DataLoader from '../../../../../components/shared/dataLoader';

const api_url = process.env.REACT_APP_API_URL;

const ListDonation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [listDonation, setListDonations] = useState<$FIXME>([]);
  const fetchDonation = async () => {
    setLoading(true);
    const res = await axios.get(`${api_url}donation`);
    await setListDonations(res.data.donations);
    setLoading(false);
  };
  useEffect(() => {
    fetchDonation();
  }, []);
  const columns: ColumnType[] = [
    {
      field: 'payment_id',
      headerClasses: 'payment_id',
      name: 'payment_id',
      flexVal: 1,
      label: 'PayPal Payment ID',
      align: 'center',
      sortable: false,
      status: false,
    },
    {
      field: 'name',
      headerClasses: 'user_name',
      name: 'user_name',
      flexVal: 1,
      label: 'User Name',
      align: 'center',
      sortable: false,
      status: false,
    },
    {
      field: 'amount',
      headerClasses: 'amount',
      name: 'amount',
      flexVal: 1,
      label: 'Amount',
      align: 'center',
      sortable: false,
      status: false,
    },
    {
      field: 'country_code',
      headerClasses: 'country_code',
      name: 'country_code',
      flexVal: 1,
      label: 'Country Code',
      align: 'center',
      sortable: false,
      status: false,
    },
    {
      field: 'currency',
      headerClasses: 'currency',
      name: 'currency',
      flexVal: 1,
      label: 'Currency',
      align: 'center',
      sortable: false,
      status: false,
    },
  ];
  if (loading) {
    return (
      <div className="flex-centered">
        <div className="vertical-center">
          <DataLoader />
        </div>
      </div>
    );
  } else {
    return <ListTable columns={columns} rows={listDonation} paginate={5} />;
  }
};

export default ListDonation;
