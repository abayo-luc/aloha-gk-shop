import Vue from 'vue'
import moment from 'moment'
export const formatCurrency = value =>
  new Intl.NumberFormat('en').format(value)
export const isValueEmpty = value =>
  value === null ||
  value === undefined ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0)

export const handleNotification = ({ title, text, type = 'error', ...rest }) => {
  Vue.notify({
    group: 'general',
    title,
    text,
    type,
    ...rest
  })
}

export const notifiableError = (err) => {
  const { data: { error, message } } = err.response || { data: { message: err.message, error: 'Error' } }
  return { error, message }
}

export const geQueryString = (data, base) => Object.keys(data).reduce((prev, current) => `${prev}&${current}=${data[current]}`, base)

export const formatDate = date => moment(date).format('MMM DD, YYYY')
