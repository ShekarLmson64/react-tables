import { format } from 'date-fns'

export const ID_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: '_id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Customer Name',
    Footer: 'Customer Name',
    accessor: 'CustomerName',
    sticky: 'left'
  },
  {
    Header: 'Email ID',
    Footer: 'Email ID',
    accessor: 'EmailId'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phoneNumber'
  },
  {
    Header: 'City',
    Footer: 'City',
    accessor: 'city'
  },
  {
    Header: 'Pincode',
    Footer: 'Pincode',
    accessor: 'pincode'
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender'
  },
  {
    Header: 'Invoice Number',
    Footer: 'Invoice Number',
    accessor: 'invoiceNumber'
  },
  {
    Header: 'Product ID',
    Footer: 'Product ID',
    accessor: 'productId'
  },
  {
    Header: 'Product Description',
    Footer: 'Product Description',
    accessor: 'productDescipriton'
  },
  {
    Header: 'Request Date',
    Footer: 'Request Date',
    accessor: 'requestDate',
    Cell: ({ value }) => {
      // console.log("======>", value, value?.$date)
      return format(new Date(value?.$date), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Responded Date',
    Footer: 'Responded Date',
    accessor: 'respondedOn',
    Cell: ({ value }) => {
      return format(new Date(value?.$date), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Feed Closed',
    Footer: 'Feed Closed',
    accessor: 'feedClosed',
    Cell: ({ value }) => {
      return format(new Date(value?.$date), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Rated Language',
    Footer: 'Rated Language',
    accessor: 'ratedLanguage'
  },
  {
    Header: 'Brand',
    Footer: 'Brand',
    accessor: 'brand'
  },
  {
    Header: 'Installation Log',
    Footer: 'Installation Log',
    accessor: 'installationLog'
  },
  {
    Header: 'Invitation ID',
    Footer: 'Invitation ID',
    accessor: 'invitationId'
  },
  {
    Header: 'Class',
    Footer: 'Class',
    accessor: '_class'
  },
]
// export const COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id',
//     disableFilters: true,
//     sticky: 'left'
//   },
//   {
//     Header: 'First Name',
//     Footer: 'First Name',
//     accessor: 'first_name',
//     sticky: 'left'
//   },
//   {
//     Header: 'Last Name',
//     Footer: 'Last Name',
//     accessor: 'last_name',
//     sticky: 'left'
//   },
//   {
//     Header: 'Date of Birth',
//     Footer: 'Date of Birth',
//     accessor: 'date_of_birth',
//     Cell: ({ value }) => {
//       return format(new Date(value), 'dd/MM/yyyy')
//     }
//   },
//   {
//     Header: 'Country',
//     Footer: 'Country',
//     accessor: 'country'
//   },
//   {
//     Header: 'Phone',
//     Footer: 'Phone',
//     accessor: 'phone'
//   },
//   {
//     Header: 'Email',
//     Footer: 'Email',
//     accessor: 'email'
//   },
//   {
//     Header: 'Age',
//     Footer: 'Age',
//     accessor: 'age'
//   },
// ]

// export const GROUPED_COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name'
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name'
//       }
//     ]
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       {
//         Header: 'Date of Birth',
//         Footer: 'Date of Birth',
//         accessor: 'date_of_birth'
//       },
//       {
//         Header: 'Country',
//         Footer: 'Country',
//         accessor: 'country'
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone'
//       }
//     ]
//   }
// ]
