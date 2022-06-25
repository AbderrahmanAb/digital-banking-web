export interface AccountDetails {
  accountId:            string;
  accountOperationDTOS: AccountOperation[];
  balance:              number;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
}

export interface AccountOperation {
  id:            number;
  operationDate: Date;
  type:          string;
  amount:        number;
  description:   string;
}
