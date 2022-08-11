import { Environment, Network, RecordSource, Store } from 'relay-runtime'

async function fetchGraphql(text: string, variables: any) {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
    credentials: 'include',
  })

  return await response.json()
}

async function fetchRelay(params: any, variables: any) {
  return fetchGraphql(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
