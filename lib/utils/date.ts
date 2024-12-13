import { format } from 'date-fns';

export const formatDate = (date: Date) => {
  return format(date, 'EEEE, MMMM d');
};

export const formatMonthYear = (date: Date) => {
  return format(date, 'MMMM yyyy');
};