import { Environment, FetchFunction, Network, RecordSource, Store, Variables } from 'relay-runtime'

async function fetchGraphql(text: string | null | undefined, variables: Variables) {
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

const fetchRelay: FetchFunction = (params, variables) => {
  return fetchGraphql(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
