import axios from 'axios'

const client = axios.create({
  // TODO(wonjerry): Add base url
  baseURL: '',
  responseType: 'json',
  headers: {
    'content-type': 'json',
    Accept: 'json',
  },
})

interface QueryParameterType {
  name: string
}

interface SampleType {
  status: string
}

export function getSample(params?: QueryParameterType): Promise<SampleType> {
  return client
    .get('/sample', { params: params })
    .then((response) => response.data)
}
