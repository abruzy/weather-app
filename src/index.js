import { format } from 'date-fns';

const dateTime = document.getElementById('date-time');

const formatDate = () => format(new Date(), 'h:m a — iiii, dd MMM `yy');

dateTime.innerHTML = formatDate();